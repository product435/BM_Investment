import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteNav } from "@/components/site-nav";
import { Reveal } from "@/components/reveal";
import heroImg from "@/assets/hero-summit.jpg";
import venueImg from "@/assets/venue.jpg";
import {
  ArrowRight,
  Award,
  Banknote,
  Bot,
  Building2,
  CalendarDays,
  Check,
  Clock,
  Cpu,
  FileText,
  HeartPulse,
  Leaf,
  MapPin,
  Mic,
  Presentation,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
  UserPlus,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BM Investment 2026 – Pitch Summit | Founders Meet Investors" },
      {
        name: "description",
        content:
          "BM Investment 2026 Pitch Summit: 12 March 2026, Bengaluru. 120 startups pitch to top investors across AI, fintech, climate, health and deep tech. Register now.",
      },
      { property: "og:title", content: "BM Investment 2026 – Pitch Summit" },
      {
        property: "og:description",
        content:
          "One stage. 120 startups. $25M in active funding intent. Join founders, investors and mentors in Bengaluru on 12 March 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  { value: "120+", label: "Startups pitching" },
  { value: "60+", label: "Active investors" },
  { value: "$25M", label: "Funding intent" },
  { value: "2,000+", label: "Attendees" },
];

const TRACKS = [
  { icon: Bot, name: "AI & Applied ML", desc: "Agents, infrastructure and vertical AI products with real deployment traction." },
  { icon: Banknote, name: "Fintech", desc: "Payments, lending, wealth and embedded finance for emerging markets." },
  { icon: Leaf, name: "Climate & Energy", desc: "Clean energy, storage, mobility and industrial decarbonisation." },
  { icon: HeartPulse, name: "Health & Bio", desc: "Care delivery, diagnostics, medtech devices and digital therapeutics." },
  { icon: Cpu, name: "Deep Tech", desc: "Semiconductors, robotics, space systems and advanced manufacturing." },
  { icon: Building2, name: "SaaS & Commerce", desc: "B2B software, marketplaces and next-generation commerce infrastructure." },
];

const STEPS = [
  { icon: UserPlus, title: "Apply", text: "Submit your startup profile, deck and traction metrics before 20 January 2026." },
  { icon: ShieldCheck, title: "Get screened", text: "Our committee reviews every application and shortlists 120 startups across six tracks." },
  { icon: Presentation, title: "Pitch on stage", text: "Deliver a 6-minute pitch to a live investor panel and a 2,000-strong audience." },
  { icon: Trophy, title: "Close the round", text: "Move into curated investor 1:1s, diligence rooms and post-summit follow-ups." },
];

const RULES = [
  { icon: Timer, title: "6 minutes to pitch", text: "A hard stop at 6:00. The stage clock is visible to you and the audience." },
  { icon: Mic, title: "4 minutes of Q&A", text: "Two judges lead questions on market, model, moat and metrics." },
  { icon: FileText, title: "12 slides maximum", text: "16:9 PDF submitted 72 hours in advance. No live demos on the main stage." },
  { icon: Users, title: "Two founders on stage", text: "Any two members of the founding team may present together." },
  { icon: Award, title: "Scored on five axes", text: "Problem, product, traction, team and capital plan, each out of 10." },
  { icon: ShieldCheck, title: "Confidential by default", text: "Judges sign NDAs. Recordings are shared only with your consent." },
];

const JUDGES = [
  { name: "Ananya Rao", role: "Managing Partner", firm: "Meridian Capital" },
  { name: "Daniel Okafor", role: "General Partner", firm: "Northbridge Ventures" },
  { name: "Sofia Marchetti", role: "Head of Investments", firm: "Atlas Growth" },
  { name: "Rahul Menon", role: "Founder & CEO", firm: "Ledgerly (exited)" },
  { name: "Mei Lin Chen", role: "Partner, Deep Tech", firm: "Orbit Fund" },
  { name: "Jonas Weber", role: "Climate Investment Lead", firm: "Terra Alpha" },
];

const SCHEDULE = [
  { time: "08:30", title: "Registration & founder lounge", text: "Badge pickup, breakfast and investor matchmaking app onboarding." },
  { time: "10:00", title: "Opening keynote", text: "The 2026 capital landscape: what investors are actually funding." },
  { time: "11:00", title: "Pitch rounds I–III", text: "AI, fintech and climate tracks on the main stage." },
  { time: "13:30", title: "Investor 1:1s", text: "Pre-matched 20-minute meetings in the diligence rooms." },
  { time: "15:00", title: "Pitch rounds IV–VI", text: "Health, deep tech and SaaS tracks on the main stage." },
  { time: "17:30", title: "Finals & awards", text: "Top six startups pitch again for the summit grant and term sheets." },
  { time: "19:00", title: "Closing reception", text: "Founders, investors and mentors, off the record." },
];

const FAQS = [
  { q: "Who can apply to pitch?", a: "Any startup incorporated after January 2021 with a working product and at least one paying customer or pilot. Pre-seed through Series A stages are welcome." },
  { q: "Is there an application fee?", a: "No. Applying and pitching are free. General attendee passes are paid, and every shortlisted startup receives two complimentary passes." },
  { q: "How are startups selected?", a: "A screening committee of operators and investors scores each application on problem clarity, product maturity, traction and team. Shortlists are announced on 5 February 2026." },
  { q: "Do investors get materials in advance?", a: "Judges receive your deck 72 hours before the summit under NDA. Financial appendices are shared only during diligence sessions you approve." },
  { q: "Can I attend without pitching?", a: "Yes. Investor, mentor and general attendee passes give full access to keynotes, pitch rounds and the closing reception." },
  { q: "Is the summit streamed?", a: "Main-stage sessions are streamed for ticket holders. Investor 1:1s and diligence rooms are never recorded." },
];

function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p> : null}
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen w-full overflow-x-hidden">
      <SiteNav />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-wide text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                Applications open until 20 January 2026
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
                BM Investment 2026
                <span className="mt-2 block text-primary">Pitch Summit</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                One stage where 120 shortlisted founders meet the investors writing cheques in
                2026. Six tracks, live judging, and curated capital conversations that continue
                long after the lights go down.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#register"
                  className="inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lift transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  Register to attend <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#tracks"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  Explore the tracks
                </a>
              </div>

              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: CalendarDays, k: "Date", v: "12 March 2026" },
                  { icon: MapPin, k: "Location", v: "Bengaluru, India" },
                  { icon: Clock, k: "Doors", v: "08:30 – 21:00 IST" },
                ].map((i) => (
                  <div key={i.k} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                    <i.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{i.k}</dt>
                      <dd className="truncate text-sm font-semibold">{i.v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <img
                  src={heroImg}
                  alt="Founder pitching on the main stage of a technology summit"
                  width={1600}
                  height={1008}
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift sm:aspect-[16/10]"
                />
                <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card p-4 shadow-lift sm:left-6 sm:right-auto sm:w-64">
                  <p className="text-3xl font-extrabold text-primary">$25M</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    committed funding intent from participating funds
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STATS */}
        <section className="pt-16 pb-4 md:pt-24">
          <div className="section-shell grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="surface-card h-full p-5 sm:p-7">
                  <p className="font-display text-3xl font-extrabold sm:text-4xl">{s.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHead
                eyebrow="About the event"
                title="A summit built around capital that actually moves."
                text="BM Investment 2026 is a single-day, invitation-led pitch summit. We keep the stage tight, the panels senior and the follow-up structured, so founders leave with meetings booked rather than business cards collected."
              />
            </Reveal>
            <Reveal delay={100}>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  "Every judge is an active cheque-writer, not a panellist for hire.",
                  "Pre-matched investor 1:1s based on stage, sector and geography.",
                  "Diligence rooms with legal and finance mentors on site.",
                  "A summit grant of $250,000 split across the top three startups.",
                ].map((t) => (
                  <li key={t} className="surface-card flex gap-3 p-5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="border-y border-border bg-card/40 py-20 md:py-28">
          <div className="section-shell">
            <Reveal>
              <SectionHead
                center
                eyebrow="How it works"
                title="From application to term sheet in four steps."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="surface-card h-full p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-sm font-bold text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRACKS */}
        <section id="tracks" className="py-20 md:py-28">
          <div className="section-shell">
            <Reveal>
              <SectionHead
                eyebrow="Startup tracks"
                title="Six tracks. Twenty startups each."
                text="Pick the track that matches your category. Judging panels are assembled per track so you pitch to people who already understand your market."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TRACKS.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) * 90}>
                  <article className="surface-card group h-full p-6 sm:p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <t.icon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{t.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      20 slots · 4 judges
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RULES */}
        <section id="format" className="border-y border-border bg-card/40 py-20 md:py-28">
          <div className="section-shell">
            <Reveal>
              <SectionHead
                eyebrow="Pitch format & rules"
                title="Ten minutes on stage. No surprises."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {RULES.map((r, i) => (
                <Reveal key={r.title} delay={(i % 3) * 80}>
                  <div className="surface-card flex h-full gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-foreground">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold">{r.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* JUDGES */}
        <section id="judges" className="py-20 md:py-28">
          <div className="section-shell">
            <Reveal>
              <SectionHead
                eyebrow="Judges"
                title="The panel deciding the 2026 cohort."
                text="Partners and operators who have led rounds from pre-seed to Series C across six continents."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {JUDGES.map((j, i) => (
                <Reveal key={j.name} delay={(i % 3) * 90}>
                  <div className="surface-card flex h-full items-center gap-4 p-6">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {j.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold">{j.name}</h3>
                      <p className="truncate text-sm text-muted-foreground">{j.role}</p>
                      <p className="truncate text-sm font-semibold text-primary">{j.firm}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SCHEDULE */}
        <section id="schedule" className="border-y border-border bg-card/40 py-20 md:py-28">
          <div className="section-shell">
            <Reveal>
              <SectionHead eyebrow="Event schedule" title="One day, precisely run." />
            </Reveal>

            {/* Mobile / tablet: vertical timeline */}
            <ol className="mt-12 space-y-4 lg:hidden">
              {SCHEDULE.map((s, i) => (
                <Reveal as="li" key={s.time} delay={i * 60}>
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/15" />
                    {i < SCHEDULE.length - 1 && (
                      <span className="absolute left-1.5 top-6 h-full w-px bg-border" />
                    )}
                    <div className="surface-card p-5">
                      <p className="font-display text-sm font-bold text-primary">{s.time} IST</p>
                      <h3 className="mt-1 text-base font-bold">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            {/* Desktop: horizontal timeline */}
            <div className="mt-14 hidden lg:block">
              <div className="relative">
                <span className="absolute inset-x-0 top-2 h-px bg-border" />
                <ol className="grid grid-cols-7 gap-4">
                  {SCHEDULE.map((s, i) => (
                    <Reveal as="li" key={s.time} delay={i * 80}>
                      <span className="relative z-10 block h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                      <p className="mt-5 font-display text-sm font-bold text-primary">{s.time}</p>
                      <h3 className="mt-1.5 text-sm font-bold leading-snug">{s.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* VENUE */}
        <section id="venue" className="py-20 md:py-28">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHead
                eyebrow="Venue"
                title="Bengaluru International Convention Centre"
                text="Hall 2 & 3, Whitefield Main Road, Bengaluru 560066. Ten minutes from the metro, thirty from the airport expressway, with on-site parking and full accessibility."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Step-free access throughout",
                  "On-site parking for 900 cars",
                  "Dedicated founder green rooms",
                  "Quiet rooms and prayer space",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </div>
                ))}
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=12.9784&mlon=77.7500#map=15/12.9784/77.7500"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <MapPin className="h-4 w-4" /> Open in maps
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
                <img
                  src={venueImg}
                  alt="Convention centre exterior at blue hour"
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <iframe
                  title="Map of the venue"
                  loading="lazy"
                  className="block h-64 w-full border-0 sm:h-72"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.735%2C12.968%2C77.765%2C12.989&layer=mapnik&marker=12.9784%2C77.75"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-card/40 py-20 md:py-28">
          <div className="section-shell max-w-3xl">
            <Reveal>
              <SectionHead center eyebrow="FAQ" title="Questions founders ask us most." />
            </Reveal>
            <Reveal delay={80}>
              <Accordion type="single" collapsible className="mt-10 space-y-3">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className="rounded-2xl border border-border bg-card px-5 last:border-b"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* REGISTER CTA */}
        <section id="register" className="py-20 md:py-28">
          <div className="section-shell">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-14 text-center sm:px-12 md:py-20">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/25 blur-2xl"
                />
                <div className="relative mx-auto max-w-2xl">
                  <h2 className="text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                    Secure your place at BM Investment 2026
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                    Founder applications close 20 January. Investor and attendee passes are limited
                    to 2,000 seats and sold in three release waves.
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                      href="#register"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Apply as a startup <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#register"
                      className="inline-flex min-h-12 items-center justify-center rounded-xl border border-primary-foreground/35 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                    >
                      Get an attendee pass
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 md:py-16">
        <div className="section-shell">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-lg font-extrabold">
                BM <span className="text-primary">Investment</span> 2026
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                The pitch summit where founders, investors, mentors and judges close the gap
                between a great product and the capital to scale it.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold">Event</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  ["#about", "About"],
                  ["#tracks", "Tracks"],
                  ["#schedule", "Schedule"],
                  ["#venue", "Venue"],
                ].map(([h, l]) => (
                  <li key={h}>
                    <a href={h} className="transition-colors hover:text-primary">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">Contact</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>hello@bminvestment.summit</li>
                <li>+91 80 4000 2026</li>
                <li>Bengaluru, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 BM Investment Pitch Summit. All rights reserved.</p>
            <p>Privacy · Terms · Code of conduct</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
