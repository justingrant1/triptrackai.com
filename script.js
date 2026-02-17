// TripTrack V2 — Landing Page Scripts

document.addEventListener('DOMContentLoaded', function() {

  // Check for reduced motion preference
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll Progress Bar
  var scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  scrollProgress.style.width = '0%';
  document.body.appendChild(scrollProgress);

  window.addEventListener('scroll', function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
  });

  // Intersection Observer for scroll animations
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Unobserve after showing (performance optimization)
        if (!prefersReducedMotion) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.anim').forEach(function(el) {
    if (prefersReducedMotion) {
      el.classList.add('show');
    } else {
      observer.observe(el);
    }
  });

  // Sticky nav background on scroll
  var nav = document.getElementById('nav');
  var lastScroll = 0;
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  });

  // Mobile menu toggle with keyboard support
  var mobileMenuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileMenuClose = document.getElementById('mobile-menu-close');
  var focusableElements = 'a[href], button:not([disabled])';
  var firstFocusable, lastFocusable;
  
  function openMobileMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set up focus trap
    var focusables = mobileMenu.querySelectorAll(focusableElements);
    firstFocusable = focusables[0];
    lastFocusable = focusables[focusables.length - 1];
    
    // Focus close button
    setTimeout(function() {
      mobileMenuClose.focus();
    }, 100);
  }
  
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
    mobileMenuBtn.focus();
  }
  
  if (mobileMenuBtn && mobileMenu && mobileMenuClose) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking on a link
    document.querySelectorAll('.mobile-nav-link').forEach(function(link) {
      link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });
    
    // Keyboard support - Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
      
      // Focus trap
      if (mobileMenu.classList.contains('active') && e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      var el = document.querySelector(href);
      if (el) {
        var offset = 80;
        var top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Sticky mobile CTA
  var stickyCta = document.getElementById('sticky-cta');
  var heroSection = document.querySelector('.hero');
  if (stickyCta && heroSection) {
    var ctaObserver = new IntersectionObserver(function(entries) {
      if (!entries[0].isIntersecting) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    }, { threshold: 0.1 });
    ctaObserver.observe(heroSection);
  }

  // Showcase scroll indicators
  var showcaseScroll = document.querySelector('.showcase-scroll');
  var showcaseIndicators = document.getElementById('showcase-indicators');
  if (showcaseScroll && showcaseIndicators && window.innerWidth < 1100) {
    var dots = showcaseIndicators.querySelectorAll('.showcase-dot');
    
    // Update active dot on scroll
    showcaseScroll.addEventListener('scroll', function() {
      var scrollLeft = showcaseScroll.scrollLeft;
      var cardWidth = showcaseScroll.querySelector('.showcase-card').offsetWidth + 20; // card + gap
      var activeIndex = Math.round(scrollLeft / cardWidth);
      
      dots.forEach(function(dot, index) {
        if (index === activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    });
    
    // Click dots to scroll
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        var cardWidth = showcaseScroll.querySelector('.showcase-card').offsetWidth + 20;
        showcaseScroll.scrollTo({
          left: cardWidth * index,
          behavior: 'smooth'
        });
      });
    });
  }

  // FAQ Accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        var wasActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(function(otherItem) {
          otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!wasActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Add initials to testimonial avatars
  document.querySelectorAll('.testimonial-card').forEach(function(card) {
    var avatar = card.querySelector('.testimonial-avatar');
    var name = card.querySelector('.testimonial-info strong');
    if (avatar && name && !avatar.textContent) {
      var initials = name.textContent.trim().split(' ').map(function(n) { return n[0]; }).join('');
      avatar.textContent = initials;
    }
  });

  // Animate proof numbers (count up)
  var counted = false;
  var proofObserver = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      animateNumbers();
    }
  }, { threshold: 0.5 });

  var proofBar = document.querySelector('.proof-bar');
  if (proofBar) proofObserver.observe(proofBar);

  function animateNumbers() {
    document.querySelectorAll('.proof-num').forEach(function(el) {
      var text = el.textContent.trim();
      
      // Handle decimal numbers like 4.9
      if (text.indexOf('.') !== -1) {
        var parts = text.split('.');
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          var target = parseFloat(text);
          var duration = 1200;
          var start = performance.now();
          function step(now) {
            var progress = Math.min((now - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = (target * eased).toFixed(1);
            el.textContent = current;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          return;
        }
      }
      
      // Skip non-numeric (like <3s)
      if (text.indexOf('<') !== -1) return;
      
      // Handle numbers with K+ suffix
      var match = text.match(/(\d+)(K\+)?/);
      if (!match) return;
      var target = parseInt(match[1]);
      var suffix = match[2] || '';
      var duration = 1200;
      var start = performance.now();
      function step(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(target * eased);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
});
