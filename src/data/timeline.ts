export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
  current?: boolean;
};

/**
 * TODO(milen): Adjust titles, organizations, and dates to match your CV
 * exactly — these are drafted from your existing portfolio content.
 */
export const timeline: TimelineEntry[] = [
  {
    period: '2024 — Present',
    title: 'Backend Software Engineer',
    org: 'Freelance & Contract — Remote',
    description:
      'Designing and shipping Node.js/NestJS backends for client products: REST and GraphQL APIs, PostgreSQL data modeling, Redis caching, and AI-powered features built on the OpenAI and Claude APIs.',
    tags: ['Node.js', 'NestJS', 'PostgreSQL', 'AI Integration', 'Docker'],
    current: true,
  },
  {
    period: '2023 — 2024',
    title: 'Full-Stack Developer',
    org: 'Project & Product Work — Remote',
    description:
      'Built and deployed full-stack applications end to end — including El Dorado Car Rentals (Rails API + React/Redux) and Budget App — owning everything from schema design to CI/CD and cloud deployment.',
    tags: ['React', 'Redux', 'Rails', 'REST APIs', 'CI/CD'],
  },
  {
    period: '2022 — 2023',
    title: 'Full-Stack Web Developer',
    org: 'Microverse — Remote',
    description:
      'Completed an intensive full-time program built on real-world collaboration: daily pair programming and code reviews with developers across three time zones (UTC-6, UTC+1, UTC+5), mastering data structures, algorithms, and professional Git workflows.',
    tags: ['JavaScript', 'Ruby', 'Pair Programming', 'Remote Collaboration'],
  },
];
