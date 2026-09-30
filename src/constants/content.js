import {
  Brain,
  PenTool,
  Target,
  BarChart3,
  Zap,
  Globe,
  Search,
  Mail,
  Video,
  LineChart,
  ShieldCheck,
  Clock,
  Gift,
  RefreshCw,
} from 'lucide-react'

export const routes = {
  home: '/',
  privacy: '/privacy-policy.html',
  contact: '/contact.html',
}


/* ------------------------------------------------------------------ */
/*  Brand                                                              */
/* ------------------------------------------------------------------ */

export const BRAND = {
  name: 'Bosqen',
  tagline: 'AI-Driven Digital Marketing',
  email: 'support@bosqen.com',
  description:
    'Bosqen plans, launches, and optimizes marketing across every channel with an AI layer built by operators — so every rupee of your budget works harder, from day one.',
}

/** Pre-filled enquiry email link used for all CTAs. */
export const enquiryLink = (subject = 'General enquiry') =>
  `mailto:${BRAND.email}?subject=${encodeURIComponent(`[Bosqen] ${subject}`)}`

export const ENQUIRY = {
  trial: enquiryLink('Free trial enquiry'),
  demo: enquiryLink('Demo enquiry'),
  work: enquiryLink('Show me your work'),
  general: enquiryLink(),
}

/* ------------------------------------------------------------------ */
/*  Activity ticker (proof the machine is running)                     */
/* ------------------------------------------------------------------ */

