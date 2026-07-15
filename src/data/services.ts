import {
  Server,
  Braces,
  Hexagon,
  Database,
  Brain,
  Gauge,
  Boxes,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Backend Development',
    description:
      'Robust server-side systems with clean architecture, thorough testing, and security baked in from day one.',
    icon: Server,
  },
  {
    title: 'REST API Development',
    description:
      'Well-documented, versioned APIs with consistent contracts, proper status codes, and pagination that scales.',
    icon: Braces,
  },
  {
    title: 'Node.js Development',
    description:
      'High-throughput Node.js services — Express or NestJS — engineered for the event loop, not against it.',
    icon: Hexagon,
  },
  {
    title: 'Database Design',
    description:
      'Normalized schemas, smart indexing, and query optimization across PostgreSQL, MongoDB, and Redis.',
    icon: Database,
  },
  {
    title: 'AI Integration',
    description:
      'LLM-powered features done right: RAG pipelines, agents, streaming, and cost-aware prompt design.',
    icon: Brain,
  },
  {
    title: 'Performance Optimization',
    description:
      'Profiling, caching strategies, and query tuning that turn slow endpoints into fast ones — measurably.',
    icon: Gauge,
  },
  {
    title: 'System Architecture',
    description:
      'Microservices, event-driven design, and infrastructure decisions that keep systems simple to evolve.',
    icon: Boxes,
  },
];
