export const site = {
  name: 'Milen Alebel',
  role: 'Backend Software Engineer',
  tagline:
    'Building scalable backend systems and AI-powered applications that serve thousands of users.',
  email: 'milenalebel2@gmail.com',
  location: 'Remote — collaborating across UTC-6 to UTC+5',
  available: true,
  resume: '/resume.pdf',
  url: 'https://milenportfolio.netlify.app',
  github: 'https://github.com/milen-ale',
  githubUser: 'milen-ale',
  linkedin: 'https://www.linkedin.com/in/milen-alebel/',
  twitter: 'https://twitter.com/milenalebel2',
} as const;

/** Rotating hero titles */
export const rotatingTitles = [
  'Backend Engineer',
  'Node.js Specialist',
  'API Architect',
  'AI Application Developer',
  'Cloud Backend Engineer',
];

export const stats = [
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: '+', label: 'Technologies Mastered' },
  { value: 3, suffix: '', label: 'Time Zones Collaborated Across' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI', href: '#ai-projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

/** Every anchor on the page — used by the command palette */
export const allSections = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Technical Expertise', href: '#expertise' },
  { label: 'Featured Projects', href: '#projects' },
  { label: 'AI Projects', href: '#ai-projects' },
  { label: 'Backend Architecture', href: '#architecture' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Development Process', href: '#process' },
  { label: 'Experience Timeline', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'GitHub Activity', href: '#github' },
  { label: 'Articles', href: '#articles' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];
