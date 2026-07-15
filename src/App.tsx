import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GradientMesh } from '@/components/effects/GradientMesh';
import { Spotlight } from '@/components/effects/Spotlight';
import { CommandPalette } from '@/components/effects/CommandPalette';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Expertise } from '@/components/sections/Expertise';
import { Projects } from '@/components/sections/Projects';
import { AIProjects } from '@/components/sections/AIProjects';
import { Architecture } from '@/components/sections/Architecture';
import { TechStack } from '@/components/sections/TechStack';
import { Process } from '@/components/sections/Process';
import { Timeline } from '@/components/sections/Timeline';
import { Testimonials } from '@/components/sections/Testimonials';
import { GitHubStats } from '@/components/sections/GitHubStats';
import { Articles } from '@/components/sections/Articles';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';

/*
 * Sections are imported statically on purpose: the page is a single route,
 * so per-section React.lazy chunks are all fetched at load anyway, and the
 * hero's continuous typing animations can starve Suspense retries in
 * React 18 — leaving sections blank. Vendor chunks (react, framer-motion)
 * still split via vite.config.ts for effective caching.
 */
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <AIProjects />
        <Architecture />
        <TechStack />
        <Process />
        <Timeline />
        <Testimonials />
        <GitHubStats />
        <Articles />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GradientMesh />
      <Spotlight />
      <CommandPalette />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
