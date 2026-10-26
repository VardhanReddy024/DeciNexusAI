/**
 * DeciNexusAI Launch Configuration & Product Content
 * ===================================================
 * Central configuration for product announcement content, target dates,
 * navigation structure, and verification status.
 */

export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface WorkflowStep {
  readonly stepNumber: string;
  readonly title: string;
  readonly summary: string;
  readonly verificationNote: string;
}

export type CapabilityStatus = 'In Development' | 'Planned';

export interface CapabilityItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly status: CapabilityStatus;
  readonly statusBadge: string;
  readonly detailList: readonly string[];
}

export interface BusinessTeamRole {
  readonly id: string;
  readonly role: string;
  readonly focus: string;
  readonly valueProposition: string;
  readonly keyActivities: readonly string[];
}

export interface ResponsibleAiPrinciple {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly boundary: string;
}

export const LAUNCH_CONFIG = {
  // Provisional target: Beginning of January 2027 (UTC)
  TARGET_LAUNCH_ISO: '2027-01-01T00:00:00Z',
  ANNOUNCEMENT_HEADLINE: 'OUR WEBSITE LAUNCHES IN JANUARY 2027',
  STATUS_LABEL: 'January 2027',
  BRAND_NAME: 'DeciNexusAI',
  BRAND_DESCRIPTOR: 'BUSINESS DECISION INTELLIGENCE',
  HERO_SUPPORTING_STATEMENT:
    "We're building a smarter way for businesses to turn data into meaningful insights and make more confident decisions.",
  PROVISIONAL_NOTE:
    'Target is set to the start of January 2027 (UTC) as a provisional placeholder until the exact launch day is announced.',
  IS_PROVISIONAL: true,
  TIMEZONE: 'UTC',

  // Navigation Links
  NAV_ITEMS: [
    { id: 'nav-about', label: 'About', href: '#about' },
    { id: 'nav-how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'nav-capabilities', label: 'Capabilities', href: '#capabilities' },
    { id: 'nav-teams', label: 'For Teams', href: '#teams' },
    { id: 'nav-responsible-ai', label: 'Responsible AI', href: '#responsible-ai' },
    { id: 'nav-launch', label: 'Launch', href: '#launch' },
  ] as const satisfies readonly NavItem[],

  // Section A: About
  ABOUT: {
    heading: 'Turn Business Data Into Better Decisions',
    leadParagraph:
      'DeciNexusAI is being developed to help small and medium-sized businesses understand their performance, explore business trends, and make more informed decisions using data, predictive analytics, and explainable AI.',
    secondaryParagraph:
      'Rather than relying on fragmented spreadsheets or opaque black-box models, our focus is on providing grounded decision support where every metric, trend, and recommendation can be traced to clear business logic.',
    pillars: [
      {
        title: 'Built for SME Realities',
        description:
          'Engineered for growing businesses that require institutional-grade decision intelligence without the overhead of massive dedicated data science teams.',
      },
      {
        title: 'Predictive, Not Presumptive',
        description:
          'Forecasts evaluate probability patterns and historical seasonality to outline potential trajectories, giving teams clarity without false certainty.',
      },
      {
        title: 'Explainable by Design',
        description:
          'Every analytical output surfaces contributing factors and contextual drivers, ensuring business leaders maintain complete cognitive ownership.',
      },
    ],
  },

  // Section B: How It Works (4 Steps)
  HOW_IT_WORKS_STEPS: [
    {
      stepNumber: '01',
      title: 'Bring Your Business Data',
      summary:
        'Connect operational records, sales transactions, and historical performance tables through planned structured ingestion pipelines.',
      verificationNote:
        'Planned ingestion workflow for CSV, spreadsheet, and relational records during platform onboarding.',
    },
    {
      stepNumber: '02',
      title: 'Analyze Performance',
      summary:
        'Organize historical revenue, sales trends, margin fluctuations, and operational activity into coherent, multi-dimensional views.',
      verificationNote:
        'Core analytics engine currently in development focusing on business health indicators and baseline performance metrics.',
    },
    {
      stepNumber: '03',
      title: 'Explore Forecasts & Evidence',
      summary:
        'Evaluate forward-looking baseline projections accompanied by document-based evidence and contextual market conditions.',
      verificationNote:
        'Predictive modeling and document retrieval modules are in development. Forecasts represent mathematical estimates, never certainties.',
    },
    {
      stepNumber: '04',
      title: 'Review Recommendations',
      summary:
        'Examine structured decision options with transparent reasoning, keeping human expertise firmly at the center of final business choices.',
      verificationNote:
        'Decision support system designed to assist human judgment. Leadership retains complete operational responsibility.',
    },
  ] as const satisfies readonly WorkflowStep[],

  // Section C: Core Capabilities (Verified Status)
  CAPABILITIES: [
    {
      id: 'cap-analytics',
      title: 'Business Performance Analytics',
      description:
        'Centralize essential business metrics, monitoring operational health indicators, revenue velocity, and margin trends across key timeframes.',
      status: 'In Development',
      statusBadge: 'In Development',
      detailList: [
        'Revenue trajectory and recurring performance indicators',
        'Multi-period variance tracking across business divisions',
        'Aggregated summaries designed for quick executive review',
      ],
    },
    {
      id: 'cap-forecasting',
      title: 'Sales Forecasting',
      description:
        'Apply time-series statistical models and trend extrapolation to outline baseline demand projections and historical seasonality cycles.',
      status: 'In Development',
      statusBadge: 'In Development',
      detailList: [
        'Seasonality-aware baseline demand modeling',
        'Configurable horizon ranges for quarterly planning',
        'Transparent confidence intervals accompanying projections',
      ],
    },
    {
      id: 'cap-finance',
      title: 'Financial Analysis',
      description:
        'Evaluate cost structures, cash flow signals, and operational expenditure trajectories to support disciplined fiscal planning.',
      status: 'In Development',
      statusBadge: 'In Development',
      detailList: [
        'Cash flow rhythm and burn rate trend tracking',
        'Expense categorization and anomaly detection',
        'Gross and operating margin visibility across segments',
      ],
    },
    {
      id: 'cap-inventory',
      title: 'Inventory & Demand Insights',
      description:
        'Analyze inventory turnover rates, historical stockout patterns, and reorder cycles to assist operational supply chain alignment.',
      status: 'Planned',
      statusBadge: 'Planned',
      detailList: [
        'Stock velocity and slow-moving inventory alerts',
        'Lead time awareness for reorder point estimation',
        'Demand surge simulation to mitigate supply bottlenecks',
      ],
    },
    {
      id: 'cap-xai',
      title: 'Explainable AI',
      description:
        'Demystify analytical outputs by breaking down feature importance, historical weightings, and the specific drivers behind each insight.',
      status: 'In Development',
      statusBadge: 'In Development',
      detailList: [
        'Visible factor weighting behind generated forecasts',
        'Clear attribution of historical data points influencing models',
        'Elimination of opaque black-box recommendations',
      ],
    },
    {
      id: 'cap-evidence',
      title: 'Evidence-Supported Recommendations',
      description:
        'Anchor recommendations in documented business context, connecting suggestions directly to source figures and operational documentation.',
      status: 'Planned',
      statusBadge: 'Planned',
      detailList: [
        'Semantic retrieval of supporting operational context',
        'Direct citation of input documents and data records',
        'Structured comparison of alternative strategic choices',
      ],
    },
  ] as const satisfies readonly CapabilityItem[],

  // Section D: Designed for Business Teams
  BUSINESS_TEAMS: [
    {
      id: 'team-sme',
      role: 'SME Owners & Executive Decision-Makers',
      focus: 'Cross-functional strategic clarity without data complexity',
      valueProposition:
        'Gain immediate situational awareness over company health, identifying both vulnerabilities and opportunities without waiting days for manual reporting.',
      keyActivities: [
        'Consolidated operational health dashboards',
        'Strategic decision modeling with transparent assumptions',
        'Clear visibility into growth barriers and cost pressures',
      ],
    },
    {
      id: 'team-finance',
      role: 'Finance & Accounting Teams',
      focus: 'Structured variance analysis and forward-looking budget support',
      valueProposition:
        'Equip finance teams with automated variance breakdowns and trend models that help refine cash runway assumptions and quarterly targets.',
      keyActivities: [
        'Cash runway trajectory and working capital trends',
        'Multi-variable scenario comparisons for budgeting',
        'Continuous monitoring of margin health and cost variances',
      ],
    },
    {
      id: 'team-sales',
      role: 'Sales & Demand Planning Leaders',
      focus: 'Seasonality-adjusted pipeline and demand trend exploration',
      valueProposition:
        'Understand historical booking patterns and market cycles to establish realistic sales targets and allocate pipeline resources effectively.',
      keyActivities: [
        'Historical pipeline velocity evaluation',
        'Product category demand rhythm identification',
        'Early trend deviation signals across customer segments',
      ],
    },
    {
      id: 'team-operations',
      role: 'Inventory & Operations Managers',
      focus: 'Stock turnover balance and fulfillment velocity',
      valueProposition:
        'Mitigate stockout risks and prevent dead-stock accumulation by connecting demand projections directly to inventory reorder schedules.',
      keyActivities: [
        'Inventory turnover rate analysis across SKUs',
        'Supplier lead-time buffer recommendations',
        'Fulfillment capacity bottleneck anticipation',
      ],
    },
  ] as const satisfies readonly BusinessTeamRole[],

  // Section E: Responsible AI Principles
  RESPONSIBLE_AI_PRINCIPLES: [
    {
      id: 'rai-estimates',
      title: 'Forecasts Are Estimates, Not Guarantees',
      description:
        'Predictive models analyze past trends and probabilistic distributions. They offer directional guidance, but cannot foresee exogenous shocks, sudden macroeconomic shifts, or black-swan market disruptions.',
      boundary:
        'All forecasts include confidence boundaries and should be evaluated as probabilistic scenarios rather than certain outcomes.',
    },
    {
      id: 'rai-causation',
      title: 'Explainability Clarifies Reasoning, Not Causation',
      description:
        'Our explainable AI modules reveal which input variables and historical signals exerted statistical influence on an output. However, statistical correlation does not inherently establish business causation.',
      boundary:
        'Explainability outputs serve to assist analytical interrogation, helping teams question and validate model assumptions.',
    },
    {
      id: 'rai-review',
      title: 'Evidence & Recommendations Require Human Review',
      description:
        'Recommendations generated by DeciNexusAI are structured decision prompts. They are designed to prompt human evaluation, highlight overlooked data points, and outline trade-offs.',
      boundary:
        'No business decisions or operational actions are executed autonomously without deliberate human verification.',
    },
    {
      id: 'rai-accountability',
      title: 'Final Business Decisions Remain With the User',
      description:
        'Software cannot replace the ethical, operational, and commercial accountability of business leadership. Final choices, risk assessments, and implementation decisions always rest with the responsible professional.',
      boundary:
        'DeciNexusAI functions strictly as an advisory intelligence layer, empowering leaders rather than supplanting their judgment.',
    },
  ] as const satisfies readonly ResponsibleAiPrinciple[],
} as const;
