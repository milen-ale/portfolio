import {
  Search,
  PencilRuler,
  Code2,
  FlaskConical,
  Rocket,
  Activity,
  type LucideIcon,
} from 'lucide-react';

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Understand the domain, users, and constraints before writing a line of code. Requirements become explicit, testable acceptance criteria.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Architect',
    description:
      'Design the data model, API contracts, and service boundaries. Decisions get documented so future engineers know the why, not just the what.',
    icon: PencilRuler,
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Small, reviewable increments with clean abstractions. Type safety, linting, and conventional commits keep the codebase healthy as it grows.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Test',
    description:
      'Unit tests for logic, integration tests for API contracts. Edge cases and failure modes are tested deliberately, not discovered in production.',
    icon: FlaskConical,
  },
  {
    step: '05',
    title: 'Ship',
    description:
      'Automated CI/CD pipelines deploy to cloud platforms with zero-downtime strategies, environment parity, and instant rollback paths.',
    icon: Rocket,
  },
  {
    step: '06',
    title: 'Observe',
    description:
      'Structured logging, metrics, and alerting close the loop. Real usage data feeds the next iteration — performance is a feature, not an afterthought.',
    icon: Activity,
  },
];
