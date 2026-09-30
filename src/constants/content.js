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
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export const FOOTER = {
  blurb:
    'The AI layer for digital marketing — plan, launch, and optimize every campaign from one place.',
  contactLabel: 'Contact',
  copyright: `© ${new Date().getFullYear()} Bosqen. All rights reserved.`,
  legal: ['Privacy', 'Terms', 'Cookies'],
  services: [
    'AI Campaign Strategy',
    'Generative Creative',
    'Precision Audiences',
    'Autonomous Optimization',
  ],
}
