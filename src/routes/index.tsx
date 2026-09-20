import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  FolderOpen,
  ListChecks,
  Mail,
  Rocket,
  Users,
  Zap,
  Bot,
  Sparkles,
  Link2,
} from "lucide-react";
import heroImg from "@/assets/vibe-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Coding — CSE 490 A2, University of Washington" },
      {
        name: "description",
        content:
          "CSE 490 A2 Vibe Coding at UW CSE: learn the latest AI-based tools for software development. Ten Thursdays, ten builds — prompt-to-app, agent harnesses, MCP, multi-agent orchestration, evals, and deployment.",
      },
      { property: "og:title", content: "Vibe Coding — CSE 490 A2, University of Washington" },
      {
        property: "og:description",
        content:
          "AI-assisted software development, taught by building. Ten Thursdays, ten builds — from your first prompt-to-app to deploying behind CI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#project-1", label: "Project 1" },
  { href: "#grading", label: "Grading" },
  { href: "#staff", label: "Staff" },
];

const QUICK_LINKS = [
  { href: "#project-1", label: "Current assignment" },
  { href: "#schedule", label: "Ten-week schedule" },
  {
    href: "https://drive.google.com/drive/u/0/folders/17AsDt0xtHcmSvpeLSEoSSTRtdhB2xzbH",
    label: "Course files (Drive)",
    external: true,
  },
  { href: "https://canvas.uw.edu/", label: "Canvas", external: true },
  { href: "mailto:seitz@cs.washington.edu", label: "Email Steve" },
];

const WEEKS = [
  {
    n: "L01",
    title: "Prompt to App",
    desc: "Course overview, a short history of AI coding, and your first end-to-end app — prompted, built, and shipped in session one.",
    tools: "Lovable / Bolt / v0",
  },
  {
    n: "L02",
    title: "Coding on a Budget",
    desc: "Model choice as a hiring decision: capability, task fit, and total cost. The prompt-run-refine loop, practiced by hand.",
    tools: "VS Code + Claude Code",
  },
  {
    n: "L03",
    title: "The Agent Harness",
    desc: "The agentic loop, named precisely — observe, decide, act, stop. You build a hundred-line coding agent yourself.",
    tools: "Python + Claude on Bedrock",
  },
  {
    n: "L04",
    title: "Steering a Coding Agent",
    desc: "Specification, planning, interruption, instruction files, and skills — the surfaces that steer a delegated agent.",
    tools: "Claude Code",
  },
  {
    n: "L05",
    title: "MCP & Agent Governance",
    desc: "Connect third-party tools through MCP, then govern them: permissions, allowlists, sandboxing, audit trails.",
    tools: "Claude Code + MCP",
  },
  {
    n: "L06",
    title: "Working in Code You Did Not Write",
    desc: "Most industry AI work happens in someone else's repo. Reviewing, testing, and security-auditing AI-generated code.",
    tools: "VS Code, agent mode unlocked",
  },
  {
    n: "L07",
    title: "Multi-Agent Orchestration",
    desc: "Planner, workers, critic. Supervisor, fan-out, pipeline, debate — what multi-agent buys and what it costs.",
    tools: "CrewAI",
  },
  {
    n: "L08",
    title: "Local Models",
    desc: "Run models on your own machine: privacy, offline, zero marginal cost. Structured outputs and local-first routing.",
    tools: "Ollama",
  },
  {
    n: "L09",
    title: "Evals",
    desc: "Design evals that catch real failure modes. Compare models with your own harness and audit a quarter of your own work.",
    tools: "Promptfoo",
  },
  {
    n: "L10",
    title: "Deploy Behind CI",
    desc: "Ship an earlier project: deploy targets, smoke tests per pull request, and recurring automated workflows.",
    tools: "GitHub Pages + Actions",
  },
];

const READINGS = [
  { title: "Large Language Models from scratch", kind: "video", time: "8 min" },
  { title: "Large Language Models: Part 2", kind: "video", time: "7 min" },
  { title: "Welcome to Lovable", kind: "docs", time: "4 min" },
  { title: "Intro to LLMs (Karpathy)", kind: "video · optional", time: "60 min" },
];

const OUTCOMES = [
  "Command of the latest AI-based tools for software development",
  "Hands-on experience creating real applications with AI",
  "Designing software with AI — specs, plans, and delegation",
  "Judging whether an AI-produced program meets its objectives",
  "A method for staying current in a rapidly changing field",
  "Choosing the right AI dev tool for requirements and tradeoffs",
  "A personal AI dev kit that compounds across projects",
  "A portfolio of shipped builds, legible to any recruiter",
];

