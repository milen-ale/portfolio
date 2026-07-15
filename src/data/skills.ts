import type { IconType } from 'react-icons';
import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSequelize,
  SiElasticsearch,
  SiGraphql,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiClaude,
  SiVercel,
  SiRender,
  SiRailway,
} from 'react-icons/si';
import {
  Server,
  Brain,
  Monitor,
  Container,
  KeyRound,
  Network,
  Bot,
  Sparkles,
  Workflow,
  MessageSquareCode,
  Plug,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SkillCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: 'blue' | 'violet' | 'cyan' | 'green';
  blurb: string;
  skills: { name: string; icon?: IconType | LucideIcon }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: Server,
    accent: 'blue',
    blurb: 'Designing resilient services, data models, and APIs built to scale.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Sequelize', icon: SiSequelize },
      { name: 'Elasticsearch', icon: SiElasticsearch },
      { name: 'REST & GraphQL APIs', icon: SiGraphql },
      { name: 'JWT Auth & RBAC', icon: KeyRound },
      { name: 'Microservices', icon: Network },
    ],
  },
  {
    id: 'ai',
    title: 'AI Engineering',
    icon: Brain,
    accent: 'violet',
    blurb: 'Shipping production features powered by large language models.',
    skills: [
      { name: 'OpenAI API', icon: Sparkles },
      { name: 'Claude API', icon: SiClaude },
      { name: 'Prompt Engineering', icon: MessageSquareCode },
      { name: 'RAG Pipelines', icon: Workflow },
      { name: 'AI Agents', icon: Bot },
      { name: 'MCP Servers', icon: Plug },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Monitor,
    accent: 'cyan',
    blurb: 'Modern, type-safe interfaces that make backends shine.',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'Redux', icon: SiRedux },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Container,
    accent: 'green',
    blurb: 'Automated pipelines and cloud deployments that just work.',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Railway', icon: SiRailway },
      { name: 'Render', icon: SiRender },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Git', icon: SiGit },
    ],
  },
];

/** Flat icon list for the marquee */
export const marqueeStack: { name: string; icon: IconType }[] = [
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Express', icon: SiExpress },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Elasticsearch', icon: SiElasticsearch },
  { name: 'Docker', icon: SiDocker },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'Redux', icon: SiRedux },
  { name: 'Claude', icon: SiClaude },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Railway', icon: SiRailway },
  { name: 'Render', icon: SiRender },
];
