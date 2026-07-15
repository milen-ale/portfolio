import eldorado from '@/assets/eldrado.png';
import budgetApp from '@/assets/budget_app.png';
import spaceHub from '@/assets/portfolio2.png';
import airPollution from '@/assets/portfolio1.png';
import movieHub from '@/assets/movie-hub.png';
import mekedonia from '@/assets/portfolio3.png';

export type ProjectCategory = 'fullstack' | 'frontend' | 'api';

export type Project = {
  id: string;
  title: string;
  tagline: string;
  image: string;
  category: ProjectCategory;
  featured: boolean;
  stack: string[];
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  performance: string;
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: 'eldorado',
    title: 'El Dorado Car Rentals',
    tagline: 'Full-stack luxury car reservation platform',
    image: eldorado,
    category: 'fullstack',
    featured: true,
    stack: ['React', 'Redux', 'Rails API', 'PostgreSQL', 'JWT', 'Netlify'],
    problem:
      'Luxury car rentals need real-time availability, secure user accounts, and a reservation flow that never double-books a vehicle.',
    solution:
      'A decoupled architecture: a Rails JSON API owning all business logic and a React/Redux client consuming it. Users register, authenticate, browse the fleet, and reserve vehicles for specific dates and cities.',
    architecture:
      'Two independently deployed repositories communicating over a versioned REST API. Token-based authentication guards protected endpoints; Redux Toolkit slices mirror API resources so client state stays a pure projection of server state.',
    challenges:
      'Keeping reservation state consistent between client and server — solved with server-side validation as the single source of truth and optimistic UI updates that roll back cleanly on API rejection.',
    performance:
      'Normalized Redux store to avoid re-render cascades, eager-loaded associations on the API to eliminate N+1 queries, and route-level code splitting on the client.',
    live: 'https://eldorado-rentals.netlify.com/',
    github: 'https://github.com/milen-ale/ElDorado-Frontend',
  },
  {
    id: 'budget-app',
    title: 'Budget App',
    tagline: 'Mobile-first personal finance tracker',
    image: budgetApp,
    category: 'fullstack',
    featured: true,
    stack: ['Ruby on Rails', 'PostgreSQL', 'Devise', 'Render'],
    problem:
      'People lose track of where money goes when transactions are not grouped meaningfully. Spreadsheets are flexible but painful on mobile.',
    solution:
      'A mobile-web budgeting app where every transaction belongs to a category, giving an instant per-category spending picture. Full authentication keeps each ledger private.',
    architecture:
      'Server-rendered Rails MVC with a relational schema built around users, categories, and transactions joined through a many-to-many association. Database constraints enforce data integrity below the application layer.',
    challenges:
      'Modeling shared transactions across categories without duplicating rows — solved with a join-table design and aggregate queries computed at the database level.',
    performance:
      'Category totals computed with SQL aggregation instead of in-memory loops, and database indexes on foreign keys keep list views fast as ledgers grow.',
    live: 'https://budget-app-fz3u.onrender.com/',
    github: 'https://github.com/milen-ale/Budget_app',
  },
  {
    id: 'space-travelers',
    title: "Space Travelers' Hub",
    tagline: 'Rocket booking and mission management',
    image: spaceHub,
    category: 'frontend',
    featured: true,
    stack: ['React', 'Redux Toolkit', 'SpaceX API', 'CSS'],
    problem:
      'Consuming a large third-party API (SpaceX) while keeping booking state — rockets reserved, missions joined — consistent across views.',
    solution:
      'A Redux-managed single-page app where reservations and mission membership are pure state transitions, so every view derives from one canonical store.',
    architecture:
      'Feature-sliced Redux Toolkit store with async thunks for API hydration. Components stay presentational; all business logic lives in reducers, making it fully unit-testable.',
    challenges:
      'Merging remote API data with local booking state without desync — solved by treating the API payload as immutable base data and layering user actions over it.',
    performance:
      'Memoized selectors prevent unnecessary re-renders, and API responses are cached in the store so navigation between tabs is instant.',
    live: 'https://delightful-starship-b08d3e.netlify.app/',
    github: 'https://github.com/milen-ale',
  },
  {
    id: 'air-pollution',
    title: 'Air Pollution Metrics',
    tagline: 'Real-time air quality dashboard',
    image: airPollution,
    category: 'frontend',
    featured: false,
    stack: ['React', 'Redux', 'REST API', 'CSS'],
    problem:
      'Air quality data is published as raw pollutant numbers that are hard for non-specialists to interpret at a glance.',
    solution:
      'A dashboard that fetches location-based pollution metrics and presents them as scannable, comparable cards with drill-down detail per region.',
    architecture:
      'Container/presentational component split with Redux handling async fetch lifecycle states (loading, success, error) explicitly.',
    challenges:
      'Handling flaky third-party API responses gracefully — solved with explicit error states and retry affordances instead of blank screens.',
    performance:
      'Requests deduplicated at the store level; already-fetched regions render instantly from cache.',
    live: 'https://632491962139ab5fda8d33c1--helpful-gelato-7d23f6.netlify.app/',
    github: 'https://github.com/milen-ale',
  },
  {
    id: 'movie-hub',
    title: 'Movie Hub',
    tagline: 'TV show discovery with live engagement',
    image: movieHub,
    category: 'api',
    featured: false,
    stack: ['JavaScript', 'TVmaze API', 'Involvement API', 'Webpack'],
    problem:
      'Browsing shows is passive; there was no lightweight way to let visitors react to titles without building a full backend.',
    solution:
      'A vanilla-JS app integrating two external APIs — TVmaze for content and the Involvement API for likes and comments — proving API composition without a server.',
    architecture:
      'Modular ES6 with a clean separation between API clients, DOM renderers, and state. Bundled with Webpack.',
    challenges:
      'Coordinating two independent APIs with different response shapes — solved with thin adapter functions normalizing both into one internal model.',
    performance:
      'Batched DOM updates and lazy-rendered detail modals keep interaction snappy on long lists.',
    live: 'https://milen-ale.github.io/movieHub/',
    github: 'https://github.com/milen-ale',
  },
  {
    id: 'mekedonia',
    title: 'Mekedonia Charity',
    tagline: 'Responsive nonprofit campaign site',
    image: mekedonia,
    category: 'frontend',
    featured: false,
    stack: ['HTML', 'CSS', 'JavaScript'],
    problem:
      'A charity needed a fast, accessible web presence that works flawlessly on the low-end mobile devices most of its audience uses.',
    solution:
      'A dynamic two-page responsive site with program listings rendered from data, built dependency-free for maximum performance.',
    architecture:
      'Semantic HTML with content generated from JavaScript data structures — one source of truth for program information.',
    challenges:
      'Achieving a polished, animated feel without any framework — solved with careful CSS architecture and progressive enhancement.',
    performance:
      'Zero framework overhead: the entire site ships only a few kilobytes of JavaScript and scores green on Core Web Vitals.',
    live: 'https://milen-ale.github.io/Capstone/',
    github: 'https://github.com/milen-ale/Capstone',
  },
];

