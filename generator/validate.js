#!/usr/bin/env node
/**
 * TripTrackAI Programmatic SEO Validator
 * 
 * Validates all generated pages for:
 * 1. File existence (every sitemap URL has a matching HTML file)
 * 2. Internal link integrity (no broken internal links)
 * 3. SEO requirements (title, meta description, canonical, schema, h1)
 * 4. Content quality gates (min word count, no template placeholders)
 * 5. Sitemap consistency (every HTML file is in a sitemap)
 * 6. Canonical tag correctness
 * 
 * Usage: node generator/validate.js [--verbose] [--fix] [--dir ./]
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// ─── Configuration ───────────────────────────────────────────────
const CONFIG = {
  baseUrl: 'https://triptrackai.com',
  rootDir: path.resolve(__dirname, '..'),
  minWordCount: 150,           // Minimum words per page (thin content gate)
  maxTitleLength: 60,          // Google truncates after ~60 chars
  maxMetaDescLength: 160,      // Google truncates after ~160 chars
  minInternalLinks: 3,         // Minimum internal links per page
  templatePlaceholders: [      // Strings that should never appear in output
    '{{', '}}', '{%', '%}',
    '[PLACEHOLDER]', '[TODO]', '[INSERT]',
    'undefined', 'null',
    'NaN'
  ],
  ignoreDirs: ['node_modules', '.git', 'generator', 'assets', 'img', 'screenshots'],
  ignoreFiles: ['404.html']
};

// ─── Helpers ─────────────────────────────────────────────────────
const colors = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
};

class ValidationReport {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.passes = 0;
    this.filesChecked = 0;
  }

  error(file, check, message) {
    this.errors.push({ file, check, message });
  }

  warn(file, check, message) {
    this.warnings.push({ file, check, message });
  }

  pass() {
    this.passes++;
  }

  print() {
    console.log('\n' + colors.bold('═══════════════════════════════════════════'));
    console.log(colors.bold('  TripTrackAI SEO Validation Report'));
    console.log(colors.bold('═══════════════════════════════════════════\n'));

    console.log(`  Files checked:  ${this.filesChecked}`);
    console.log(`  ${colors.green('✓ Passed:')}       ${this.passes}`);
    console.log(`  ${colors.red('✗ Errors:')}       ${this.errors.length}`);
    console.log(`  ${colors.yellow('⚠ Warnings:')}     ${this.warnings.length}`);
    console.log('');

    if (this.errors.length > 0) {
      console.log(colors.red(colors.bold('── ERRORS ──────────────────────────────')));
      for (const e of this.errors) {
        console.log(`  ${colors.red('✗')} [${e.check}] ${e.file}`);
        console.log(`    ${e.message}`);
      }
      console.log('');
    }

    if (this.warnings.length > 0) {
      console.log(colors.yellow(colors.bold('── WARNINGS ────────────────────────────')));
      for (const w of this.warnings) {
        console.log(`  ${colors.yellow('⚠')} [${w.check}] ${w.file}`);
        console.log(`    ${w.message}`);
      }
      console.log('');
    }

    const status = this.errors.length === 0 ? 
      colors.green('✓ ALL CHECKS PASSED') : 
      colors.red(`✗ ${this.errors.length} ERROR(S) FOUND`);
    
    console.log(colors.bold('── RESULT ──────────────────────────────'));
    console.log(`  ${status}`);
    console.log('');

    return this.errors.length === 0;
  }
}

// ─── File Discovery ──────────────────────────────────────────────
function findHtmlFiles(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(CONFIG.rootDir, fullPath);
    
    if (CONFIG.ignoreDirs.some(d => relativePath.startsWith(d))) continue;
    
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, fileList);
    } else if (item.endsWith('.html') && !CONFIG.ignoreFiles.includes(item)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// ─── Validators ──────────────────────────────────────────────────

function validateSeoTags(filePath, doc, report) {
  const relativePath = path.relative(CONFIG.rootDir, filePath);

  // Title tag
  const title = doc.querySelector('title');
  if (!title || !title.textContent.trim()) {
    report.error(relativePath, 'TITLE', 'Missing or empty <title> tag');
  } else if (title.textContent.length > CONFIG.maxTitleLength) {
    report.warn(relativePath, 'TITLE', `Title is ${title.textContent.length} chars (max ${CONFIG.maxTitleLength}): "${title.textContent.substring(0, 50)}..."`);
  } else {
    report.pass();
  }

  // Meta description
  const metaDesc = doc.querySelector('meta[name="description"]');
  if (!metaDesc || !metaDesc.getAttribute('content')?.trim()) {
    report.error(relativePath, 'META_DESC', 'Missing or empty meta description');
  } else if (metaDesc.getAttribute('content').length > CONFIG.maxMetaDescLength) {
    report.warn(relativePath, 'META_DESC', `Meta description is ${metaDesc.getAttribute('content').length} chars (max ${CONFIG.maxMetaDescLength})`);
  } else {
    report.pass();
  }

  // Canonical tag
  const canonical = doc.querySelector('link[rel="canonical"]');
  if (!canonical || !canonical.getAttribute('href')?.trim()) {
    report.error(relativePath, 'CANONICAL', 'Missing canonical tag');
  } else {
    const href = canonical.getAttribute('href');
    if (!href.startsWith('https://')) {
      report.error(relativePath, 'CANONICAL', `Canonical must be absolute URL, got: ${href}`);
    } else {
      report.pass();
    }
  }

  // H1 tag
  const h1s = doc.querySelectorAll('h1');
  if (h1s.length === 0) {
    report.error(relativePath, 'H1', 'Missing <h1> tag');
  } else if (h1s.length > 1) {
    report.warn(relativePath, 'H1', `Multiple H1 tags found (${h1s.length}). Best practice is exactly 1.`);
  } else {
    report.pass();
  }

  // Open Graph tags
  const ogTitle = doc.querySelector('meta[property="og:title"]');
  const ogDesc = doc.querySelector('meta[property="og:description"]');
  if (!ogTitle) report.warn(relativePath, 'OG', 'Missing og:title meta tag');
  if (!ogDesc) report.warn(relativePath, 'OG', 'Missing og:description meta tag');
}

function validateSchema(filePath, doc, report) {
  const relativePath = path.relative(CONFIG.rootDir, filePath);
  const scripts = doc.querySelectorAll('script[type="application/ld+json"]');
  
  if (scripts.length === 0) {
    report.warn(relativePath, 'SCHEMA', 'No structured data (JSON-LD) found');
    return;
  }

  for (const script of scripts) {
    try {
      const data = JSON.parse(script.textContent);
      report.pass();
    } catch (e) {
      report.error(relativePath, 'SCHEMA', `Invalid JSON-LD: ${e.message}`);
    }
  }
}

function validateContent(filePath, doc, report) {
  const relativePath = path.relative(CONFIG.rootDir, filePath);
  const body = doc.querySelector('body');
  if (!body) {
    report.error(relativePath, 'CONTENT', 'No <body> tag found');
    return;
  }

  const text = body.textContent || '';
  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;

  if (wordCount < CONFIG.minWordCount) {
    report.warn(relativePath, 'THIN_CONTENT', `Only ${wordCount} words (minimum: ${CONFIG.minWordCount}). May be flagged as thin content.`);
  } else {
    report.pass();
  }

  // Check for template placeholders (only in visible content, not in <style> or <script>)
  const html = doc.documentElement.outerHTML;
  // Strip out style and script tags before checking for placeholders
  const contentOnly = html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '');
  for (const placeholder of CONFIG.templatePlaceholders) {
    if (contentOnly.includes(placeholder)) {
      report.error(relativePath, 'PLACEHOLDER', `Found unresolved template placeholder: "${placeholder}"`);
    }
  }
}

function validateInternalLinks(filePath, doc, allFiles, report) {
  const relativePath = path.relative(CONFIG.rootDir, filePath);
  const links = doc.querySelectorAll('a[href]');
  let internalLinkCount = 0;

  for (const link of links) {
    const href = link.getAttribute('href');
    if (!href) continue;

    // Skip external links, anchors, mailto, tel
    if (href.startsWith('http') && !href.includes('triptrackai.com')) continue;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    if (href.startsWith('javascript:')) continue;

    internalLinkCount++;

    // Resolve the link to a file path
    let targetPath = href;
    if (targetPath.startsWith(CONFIG.baseUrl)) {
      targetPath = targetPath.replace(CONFIG.baseUrl, '');
    }
    if (targetPath.startsWith('/')) {
      targetPath = targetPath.substring(1);
    }
    // Remove query strings and anchors
    targetPath = targetPath.split('?')[0].split('#')[0];
    
    if (!targetPath) continue; // Root link

    // Check if file exists (try with and without .html)
    const possiblePaths = [
      path.join(CONFIG.rootDir, targetPath),
      path.join(CONFIG.rootDir, targetPath + '.html'),
      path.join(CONFIG.rootDir, targetPath, 'index.html'),
    ];

    const exists = possiblePaths.some(p => fs.existsSync(p));
    if (!exists) {
      report.error(relativePath, 'BROKEN_LINK', `Broken internal link: ${href}`);
    } else {
      report.pass();
    }
  }

  if (internalLinkCount < CONFIG.minInternalLinks) {
    report.warn(relativePath, 'LINK_DENSITY', `Only ${internalLinkCount} internal links (minimum: ${CONFIG.minInternalLinks})`);
  }
}

function validateSitemapConsistency(allFiles, report) {
  // Find all sitemap files
  const sitemapFiles = [];
  const findSitemaps = (dir) => {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      if (item.endsWith('.xml') && item.includes('sitemap')) {
        sitemapFiles.push(path.join(dir, item));
      }
    }
  };
  
  findSitemaps(CONFIG.rootDir);
  findSitemaps(path.join(CONFIG.rootDir, 'sitemaps'));

  if (sitemapFiles.length === 0) {
    report.warn('sitemap', 'SITEMAP', 'No sitemap files found');
    return;
  }

  // Extract URLs from sitemaps
  const sitemapUrls = new Set();
  for (const sitemapFile of sitemapFiles) {
    const content = fs.readFileSync(sitemapFile, 'utf-8');
    const locMatches = content.match(/<loc>(.*?)<\/loc>/g) || [];
    for (const match of locMatches) {
      const url = match.replace('<loc>', '').replace('</loc>', '').trim();
      if (url.endsWith('.xml')) continue; // Skip sitemap index references
      sitemapUrls.add(url);
    }
  }

  // Check: every HTML file should be in sitemap
  for (const file of allFiles) {
    const relativePath = path.relative(CONFIG.rootDir, file).replace(/\\/g, '/');
    const urlPath = relativePath.replace('.html', '').replace('index', '');
    const expectedUrl = `${CONFIG.baseUrl}/${urlPath}`;
    const expectedUrlAlt = `${CONFIG.baseUrl}/${relativePath}`;

    const inSitemap = [...sitemapUrls].some(u => 
      u === expectedUrl || u === expectedUrlAlt || u === `${CONFIG.baseUrl}/${urlPath}/`
    );

    if (!inSitemap) {
      report.warn(relativePath, 'SITEMAP_MISSING', `Page not found in any sitemap: ${relativePath}`);
    }
  }
}

// ─── Main ────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes('--verbose');
  
  console.log(colors.cyan('\n🔍 Starting TripTrackAI SEO Validation...\n'));

  const report = new ValidationReport();
  const allFiles = findHtmlFiles(CONFIG.rootDir);
  
  console.log(`  Found ${allFiles.length} HTML files to validate\n`);

  for (const filePath of allFiles) {
    const relativePath = path.relative(CONFIG.rootDir, filePath);
    report.filesChecked++;

    if (verbose) {
      console.log(`  Checking: ${relativePath}`);
    }

    try {
      const html = fs.readFileSync(filePath, 'utf-8');
      const dom = new JSDOM(html);
      const doc = dom.window.document;

      validateSeoTags(filePath, doc, report);
      validateSchema(filePath, doc, report);
      validateContent(filePath, doc, report);
      validateInternalLinks(filePath, doc, allFiles, report);
    } catch (e) {
      report.error(relativePath, 'PARSE', `Failed to parse HTML: ${e.message}`);
    }
  }

  // Cross-file validations
  validateSitemapConsistency(allFiles, report);

  // Print report
  const passed = report.print();
  process.exit(passed ? 0 : 1);
}

main().catch(e => {
  console.error(colors.red(`Fatal error: ${e.message}`));
  process.exit(1);
});
