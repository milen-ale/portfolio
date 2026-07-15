export type Article = {
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  href?: string;
};

/**
 * PLACEHOLDER CONTENT — wire these up to real posts (dev.to, Medium,
 * Hashnode, or a blog route) when published. `href` left undefined renders
 * a "coming soon" state.
 */
export const articles: Article[] = [
  {
    title: 'Designing REST APIs That Age Well',
    excerpt:
      'Versioning strategies, pagination contracts, and the naming decisions that keep an API pleasant to consume three years in.',
    tag: 'API Design',
    readTime: '8 min read',
  },
  {
    title: 'RAG in Production: Beyond the Tutorial',
    excerpt:
      'Chunking strategy, hybrid retrieval, and evaluation loops — what actually matters when retrieval-augmented generation meets real users.',
    tag: 'AI Engineering',
    readTime: '11 min read',
  },
  {
    title: 'PostgreSQL Indexing for Node.js Developers',
    excerpt:
      'A practical tour of B-tree, GIN, and partial indexes — and how to read a query plan before your users read a spinner.',
    tag: 'Databases',
    readTime: '9 min read',
  },
];