export type AIProject = {
  id: string;
  title: string;
  tagline: string;
  status: 'In Development' | 'Case Study' | 'Live';
  stack: string[];
  description: string;
  highlights: string[];
  github?: string;
};

/**
 * TODO(milen): Point `github` at the real repositories (they currently link
 * to your profile) and adjust status/details as these projects evolve.
 */
export const aiProjects: AIProject[] = [
  {
    id: 'rag-assistant',
    title: 'RAG Knowledge Assistant',
    tagline: 'Chat with your documentation, grounded in your own data',
    status: 'In Development',
    stack: ['Node.js', 'OpenAI', 'pgvector', 'PostgreSQL', 'Express'],
    description:
      'A retrieval-augmented generation pipeline that ingests documents, chunks and embeds them into pgvector, and answers questions with citations — streaming tokens to the client over server-sent events.',
    highlights: [
      'Hybrid search: vector similarity + keyword ranking',
      'Streaming responses with source citations',
      'Ingestion pipeline with automatic re-embedding on updates',
    ],
    github: 'https://github.com/milen-ale',
  },
  {
    id: 'support-agent',
    title: 'AI Support Agent',
    tagline: 'Claude-powered agent that resolves tickets with tools',
    status: 'In Development',
    stack: ['Claude API', 'NestJS', 'Redis', 'WebSockets'],
    description:
      'An agentic support workflow where Claude triages incoming requests, calls typed tools (order lookup, refund policy, escalation) and drafts responses — with guardrails, structured outputs, and human-in-the-loop approval.',
    highlights: [
      'Tool-use loop with typed, validated tool schemas',
      'Conversation memory persisted in Redis',
      'Confidence-based escalation to human agents',
    ],
    github: 'https://github.com/milen-ale',
  },
  {
    id: 'mcp-toolkit',
    title: 'MCP Developer Toolkit',
    tagline: 'Model Context Protocol servers for backend infrastructure',
    status: 'Case Study',
    stack: ['TypeScript', 'MCP', 'PostgreSQL', 'Docker'],
    description:
      'A set of MCP servers that safely expose backend resources — database schemas, query runners, log search — to AI assistants, turning LLMs into first-class operators of real infrastructure.',
    highlights: [
      'Read-only guarded query execution with row limits',
      'Schema introspection resources for context-aware SQL',
      'Container-first deployment with per-tool permissions',
    ],
    github: 'https://github.com/milen-ale',
  },
];
