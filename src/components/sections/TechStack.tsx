import { marqueeStack } from '@/data/skills';
import { Marquee } from '@/components/effects/Marquee';
import { SectionHeading } from '@/components/ui/SectionHeading';

function StackPill({ name, icon: Icon }: { name: string; icon: React.ElementType }) {
  return (
    <div className="glass flex items-center gap-3 rounded-xl px-5 py-3 transition-colors duration-300 hover:border-accent/40">
      <Icon className="h-5 w-5 text-muted" />
      <span className="text-sm font-medium whitespace-nowrap text-slate-300">{name}</span>
    </div>
  );
}

export function TechStack() {
  const half = Math.ceil(marqueeStack.length / 2);
  const rowA = marqueeStack.slice(0, half);
  const rowB = marqueeStack.slice(half);

  return (
    <section id="stack" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I ship with"
          highlight="ship"
        />
      </div>
      <div className="space-y-4">
        <Marquee>
          {rowA.map((t) => (
            <StackPill key={t.name} name={t.name} icon={t.icon} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowB.map((t) => (
            <StackPill key={t.name} name={t.name} icon={t.icon} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
