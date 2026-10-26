import { useState, useEffect } from 'react';
import { LAUNCH_CONFIG } from './config/launchConfig';
import { useCountdown } from './utils/countdown';

/**
 * Custom original vector logo mark for DeciNexusAI.
 * Represents intelligence nexus and decision facets in warm amber and white.
 */
function BrandLogo() {
  return (
    <div className="brand-logo" aria-hidden="true">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-logo-svg"
      >
        <defs>
          <linearGradient id="amberMarkGrad" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="amberInnerFacet" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Outer faceted geometric shield */}
        <polygon
          points="20,3 36,12 36,28 20,37 4,28 4,12"
          stroke="url(#amberMarkGrad)"
          strokeWidth="2.2"
          strokeLinejoin="round"
          fill="rgba(17, 24, 39, 0.7)"
        />
        {/* Inner nexus facet */}
        <polygon
          points="20,10 28,15 28,25 20,30 12,25 12,15"
          stroke="url(#amberInnerFacet)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Connecting decision pathways */}
        <line x1="20" y1="20" x2="20" y2="10" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="20" y1="20" x2="28" y2="20" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="20" y1="20" x2="20" y2="30" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="20" y1="20" x2="12" y2="20" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="2 2" />
        {/* Intelligence nodes */}
        <circle cx="20" cy="20" r="3" fill="#F59E0B" />
        <circle cx="20" cy="10" r="1.8" fill="#FFFFFF" />
        <circle cx="28" cy="20" r="1.8" fill="#FBBF24" />
        <circle cx="20" cy="30" r="1.8" fill="#D97706" />
        <circle cx="12" cy="20" r="1.8" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

/**
 * Clean inline SVGs for section categories
 */
function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="bullet-check-icon" aria-hidden="true">
      <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="hero-scroll-icon" aria-hidden="true">
      <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const countdown = useCountdown(LAUNCH_CONFIG.TARGET_LAUNCH_ISO);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position for header glass transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="product-site">
      {/* ====================================================================
          1. STICKY GLOBAL HEADER & NAVIGATION
          ==================================================================== */}
      <header
        className={`site-global-header ${isScrolled ? 'header-scrolled' : ''}`}
        id="top-header"
      >
        <div className="header-container">
          {/* Brand Anchor */}
          <a href="#hero" className="brand-identity-link" onClick={closeMenu}>
            <BrandLogo />
            <div className="brand-text-block">
              <span className="brand-title" translate="no">
                {LAUNCH_CONFIG.BRAND_NAME}
                <span className="brand-period">.</span>
              </span>
              <span className="brand-descriptor">
                {LAUNCH_CONFIG.BRAND_DESCRIPTOR}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {LAUNCH_CONFIG.NAV_ITEMS.map((item) => (
                <li key={item.id} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action / Status Badge */}
          <div className="header-right-action">
            <a
              href="#launch"
              className="status-pill header-status-pill"
              role="status"
              aria-label={`Target launch window: ${LAUNCH_CONFIG.STATUS_LABEL}`}
              title={LAUNCH_CONFIG.PROVISIONAL_NOTE}
            >
              <span className="status-pill-dot" aria-hidden="true" />
              <span className="status-pill-text">{LAUNCH_CONFIG.STATUS_LABEL}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`hamburger-bar ${isMobileMenuOpen ? 'bar-open-1' : ''}`} />
              <span className={`hamburger-bar ${isMobileMenuOpen ? 'bar-open-2' : ''}`} />
              <span className={`hamburger-bar ${isMobileMenuOpen ? 'bar-open-3' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-nav-drawer"
          className={`mobile-nav-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {LAUNCH_CONFIG.NAV_ITEMS.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-drawer-footer">
            <div className="mobile-target-chip">
              <span className="status-pill-dot" aria-hidden="true" />
              <span>Target Launch: January 2027</span>
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. FULL-SCREEN HERO SECTION (PRESERVED & INTEGRATED)
          ==================================================================== */}
      <section
        id="hero"
        className="site-hero"
        aria-label="DeciNexusAI Launch Announcement"
      >
        {/* Full-Bleed Fixed Background Layer */}
        <div className="hero-bg-layer" aria-hidden="true">
          <img
            src="/assets/decinexus-hero-bg.jpg"
            alt=""
            className="hero-bg-image"
            loading="eager"
          />
          <div className="hero-overlay" />
        </div>

        {/* Hero Content Stage */}
        <div className="hero-content">
          <div className="hero-main-group">
            <h1 className="hero-headline">Coming Soon</h1>

            <div className="hero-announcement" role="status">
              {LAUNCH_CONFIG.ANNOUNCEMENT_HEADLINE}
            </div>

            <p className="hero-description">
              {LAUNCH_CONFIG.HERO_SUPPORTING_STATEMENT}
            </p>
          </div>

          {/* Hero Bottom Row: Countdown on Left, Scroll Indicator on Right */}
          <div className="hero-bottom-bar">
            {/* Live Countdown Component */}
            <div
              className="hero-countdown-block"
              aria-label={`Launch Countdown: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds remaining until provisional launch target.`}
            >
              <span className="countdown-kicker">Launching In</span>
              <div className="countdown-grid" role="timer" aria-live="polite">
                <div className="countdown-cell">
                  <span className="countdown-number" id="hero-countdown-days">
                    {countdown.days}
                  </span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-cell">
                  <span className="countdown-number" id="hero-countdown-hours">
                    {countdown.hours}
                  </span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-cell">
                  <span className="countdown-number" id="hero-countdown-minutes">
                    {countdown.minutes}
                  </span>
                  <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-cell">
                  <span className="countdown-number" id="hero-countdown-seconds">
                    {countdown.seconds}
                  </span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <a href="#about" className="hero-scroll-btn" aria-label="Explore Product Architecture">
              <span>Explore Platform</span>
              <ArrowDownIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main id="main-content" className="site-main-flow">
        {/* ====================================================================
            SECTION A: ABOUT DECINEXUSAI
            ==================================================================== */}
        <section id="about" className="product-section section-about">
          <div className="section-container">
            <div className="section-header-block">
              <span className="section-kicker">About DeciNexusAI</span>
              <h2 className="section-heading">{LAUNCH_CONFIG.ABOUT.heading}</h2>
              <p className="section-lead-paragraph">
                {LAUNCH_CONFIG.ABOUT.leadParagraph}
              </p>
              <p className="section-body-paragraph">
                {LAUNCH_CONFIG.ABOUT.secondaryParagraph}
              </p>
            </div>

            {/* Grounded Foundational Pillars */}
            <div className="pillars-grid">
              {LAUNCH_CONFIG.ABOUT.pillars.map((pillar, idx) => (
                <article key={idx} className="pillar-card">
                  <div className="pillar-number">0{idx + 1}</div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-description">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION B: HOW IT WORKS (4-STEP WORKFLOW)
            ==================================================================== */}
        <section id="how-it-works" className="product-section section-how-it-works">
          <div className="section-container">
            <div className="section-header-block text-center">
              <span className="section-kicker">Operational Workflow</span>
              <h2 className="section-heading">How DeciNexusAI Supports Decisions</h2>
              <p className="section-lead-paragraph max-w-760">
                A structured four-phase workflow designed to transform disparate business data
                into contextual, explainable decision intelligence.
              </p>
            </div>

            <div className="workflow-grid">
              {LAUNCH_CONFIG.HOW_IT_WORKS_STEPS.map((step) => (
                <div key={step.stepNumber} className="workflow-step-card">
                  <div className="step-header">
                    <span className="step-badge">{step.stepNumber}</span>
                    <span className="step-timeline-connector" aria-hidden="true" />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-summary">{step.summary}</p>
                  <div className="step-verification-tag">
                    <span className="tag-dot" aria-hidden="true" />
                    <span>{step.verificationNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION C: CORE CAPABILITIES (VERIFIED VS PLANNED)
            ==================================================================== */}
        <section id="capabilities" className="product-section section-capabilities">
          <div className="section-container">
            <div className="section-header-block">
              <span className="section-kicker">Platform Architecture</span>
              <h2 className="section-heading">Core Capabilities</h2>
              <p className="section-lead-paragraph">
                Grounded intelligence capabilities actively in development or scheduled on our engineering roadmap leading to January 2027.
              </p>
            </div>

            <div className="capabilities-grid">
              {LAUNCH_CONFIG.CAPABILITIES.map((cap) => (
                <article key={cap.id} className="capability-card">
                  <div className="capability-top-bar">
                    <span
                      className={`status-pill-small ${
                        cap.status === 'In Development'
                          ? 'status-in-dev'
                          : 'status-planned'
                      }`}
                    >
                      {cap.statusBadge}
                    </span>
                  </div>
                  <h3 className="capability-title">{cap.title}</h3>
                  <p className="capability-description">{cap.description}</p>
                  <ul className="capability-bullet-list">
                    {cap.detailList.map((detail, dIdx) => (
                      <li key={dIdx} className="capability-bullet-item">
                        <CheckIcon />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION D: DESIGNED FOR BUSINESS TEAMS
            ==================================================================== */}
        <section id="teams" className="product-section section-teams">
          <div className="section-container">
            <div className="section-header-block text-center">
              <span className="section-kicker">Organizational Impact</span>
              <h2 className="section-heading">Designed for Business Teams</h2>
              <p className="section-lead-paragraph max-w-760">
                Tailored contextual intelligence for leaders, analysts, and operators who require
                actionable clarity without data complexity.
              </p>
            </div>

            <div className="teams-grid">
              {LAUNCH_CONFIG.BUSINESS_TEAMS.map((team) => (
                <article key={team.id} className="team-card">
                  <div className="team-role-badge">{team.role}</div>
                  <h3 className="team-focus-title">{team.focus}</h3>
                  <p className="team-value-prop">{team.valueProposition}</p>
                  <div className="team-activities-block">
                    <span className="activities-heading">Key Analytical Focus:</span>
                    <ul className="team-activities-list">
                      {team.keyActivities.map((act, aIdx) => (
                        <li key={aIdx} className="activity-item">
                          <CheckIcon />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION E: RESPONSIBLE AI
            ==================================================================== */}
        <section id="responsible-ai" className="product-section section-responsible-ai">
          <div className="section-container">
            <div className="section-header-block">
              <span className="section-kicker">Ethical & Analytical Safeguards</span>
              <h2 className="section-heading">Our Responsible AI Principles</h2>
              <p className="section-lead-paragraph">
                We believe predictive analytics and machine intelligence must operate under strict,
                transparent boundaries where human accountability always takes precedence.
              </p>
            </div>

            <div className="responsible-grid">
              {LAUNCH_CONFIG.RESPONSIBLE_AI_PRINCIPLES.map((principle) => (
                <article key={principle.id} className="responsible-card">
                  <div className="responsible-card-header">
                    <span className="principle-bullet-dot" aria-hidden="true" />
                    <h3 className="principle-title">{principle.title}</h3>
                  </div>
                  <p className="principle-description">{principle.description}</p>
                  <div className="principle-boundary-box">
                    <span className="boundary-label">Operational Boundary:</span>
                    <p className="boundary-text">{principle.boundary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION F: REFINED LAUNCH ANNOUNCEMENT
            ==================================================================== */}
        <section id="launch" className="product-section section-launch">
          <div className="section-container">
            <div className="launch-feature-card">
              <div className="launch-card-header">
                <span className="section-kicker">Target Launch Window</span>
                <h2 className="launch-main-heading">
                  DeciNexusAI Is Coming in January 2027
                </h2>
                <p className="launch-subheading">
                  Our engineering team is actively building and refining the core business
                  analytics engine, explainability pipelines, and predictive models.
                </p>
              </div>

              {/* Dedicated Launch Countdown */}
              <div className="launch-timer-wrapper">
                <div className="launch-timer-title">Estimated Time Remaining:</div>
                <div className="countdown-grid launch-countdown-grid" role="timer" aria-live="polite">
                  <div className="countdown-cell">
                    <span className="countdown-number">{countdown.days}</span>
                    <span className="countdown-label">Days</span>
                  </div>
                  <div className="countdown-cell">
                    <span className="countdown-number">{countdown.hours}</span>
                    <span className="countdown-label">Hours</span>
                  </div>
                  <div className="countdown-cell">
                    <span className="countdown-number">{countdown.minutes}</span>
                    <span className="countdown-label">Minutes</span>
                  </div>
                  <div className="countdown-cell">
                    <span className="countdown-number">{countdown.seconds}</span>
                    <span className="countdown-label">Seconds</span>
                  </div>
                </div>
              </div>

              {/* Provisional Disclosure & Follow Statement */}
              <div className="launch-provisional-note">
                <span className="note-indicator" aria-hidden="true">ℹ</span>
                <span>
                  {LAUNCH_CONFIG.PROVISIONAL_NOTE} Verified launch milestones will be posted as the exact January date is finalized.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          SECTION G: PROFESSIONAL FOOTER
          ==================================================================== */}
      <footer className="site-global-footer" id="main-footer">
        <div className="footer-container">
          {/* Top Footer Block */}
          <div className="footer-top-row">
            <div className="footer-brand-column">
              <a href="#hero" className="brand-identity-link">
                <BrandLogo />
                <div className="brand-text-block">
                  <span className="brand-title" translate="no">
                    {LAUNCH_CONFIG.BRAND_NAME}
                    <span className="brand-period">.</span>
                  </span>
                  <span className="brand-descriptor">
                    {LAUNCH_CONFIG.BRAND_DESCRIPTOR}
                  </span>
                </div>
              </a>
              <p className="footer-mission-statement">
                Building accessible, explainable decision intelligence to help small and medium-sized
                businesses turn data into confident strategic actions.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="footer-nav-column">
              <span className="footer-column-heading">Navigation</span>
              <ul className="footer-nav-list">
                {LAUNCH_CONFIG.NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a href={item.href} className="footer-nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Launch Status Column */}
            <div className="footer-status-column">
              <span className="footer-column-heading">Launch Schedule</span>
              <div className="footer-schedule-card">
                <span className="footer-schedule-pill">Target: January 2027</span>
                <p className="footer-schedule-copy">
                  Platform in active development. Verified technical milestones are tracked internally.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer Separator & Copyright */}
          <div className="footer-bottom-row">
            <span className="footer-copyright">
              &copy; 2026 DeciNexusAI. All rights reserved.
            </span>
            <span className="footer-disclosure">
              Product announcement website. Features reflect current development roadmap.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
