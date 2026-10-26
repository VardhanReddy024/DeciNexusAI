# DeciNexusAI — Pre-Launch Product Announcement Website

A professional, multi-section pre-launch announcement website for **DeciNexusAI** (Business Decision Intelligence).

Built as a **strictly self-contained standalone mini-project** in `decinexus-coming-soon/`. It combines the preserved full-viewport mountain landscape hero and live January 2027 countdown with an expanded, enterprise-grade architecture introducing the platform, operational workflow, core capabilities, team use cases, and responsible AI principles.

---

## Architecture & Technology Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript 5.7 (Strict compiler settings, `noUnusedLocals`, `noEmit`)
- **Bundler & Dev Server**: Vite 6.2
- **Styling**: Pure Vanilla CSS (`src/index.css`) with custom properties and zero third-party UI/CSS libraries
- **Height Strategy**: `min-height: 100vh; min-height: 100svh; min-height: 100dvh;`
- **Navigation**: Sticky global navigation with glassmorphism backdrop on scroll, keyboard-accessible mobile drawer
- **Zero Remote Dependencies**: Zero external fonts or CDNs; 100% offline-ready

---

## File Structure

```text
decinexus-coming-soon/
├── public/
│   ├── assets/
│   │   └── decinexus-hero-bg.jpg   # High-resolution landscape photograph
│   ├── favicon.svg                 # Brand mark in warm amber & charcoal
│   └── robots.txt                  # Standard crawling directives
├── src/
│   ├── config/
│   │   └── launchConfig.ts         # Navigation items, copy, workflows, and capabilities
│   ├── utils/
│   │   └── countdown.ts            # Timezone-safe countdown calculation & hook
│   ├── App.tsx                     # Full-viewport layout, header, hero, and 7 sections
│   ├── index.css                   # Multi-section styling, typography, and responsive rules
│   ├── main.tsx                    # React 19 entry point
│   └── vite-env.d.ts               # Vite environment types
├── index.html                      # Semantic HTML5 shell, title & meta tags
├── package.json                    # Project dependencies & scripts
├── tsconfig.json                   # Strict TypeScript compiler options
├── vite.config.ts                  # Vite configuration
├── .gitignore                      # Git ignore rules for node_modules, dist, env, and OS artifacts
├── README.md                       # Architecture and development guide
├── IMPLEMENTATION_REPORT.md        # Detailed audit, feature verification, and QA report
└── CLEANUP_AUDIT_REPORT.md         # Cleanup audit and regression verification report
```

---

## Website Sections Implemented

1. **Header & Navigation**: Fixed header with glass blur transition on scroll, brand logo and descriptor, desktop navigation anchors, amber `January 2027` target pill, and accessible mobile drawer with keyboard (ESC) support.
2. **Hero Section (`#hero`)**: Full-screen mountain landscape with charcoal readability overlay, serif `Coming Soon` headline, uppercase amber announcement (`OUR WEBSITE LAUNCHES IN JANUARY 2027`), mission statement, live countdown, and downward scroll button.
3. **Section A — About (`#about`)**: `Turn Business Data Into Better Decisions`, explaining SME focus, predictive analytics, and explainable AI across three foundational pillars.
4. **Section B — How It Works (`#how-it-works`)**: 4-phase horizontal workflow on desktop (stacked on mobile) with explicit verification notes distinguishing in-development analytics from planned data ingestion.
5. **Section C — Core Capabilities (`#capabilities`)**: 6 capability cards with transparent status badges (`In Development` vs `Planned`).
6. **Section D — Designed for Business Teams (`#teams`)**: Contextual relevance for SME Owners, Finance Teams, Sales/Demand Planning, and Operations/Inventory Managers.
7. **Section E — Responsible AI (`#responsible-ai`)**: 4 grounded ethical and analytical safeguards with operational boundaries.
8. **Section F — Launch Announcement (`#launch`)**: Featured launch card with target timeline, secondary countdown timer, and provisional date disclosure.
9. **Section G — Footer (`#main-footer`)**: DeciNexusAI brand block, quick navigation links, launch status schedule, and copyright information.

---

## Development & Build Commands

All commands are run inside `decinexus-coming-soon`:

```bash
cd decinexus-coming-soon

# 1. Start development server
npm run dev

# 2. Strict TypeScript typechecking
npm run typecheck

# 3. Build optimized static production bundle
npm run build

# 4. Preview the production build locally
npm run preview -- --port 4173
```

---

## Quality Assurance & Verification

- **Strict Type Checking**: Verified passing with `tsc --noEmit` (0 errors).
- **Production Build**: Verified passing with `tsc && vite build` (0 errors).
- **Visual Verification**: Tested via browser subagent at desktop (1440×900) and mobile (390×844) viewports.
- **Strict Isolation**: No files outside `decinexus-coming-soon` were touched.
