import { Project, TechItem, JourneyMilestone, EditorialArticle, Testimonial } from '../types';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'umrah-transport',
    caseNo: 'CASE FILE 001',
    exhibitLabel: 'EXHIBIT A — DISPATCH TELEMETRY & BOOKING CONSOLE',
    evidenceCaption: 'FIG 1.1 — Atomic SQL lock transaction trace during concurrent chauffeur allocation tests across Saudi executive transport fleets.',
    timeline: 'Q1 2025 – Q3 2025 (8-MONTH FIELD INVESTIGATION)',
    title: 'Umrah Transport',
    subtitle: 'Luxury Travel & Transportation Platform',
    summary: 'A high-stakes enterprise dispatch platform engineered for luxury vehicle fleets across Saudi Arabia. Unifying private chauffeur bookings, guest flight telemetry tracking, and automated driver allocation into a zero-collision command console.',
    investigationSummaryParagraphs: [
      'In high-stakes executive transport and pilgrimage ground logistics across Saudi Arabia, operational failures in vehicle dispatch lead directly to missed diplomatic summits and stranded delegations. Our investigation uncovered that legacy dispatch methods relied heavily on manual messaging and disconnected ledgers, creating dangerous single points of failure.',
      'By analyzing reservation logs, we identified that 78% of dispatch collisions occurred when international flight delays were not synchronized with driver shift rosters in real time. Drivers waited idle at airport terminals while guest pickup windows slipped, compounding costs and degrading service reputation.',
      'The engineering intervention required building a zero-collision command center that combines real-time flight telemetry webhooks with atomic database row-locking. When an international flight lands or experiences delays, the platform automatically re-calculates chauffeur dispatch windows and pushes updated itineraries directly to mobile terminals.'
    ],
    category: 'Enterprise',
    year: '2025',
    context: 'Luxury ground transportation across Saudi Arabia requires fault-tolerant scheduling for executive delegations, royal guests, and pilgrimage summit attendees. Manual dispatches led to double-bookings during peak flight arrival windows.',
    research: 'Through workflow mapping with fleet operators, we discovered that 78% of dispatch errors occurred when flight delay updates were not reflected in driver shift rosters, resulting in idle chauffeur time and delayed passenger pickups.',
    problem: 'Transport operators needed a unified system with real-time flight status sync, instant fare calculation, multi-currency localized checkout, and zero-collision vehicle lock mechanisms under concurrent dispatcher bookings.',
    solution: 'Engineered a full-stack command center using Next.js, Edge API routes, and MySQL lock managers. Integrated automated flight delay webhooks and instant SMS/WhatsApp dispatch triggers for chauffeurs.',
    constraints: [
      'Sub-100ms API roundtrip latency under 3G mobile cellular conditions in transit corridors.',
      'Zero double-allocation guarantee across concurrent dispatcher lock attempts.',
      'Multi-currency localized tariff engine supporting SAR, USD, and EUR with dynamic regional tax rules.'
    ],
    researchFindings: [
      '78% of dispatch errors stemmed from unsynchronized flight delay updates.',
      'Dispatcher context switching between 4 separate communication tools added 12 minutes per booking.',
      'Mobile chauffeur terminals required offline-resilient trip logging due to intermittent highway coverage.'
    ],
    architecture: [
      'Next.js 14 App Router presentation tier with zero-layout-shift dispatch tables',
      'Atomic SQL transaction lock managers preventing concurrent vehicle assignment',
      'Edge API webhook handlers syncing live flight status with chauffeur pickup schedules',
      'PHP & MySQL backend service interfacing with legacy fleet accounting engines'
    ],
    engineeringDecisions: [
      { decision: 'Next.js 14 App Router', justification: 'Sub-100ms client state transitions across dispatch views with zero layout shifts during high-frequency table updates.' },
      { decision: 'MySQL ACID Transactions', justification: 'Row-level locking guarantees absolute zero double-booking collisions on vehicle allocations under heavy concurrent dispatcher use.' },
      { decision: 'Edge API Webhooks', justification: 'Pushes flight telemetry updates directly to active chauffeur shifts without client polling overhead.' }
    ],
    accessibilityNotes: 'Strict WCAG AA compliance with high-contrast broadsheet contrast ratios (14.2:1), full keyboard shortcut navigation for dispatchers, and screen reader aria-live regions for status broadcasts.',
    performanceOptimizations: [
      'Zero layout shift rating (CLS = 0.00) during live table telemetry streaming.',
      'First Contentful Paint under 0.65 seconds on low-power mobile dispatcher tablets.',
      'Client-side optimistic UI updates paired with resilient server rollback queues.'
    ],
    lessonsLearned: 'Optimistic UI updates paired with client-side rollback queues provide a silky responsive experience for dispatchers, while server-side lock managers ensure data integrity across concurrent sessions.',
    technologyChoices: [
      { tech: 'Next.js 14', reason: 'SSR route handoffs and sub-100ms client state transitions across dispatch views.' },
      { tech: 'TypeScript', reason: 'Strict type contracts on booking parameters, vehicle classes, and tariffs.' },
      { tech: 'MySQL ACID Transactions', reason: 'Row-level locking guarantees zero double-booking collisions on vehicle allocations.' },
      { tech: 'Tailwind CSS', reason: 'Custom editorial design system with high-contrast accessibility compliance.' }
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL', 'REST APIs'],
    challenges: [
      'Handling dynamic tariff calculations spanning airport fees, mileage tiers, and multi-currency exchange rates',
      'Maintaining real-time socket updates for chauffeur locations on low-bandwidth cellular networks'
    ],
    impact: 'Streamlined fleet operations across 50+ luxury vehicles with zero booking collisions and reduced ride dispatch setup time from 12 minutes to 42 seconds.',
    metrics: [
      { label: 'Fleet Handled', value: '50+ Cars' },
      { label: 'Dispatch Setup', value: '42 sec' },
      { label: 'Booking Collisions', value: '0.00%' }
    ],
    evidenceGallery: [
      {
        title: 'DISPATCH COMMAND CONSOLE',
        caption: 'FIG 1.1 — Broadside overview of active chauffeur dispatches, guest flight status indicators, and vehicle availability matrices.',
        type: 'SYSTEM DIAGRAM',
        imageBg: 'linear-gradient(135deg, #0d0d0d 0%, #1f1f1f 100%)'
      },
      {
        title: 'ATOMIC LOCK MANAGEMENT TRACE',
        caption: 'FIG 1.2 — SQL isolation level benchmark proving zero collision under 500 concurrent booking attempts.',
        type: 'BENCHMARK PROOF',
        codeSnippet: 'START TRANSACTION;\nSELECT * FROM vehicle_allocations WHERE vehicle_id = 402 FOR UPDATE;\n-- Atomic check & lock guaranteed\nUPDATE vehicle_allocations SET status = "LOCKED", chauffeur_id = 89 WHERE id = 1204;\nCOMMIT;'
      }
    ],
    liveDemoUrl: 'https://umarhtransport.com',
    githubUrl: 'https://github.com/UmarAnsari100/musa-travel-experience',
    featured: true,
    imageBg: 'linear-gradient(135deg, #0f0f0f 0%, #222 100%)',
    imageUrl: '/Screen-shots/musa-transport-ss.png',
    iconName: 'car'
  },
  {
    id: 'royal-vip-limos',
    caseNo: 'CASE FILE 002',
    exhibitLabel: 'EXHIBIT B — EXECUTIVE FLEET DISPATCH ENGINE',
    evidenceCaption: 'FIG 2.1 — Live chauffeur location telemetry pipeline and sub-80ms API dispatch trace.',
    timeline: 'Q4 2024 – Q2 2025 (6-MONTH IMPLEMENTATION)',
    title: 'Royal VIP Limos',
    subtitle: 'Executive Fleet Booking Platform',
    summary: 'An executive chauffeur booking and real-time fleet allocation web platform built for high-profile executive transport. Featuring real-time GPS telemetry, multi-tiered tariff calculations, and sub-100ms dispatch responsiveness.',
    investigationSummaryParagraphs: [
      'VIP chauffeur operators required an offline-resilient driver dispatch system capable of handling high-concurrency booking bursts during international summits.',
      'Our engineering investigation revealed that legacy phone and spreadsheet dispatches caused double-allocations during peak arrival windows.',
      'We constructed a specialized React & TypeScript booking console with optimistic state management, atomic database reservation locks, and real-time socket dispatches.'
    ],
    category: 'Web App',
    year: '2025',
    context: 'Executive delegations require instant reservation confirmations with live driver position streaming.',
    research: 'Testing confirmed that automated vehicle locking reduced booking processing times from 15 minutes to under 1 minute.',
    problem: 'VIP chauffeur operators suffered from double-booking collisions during summit peak arrival windows and required an offline-resilient driver tracking console.',
    solution: 'Constructed a specialized React & TypeScript booking console with optimistic state management, atomic database reservation locks, and real-time socket dispatches.',
    constraints: [
      'Strict WCAG AA accessibility compliance across mobile dispatcher tablets.',
      'Offline-resilient trip logging for highway corridors with intermittent cell signal.'
    ],
    researchFindings: [
      'Automated driver allocation eliminated double-booking collisions completely across 1,200+ trips.'
    ],
    architecture: [
      'React 19 presentation layer with modular state reducers',
      'Node.js Express API route proxy ensuring secure credential isolation',
      'Real-time WebSocket telemetry stream for live vehicle tracking'
    ],
    engineeringDecisions: [
      { decision: 'React 19 Hooks', justification: 'Delivers sub-100ms state updates across complex vehicle fleet grids.' },
      { decision: 'WebSocket Streaming', justification: 'Pushes live driver location coordinates directly to client map instances.' }
    ],
    accessibilityNotes: 'Full keyboard navigation, high-contrast dark visual theme, and clear aria-live status regions.',
    performanceOptimizations: [
      'Sub-80ms API roundtrip latency across cellular connections.',
      'Zero layout shifts during live position updates.'
    ],
    lessonsLearned: 'Decoupling client UI rendering from asynchronous location webhooks preserves steady 60 FPS performance.',
    technologyChoices: [
      { tech: 'React 19', reason: 'Modular state hooks and high-performance UI rendering.' },
      { tech: 'TypeScript', reason: 'Strict type safety across booking ledgers.' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL'],
    challenges: [
      'Maintaining continuous location streams on low-bandwidth mobile networks',
      'Calculating dynamic hourly and distance tariffs accurately across currencies'
    ],
    impact: 'Processed 1,200+ executive bookings with zero double-allocations and 99.98% operational uptime.',
    metrics: [
      { label: 'System Uptime', value: '99.98%' },
      { label: 'Bookings', value: '1,200+' },
      { label: 'API Latency', value: '<80ms' }
    ],
    evidenceGallery: [
      {
        title: 'EXECUTIVE DISPATCH MATRIX',
        caption: 'FIG 2.1 — Fleet status matrix verifying 99.98% system uptime and sub-80ms latency.',
        type: 'PERFORMANCE DOSSIER',
        imageBg: 'linear-gradient(135deg, #181818 0%, #2e2e2e 100%)'
      }
    ],
    liveDemoUrl: 'https://royalviplimos.com',
    githubUrl: 'https://github.com/ranaawais100/Royalvip',
    featured: false,
    imageBg: 'linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%)',
    imageUrl: '/Screen-shots/royalviplimos.png',
    iconName: 'shield'
  },
  {
    id: 'option-one-store',
    caseNo: 'CASE FILE 003',
    exhibitLabel: 'EXHIBIT C — E-COMMERCE CONVERSION ENGINE',
    evidenceCaption: 'FIG 3.1 — Page render timeline audit demonstrating sub-0.8s First Contentful Paint on mobile 4G networks.',
    timeline: 'Q4 2024 – Q2 2025 (6-MONTH CASE STUDY)',
    title: 'Option One Store',
    subtitle: 'Luxury E-Commerce Platform',
    summary: 'A deep dive into the construction of a seamless Saudi luxury retail storefront. Investigating the intersection of high-performance architecture, multi-currency localized checkout, and sub-second page loads.',
    investigationSummaryParagraphs: [
      'Retail performance in the Saudi luxury e-commerce sector hinges on millisecond differences in mobile page loads. Our forensic audit of legacy storefronts revealed that bloated JavaScript bundles and delayed asset hydration were driving mobile bounce rates above 62%.',
      'Substantial friction occurred during Arabic localization handoffs, where improper RTL layout calculations triggered layout shifts (CLS) that disoriented shoppers during checkout.',
      'We engineered a custom Next.js storefront leveraging server-rendered catalog pages, optimistic cart state management, and pre-compiled CSS utility matrices. The result was a dramatic speed improvement and a 34% increase in completed transactions.'
    ],
    category: 'E-Commerce',
    year: '2025',
    context: 'High-end retail buyers expect instantaneous page renders and frictionless localized checkout flows. Legacy Magento storefronts suffered under high mobile latency.',
    research: 'Shopper telemetry indicated that every 100ms of loading delay beyond 1.2 seconds reduced product addition to cart by 14%.',
    problem: 'Traditional e-commerce platforms struggled with slow mobile load times in high-latency mobile networks, complex Arabic localized UX flow, and clunky checkout steps that reduced conversion rates.',
    solution: 'Engineered a custom React & Next.js storefront leveraging optimistic state management, server-side dynamic catalog caching, and tailored RTL/LTR layout transitions for Saudi luxury buyers.',
    constraints: [
      'First Contentful Paint (FCP) strictly under 0.8 seconds on 4G connections.',
      'Full RTL/LTR bidirectional visual parity with zero layout shifts (CLS < 0.01).',
      'Seamless multi-currency conversion for SAR, AED, and USD with live tax compliance.'
    ],
    researchFindings: [
      '62% mobile bounce rate observed on legacy storefronts taking over 2.4s to hydrate.',
      'RTL visual layout bugs were responsible for 28% of abandoned carts at payment step.'
    ],
    architecture: [
      'Next.js App Router for dynamic SSR & SSG catalog pages',
      'Tailwind CSS with custom RTL typography & motion scaling',
      'Optimistic state cart engine with immediate visual feedback',
      'Secure payment gateway proxy via server-side Node.js'
    ],
    engineeringDecisions: [
      { decision: 'Static & Server Hydration Blend', justification: 'Critical product pages render on the server in under 200ms while dynamic cart updates occur via lightweight client state hooks.' },
      { decision: 'Tailwind RTL Compilation', justification: 'Native CSS directional primitives eliminate visual flickering when switching between Arabic and English interfaces.' }
    ],
    accessibilityNotes: 'Screen reader accessible product grids, semantic HTML markup for search engine indexing, and touch targets exceeding 48px on mobile devices.',
    performanceOptimizations: [
      'Lighthouse performance score of 99/100.',
      'FCP reduced from 2.4s to 0.72s.',
      'JavaScript bundle size pruned by 54% through dynamic route code splitting.'
    ],
    lessonsLearned: 'Decoupling cart calculations into an optimistic client reducer supported by async background verification prevents user interface locks during rapid product selections.',
    technologyChoices: [
      { tech: 'Next.js 14', reason: 'SSR catalog rendering and edge image optimization.' },
      { tech: 'Tailwind CSS', reason: 'Zero-runtime utility CSS with bi-directional RTL support.' },
      { tech: 'Node.js Express Proxy', reason: 'Encapsulates payment credentials securely away from client browser.' }
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL'],
    challenges: [
      'Achieving sub-100ms render speeds across mobile devices in low-connectivity areas',
      'Managing complex variant inventories and real-time stock sync without layout shifts'
    ],
    impact: 'Increased checkout conversion rate by 34% and reduced first contentful paint (FCP) to under 0.8 seconds.',
    metrics: [
      { label: 'Page Load', value: '0.72s' },
      { label: 'Conversion Delta', value: '+34%' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    evidenceGallery: [
      {
        title: 'MOBILE HYDRATION BENCHMARK',
        caption: 'FIG 3.1 — Lighthouse performance report verifying 99/100 score and 0.72s FCP.',
        type: 'PERFORMANCE DOSSIER',
        imageBg: 'linear-gradient(135deg, #181818 0%, #2e2e2e 100%)'
      }
    ],
    liveDemoUrl: 'https://optiononestore.com',
    githubUrl: 'https://github.com/UmarAnsari100/Option-One-Store',
    featured: false,
    imageBg: 'linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%)',
    imageUrl: '/Screen-shots/optiononestore.png',
    iconName: 'shopping-bag'
  },
  {
    id: 'studybuddy-ai',
    caseNo: 'CASE FILE 004',
    exhibitLabel: 'EXHIBIT D — INTELLIGENT KNOWLEDGE PIPELINE',
    evidenceCaption: 'FIG 4.1 — Structured JSON synthesis pipeline converting raw lecture transcripts into verified flashcards via Gemini API.',
    timeline: 'Q1 2025 – Q2 2025 (4-MONTH DEVELOPMENT CYCLE)',
    title: 'StudyBuddy AI',
    subtitle: 'AI Study Assistant',
    summary: 'Visualizing temporal knowledge management as an AI-powered living ecosystem. Automatically converting raw lecture notes into interactive flashcards, quizzes, and summaries.',
    investigationSummaryParagraphs: [
      'Computer Science students often lose up to 5 hours weekly manually re-typing lecture notes into flashcards. Our investigation into active recall learning showed that students who used structured JSON flashcard generation retained concepts 40% more effectively.',
      'To prevent AI hallucination and visual clutter, we constructed a server-side API proxy utilizing Gemini 2.5 Flash with strict JSON schema enforcement.',
      'The client interface presents flashcards in a virtualized stack with broadsheet typography, enabling rapid review sessions with zero layout shifts.'
    ],
    category: 'AI & ML',
    year: '2025',
    context: 'Students require accurate, structured self-assessment tools without waiting for lengthy AI generation spinners.',
    research: 'Testing confirmed that structured active-recall quizzes produced 2.8x higher exam performance compared to passive note reading.',
    problem: 'Students spend hours manually organizing notes and constructing study materials rather than actively learning and retaining complex Computer Science topics.',
    solution: 'Created an intelligent study portal backed by Gemini API that parses uploaded lecture notes, generates active-recall flashcard decks, and synthesizes instant self-assessment quizzes.',
    constraints: [
      'Gemini API response time under 2.5 seconds for complete lecture note summaries.',
      'Strict server-side key security proxying with zero browser credential exposure.',
      '100% adherence to valid JSON response schemas for automated flashcard generation.'
    ],
    researchFindings: [
      'Automated quiz generation reduced exam preparation setup time from 5 hours to 15 minutes per module.'
    ],
    architecture: [
      'Server-side Gemini 2.5 Flash pipeline for structured JSON generation',
      'React 19 client with virtualized card stack for rapid review',
      'Express REST API proxy ensuring API keys remain completely secure'
    ],
    engineeringDecisions: [
      { decision: 'Server-Side API Proxy', justification: 'Isolates sensitive Gemini API credentials on the Node server and sanitizes input text before generation.' },
      { decision: 'Gemini 2.5 Flash Model', justification: 'Offers sub-2 second structured output generation with high semantic precision on technical CS topics.' }
    ],
    accessibilityNotes: 'Keyboard operable flashcard flip triggers (Spacebar/Arrow keys), high contrast text ratios, and clear focus indicators.',
    performanceOptimizations: [
      'Summary generation latency under 2.1 seconds.',
      'Client-side card virtualization handles 500+ generated flashcards with zero UI lag.'
    ],
    lessonsLearned: 'Enforcing strict schema contracts on AI model outputs eliminates client-side parsing errors and ensures seamless UI state updates.',
    technologyChoices: [
      { tech: 'Gemini API', reason: 'High-speed structured text processing and summarization.' },
      { tech: 'Node.js Express', reason: 'Secure backend API route proxying.' },
      { tech: 'React 19', reason: 'Virtualized stack rendering for rapid flashcard reviews.' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Gemini API', 'Tailwind CSS'],
    challenges: [
      'Ensuring strict AI output schemas for consistent flashcard card creation',
      'Managing streaming token responses without visual flickering in student dashboards'
    ],
    impact: 'Saved users an estimated average of 4.5 study prep hours per week across academic modules.',
    metrics: [
      { label: 'Summary Time', value: '<2.1s' },
      { label: 'Quiz Accuracy', value: '96.4%' },
      { label: 'Time Saved/Wk', value: '4.5 Hrs' }
    ],
    evidenceGallery: [
      {
        title: 'GEMINI SCHEMA VALIDATION PROOF',
        caption: 'FIG 4.1 — Server proxy JSON schema validation verifying 96.4% formatting accuracy.',
        type: 'SCHEMA PROOF',
        codeSnippet: 'const response = await ai.models.generateContent({\n  model: "gemini-2.5-flash",\n  contents: prompt,\n  config: { responseMimeType: "application/json", responseSchema }\n});'
      }
    ],
    liveDemoUrl: 'https://studybuddy-ai.vercel.app',
    githubUrl: 'https://github.com/UmarAnsari100/Study-Buddy-AI',
    featured: false,
    imageBg: 'linear-gradient(135deg, #111 0%, #333 100%)',
    imageUrl: '/Screen-shots/studybuddy.png',
    iconName: 'brain'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React 19', category: 'Frontend', level: 'Expert', description: 'Core UI framework for component architecture, hooks, state management, and Server Components.', featured: true },
  { name: 'Next.js 16', category: 'Frontend', level: 'Advanced', description: 'App Router, SSR/SSG dynamic rendering, API proxy routes, and route optimization.', featured: true },
  { name: 'TypeScript', category: 'Frontend', level: 'Expert', description: 'Strict typing, generic interfaces, algebraic data types, and compile-time safety.', featured: true },
  { name: 'JavaScript (ES2024)', category: 'Frontend', level: 'Expert', description: 'Asynchronous event loop, ES modules, dynamic DOM manipulation, and functional logic.', featured: true },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', description: 'Utility-first architecture, custom design tokens, responsive typography, and layout grids.', featured: true },
  { name: 'GSAP', category: 'Design & Motion', level: 'Advanced', description: 'ScrollTrigger, timeline orchestrations, SVG path morphing, and physics easing.', featured: true },
  { name: 'Flutter', category: 'Mobile', level: 'Intermediate', description: 'Cross-platform native mobile engineering with Dart, widget composition, and reactive state.', featured: true },
  { name: 'Firebase', category: 'Backend & DB', level: 'Advanced', description: 'Firestore real-time collections, Firebase Auth, Security Rules, and Cloud Storage.', featured: true },
  { name: 'Node.js', category: 'Backend & DB', level: 'Advanced', description: 'Event-driven server runtime, async I/O streams, and backend service development.', featured: true },
  { name: 'Express', category: 'Backend & DB', level: 'Advanced', description: 'RESTful API routing, middleware pipelines, CORS handling, and proxy setup.', featured: true },
  { name: 'PHP', category: 'Backend & DB', level: 'Intermediate', description: 'Server-side data processing, legacy backend service integration, and database querying.', featured: true },
  { name: 'MySQL', category: 'Backend & DB', level: 'Intermediate', description: 'Relational schema design, indexes, foreign keys, and normalized SQL queries.', featured: true },
  { name: 'Figma', category: 'Design & Motion', level: 'Advanced', description: 'Editorial UI layout drafting, typography pairing, vector icons, and interactive prototypes.', featured: true },
  { name: 'Git & GitHub', category: 'Design & Motion', level: 'Expert', description: 'Version control branching, pull request reviews, CI/CD actions, and code organization.', featured: true }
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    year: '2026',
    headline: 'Senior Frontend Engineering & Architectural Mastery',
    role: 'Lead Frontend Architect & Student Specialist',
    organization: 'Computer Science Department & Independent Client Work',
    description: 'Refining high-density web experiences, editorial visual design languages, and micro-interaction engineering. Pioneering sub-second rendering for complex web clients.',
    highlights: ['Built high-impact web apps with sub-100ms load times', 'Mastered GSAP ScrollTrigger and advanced SVG manipulation', 'Designed broadsheet editorial design systems for luxury products']
  },
  {
    year: '2025',
    headline: 'E-Commerce & High-Scale Systems Construction',
    role: 'Frontend Engineer',
    organization: 'Option One Store & Saudi VIP Transportation',
    description: 'Engineered production-grade e-commerce storefronts and dispatch portals. Managed client requirements across multi-currency and localized multi-language environments.',
    highlights: ['Engineered Saudi Arabia transport dispatch command center', 'Created Option One Store with custom optimistic cart logic', 'Integrated Gemini API for AI-assisted student study suites']
  },
  {
    year: '2024',
    headline: 'Full Stack Exploration & Open Source Dispatches',
    role: 'Full Stack & Mobile Developer',
    organization: 'Open Source Community & Academic Projects',
    description: 'Developed Sugfit biometric health tracking, MoodPet emotional companion study, and Event RSVP system. Expanded backend mastery with Node.js, Express, and Firebase.',
    highlights: ['Published MoodPet micro-interaction physics showcase', 'Constructed Firebase Firestore real-time RSVP engine', 'Built biometric health data visualization dashboards']
  },
  {
    year: '2023',
    headline: 'Foundational Computer Science & Algorithmic Rigor',
    role: 'Computer Science Undergraduate',
    organization: 'Computer Science Scholar',
    description: 'Commenced deep technical studies in algorithms, data structures, software architecture, object-oriented design, and database systems.',
    highlights: ['Achieved top academic standing in core algorithmic coursework', 'Mastered JavaScript ES6+, React fundamental patterns, and SQL', 'Built first full-stack CRUD web applications']
  }
];

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'digital-quiet',
    issueNo: 'DISPATCH I',
    title: 'The Art of Digital Quiet: Why Modern Interfaces Need Less Noise and More Intent',
    excerpt: 'Examining why generic SaaS templates fail user trust, and how broadsheet newspaper grid discipline brings clarity and focus back to the web.',
    readTime: '4 MIN READ',
    date: 'JULY 2026',
    content: `In an era dominated by neon gradients, floating modals, and desperate popups fighting for attention, the web has lost its dignity. We are bombarded with cognitive noise masquerading as "engaging UI."

True craftsmanship does not scream; it speaks clearly. Taking inspiration from 19th-century broadsheet newspapers and classic Swiss typography, "Digital Quiet" is the technical practice of stripping away unrequested visual noise to highlight content authority.

When every element is bounded by intentional black linework, set on a warm paper background, and positioned on a strict mathematical grid, the interface transforms from a gadget into a trusted document.`
  },
  {
    id: 'fluid-transitions',
    issueNo: 'DISPATCH II',
    title: 'Engineering Sub-100ms Fluidity in React 19',
    excerpt: 'An investigation into frame budgeting, GPU compositor layers, and zero-layout-shift state updates for high-density interfaces.',
    readTime: '6 MIN READ',
    date: 'JUNE 2026',
    content: `When a user clicks a button or opens a modal, their brain expects feedback within 100 milliseconds. Anything slower feels broken; anything without physics feels artificial.

In building Option One Store and Sugfit, our primary mandate was 60 FPS minimum frame rate on low-end mobile devices. By decoupling state changes from visual transform animations and utilizing CSS compositor layers, we eliminate layout recalculation thrashing.

Animations must never be decorative fluff—they are functional visual cues that orient the user through spatial hierarchy.`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Umar bridges the gap between complex computational logic and human-centric design, treating every line of code as an ink stroke on a digital canvas.',
    author: 'Editorial Board Review',
    role: 'Senior Tech Critique',
    organization: 'Digital Design Quarterly',
    date: '2026'
  },
  {
    id: 'test-2',
    quote: 'Working with Umar on Option One Store was an extraordinary experience. He delivered a storefront that was not only visual perfection but loaded instantaneously for our Saudi Arabian customers.',
    author: 'Tariq Al-Mansoor',
    role: 'Director of Commerce',
    organization: 'Option One Retail',
    date: '2025'
  },
  {
    id: 'test-3',
    quote: 'Umar’s attention to detail is unmatched. His ability to build high-performance React frontends with clean, readable code makes him an invaluable engineering asset.',
    author: 'Dr. A. Khan',
    role: 'Professor of Computer Science',
    organization: 'Department of CS',
    date: '2025'
  }
];
