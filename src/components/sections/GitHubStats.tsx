import { Github, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';

export function GitHubStats() {
  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="GitHub Activity"
        title="Consistency you can audit"
        highlight="audit"
        subtitle="Open source, public commits, and a green graph that reflects real building."
      />

      <Reveal className="mx-auto max-w-4xl">
        <GlassCard className="p-6 sm:p-8" hover={false}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05]">
                <Github className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="font-semibold text-white">@{site.githubUser}</h3>
                <p className="text-sm text-faint">Contribution graph — last 12 months</p>
              </div>
            </div>
            <ButtonLink
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
            >
              View Profile
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.06] bg-void/60 p-4">
            <img
              src={`https://ghchart.rshah.org/3B82F6/${site.githubUser}`}
              alt={`GitHub contribution chart for ${site.githubUser}`}
              loading="lazy"
              className="min-w-[640px] opacity-90"
            />
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
