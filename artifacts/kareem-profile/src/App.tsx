import { type ReactNode, useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  GraduationCap,
  Linkedin,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const projects = [
  {
    number: '01',
    title: 'Secure Embedded Access Control System',
    description:
      'A security-focused embedded system for controlled access, connecting hardware decisions to a clearer threat model.',
    tags: ['Embedded systems', 'Security', 'C++'],
    icon: ShieldCheck,
    tone: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]',
  },
  {
    number: '02',
    title: 'Fire & Gas Detection Safety System',
    description:
      'A responsive safety prototype designed to detect environmental hazards and make the next action unmistakable.',
    tags: ['IoT', 'Sensors', 'Arduino'],
    icon: Network,
    tone: 'bg-[hsl(var(--accent))] text-[hsl(var(--foreground))]',
  },
  {
    number: '03',
    title: 'Room Comfort Station',
    description:
      'An environmental monitoring station that turns room conditions into useful, understandable signals.',
    tags: ['ESP32', 'Monitoring', 'IoT'],
    icon: Cpu,
    tone: 'bg-[hsl(38_76%_62%)] text-[hsl(var(--foreground))]',
  },
  {
    number: '04',
    title: 'Custom Minecraft Game Controller',
    description:
      'A custom controller project bringing physical input, software logic, and playful interaction into one build.',
    tags: ['C#', 'Unity', 'Hardware'],
    icon: Code2,
    tone: 'bg-[hsl(191_31%_25%)] text-[hsl(var(--card))]',
  },
];

const certifications = [
  { title: 'PEH — Practical Ethical Hacking', issuer: 'Cybers Mind', date: 'Jan 2026' },
  { title: "CS50's Introduction to Cybersecurity", issuer: 'Harvard University / edX / CS50', date: 'Completed' },
  { title: 'Introduction to IoT Using ESP32', issuer: 'IEEE Robotics & Automation Society, JUST Student Chapter', date: 'May 2026' },
  { title: 'Unity Game Development Training', issuer: 'Jordan Gaming Lab', date: 'Feb 2025' },
  { title: 'Arduino & Embedded Systems Workshop', issuer: 'TECHBOTS', date: '2024' },
];

const skillGroups = [
  {
    label: 'Build',
    icon: Terminal,
    items: ['Python', 'C++', 'C#', 'HTML', 'OOP', 'Algorithms'],
  },
  {
    label: 'Explore',
    icon: ShieldCheck,
    items: ['Cybersecurity', 'IoT & embedded systems', 'Unity', 'Visual Studio', 'PyCharm'],
  },
  {
    label: 'Work with people',
    icon: Sparkles,
    items: ['Leadership', 'Teamwork', 'Problem solving', 'Customer service', 'Communication'],
  },
];