export const ACTIVITY = {
  title: 'Live on the floor right now',
  items: [
    'Reallocating a ₹10 lakh/day budget across Meta & Google',
    'Generating 34 new ad variants for a DTC skincare launch',
    'A/B-testing 6 hooks for a SaaS onboarding email flow',
    'Shipping a CTV campaign plan for a fintech pilot',
    'Drafting weekly optimization digests for 3 accounts',
    'Monitoring 120+ campaigns across 9 ad platforms',
    'Compiling an ROAS forecast for a Series-A pitch',
  ],
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const HERO = {
  badge: 'Now accepting new campaigns',
  headlineLead: 'Your campaigns.',
  headlineAccent: 'Our AI.',
  headlineTail: 'Zero fluff.',
  description:
    'Bosqen plans, launches, and optimizes marketing across every channel with an AI layer built by operators — so every rupee of your budget works harder, from day one.',
  primaryCta: 'Start with a free trial',
  secondaryCta: 'See what we do',
  socialProof: {
    avatars: ['YT', 'YO', 'OP'],
    trustedPrefix: 'Built by operators from',
    trustedHighlight: 'top growth teams',
    trustedSuffix: '— now working for you',
  },
  dashboard: {
    title: 'console.bosqen.ai',
    kpis: [
      { label: 'Campaigns live', value: '126', delta: '+9 today' },
      { label: 'Variants tested', value: '1,340', delta: '+86 today' },
      { label: 'Budget optimized', value: '₹10 Cr', delta: '+₹34 lakh today' },
      { label: 'Avg. ROAS lift', value: '+38%', delta: 'rolling 30d' },
    ],
    chartLabel: 'Budget reallocation events',
    chartRange: 'Last 8 weeks',
    feedTitle: 'Happening now on the floor',
    feed: [
      { icon: Zap, text: 'Budget shifted to Meta Ads — ROAS +0.4x' },
      { icon: Target, text: 'New lookalike audience shipped to Google' },
      { icon: LineChart, text: 'Optimization digest sent to client team' },
    ],
    floaters: {
      roi: 'Optimizing budgets live',
      uptime: 'AI never sleeps',
    },
  },
}

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export const SERVICES = {
  eyebrow: 'What we do',
  heading: 'AI-driven digital marketing, end to end',
  subheading:
    'One AI layer for strategy, creative, targeting, and optimization — run by a team that treats your budget like its own.',
  items: [
    {
      icon: Brain,
      title: 'AI Campaign Strategy',
      copy: 'Describe your goal and Bosqen drafts audiences, budgets, channel mix, and creative briefs in seconds — not weeks.',
      tag: 'Planning',
    },
    {
      icon: PenTool,
      title: 'Generative Ad Creative',
      copy: 'On-brand copy and visuals for every channel, generated, variant-tested, and refreshed automatically.',
      tag: 'Creative',
    },
    {
      icon: Target,
      title: 'Precision Audiences',
      copy: 'Predictive segments surface high-intent buyers before your competitors even know they exist.',
      tag: 'Targeting',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      copy: 'One unified dashboard across every channel, with alerts the moment a metric moves.',
      tag: 'Insights',
    },
    {
      icon: Zap,
      title: 'Autonomous Optimization',
      copy: 'Budgets reallocate themselves toward what is working — 24 hours a day, across every campaign.',
      tag: 'Automation',
    },
    {
      icon: Globe,
      title: 'Omnichannel Orchestration',
      copy: 'Search, social, email, and CTV coordinated from a single AI layer that never drops the thread.',
      tag: 'Channels',
    },
    {
      icon: Search,
      title: 'AI Search & SEO',
      copy: 'Generative-engine optimization that keeps your brand visible in Google AI Overviews, ChatGPT, and beyond.',
      tag: 'Organic',
    },
    {
      icon: Mail,
      title: 'Lifecycle Email & CRM',
      copy: 'AI-written journeys that adapt to every subscriber — welcome flows, win-backs, and upsells on autopilot.',
      tag: 'Retention',
    },
    {
      icon: Video,
      title: 'Short-Form Video Ads',
      copy: 'Scroll-stopping video variants generated and tested weekly for Reels, Shorts, and TikTok.',
      tag: 'Video',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  How it works                                                       */
/* ------------------------------------------------------------------ */

export const STEPS = {
  eyebrow: 'How it works',
  heading: 'From first email to live campaigns in days',
  items: [
    {
      number: '01',
      title: 'Tell us about your goals',
      copy: 'Email support@bosqen.com. We map your funnel, channels, and targets in a free discovery call — usually within 24 hours.',
    },
    {
      number: '02',
      title: 'We build your AI plan',
      copy: 'Bosqen assembles audiences, budgets, and creative. You approve everything from one shared dashboard — full transparency.',
    },
    {
      number: '03',
      title: 'The AI optimizes 24/7',
      copy: 'Campaigns launch, test, and reallocate spend around the clock. You get a plain-English log of every decision, every week.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  Why Bosqen (trust band)                                            */
/* ------------------------------------------------------------------ */

export const WHY = {
  eyebrow: 'Why Bosqen',
  heading: 'Hold us to a higher standard.',
  subheading:
    'Every engagement comes with commitments you can verify — before you spend a rupee.',
  items: [
    {
      icon: Clock,
      title: '24-hour reply, guaranteed',
      copy: 'Every enquiry gets a human answer within one business day — not an autoresponder, a real plan of next steps.',
    },
    {
      icon: RefreshCw,
      title: 'Weekly proof, always',
      copy: 'A digest of every change the AI made and every result it moved. If we ever go quiet, ask — the log is yours.',
    },
    {
      icon: ShieldCheck,
      title: 'Your accounts, your data',
      copy: 'Campaigns run inside your ad accounts via secure OAuth. You can revoke access at any time and keep everything.',
    },
  ],
}


/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const FAQS = {
  eyebrow: 'FAQ',
  heading: 'Fair questions, straight answers',
  items: [
    {
      q: 'How do you prove results before we commit?',
      a: 'We start with a pilot: campaigns run inside your own ad accounts, so your money never passes through us; you get a weekly log of every change and result; and the budget stays under your control until you decide to scale.',
    },
    {
      q: 'How do I get started with Bosqen?',
      a: 'Email support@bosqen.com or use any “Enquire” button on this page. We reply within one business day, run a free discovery call, and tailor a package — there is no self-serve sign-up or login.',
    },
    {
      q: 'How does Bosqen actually use AI?',
      a: 'Bosqen combines generative models for creative with predictive models for budgeting. It plans campaigns, drafts variants, forecasts results, and reallocates spend in real time — always within guardrails you approve.',
    },
    {
      q: 'Do I need to change my existing ad accounts?',
      a: 'No. Bosqen connects to the ad accounts and tools you already use — Google, Meta, LinkedIn, TikTok, HubSpot, and more — through secure OAuth. Nothing needs to be rebuilt or migrated.',
    },
    {
      q: 'What happens if we stop?',
      a: 'Everything stays yours: the accounts, the data, the creative, the audience definitions. Access is OAuth-based, so you can revoke it with one click and walk away with the full history.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  Contact / CTA                                                      */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  eyebrow: 'Get started',
  heading: 'Let’s make your budget work harder',
  subheading:
    'Email us today — we reply within 24 hours with a concrete next step, not a sales script.',
  primaryCta: 'Email support@bosqen.com',
  secondaryCta: 'Ask for our work samples',
  assurances: [
    { icon: Clock, label: 'Reply within 24 hours' },
    { icon: Gift, label: 'Free discovery call & pilot plan' },
    { icon: ShieldCheck, label: 'No commitment until you approve' },
  ],
}

/* ------------------------------------------------------------------ */
/*  Privacy policy                                                     */
/* ------------------------------------------------------------------ */

export const PRIVACY = {
  lastUpdated: 'September 30, 2026',
  contactLine: `Questions about this policy? Email ${BRAND.email} and a human replies within one business day.`,
  intro:
    'This policy explains what information Bosqen collects when you use our website or any of our products and services — including those we launch in the future — how we use it, and the choices you have. We designed it to be readable — no walls of legalese.',
  sections: [
    {
      id: 'data-we-collect',
      title: '1. Data we collect',
      body: [
        {
          heading: 'Information you give us',
          text: 'Enquiry and contact-form details (name, business name, email, phone, and anything you tell us about your business), plus any information you share during discovery calls or onboarding.',
        },
        {
          heading: 'Information processed by our products',
          text: 'Depending on which Bosqen product or service you use, this may include account details, business data (such as transaction records, catalogue, inventory, or campaign data), and configuration needed to run that product for your business. Product-specific details are provided in the relevant product terms.',
        },
        {
          heading: 'Information collected automatically',
          text: 'Device and browser details, IP address, and basic usage analytics (pages viewed, features used) so we can keep the service fast and secure.',
        },
      ],
    },
    {
      id: 'how-we-use-data',
      title: '2. How we use data',
      body: [
        {
          heading: 'Purpose limitation',
          text: 'We use your data only to provide and support the service: operating our products, answering enquiries, billing, and improving reliability.',
        },
        {
          heading: 'No sale of data, ever',
          text: 'We do not sell, rent, or trade personal data. We do not use your business or customer data to train third-party AI models without explicit opt-in.',
        },
        {
          heading: 'Legitimate interests',
          text: 'Where we rely on legitimate interests (e.g. fraud prevention, service security), we balance those interests against your rights and document that assessment.',
        },
      ],
    },
    {
      id: 'legal-bases',
      title: '3. Legal bases for processing',
      body: [
        {
          heading: 'Contract',
          text: 'Processing needed to deliver the product or service you signed up for — running the features you use and producing the reports they generate.',
        },
        {
          heading: 'Consent',
          text: 'Optional things like marketing emails or product-feedback programmes, which you can withdraw at any time.',
        },
        {
          heading: 'Legal obligation',
          text: 'Retaining invoices and transaction records where tax, accounting, or law requires it.',
        },
      ],
    },
    {
      id: 'sharing',
      title: '4. Sharing & subprocessors',
      body: [
        {
          heading: 'Who we share with',
          text: 'Only vetted subprocessors needed to run the service — e.g. cloud hosting, payment processing, email delivery, and error monitoring. Each is bound by data-processing agreements.',
        },
        {
          heading: 'Never for their marketing',
          text: 'Subprocessors may use data only to deliver their function for us, never to market their own or others’ products.',
        },
        {
          heading: 'Disclosure by law',
          text: 'We disclose data only when legally compelled, and we notify you unless legally prohibited from doing so.',
        },
      ],
    },
    {
      id: 'retention-security',
      title: '5. Retention & security',
      body: [
        {
          heading: 'Retention',
          text: 'We keep personal data only as long as needed for the purposes above. Transaction and accounting records are retained for the statutory period; enquiry data is deleted after 24 months of inactivity.',
        },
        {
          heading: 'Security',
          text: 'Encryption in transit (TLS) and at rest, role-based access control, audit logging, and least-privilege access for staff. Access to customer data is logged and reviewed.',
        },
        {
          heading: 'Breach response',
          text: 'If a breach affects your data, we will notify you and the relevant regulator within the timelines required by law, with a plain-English account of what happened.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: '6. Your rights',
      body: [
        {
          heading: 'Access, correction, deletion',
          text: 'You can request a copy of your data, ask us to correct it, or ask us to delete it where law allows.',
        },
        {
          heading: 'Portability & objection',
          text: 'You can export your business data at any time from the product you use, and object to processing based on legitimate interests.',
        },
        {
          heading: 'Non-discrimination',
          text: 'We will never degrade your service for exercising privacy rights — including CCPA/CPRA opt-outs and GDPR requests.',
        },
        {
          heading: 'How to exercise rights',
          text: `Email ${BRAND.email} with the subject “Privacy request”. We verify your identity and respond within 30 days.`,
        },
      ],
    },
    {
      id: 'cookies',
      title: '7. Cookies & tracking',
      body: [
        {
          heading: 'Strictly necessary only, by default',
          text: 'The public website uses no tracking cookies. Our products use only cookies required for sign-in and security.',
        },
        {
          heading: 'Opt-in for everything else',
          text: 'If we ever add analytics or advertising cookies, we will ask first, honour your choice, and provide a persistent opt-out.',
        },
      ],
    },
    {
      id: 'children',
      title: '8. Children & employees',
      body: [
        {
          heading: 'Children',
          text: 'The service is not directed at children under 16, and we do not knowingly collect their data. If you believe a child’s data reached us, we will delete it promptly.',
        },
        {
          heading: 'Your staff and customers',
          text: 'If you use a Bosqen product that processes your staff or customer data on your behalf, you remain the controller of that data; we act as processor and honour your instructions. You must provide your own notices to them.',
        },
        {
          heading: 'Employee data',
          text: 'We collect employee data only for workforce administration, and never use it for targeted advertising.',
        },
      ],
    },
    {
      id: 'international',
      title: '9. International transfers',
      body: [
        {
          heading: 'Where data lives',
          text: 'Primary data hosting is in the EU (with regional options available). Where data crosses borders, we use recognised safeguards such as Standard Contractual Clauses.',
        },
      ],
    },
    {
      id: 'changes',
      title: '10. Changes, contact & complaints',
      body: [
        {
          heading: 'Changes to this policy',
          text: 'If we make material changes, we will notify registered customers by email at least 30 days before they take effect, and post the new policy here with a new “last updated” date.',
        },
        {
          heading: 'Contact',
          text: `Bosqen — ${BRAND.email}. Written complaints: address available on request.`,
        },
        {
          heading: 'Complaints',
          text: 'You may complain to your local data-protection authority at any time; we would appreciate the chance to resolve it with you first.',
        },
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  Enquiry / demo-request form page                                   */
/* ------------------------------------------------------------------ */

export const ENQUIRY_FORM = {
  eyebrow: 'Get started',
  heading: 'Tell us about your business',
  subheading:
    'A real person replies within one business day with next steps for piloting Bosqen in your business — no obligation.',
  assurances: [
    { icon: Clock, label: 'Reply within 24 hours' },
    { icon: Gift, label: 'Free pilot plan, no commitment' },
    { icon: ShieldCheck, label: 'Your data stays yours' },
  ],
  form: {
    name: 'Full name',
    businessName: 'Business name (optional)',
    email: 'Work email',
    phone: 'Phone',
    message: 'Anything else we should know? (optional)',
    messagePlaceholder: 'Tell us about your goals, timelines, or anything else relevant…',
    consent: 'I agree to the Privacy Policy and to being contacted about my enquiry.',
    submit: 'Send enquiry',
    submitting: 'Sending…',
    successTitle: 'Enquiry received — thank you!',
    successBody:
      'We have logged your details and a member of the team will reply within one business day. In the meantime, you can explore the site or read our Privacy Policy.',
    errorBody: 'Something went wrong sending your enquiry. Please email us directly — we will still reply within 24 hours.',
    privacyError: 'Please accept the Privacy Policy so we can reply to you.',
  },
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export const FOOTER = {
  blurb:
    'The AI layer for digital marketing — plan, launch, and optimize every campaign from one place. Now with a full point-of-sale platform.',
  contactLabel: 'Contact',
  copyright: `© ${new Date().getFullYear()} Bosqen. All rights reserved.`,
  legal: ['Privacy Policy'],
  services: [
    'AI Campaign Strategy',
    'Generative Creative',
    'Precision Audiences',
    'Autonomous Optimization',
  ],
}