const TAS = ["Vinamra Agarwal", "Ella Cao", "Prabhgun Basi", "Arian Shamaei", "Aditya Kumar"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b-4 border-ink bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center border-2 border-ink bg-primary font-mono text-sm font-bold text-primary-foreground shadow-hard-sm">
              &gt;_
            </span>
            <span className="font-mono text-sm font-bold tracking-tight">
              vibe-coding
              <span className="ml-2 hidden font-normal text-muted-foreground sm:inline">
                cse 490 a2
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 font-mono text-xs font-semibold uppercase tracking-wider md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#project-1"
            className="border-2 border-ink bg-gold px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-gold-foreground shadow-hard-sm transition-transform hover:-translate-y-0.5"
          >
            Project 1 is live
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative border-b-4 border-ink">
        <img
          src={heroImg}
          alt="A relaxed student vibe coding while their laptop builds an app"
          width={1024}
          height={1024}
          className="absolute right-6 top-6 hidden w-20 border-2 border-ink bg-card p-1 shadow-hard-sm md:block lg:w-24"
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20">
          <div>
            <span className="inline-block border-2 border-ink bg-gold px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-gold-foreground shadow-hard-sm">
              Autumn 2026 · UW CSE 490 A2 · 2 credits
            </span>
            <h1 className="mt-6 text-6xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
              Vibe
              <br />
              <span className="text-primary">Coding</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed">
              Learn the latest AI-based tools for software development — by building. Ten
              Thursdays, ten builds: from a single prompt to a shipped app.
            </p>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              Thursdays 10:00–11:20 · Savery Hall 220 · Steve Seitz
            </p>

            {/* Quick links */}
            <div className="mt-8">
              <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <Link2 className="h-3.5 w-3.5" /> Quick links
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="inline-flex items-center gap-1.5 border-2 border-ink bg-card px-3 py-1.5 font-mono text-xs font-semibold shadow-hard-sm transition-all hover:-translate-y-0.5 hover:bg-secondary"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="h-3 w-3" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="relative">
            <div className="border-2 border-ink bg-code font-mono text-[13px] leading-relaxed text-on-dark shadow-hard-primary">
              <div className="flex items-center gap-1.5 border-b-2 border-ink px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-destructive" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-gold" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-chart-2" />
                <span className="ml-3 text-[11px] text-on-dark/50">session-01 — prompt-to-app</span>
              </div>
              <div className="space-y-2.5 p-4">
                <p>
                  <span className="text-gold">❯ prompt</span> "a synth I can play on my phone"
                </p>
                <p className="text-on-dark/60">
                  ▸ planning components… ▸ writing src/audio.ts… ▸ building ✓ 0 errors
                </p>
                <p>
                  <span className="text-chart-2">✓ live</span>{" "}
                  <span className="underline decoration-primary decoration-2 underline-offset-4">
                    sensory-synth.lovable.app
                  </span>
                </p>
                <p className="border-t border-on-dark/15 pt-2.5 text-on-dark/60">
                  <span className="text-gold">❯</span> 40 minutes. English in, app out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / format */}
      <section id="about" className="border-b-4 border-ink">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading kicker="about" title="The goal: build your own Claude Code" />
          <div className="mt-10 border-4 border-ink bg-primary p-8 text-primary-foreground shadow-hard-lg sm:p-12">
            <p className="max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">
              By the end of the quarter, you won't just use AI coding tools — you'll have built
              one: your own coding agent, with a harness, tools, and guardrails you understand
              line by line.
            </p>
            <p className="mt-6 max-w-3xl leading-relaxed opacity-90">
              Each 80-minute session splits in two: a lecture and live demo of the week's core
              technique, then roughly 40 minutes of in-class building with the instructor and TAs.
              Week by week you assemble the pieces — the agentic loop, specification and steering,
              MCP tools and governance, multi-agent orchestration, evals — until they compound into
              an agent that's yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5 font-mono text-xs font-bold uppercase tracking-widest">
              {["agentic loop", "steering", "mcp", "multi-agent", "evals", "deployment"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border-2 border-primary-foreground/50 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="border-b-4 border-ink bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            kicker="schedule"
            title="Ten Thursdays, ten builds"
            lead="The sequence starts with the fastest possible win — a prompt becomes a working app in session one — then climbs through prompting method, the agentic loop, agents, and closes on evals and shipping."
          />
          <div className="mt-12 overflow-hidden border-4 border-ink shadow-hard-lg">
            <div className="grid grid-cols-[64px_1fr] gap-4 bg-ink p-4 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground sm:grid-cols-[80px_1fr_auto]">
              <span>Week</span>
              <span>Topic</span>
              <span className="hidden text-right sm:block">Tools</span>
            </div>
            <ol>
              {WEEKS.map((week, i) => (
                <li
                  key={week.n}
                  className={`grid grid-cols-[64px_1fr] items-center gap-4 border-t-2 border-ink p-4 transition-colors hover:bg-gold/30 sm:grid-cols-[80px_1fr_auto] sm:gap-6 sm:px-5 ${
                    i % 2 === 0 ? "bg-card" : "bg-secondary"
                  }`}
                >
                  <span className="font-mono text-sm font-bold text-primary">{week.n}</span>
                  <div>
                    <h3 className="font-bold tracking-tight">{week.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {week.desc}
                    </p>
                  </div>
                  <span className="col-span-2 inline-flex w-fit items-center gap-1.5 border-2 border-ink bg-card px-2.5 py-1 font-mono text-[11px] font-semibold uppercase shadow-hard-sm sm:col-span-1">
                    {week.tools}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Project 1 */}
      <section id="project-1" className="border-b-4 border-ink">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading kicker="current assignment" title="Project 01 — Prompt to Web App" />
          <div className="mt-10 grid border-4 border-ink shadow-hard-lg lg:grid-cols-2">
            <div className="bg-primary p-8 text-primary-foreground sm:p-10">
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6" />
                <h3 className="text-2xl font-bold uppercase tracking-tight">The task</h3>
              </div>
              <p className="mt-4 text-lg font-medium leading-relaxed opacity-90">
                You have 40 minutes. Come up with a cool mobile phone web app, iterate until it
                does what you want, and ship it.
              </p>
              <ul className="mt-8 space-y-4 font-medium">
                <li className="flex gap-3 border-2 border-primary-foreground/40 p-4">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={3} />
                  <span>
                    <strong>Pick your tool:</strong> Lovable (publishes for you) or UW Purple (runs
                    inside UW, fully private). Use the course code to upgrade Lovable to Pro first.
                  </span>
                </li>
                <li className="flex gap-3 border-2 border-primary-foreground/40 p-4">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={3} />
                  <span>
                    <strong>Build:</strong> ask the tool for ideas if you need them, then iterate
                    until it does what you want.
                  </span>
                </li>
                <li className="flex gap-3 border-2 border-primary-foreground/40 p-4">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={3} />
                  <span>
                    <strong>Annotate at least once:</strong> in Lovable, select a part of the
                    preview or draw on it and describe the change; in Purple, screenshot the region
                    and send it with your change.
                  </span>
                </li>
              </ul>
              <p className="mt-8 inline-block border-2 border-ink bg-gold px-4 py-2 font-mono text-sm font-bold text-gold-foreground shadow-hard-sm">
                Due Tuesday 11:59 pm · Canvas
              </p>
            </div>

            <div className="border-t-4 border-ink bg-card lg:border-l-4 lg:border-t-0">
              <div className="border-b-2 border-ink p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <ListChecks className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold uppercase tracking-tight">What to turn in</h3>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="border-2 border-ink bg-secondary p-4 shadow-hard-sm">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                      Lovable track
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-sm font-medium">
                      <li>· Published app link</li>
                      <li>· Shared project link (so we can read your prompts)</li>
                      <li>· Screenshot of you using the annotation tool</li>
                      <li>· Submit as Text: links + image</li>
                    </ul>
                  </div>
                  <div className="border-2 border-ink bg-secondary p-4 shadow-hard-sm">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                      Purple track
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-sm font-medium">
                      <li>· The html file Purple wrote</li>
                      <li>· A text file with your prompts, in order</li>
                      <li>· The screenshots you sent Purple</li>
                      <li>· Submit as Upload: all together</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold uppercase tracking-tight">
                    This week's readings
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {READINGS.map((r) => (
                    <li
                      key={r.title}
                      className="flex items-center justify-between gap-4 border-2 border-ink bg-secondary px-4 py-2.5 text-sm font-medium"
                    >
                      <span>{r.title}</span>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        {r.kind} · {r.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grading */}
      <section id="grading" className="border-b-4 border-ink bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            kicker="grading"
            title="Fair, repeatable, auto-graded"
            lead="Projects are graded against a standard rubric by analyzing the code and the generation trace — two students doing similar work score about the same."
          />
          <div className="mt-12 space-y-0 border-4 border-ink bg-card shadow-hard-lg">
            <GradeRow
              pct="80%"
              label="Projects"
              note="Weekly builds, 10 points each, plus 1 bonus point for the most polished or creative submission — demoed at the start of the next lecture."
            />
            <GradeRow
              pct="10%"
              label="Quizzes"
              note="Weekly auto-graded quizzes on the core concepts and the readings."
            />
            <GradeRow
              pct="10%"
              label="Participation"
              note="Includes the short feedback survey after each lecture — your input literally reshapes the course."
              last
            />
          </div>
          <p className="mt-8 inline-block border-2 border-dashed border-ink bg-gold/40 p-5 text-sm font-medium leading-relaxed">
            <span className="font-mono font-bold uppercase">bonus:</span> out-of-class AI artifacts
            earn extra credit, with awards at the end of the quarter and short demos during
            lectures.
          </p>
        </div>
      </section>

      {/* Staff */}
      <section id="staff">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading kicker="staff" title="The instructional team" />
          <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="border-2 border-ink bg-gold p-6 shadow-hard sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center border-2 border-ink bg-primary font-mono text-lg font-bold text-primary-foreground shadow-hard-sm">
                  SS
                </span>
                <div>
                  <h3 className="text-lg font-bold">Steve Seitz</h3>
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gold-foreground/80">
                    Professor · Instructor
                  </p>
                </div>
              </div>
              <p className="mt-5 font-medium leading-relaxed text-gold-foreground">
                Professor in UW CSE working on computer vision, graphics, and generative AI — and a
                VP Fellow at Google, where he has led teams building products like Beam and Flow.
                He normally teaches the computer graphics course.
              </p>
              <a
                href="mailto:seitz@cs.washington.edu"
                className="mt-5 inline-flex items-center gap-2 border-2 border-ink bg-card px-3 py-1.5 font-mono text-sm font-semibold shadow-hard-sm transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> seitz@cs.washington.edu
              </a>
            </div>
            <div className="border-2 border-ink bg-card p-6 shadow-hard sm:p-8">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold uppercase tracking-tight">Teaching assistants</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {TAS.map((ta) => (
                  <li
                    key={ta}
                    className="flex items-center gap-3 border-2 border-ink bg-secondary px-4 py-2.5"
                  >
                    <span className="flex h-8 w-8 items-center justify-center border-2 border-ink bg-primary font-mono text-xs font-bold text-primary-foreground">
                      {ta.split(" ").map((w) => w[0]).join("")}
                    </span>
                    <span className="text-sm font-semibold">{ta}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                Every TA here has serious vibe-coding mileage — bring them your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-ink bg-ink py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-widest">
            Vibe Coding · CSE 490 A2
          </p>
          <p className="text-sm opacity-70">
            University of Washington · Paul G. Allen School of Computer Science & Engineering ·
            Autumn 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="inline-block border-2 border-ink bg-card px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-hard-sm">
        {kicker}
      </p>
      <h2 className="mt-4 text-3xl font-bold uppercase tracking-tighter sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}

function AboutCard({
  icon,
  step,
  title,
  body,
  highlight,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`border-2 border-ink p-6 shadow-hard transition-transform hover:-translate-y-1 ${
        highlight ? "bg-gold text-gold-foreground" : "bg-card"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex h-10 w-10 items-center justify-center border-2 border-ink ${
            highlight ? "bg-card text-primary" : "bg-primary text-primary-foreground"
          }`}
        >
          {icon}
        </span>
        <span className="font-mono text-3xl font-bold opacity-30">{step}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold uppercase tracking-tight">{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${highlight ? "" : "text-muted-foreground"}`}>
        {body}
      </p>
    </div>
  );
}

function GradeRow({
  pct,
  label,
  note,
  last,
}: {
  pct: string;
  label: string;
  note: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-3 p-6 sm:grid-cols-[120px_160px_1fr] sm:gap-6 sm:p-7 ${
        last ? "" : "border-b-2 border-ink"
      }`}
    >
      <span className="text-5xl font-bold tracking-tighter text-primary">{pct}</span>
      <span className="font-mono text-sm font-bold uppercase tracking-widest">{label}</span>
      <p className="text-sm leading-relaxed text-muted-foreground">{note}</p>
    </div>
  );
}
