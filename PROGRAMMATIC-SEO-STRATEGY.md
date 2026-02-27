# Programmatic SEO Strategy — TripTrackAI.com

**Last Updated:** February 18, 2026
**Status:** 🟡 PLANNING COMPLETE — READY TO BUILD
**Current Page Count:** 9 pages
**Target Page Count:** 1,000,000+ pages (multi-year)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Core Product Differentiator](#core-product-differentiator)
3. [Data Freshness Rules](#data-freshness-rules)
4. [Phase 0: Pre-Build Checklist](#phase-0-pre-build-checklist)
5. [Phase 1: Bottom-of-Funnel Comparison Pages](#phase-1-bottom-of-funnel-pages)
6. [Phase 2: Traveler Utility Pages](#phase-2-traveler-utility-pages)
7. [Phase 3: Destination Intelligence](#phase-3-destination-intelligence)
8. [Phase 4: Combinatorial Scale](#phase-4-combinatorial-scale)
9. [Phase 5: The Moat Layer](#phase-5-the-moat-layer)
10. [Technical Architecture](#technical-architecture)
11. [Canonicalization Strategy](#canonicalization-strategy)
12. [Internal Linking Strategy](#internal-linking-strategy)
13. [Measurement Framework](#measurement-framework)
14. [Quality Assurance & Validation](#quality-assurance--validation)
15. [Build Log & Progress Tracker](#build-log--progress-tracker)

---

## Executive Summary

TripTrackAI currently has 9 well-optimized static pages on Vercel scoring 97.44/100 on technical SEO. This strategy scales the site to millions of indexable pages using programmatic SEO — generating pages from templates and data, not manual writing.

**The model:** Tripadvisor (200M+ monthly organic visits from programmatic pages like "Things to do in {city}"), Booking.com (35M+ indexed pages, 278.9M+ visits), Zapier (50K+ integration pages driving 16M visitors).

**Our approach:** Differentiation-first. Every page must pass the test: "Why would someone prefer this page over Wikipedia or the airport's own website?" The answer: TripTrackAI pages are written from the **traveler operations** perspective — not encyclopedia entries, but pre-flight checklists and trip prep guides.

**Priority order:** Bottom-of-funnel conversion pages first (comparisons, alternatives, "best X for Y"), then traveler utility pages (airports, routes), then destination intelligence, then combinatorial scale.

---

## Core Product Differentiator

**The thread that runs through every single page:**

> TripTrackAI is the only travel app that turns your inbox into a complete, real-time travel command center — automatically.

### How This Threads Into Each Page Type

| Page Type | The Hook |
|-----------|----------|
| Comparison pages | "Unlike {competitor}, TripTrackAI imports trips automatically from Gmail" |
| Airport pages | "TripTrackAI shows you your terminal and gate automatically" |
| Route pages | "TripTrackAI tracks this flight for you in real-time" |
| Destination pages | "Plan your {city} trip — TripTrackAI organizes everything after booking" |
| Packing lists | "Focus on packing — TripTrackAI handles the itinerary" |

### Competitive Positioning (Honest)

| Competitor | Where They Win | Where TripTrackAI Wins |
|-----------|---------------|----------------------|
| TripIt | Android support, longer track record, enterprise integrations | Automatic Gmail import, AI concierge, expense tracking, real-time flight alerts |
| FlightAware | Historical flight data, aviation enthusiast features | Complete trip management (not just flights), automatic import |
| Kayak | Booking engine, price comparison | Post-booking management, real-time tracking, expense tracking |
| Concur/SAP | Enterprise compliance, approval workflows | Ease of use, individual traveler focus, AI features, price |
| Google Trips | Was free and integrated with Google | TripTrackAI is alive (Google Trips is dead) |
| Wanderlog | Collaborative planning, social features | Automatic organization, flight tracking, business travel focus |

**Rule:** Every comparison page must honestly acknowledge where competitors are better. This builds trust and converts better than pure advocacy.

---

## Data Freshness Rules

**The principle:** If it would mislead a traveler when 6 months old, don't put it in a static page.

### Safe as Static (Doesn't Go Stale)

- ✅ Airport terminal count, IATA codes, city, country
- ✅ Which airlines operate at which airport
- ✅ Route distances, time zones, flight duration ranges
- ✅ General travel tips ("bring a power adapter for Type G outlets")
- ✅ Visa policy framework (with "as of [date]" qualifier)
- ✅ Product feature comparisons (we control our own features)
- ✅ Competitor feature sets (update quarterly)
- ✅ Packing list recommendations by climate type
- ✅ Currency and language information

### Dangerous as Static (Goes Stale, Misleads)

- ❌ TSA/security wait times (changes hourly)
- ❌ Real-time ticket prices (changes constantly)
- ❌ Gate assignments (changes per flight)
- ❌ Weather forecasts (changes daily)
- ⚠️ Delay statistics — ONLY with clear date: "2025 average on-time rate: 78%"
- ⚠️ Daily flight counts — ONLY with qualifier: "As of February 2026, Delta operates ~6 daily flights"
- ⚠️ Pricing — ONLY as ranges: "Typical fares: $150-$400 round trip"

### The CTA Bridge

For real-time data, use it as a CTA: *"For live TSA wait times, gate changes, and real-time delays — that's what the app is for."*

This turns a content limitation into a conversion opportunity.

---

## Phase 0: Pre-Build Checklist

Before building any programmatic pages, complete these items:

- [ ] **Verify TripTrackAI feature claims** — Confirm every feature mentioned in comparison pages is actually in the app (Android status, expense tracking capabilities, what "automatic" import means technically)
- [ ] **Build one exemplar page by hand** — The TripTrackAI vs TripIt page, crafted manually to be the definitive resource
- [ ] **Measure the exemplar** — Track indexing speed, time-on-page, scroll depth, bounce rate, CTA click-through before templating
- [ ] **Set up Google Search Console** — Ensure sitemap submission and index monitoring are active
- [ ] **Set up scroll depth tracking** — Add to Google Analytics (comparison pages need this — high time-on-page can be misleading without scroll data)
- [ ] **Define the "kill criteria"** — What metrics would cause you to stop scaling a page type? (e.g., <5% index rate after 30 days, >85% bounce rate)

---

## Phase 1: Bottom-of-Funnel Pages

**Timeline:** Weeks 1-3
**Page Count:** 200-500 pages
**Priority:** HIGHEST — Best conversion ROI, fastest to rank

### 1A. The Exemplar: TripTrackAI vs TripIt

**URL:** `/compare/triptrackai-vs-tripit/`
**Build method:** Hand-crafted, not generated
**Purpose:** Prove the template before scaling

**Page Structure:**

```
1. Quick Verdict Box (50-word honest summary)
   - Acknowledges where TripIt wins
   - States TripTrackAI's core advantage

2. Feature Comparison Table (HTML <table> for featured snippet bait)
   - 15+ feature rows
   - Honest ✓ / ✗ / Partial ratings
   - "Last updated: [Month Year]" timestamp

3. Deep Dive Sections
   a. Trip Organization (both good, TripTrackAI more automatic)
   b. Flight Tracking (TripTrackAI's clear advantage)
   c. Expense Tracking (TripTrackAI has it, TripIt doesn't)
   d. AI Features (TripTrackAI only)
   e. Pricing (honest breakdown of both free tiers and paid)
   f. Who Should Choose Which (genuine recommendations)

4. How to Switch from TripIt
   - Migration steps (forward confirmation emails)
   - What transfers, what doesn't

5. FAQ Schema (8-10 questions)
   - "Is TripTrackAI a good TripIt alternative?"
   - "Which is cheaper?"
   - "Does TripTrackAI work on Android?" (honest: not yet)
   - "Can I import my TripIt trips?"

6. CTA (not pushy)
   - "Try TripTrackAI free and see the difference"
```

**Success Metrics for Exemplar:**
- Indexed within 7 days
- Time on page > 2 minutes
- Scroll depth > 60%
- CTA click-through > 3%
- Ranking for "TripTrackAI vs TripIt" within 30 days

### 1B. Competitor Comparison Pages (Template-Generated)

**URL Pattern:** `/compare/triptrackai-vs-[competitor]/`
**Count:** 30-50 pages

**Key competitors to cover:**
- TripIt, TripIt Pro
- Kayak, Google Flights
- FlightAware, Flightradar24, App in the Air
- Wanderlog, TripCase, Sygic Travel
- Concur, Expensify, Brex (business angle)
- Hopper, Skyscanner (booking angle)
- Apple Maps, Google Maps (navigation angle)

**CRITICAL:** Each competitor page must reflect the actual audience asking the question. "TripTrackAI vs Concur" is for corporate travel managers. "TripTrackAI vs Wanderlog" is for leisure planners. Same template structure, different emphasis and honest verdict.

### 1C. "Best X for Y" Pages

**URL Pattern:** `/best/[use-case]/`
**Count:** 50-100 pages

**Examples:**
- `/best/travel-app-for-business-travelers/`
- `/best/flight-tracker-for-frequent-flyers/`
- `/best/trip-planner-for-international-travel/`
- `/best/expense-tracker-for-business-trips/`
- `/best/travel-app-for-families/`
- `/best/travel-app-for-digital-nomads/`
- `/best/travel-app-for-couples/`
- `/best/travel-organizer-app/`

**Template:** Listicle format with TripTrackAI featured (but not always #1 — honesty matters). Include 5-8 apps per page with genuine pros/cons.

### 1D. Alternative Pages

**URL Pattern:** `/alternatives/[competitor]-alternatives/`
**Count:** 30-50 pages

**Examples:**
- `/alternatives/tripit-alternatives/`
- `/alternatives/google-trips-alternatives/`
- `/alternatives/concur-alternatives/`

**Template:** "Looking for a {competitor} alternative? Here are the best options in 2026" — listicle with TripTrackAI positioned honestly among alternatives.

### Phase 1 Projected Impact

| Metric | Month 1 | Month 3 | Month 6 |
|--------|---------|---------|---------|
| Pages indexed | 50-100 | 150-300 | 200-500 |
| Monthly organic traffic | 100-500 | 1K-5K | 5K-15K |
| App store clicks | 10-50 | 100-500 | 500-1,500 |

---

## Phase 2: Traveler Utility Pages

**Timeline:** Weeks 4-10
**Page Count:** 5,000-10,000 pages
**Priority:** HIGH — Builds topical authority, long-term traffic

### 2A. Airport Traveler Guides

**URL Pattern:** `/airports/[code]/`
**Count:** Start with top 200 busiest airports, scale to 2,000 if template proves out

**Template — "Traveler Operations" Angle:**

```
"Traveling Through [Airport Name] ([CODE]) — What You Need to Know"

📋 KEY FACTS FOR YOUR TRIP
- Full name, city, country
- Number of terminals
- Check-in closing times (domestic vs international)
- WiFi availability and quality
- Power outlet availability by terminal

✈️ AIRLINES AT [CODE]
- Airline → Terminal mapping table
- Links to airline pages

🚗 GETTING THERE & AWAY
- Taxi/rideshare info
- Public transit options
- Parking rates (economy vs terminal)
- Rental car center location

🍽️ INSIDE THE AIRPORT
- Food options (landside vs airside)
- Lounges (with access info)
- Shopping highlights

💡 FREQUENT TRAVELER TIPS
- 3-5 specific, useful tips for this airport
- "Terminal connector between T4-T5 requires re-screening"
- "The priority lane is worth it at this airport"

📱 TRACK YOUR FLIGHT FROM [CODE]
[CTA: Get real-time gate changes and delay alerts]
```

**Data Sources:**
- OpenFlights database (free, 15K+ airports — IATA codes, names, locations)
- Wikipedia API (terminal counts, transit info)
- Manual enrichment for top 50 airports

**Scale Rule:** Only build pages for airports with demonstrable search volume. Don't build a page for a regional airstrip with 2 flights/day.

### 2B. Flight Route Pages

**URL Pattern:** `/flights/[origin]-to-[destination]/`
**Count:** Start with top 500 city pairs, scale to 5,000-10,000

**Template:**

```
"[City A] to [City B] Flights — Route Guide"

✈️ ROUTE OVERVIEW
- Distance, average flight time
- Time zone change
- Airlines serving this route (with daily frequency)

💡 BOOKING TIPS
- Cheapest days to fly (general guidance, not real-time prices)
- Best time to book (general guidance)
- Red-eye availability
- WiFi availability by airline

🛬 ARRIVAL INFO
- Destination airport(s) with terminal info
- Ground transportation from airport to city
- Links to airport guide pages

📱 TRACK [ORIGIN] → [DESTINATION] FLIGHTS
[CTA: Real-time tracking for this route]
```

**Data Sources:**
- OpenFlights routes database
- Distance calculations (haversine formula)
- Timezone database

### 2C. Interactive Tools (Link Magnets)

**URLs:**
- `/tools/flight-time-calculator/`
- `/tools/jet-lag-calculator/`
- `/tools/timezone-converter/`
- `/tools/packing-list-generator/`

**Purpose:** These attract backlinks naturally and serve as hub pages linking to thousands of route/city pages. Each tool page links to relevant programmatic pages.

### Phase 2 Projected Impact

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Pages indexed | 500-2K | 2K-5K | 5K-10K |
| Monthly organic traffic | 500-2K | 5K-20K | 20K-80K |
| App store clicks | 50-200 | 500-2K | 2K-8K |

---

## Phase 3: Destination Intelligence

**Timeline:** Weeks 11-20
**Page Count:** 20,000-50,000 pages
**Priority:** MEDIUM — Volume play, requires Phase 2 authority

### 3A. City Travel Prep Pages

**URL Pattern:** `/travel/[city]/`
**Count:** Start with 1,000 most-searched cities, scale to 20,000+

**Template — "Trip Prep Checklist" Angle:**

```
"Traveling to [City] — Trip Prep Checklist"

📋 BEFORE YOU GO
- Visa requirements for US citizens
- Currency (with approximate exchange rate, dated)
- Power adapter type needed
- SIM/WiFi options
- Language (and whether English is widely spoken)

🌤 WHEN TO VISIT
- Best months and why
- Months to avoid and why
- Temperature ranges by season

💰 BUDGET SNAPSHOT
- Budget meal range
- Mid-range dinner range
- Hotel (3-star) range
- Daily transit cost

✈️ GETTING THERE
- Airports serving this city (with links to airport pages)
- Flight time from major US cities
- Links to route pages

📱 PLAN YOUR [CITY] TRIP
[CTA: TripTrackAI organizes everything after booking]
```

### 3B. Packing List Pages

**URL Pattern:** `/travel/[city]/packing-list/`
**Count:** Mirrors city pages — 1,000 to 20,000+

### 3C. Layover Guides

**URL Pattern:** `/layover/[airport-code]/`
**Count:** Top 200 hub airports

### 3D. Visa & Entry Requirements

**URL Pattern:** `/travel/[country]/visa-info/`
**Count:** ~195 countries

### Phase 3 Projected Impact

| Metric | Month 6 | Month 12 | Month 18 |
|--------|---------|----------|----------|
| Pages indexed | 2K-10K | 10K-30K | 20K-50K |
| Monthly organic traffic | 2K-10K | 20K-100K | 50K-200K |

---

## Phase 4: Combinatorial Scale

**Timeline:** Months 6-18
**Page Count:** 500,000+ pages
**Priority:** LOW until Phases 1-3 prove out
**Prerequisite:** Phase 2 templates must be ranking and converting

### 4A. Airline + Route Combos

**URL Pattern:** `/airlines/[airline]/[origin]-to-[destination]/`
**Count:** 500,000+ (every airline × every route they serve)

**Template:** "[Airline] Flights from [City A] to [City B] — Schedule & Tracking"

### 4B. Airport Sub-Pages

- `/airports/[code]/hotels/` — Hotels near airport
- `/airports/[code]/transportation/` — Ground transport guide
- `/airports/[code]/lounges/` — Lounge access guide

### 4C. Seasonal Destination Variants

- `/travel/[city]/summer/`
- `/travel/[city]/winter/`
- `/travel/[city]/spring/`

### Phase 4 Projected Impact

| Metric | Month 12 | Month 18 | Month 24 |
|--------|----------|----------|----------|
| Pages indexed | 50K-200K | 200K-500K | 500K-1M+ |
| Monthly organic traffic | 50K-200K | 200K-500K | 500K-2M |

**Reality check:** Phase 4 is a multi-year play competing against Kayak and Google Flights. This is where topical authority from Phases 1-3 compounds. Don't rush here.

---

## Phase 5: The Moat Layer

**Timeline:** Ongoing
**Purpose:** Freshness signals, authority building, defensibility

### 5A. Blog Content

- Programmatic articles: "Best time to fly from {city} to {city}"
- Seasonal roundups: "Best winter destinations 2027"
- Data-driven posts: "Most delayed airports in 2026"

### 5B. User-Generated Content (Future)

- Trip reports and reviews
- Airport tips from real travelers
- Route recommendations

### 5C. Freshness Updates

- Quarterly update cycle for comparison pages
- Annual update for airport/route data
- "Last updated" timestamps on every page

### 5D. Backlink Strategy

- Comparison pages are naturally linkable ("best travel app" roundups)
- Tools pages attract links (calculators, generators)
- Submit to travel app directories
- Guest posts on travel blogs
- PR for "best travel app 2026" coverage

---

## Technical Architecture

### Current Stack

- **Hosting:** Vercel (static HTML)
- **Framework:** Plain HTML/CSS/JS
- **Routing:** Vercel rewrites in vercel.json
- **Analytics:** Google Analytics (G-GF834EEVCX)
- **Pages:** 9 static HTML files

### Programmatic SEO Stack

```
/generator/
  ├── data/
  │   ├── competitors.json       (comparison page data)
  │   ├── use-cases.json         (best-X-for-Y data)
  │   ├── airports.json          (OpenFlights data)
  │   ├── airlines.json          (airline data)
  │   ├── routes.json            (route data)
  │   └── cities.json            (destination data)
  ├── templates/
  │   ├── comparison.html        (Handlebars/Mustache template)
  │   ├── best-for.html
  │   ├── alternative.html
  │   ├── airport.html
  │   ├── route.html
  │   └── city.html
  ├── generate.js                (Main generator script)
  └── sitemap-generator.js       (Creates sitemap index files)
```

### Sitemap Architecture

Google requires sitemaps < 50,000 URLs and < 50MB each. Use a sitemap index:

```xml
<!-- sitemap-index.xml -->
<sitemapindex>
  <sitemap><loc>https://triptrackai.com/sitemaps/sitemap-core.xml</loc></sitemap>
  <sitemap><loc>https://triptrackai.com/sitemaps/sitemap-compare.xml</loc></sitemap>
  <sitemap><loc>https://triptrackai.com/sitemaps/sitemap-best.xml</loc></sitemap>
  <sitemap><loc>https://triptrackai.com/sitemaps/sitemap-airports-1.xml</loc></sitemap>
  <sitemap><loc>https://triptrackai.com/sitemaps/sitemap-routes-1.xml</loc></sitemap>
  <sitemap><loc>https://triptrackai.com/sitemaps/sitemap-cities-1.xml</loc></sitemap>
</sitemapindex>
```

### Vercel Routing

Wildcard rewrites for each page vertical:

```json
{
  "rewrites": [
    { "source": "/compare/:slug", "destination": "/compare/:slug.html" },
    { "source": "/best/:slug", "destination": "/best/:slug.html" },
    { "source": "/alternatives/:slug", "destination": "/alternatives/:slug.html" },
    { "source": "/airports/:code", "destination": "/airports/:code.html" },
    { "source": "/flights/:route", "destination": "/flights/:route.html" },
    { "source": "/travel/:city", "destination": "/travel/:city.html" },
    { "source": "/travel/:city/:sub", "destination": "/travel/:city/:sub.html" },
    { "source": "/layover/:code", "destination": "/layover/:code.html" },
    { "source": "/tools/:tool", "destination": "/tools/:tool.html" }
  ]
}
```

### Schema Markup (Every Page)

Every programmatic page includes:
- `FAQPage` schema (6-10 questions)
- `BreadcrumbList` schema
- `SoftwareApplication` schema (linking to app)
- Page-type-specific schema (`Place` for airports/cities, `Airline` for airlines)

### IndexNow Integration

Use Vercel's edge functions to ping IndexNow API when new pages are deployed, accelerating Google's discovery.

---

## Canonicalization Strategy

**Core principle:** Canonical tags tell Google which URL is the "master" version when multiple URLs cover similar ground. The question is always: *are these pages serving different user intents, or are they genuinely duplicates?*

### The Four Rules

1. **Same template + same data + different URL = canonical problem.** Fix it before building, not after.
2. **Different user intent = different page.** No canonical needed, but content must actually differ.
3. **When in doubt, the more general page is canonical.** `/flights/lax-to-jfk/` canonicalizes to itself; `/airlines/delta/lax-to-jfk/` either has unique content or points canonical back to the route page.
4. **At Phase 4 scale, run a content similarity audit quarterly.** Tools like Screaming Frog can flag pages with >70% content overlap.

### Case-by-Case Analysis

#### `/compare/triptrackai-vs-tripit/` vs `/alternatives/tripit-alternatives/`

**Verdict: No canonicalization needed — different user intents.**

- "TripTrackAI vs TripIt" → direct head-to-head comparison. User is evaluating two specific products.
- "TripIt alternatives" → user wants a list of options and hasn't committed to TripTrackAI yet.
- Different templates, different structure, different user.
- **Action:** Ensure content is genuinely differentiated, not copy-pasted with a different headline. The comparison page goes deep on two products. The alternatives page goes wide across 5-8 products.

#### `/flights/lax-to-jfk/` vs `/airlines/delta/lax-to-jfk/`

**Verdict: This is the real risk. Requires the "3 Data Points" test.**

- These pages will share substantial content (distance, flight time, airports).
- The airline+route page MUST add genuinely unique Delta-specific data that doesn't exist on the general route page:
  - Delta's on-time performance for this route
  - Typical aircraft type (A321neo, 737-900, etc.)
  - Delta-specific baggage policy for this route
  - Seat map / cabin configuration
  - Delta SkyMiles earning potential
  - Delta-specific terminal/gate info at both airports
- The general route page (`/flights/lax-to-jfk/`) is always the canonical for the route itself.
- The airline+route page (`/airlines/delta/lax-to-jfk/`) self-canonicalizes ONLY if it passes the 3 Data Points test.

#### The "3 Data Points" Test (Phase 4 Gate)

Before building any airline+route combo page, answer: **What's on this page that isn't on the route page?**

- If the answer is **3+ substantive, unique data points** → the page earns its own URL and self-canonicalizes.
- If the answer is **fewer than 3** → the page doesn't earn its own URL. Don't build it, or point its canonical to the general route page.

**Substantive data points (count these):**
- ✅ Airline-specific on-time rate for this route
- ✅ Typical aircraft type and seat configuration
- ✅ Airline-specific baggage policy
- ✅ Frequent flyer program earning details
- ✅ Airline-specific terminal/gate info
- ✅ WiFi/entertainment availability on this airline for this route

**NOT substantive (don't count these):**
- ❌ Restating the flight distance (already on route page)
- ❌ Restating the time zone change (already on route page)
- ❌ Generic booking tips (already on route page)

### Overlap Prevention by Page Type

| Page A | Page B | Overlap Risk | Resolution |
|--------|--------|-------------|------------|
| `/compare/triptrackai-vs-tripit/` | `/alternatives/tripit-alternatives/` | LOW | Different intent, different template. No action needed. |
| `/flights/lax-to-jfk/` | `/airlines/delta/lax-to-jfk/` | HIGH | Airline page must pass 3 Data Points test or don't build it. |
| `/airports/lax/` | `/layover/lax/` | MEDIUM | Airport page = "traveling through." Layover page = "stuck here for 4 hours." Different intent, but ensure templates diverge. |
| `/travel/tokyo/` | `/travel/tokyo/packing-list/` | LOW | Parent page = trip prep overview. Child page = specific packing checklist. Natural hierarchy. |
| `/best/travel-app-for-business/` | `/compare/triptrackai-vs-concur/` | MEDIUM | "Best for business" is a listicle (5-8 apps). Comparison is deep on two apps. Ensure listicle doesn't become a mini-comparison. |

### Phase 4 Pre-Build Audit

Before generating Phase 4 combo pages at scale:

- [ ] Sketch the airline+route template and verify 3+ unique data points per page
- [ ] Run Screaming Frog content similarity audit on Phase 2 pages
- [ ] Identify any pages with >70% content overlap and resolve
- [ ] Establish canonical tag rules in the generator code
- [ ] Add automated duplicate content detection to the build pipeline

---

## Internal Linking Strategy

**This is the #1 ranking factor at scale.** Budget 40% of effort here.

### Link Architecture

Every page links to:

1. **Parent** — Breadcrumb navigation (Home > Airports > LAX)
2. **Siblings** — Related pages at same level (Other airports in California)
3. **Children** — Deeper pages (Routes from LAX, Airlines at LAX)
4. **Cross-vertical** — Different page types (Airport page → City guide, Route → Airline page)
5. **Hub pages** — Core site pages (Features, Flight Tracker, Business)

### Link Density Targets

| Page Type | Min Internal Links | Link To |
|-----------|-------------------|---------|
| Comparison | 10+ | Other comparisons, feature pages, alternatives |
| Airport | 15+ | Airlines at airport, routes from airport, city guide, layover guide |
| Route | 10+ | Both airport pages, both city pages, airline pages |
| City | 15+ | Airport pages, route pages, packing list, visa info |

### Footer Link Blocks

Every programmatic page includes a "Related Pages" footer section with 8-12 contextual internal links.

---

## Measurement Framework

### Primary Metrics (Track Weekly)

| Metric | Tool | Target |
|--------|------|--------|
| Pages indexed | Google Search Console | >80% of submitted pages |
| Organic impressions | Google Search Console | Growing week-over-week |
| Organic clicks | Google Search Console | Growing week-over-week |
| Average position | Google Search Console | Improving for target keywords |

### Page-Level Metrics (Track Monthly)

| Metric | Tool | Target |
|--------|------|--------|
| Time on page | Google Analytics | >2 minutes for comparison pages |
| Scroll depth | Google Analytics (custom event) | >60% for comparison pages |
| Bounce rate | Google Analytics | <65% |
| CTA click-through | Google Analytics (custom event) | >3% |
| App Store clicks | Google Analytics + App Store Connect | Growing |

### Kill Criteria

Stop scaling a page type if:
- **<5% index rate** after 30 days (Google is ignoring the pages)
- **>85% bounce rate** consistently (pages aren't useful)
- **<10 seconds avg time on page** (people leave immediately)
- **0 CTA clicks** after 1,000 page views (no conversion value)

### Quarterly Review Checklist

- [ ] Update comparison page data (competitor features, pricing)
- [ ] Check for stale data on airport/route pages
- [ ] Review index coverage in Search Console
- [ ] Analyze top-performing pages and double down
- [ ] Analyze worst-performing pages and improve or remove
- [ ] Update "Last updated" timestamps on refreshed pages

---

## Quality Assurance & Validation

At scale, a single broken template variable or missing canonical tag can affect thousands of pages. The validation system catches issues before deployment.

### Automated Validator: `generator/validate.js`

**Location:** `generator/validate.js`
**Dependency:** `jsdom` (install with `npm install jsdom`)
**Run:** `node generator/validate.js` or `node generator/validate.js --verbose`

The validator crawls every HTML file in the project and checks:

| Check | Type | What It Catches |
|-------|------|----------------|
| `TITLE` | Error/Warning | Missing title tag, or title > 60 chars |
| `META_DESC` | Error/Warning | Missing meta description, or > 160 chars |
| `CANONICAL` | Error | Missing canonical tag, or non-absolute URL |
| `H1` | Error/Warning | Missing H1, or multiple H1 tags |
| `OG` | Warning | Missing Open Graph tags (og:title, og:description) |
| `SCHEMA` | Error/Warning | Missing or invalid JSON-LD structured data |
| `THIN_CONTENT` | Warning | Pages with < 150 words (Google thin content risk) |
| `PLACEHOLDER` | Error | Unresolved template variables (`{{`, `}}`, `[TODO]`, `undefined`, `null`) |
| `BROKEN_LINK` | Error | Internal links pointing to non-existent files |
| `LINK_DENSITY` | Warning | Pages with fewer than 3 internal links |
| `SITEMAP_MISSING` | Warning | HTML files not found in any sitemap |

### When to Run

- **Before every deployment** — Run `node generator/validate.js` and fix all errors before pushing
- **After every generation batch** — Run immediately after `node generator/generate.js`
- **In CI/CD pipeline** — Add to Vercel build command: exits with code 1 on errors, blocking deploy

### Adding to Vercel Build Pipeline

```json
{
  "buildCommand": "node generator/generate.js && node generator/validate.js"
}
```

This ensures no broken pages ever reach production.

### Manual QA Checklist (Per Phase Launch)

Run these manually when launching a new page type:

- [ ] Open 5 random pages from the batch in a browser — do they look right?
- [ ] Check Google's Mobile-Friendly Test on 3 random pages
- [ ] Run Google's Rich Results Test on 3 random pages (validate schema)
- [ ] Check page speed on PageSpeed Insights (target: >90 performance score)
- [ ] Verify canonical tags point to correct URLs (not template artifacts)
- [ ] Click every internal link on 3 random pages — do they all resolve?
- [ ] Search `site:triptrackai.com/[new-path]` in Google after 7 days — are pages indexing?
- [ ] Check Search Console for crawl errors on new URL patterns

### Content Similarity Audit (Phase 3+)

When page count exceeds 1,000, run quarterly:

1. **Screaming Frog** → Crawl site → Content → Near Duplicates report
2. Flag any pages with >70% content similarity
3. For flagged pairs: either differentiate content or add canonical pointing to the primary page
4. Log results in the Session Log below

### Validation Output Example

```
═══════════════════════════════════════════
  TripTrackAI SEO Validation Report
═══════════════════════════════════════════

  Files checked:  247
  ✓ Passed:       1,842
  ✗ Errors:       3
  ⚠ Warnings:     12

── ERRORS ──────────────────────────────
  ✗ [BROKEN_LINK] compare/triptrackai-vs-kayak.html
    Broken internal link: /compare/triptrackai-vs-hopper
  ✗ [PLACEHOLDER] airports/lax.html
    Found unresolved template placeholder: "{{terminal_count}}"
  ✗ [CANONICAL] best/travel-app-for-families.html
    Canonical must be absolute URL, got: /best/travel-app-for-families

── RESULT ──────────────────────────────
  ✗ 3 ERROR(S) FOUND
```

---

## Build Log & Progress Tracker

### Phase 0: Pre-Build

- [ ] Verify TripTrackAI feature claims against actual app
- [ ] Set up scroll depth tracking in Google Analytics
- [ ] Define kill criteria (documented above)
- [ ] Build exemplar: TripTrackAI vs TripIt page (hand-crafted)
- [ ] Deploy exemplar and submit to Search Console
- [ ] Monitor exemplar for 2 weeks (indexing, engagement, conversion)

### Phase 1: Bottom-of-Funnel Pages

- [ ] Build Node.js generator infrastructure (`/generator/`)
- [ ] Create comparison page HTML template
- [ ] Create competitors.json data file
- [ ] Generate TripTrackAI vs TripIt page (exemplar)
- [ ] Generate 20-30 additional comparison pages
- [ ] Create "Best X for Y" HTML template
- [ ] Create use-cases.json data file
- [ ] Generate 50-100 "Best X for Y" pages
- [ ] Create alternatives HTML template
- [ ] Generate 30-50 alternatives pages
- [ ] Update sitemap index with all new pages
- [ ] Update vercel.json routing
- [ ] Add internal links from existing pages to new pages
- [ ] Submit sitemaps to Google Search Console
- [ ] Monitor index coverage (target: >80% in 30 days)

### Phase 2: Traveler Utility Pages

- [ ] Download and process OpenFlights airport data
- [ ] Create airport page HTML template
- [ ] Generate top 200 airport pages
- [ ] Monitor airport page indexing and engagement
- [ ] If successful: scale to 2,000 airport pages
- [ ] Create route page HTML template
- [ ] Process route data (top 500 city pairs)
- [ ] Generate 500 route pages
- [ ] If successful: scale to 5,000 route pages
- [ ] Build flight time calculator tool page
- [ ] Build jet lag calculator tool page
- [ ] Update sitemap index
- [ ] Verify internal linking mesh

### Phase 3: Destination Intelligence

- [ ] Create city travel prep HTML template
- [ ] Process city data (top 1,000 cities)
- [ ] Generate 1,000 city pages
- [ ] Monitor indexing and engagement
- [ ] If successful: scale to 5,000-20,000 city pages
- [ ] Create packing list template
- [ ] Create layover guide template
- [ ] Create visa info template
- [ ] Generate sub-pages for top cities

### Phase 4: Combinatorial Scale

- [ ] Evaluate Phase 2-3 performance (are templates ranking?)
- [ ] Create airline + route combo template
- [ ] Generate 10,000 test pages
- [ ] Monitor index rate (must be >50% to continue)
- [ ] If successful: scale to 100K+ pages
- [ ] Create airport sub-page templates (hotels, transport, lounges)
- [ ] Create seasonal destination variants

### Phase 5: Ongoing

- [ ] Set up quarterly content refresh cycle
- [ ] Build blog infrastructure
- [ ] Implement user-generated content system (future)
- [ ] Backlink outreach campaign
- [ ] Annual strategy review and adjustment

---

## Session Log

### Session 1 — February 18, 2026

**What was decided:**
- Differentiation-first approach (not Wikipedia mirrors)
- Bottom-of-funnel pages first (comparisons > informational)
- "Traveler operations" lens for all utility pages
- Data freshness rules established
- Honest comparison principle (acknowledge competitor strengths)
- Exemplar-first methodology (prove template before scaling)
- Conservative traffic projections with sandbox reality acknowledged

**What was built:**
- This strategy document (PROGRAMMATIC-SEO-STRATEGY.md)
- Canonicalization strategy with "3 Data Points" test
- QA validation script (`generator/validate.js`) — checks SEO tags, broken links, thin content, template placeholders, sitemap consistency

**Next session priorities:**
1. Build the Node.js generator infrastructure
2. Hand-craft the TripTrackAI vs TripIt exemplar page
3. Create the comparison page template
4. Generate first batch of comparison pages
5. Update sitemap and Vercel routing

---

*This is a living document. Update after every work session.*