function Reveal({
  children,
  className = '',
  delay = '',
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${delay} ${className}`}>
      {children}
    </div>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono-ui text-[11px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
      <span className="h-px w-7 bg-[hsl(var(--accent))]" />
      {children}
    </div>
  );
}

function Home() {
  return (
    <main className="profile-page min-h-[100dvh] overflow-hidden">
      <header className="profile-header sticky top-0 z-40 border-b border-[hsl(var(--border)/.75)] bg-[hsl(var(--background)/.86)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            data-testid="link-home"
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[hsl(var(--primary))] font-display text-lg text-[hsl(var(--primary-foreground))]">
              K
            </span>
            <span className="hidden text-sm font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))] sm:block">
              Kareem Hussein
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a href="#story" data-testid="link-nav-story" className="nav-link text-sm text-[hsl(var(--muted-foreground))]">Story</a>
            <a href="#work" data-testid="link-nav-work" className="nav-link text-sm text-[hsl(var(--muted-foreground))]">Selected work</a>
            <a href="#toolkit" data-testid="link-nav-toolkit" className="nav-link text-sm text-[hsl(var(--muted-foreground))]">Toolkit</a>
            <a href="#contact" data-testid="link-nav-contact" className="nav-link text-sm text-[hsl(var(--muted-foreground))]">Connect</a>
          </nav>
          <a
            href="https://linkedin.com/in/kareem-belal-hussien"
            target="_blank"
            rel="noreferrer"
            data-testid="link-header-linkedin"
            className="button-lift flex items-center gap-2 rounded-full border border-[hsl(var(--primary)/.35)] px-3.5 py-2 text-xs font-semibold text-[hsl(var(--primary))] sm:px-4"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <section className="grid min-h-[calc(100dvh-72px)] items-center gap-14 py-16 md:grid-cols-[1.04fr_.96fr] md:gap-10 md:py-20 lg:gap-20">
          <Reveal className="max-w-[700px]">
            <div className="mb-8 flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--accent)/.6)]" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent))]" />
              </span>
              Open to thoughtful technical conversations
            </div>
            <h1 data-testid="text-profile-name" className="max-w-[680px] font-display text-[clamp(4rem,9vw,8.3rem)] leading-[.84] tracking-[-0.065em] text-[hsl(var(--foreground))]">
              Kareem
              <span className="block pl-[.18em] text-[hsl(var(--primary))]">Hussein.</span>
            </h1>
            <p data-testid="text-profile-role" className="mt-9 max-w-[560px] text-balance text-lg leading-8 text-[hsl(var(--muted-foreground))] sm:text-xl">
              IoT &amp; Cybersecurity student building a practical bridge between
              resilient systems, useful technology, and the people they serve.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                data-testid="link-hero-work"
                className="button-lift inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[0_9px_20px_hsl(var(--primary)/.16)]"
              >
                See selected work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                data-testid="link-hero-connect"
                className="button-lift inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/.4)] px-5 py-3.5 text-sm font-semibold text-[hsl(var(--foreground))]"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-14 flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">
              <MapPin className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
              Jordan
            </div>
          </Reveal>

          <Reveal className="md:justify-self-end" delay="reveal-delay-2">
            <div className="relative mx-auto w-full max-w-[490px]">
              <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-[hsl(var(--accent)/.7)] sm:-right-5 sm:-top-5" />
              <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b border-l border-[hsl(var(--primary)/.55)] sm:-bottom-5 sm:-left-5" />
              <div className="signal-grid relative overflow-hidden rounded-[28px] bg-[hsl(var(--foreground))] p-6 text-[hsl(var(--card))] sm:p-9">
                <div className="mb-12 flex items-start justify-between">
                  <div>
                    <p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--card)/.55)]">Personal signal map</p>
                    <p className="mt-2 font-display text-2xl tracking-[-0.035em]">Curious by default.</p>
                  </div>
                  <CircleDot className="h-5 w-5 text-[hsl(var(--accent))]" />
                </div>
                <div className="relative mx-auto flex aspect-square max-w-[270px] items-center justify-center">
                  <div className="signal-orbit absolute inset-2 rounded-full border border-[hsl(var(--card)/.16)]" />
                  <div className="absolute inset-10 rounded-full border border-dashed border-[hsl(var(--accent)/.55)]" />
                  <div className="absolute left-[9%] top-[23%] h-2 w-2 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_0_6px_hsl(var(--accent)/.13)]" />
                  <div className="absolute bottom-[19%] right-[13%] h-2 w-2 rounded-full bg-[hsl(38_76%_62%)] shadow-[0_0_0_6px_hsl(38_76%_62%/.14)]" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-center shadow-[0_0_0_14px_hsl(var(--primary)/.14)]">
                    <div>
                      <span className="block font-display text-4xl leading-none">IoT</span>
                      <span className="font-mono-ui text-[9px] uppercase tracking-[.18em] text-[hsl(var(--primary-foreground)/.7)]">+ security</span>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-3 divide-x divide-[hsl(var(--card)/.14)] border-t border-[hsl(var(--card)/.14)] pt-5">
                  <div className="pr-3">
                    <p className="font-mono-ui text-[10px] text-[hsl(var(--card)/.48)]">BASE</p>
                    <p className="mt-1 text-xs font-medium">JUST</p>
                  </div>
                  <div className="px-3">
                    <p className="font-mono-ui text-[10px] text-[hsl(var(--card)/.48)]">MODE</p>
                    <p className="mt-1 text-xs font-medium">Building</p>
                  </div>
                  <div className="pl-3">
                    <p className="font-mono-ui text-[10px] text-[hsl(var(--card)/.48)]">NORTH</p>
                    <p className="mt-1 text-xs font-medium">Irbid</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <div className="flex items-center gap-5 border-y border-[hsl(var(--border))] py-5 text-[hsl(var(--muted-foreground))]">
          <span className="whitespace-nowrap font-mono-ui text-[10px] uppercase tracking-[.2em] text-[hsl(var(--accent))]">Currently</span>
          <div className="h-px w-8 bg-[hsl(var(--border))]" />
          <p data-testid="text-current-focus" className="text-sm">Learning in public through embedded systems, ethical hacking, and real-world service.</p>
        </div>

        <section id="story" className="scroll-mt-24 py-24 sm:py-32">
          <Reveal>
            <SectionKicker>The short version</SectionKicker>
            <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
              <h2 data-testid="text-summary-heading" className="max-w-[320px] font-display text-4xl leading-[.98] tracking-[-.045em] sm:text-5xl">
                Systems should be useful before they are impressive.
              </h2>
              <div className="max-w-[650px]">
                <p data-testid="text-summary" className="text-lg leading-8 text-[hsl(var(--muted-foreground))]">
                  I am Kareem, a Computer Engineering student at Jordan University of
                  Science and Technology, following the IoT &amp; Cybersecurity track.
                  My work sits where hardware, software, and responsible security meet.
                </p>
                <p className="mt-5 text-lg leading-8 text-[hsl(var(--muted-foreground))]">
                  I like understanding how things work all the way down, then making
                  them feel clear and dependable to the person using them. I am growing
                  that practice through embedded builds, ethical hacking study, and
                  digital banking experience.
                </p>
                <div className="mt-9 grid gap-6 border-t border-[hsl(var(--border))] pt-6 sm:grid-cols-3">
                  <div>
                    <p className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Focus</p>
                    <p className="mt-2 text-sm font-semibold">IoT + Cybersecurity</p>
                  </div>
                  <div>
                    <p className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Language</p>
                    <p className="mt-2 text-sm font-semibold">Arabic · English</p>
                  </div>
                  <div>
                    <p className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Approach</p>
                    <p className="mt-2 text-sm font-semibold">Practical curiosity</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-24" delay="reveal-delay-1">
            <SectionKicker>Where I have been</SectionKicker>
            <div className="relative ml-2 border-l border-[hsl(var(--border))] pl-7 sm:ml-4 sm:pl-10">
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent))] ring-4 ring-[hsl(var(--background))]" />
              <div className="grid gap-3 md:grid-cols-[190px_1fr_auto] md:gap-8">
                <p className="font-mono-ui text-xs text-[hsl(var(--accent))]">2026 — Present</p>
                <div>
                  <h3 data-testid="text-experience-current" className="text-lg font-semibold tracking-[-.02em]">Digital Banking Assistant</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Bank al Etihad</p>
                </div>
                <p className="text-sm leading-6 text-[hsl(var(--muted-foreground))] md:max-w-[250px]">Supporting clear, human-first experiences in digital banking.</p>
              </div>
              <div className="mt-12 grid gap-3 md:grid-cols-[190px_1fr_auto] md:gap-8">
                <p className="font-mono-ui text-xs text-[hsl(var(--muted-foreground))]">2025</p>
                <div>
                  <h3 data-testid="text-experience-trainee" className="text-lg font-semibold tracking-[-.02em]">Pisciner trainee</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">42 Irbid</p>
                </div>
                <p className="text-sm leading-6 text-[hsl(var(--muted-foreground))] md:max-w-[250px]">Learning through a peer-driven, problem-solving environment.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16 rounded-[22px] bg-[hsl(var(--secondary)/.6)] p-6 sm:p-8" delay="reveal-delay-2">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-[hsl(var(--primary))]">Education / in progress</p>
                  <h3 data-testid="text-education" className="mt-1 text-base font-semibold">BSc Computer Engineering, IoT &amp; Cybersecurity Track</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Jordan University of Science and Technology · JUST</p>
                </div>
              </div>
              <span className="flex shrink-0 items-center gap-2 font-mono-ui text-[11px] text-[hsl(var(--muted-foreground))]">
                <CircleDot className="h-3.5 w-3.5 text-[hsl(var(--accent))]" /> In progress
              </span>
            </div>
          </Reveal>
        </section>

        <section id="work" className="scroll-mt-24 border-t border-[hsl(var(--border))] py-24 sm:py-32">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <SectionKicker>Selected work</SectionKicker>
                <h2 className="font-display text-5xl leading-[.95] tracking-[-.055em] sm:text-6xl">Small systems.<br /><span className="text-[hsl(var(--primary))]">Real signals.</span></h2>
              </div>
              <p className="max-w-[270px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">A few builds that show how I think: start with the signal, respect the constraints, make the result useful.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.title} delay={`reveal-delay-${(index % 3) + 1}`}>
                  <article data-testid={`card-project-${index + 1}`} className="project-card group relative flex min-h-[285px] flex-col justify-between overflow-hidden rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.66)] p-6 sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${project.tone}`}><Icon className="h-5 w-5" /></span>
                      <span className="font-mono-ui text-xs text-[hsl(var(--muted-foreground))]">{project.number}</span>
                    </div>
                    <div className="mt-10">
                      <h3 data-testid={`text-project-title-${index + 1}`} className="max-w-[390px] text-xl font-semibold tracking-[-.035em]">{project.title}</h3>
                      <p className="mt-3 max-w-[450px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">{project.description}</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between gap-4 border-t border-[hsl(var(--border))] pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => <span key={tag} className="rounded-full bg-[hsl(var(--secondary)/.75)] px-2.5 py-1 font-mono-ui text-[10px] text-[hsl(var(--muted-foreground))]">{tag}</span>)}
                      </div>
                      <ArrowUpRight className="project-arrow h-5 w-5 shrink-0 text-[hsl(var(--muted-foreground))]" />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="border-t border-[hsl(var(--border))] py-24 sm:py-32">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-[.72fr_1.28fr] md:gap-20">
              <div>
                <SectionKicker>Proof of practice</SectionKicker>
                <h2 className="font-display text-5xl leading-[.94] tracking-[-.055em]">Learning that<br /><span className="text-[hsl(var(--accent))]">keeps moving.</span></h2>
                <p className="mt-6 max-w-[290px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">Curiosity becomes more useful when it leaves a trail. These are the milestones along mine.</p>
              </div>
              <div className="divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
                {certifications.map((certification, index) => (
                  <div key={certification.title} data-testid={`row-certification-${index + 1}`} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
                    <div className="flex gap-3">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--primary))]" />
                      <div>
                        <h3 className="text-sm font-semibold">{certification.title}</h3>
                        <p className="mt-1 text-xs leading-5 text-[hsl(var(--muted-foreground))]">{certification.issuer}</p>
                      </div>
                    </div>
                    <span className="pl-7 font-mono-ui text-[10px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))] sm:pl-0">{certification.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="toolkit" className="scroll-mt-24 border-t border-[hsl(var(--border))] py-24 sm:py-32">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <SectionKicker>Working toolkit</SectionKicker>
                <h2 className="font-display text-5xl leading-[.94] tracking-[-.055em]">The tools behind<br />the <span className="text-[hsl(var(--primary))]">thinking.</span></h2>
              </div>
              <div className="flex items-center gap-3 text-sm text-[hsl(var(--muted-foreground))]">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />
                Always sharpening the edges
              </div>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.label} data-testid={`card-skills-${group.label.toLowerCase().replaceAll(' ', '-')}`} className="rounded-[20px] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.42)] p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[hsl(var(--accent))]" />
                      <h3 className="font-mono-ui text-xs uppercase tracking-[.15em]">{group.label}</h3>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {group.items.map((item) => <span key={item} className="rounded-lg bg-[hsl(var(--secondary)/.72)] px-3 py-2 text-xs font-medium text-[hsl(var(--foreground))]">{item}</span>)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex flex-col gap-4 rounded-[20px] border border-[hsl(var(--border))] bg-[hsl(var(--secondary)/.43)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-3">
                <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--primary))]" />
                <p className="text-sm leading-6 text-[hsl(var(--muted-foreground))]"><span className="font-semibold text-[hsl(var(--foreground))]">Also in the kit:</span> Microsoft Office · customer service · Arabic (native) · English (professional)</p>
              </div>
              <a href="#contact" data-testid="link-toolkit-connect" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))]">Work together <ChevronRight className="h-4 w-4" /></a>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="scroll-mt-24 pb-16 pt-10 sm:pb-24 sm:pt-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-[hsl(var(--foreground))] px-6 py-12 text-[hsl(var(--card))] sm:px-12 sm:py-16">
              <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[hsl(var(--accent)/.32)]" />
              <div className="absolute -right-10 -top-16 h-52 w-52 rounded-full border border-[hsl(var(--accent)/.18)]" />
              <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="mb-5 flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.2em] text-[hsl(var(--accent))]"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" /> Next chapter</p>
                  <h2 data-testid="text-contact-heading" className="max-w-[600px] font-display text-5xl leading-[.95] tracking-[-.055em] sm:text-7xl">Let&apos;s make something <span className="text-[hsl(var(--accent))]">dependable.</span></h2>
                  <p className="mt-6 max-w-[480px] text-base leading-7 text-[hsl(var(--card)/.64)]">For a collaboration, a technical conversation, or simply a hello from a fellow builder — find me on LinkedIn.</p>
                </div>
                <a
                  href="https://linkedin.com/in/kareem-belal-hussien"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-contact-linkedin"
                  className="button-lift inline-flex w-fit items-center gap-3 rounded-full bg-[hsl(var(--accent))] px-5 py-3.5 text-sm font-semibold text-[hsl(var(--foreground))]"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="relative mt-14 flex flex-col justify-between gap-4 border-t border-[hsl(var(--card)/.15)] pt-5 text-xs text-[hsl(var(--card)/.5)] sm:flex-row">
                <span data-testid="text-footer-location" className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Jordan</span>
                <span className="font-mono-ui">Kareem Hussein · IoT &amp; Cybersecurity</span>
              </div>
            </div>
          </Reveal>
          <div className="mt-7 flex flex-col items-start justify-between gap-3 px-1 text-[11px] text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center">
            <span>Built with patience, curiosity, and useful constraints.</span>
            <a href="#top" data-testid="link-back-to-top" className="flex items-center gap-2 font-mono-ui uppercase tracking-[.12em] hover:text-[hsl(var(--primary))]">Back to top <ArrowDown className="h-3 w-3 rotate-180" /></a>
          </div>
        </section>
      </div>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;