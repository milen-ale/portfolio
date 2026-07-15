import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  FileDown,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { site } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const EMAILJS = {
  serviceId: 'service_mlgnajp',
  templateId: 'template_1amqjrf',
  publicKey: 'N1ymStmtu-9LrVTQN',
};

const channels = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/milen-alebel', href: site.linkedin },
  { icon: Github, label: 'GitHub', value: `@${site.githubUser}`, href: site.github },
  { icon: Twitter, label: 'Twitter / X', value: '@milenalebel2', href: site.twitter },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-faint transition-colors focus:border-accent/60 focus:bg-white/[0.05] focus:outline-none';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  async function sendEmail(e: FormEvent) {
    e.preventDefault();
    if (!form.current || status === 'sending') return;
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form.current, {
        publicKey: EMAILJS.publicKey,
      });
      setStatus('sent');
      form.current.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something scalable"
        highlight="scalable"
        subtitle="Have a backend to design, an API to rescue, or an AI feature to ship? My inbox is open."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: availability + channels */}
        <div className="space-y-6">
          <Reveal>
            <GlassCard className="p-6" hover={false}>
              <div className="flex items-center gap-3">
                <span className="animate-pulse-ring h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <h3 className="font-semibold text-white">
                  {site.available ? 'Available for work' : 'Currently booked'}
                </h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Open to full-time backend roles, contract work, and consulting.
                {` ${site.location}.`} Typical response time: within 24 hours.
              </p>
              <a
                href={site.resume}
                download
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-soft transition-colors hover:text-white"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </GlassCard>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <GlassCard className="flex h-full items-center gap-3.5 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-soft">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-white">{c.label}</span>
                      <span className="block truncate text-xs text-faint">{c.value}</span>
                    </span>
                  </GlassCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <GlassCard className="p-6 sm:p-8" hover={false}>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-muted">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-muted">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project, timeline, and what success looks like…"
                  required
                  className={inputClass}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" variant="gradient" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === 'sent' && (
                  <p className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent — I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-rose-400">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Email me directly instead.
                  </p>
                )}
              </div>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
