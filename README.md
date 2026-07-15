<div align="center">

# Milen Alebel — Portfolio

**Backend Software Engineer · Node.js · APIs · AI-Powered Applications**

A premium, dark-themed engineering portfolio built with a modern React stack.

[**Live Site →**](https://milenportfolio.netlify.app/)

</div>

---

## ✨ Highlights

- **Premium dark design system** — glassmorphism, gradient borders, animated gradient mesh, and a cursor spotlight, inspired by Linear, Stripe, and Vercel
- **17 sections** — Hero with typing animation and live terminal, About, Technical Expertise, Featured Project case studies, AI Projects, Backend Architecture diagram, Tech Stack marquee, Development Process, Experience timeline, Testimonials, GitHub activity, Articles, Services, and Contact
- **Command palette** — press `⌘K` / `Ctrl+K` to navigate anywhere
- **Case-study project cards** — problem, solution, architecture, challenges, and performance for every featured project
- **Performance-minded** — route-level code splitting, lazy loading, manual vendor chunks, `prefers-reduced-motion` support
- **SEO-ready** — Open Graph, Twitter cards, JSON-LD structured data, sitemap, robots.txt

## 🛠 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS v4 (CSS-first theme tokens) |
| Animation | Framer Motion |
| Icons | Lucide + React Icons |
| Routing | React Router |
| Contact | EmailJS |
| Quality | ESLint 9 (flat config), strict TypeScript, GitHub Actions CI |
| Hosting | Netlify |

## 💻 Getting Started

```sh
git clone https://github.com/milen-ale/portfolio.git
cd portfolio
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build
npm run preview  # serve the production build
npm run lint     # eslint
```

Requires Node 20+.

## 📁 Structure

```
src/
├── assets/          # images
├── components/
│   ├── effects/     # gradient mesh, spotlight, marquee, terminal, ⌘K palette…
│   ├── layout/      # navbar, footer
│   ├── sections/    # one component per page section
│   └── ui/          # design-system primitives (Button, GlassCard, Badge…)
├── data/            # all content lives here — edit these to update the site
└── lib/             # cn(), shared motion variants
```

All copy, projects, skills, and timeline entries are plain TypeScript objects
in [`src/data`](src/data) — no component changes needed to update content.

## 👤 Author

**Milen Alebel**

- GitHub: [@milen-ale](https://github.com/milen-ale)
- LinkedIn: [milen-alebel](https://www.linkedin.com/in/milen-alebel/)
- Twitter: [@milenalebel2](https://twitter.com/milenalebel2)

## 📝 License

[MIT](./MIT.md)
