import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  MapPin,
  Terminal,
  Users,
  Zap,
  BookOpen,
  GraduationCap,
  ListChecks,
  Mail,
  ChevronRight,
  Sparkles,
  Bot,
  Wrench,
  Rocket,
} from "lucide-react";

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

const TAS = ["Vinamra Agarwal", "Ella Cao", "Prabhgun Basi", "Arian Shamaei", "Aditya Kumar"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Terminal className="h-4 w-4" />
            </span>
            <span>
              vibe<span className="text-primary">-coding</span>
              <span className="ml-2 hidden text-muted-foreground sm:inline">cse 490 a2</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#project-1"
            className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Project 1 is live
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.45 0.15 305 / 0.45), transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-28">
          <div>
            <p className="font-mono text-sm text-gold">
              $ whoami → <span className="text-muted-foreground">uw cse · autumn 2026 · 2 credits</span>
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Vibe
              <br />
              Coding<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Learn the latest AI-based tools for software development — by building. Ten
              Thursdays, ten builds: from a single prompt to a shipped app, through agent
              harnesses, MCP, multi-agent systems, evals, and deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> Thursdays
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> 10:00–11:20 am
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Savery Hall 220
              </span>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                See the ten weeks <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#project-1"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 font-medium transition-colors hover:bg-accent"
              >
                Current assignment
              </a>
            </div>
          </div>

          {/* Terminal card */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-gold/70" />
              <span className="h-3 w-3 rounded-full bg-chart-2/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">session-01 — prompt-to-app</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-[13px] leading-relaxed">
              <p>
                <span className="text-gold">❯ prompt</span>{" "}
                <span className="text-foreground">"a synth I can play on my phone"</span>
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary">▸ planning</span> components…
                <br />
                <span className="text-primary">▸ writing</span> src/audio.ts, src/Pad.tsx…
                <br />
                <span className="text-primary">▸ building</span> ✓ 0 errors
                <br />
                <span className="text-primary">▸ shipping</span> ✓ published
              </p>
              <p>
                <span className="text-chart-2">✓ live</span>{" "}
                <span className="text-muted-foreground underline decoration-primary/50 underline-offset-4">
                  sensory-synth.lovable.app
                </span>
              </p>
              <p className="border-t border-border pt-4 text-muted-foreground">
                <span className="text-gold">❯</span> 40 minutes. English in, app out.
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / format */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading kicker="about" title="Half lecture, half build — every week" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Builder attitude"
              body="Each 80-minute session splits in two: a lecture and live demo of the week's core technique, then roughly 40 minutes of in-class building with the instructor and TAs answering questions one-on-one."
            />
            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="Current tools only"
              body="The course spends its time on the state of the art — code generation, agentic frameworks, multi-agent orchestration, and apps that incorporate AI. Historical methods get no significant class time."
            />
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              title="A course that builds itself"
              body="AI is used in every aspect of the class: lecture plans and assignments are generated in collaboration with the instructors, projects are auto-graded, and weekly feedback surveys reshape the quarter as it runs."
            />
          </div>
          <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-gold">
              What you'll walk away with
            </h3>
            <ul className="mt-4 grid gap-x-10 gap-y-3 text-muted-foreground sm:grid-cols-2">
              {[
                "Command of the latest AI-based tools for software development",
                "Hands-on experience creating real applications with AI",
                "Designing software with AI — specs, plans, and delegation",
                "Judging whether an AI-produced program meets its objectives",
                "A method for staying current in a rapidly changing field",
                "Choosing the right AI dev tool for requirements and tradeoffs",
                "A personal AI dev kit that compounds across projects",
                "A portfolio of shipped builds, legible to any recruiter",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            kicker="schedule"
            title="Ten Thursdays, ten builds"
            lead="The sequence starts with the fastest possible win — a prompt becomes a working app in session one — then climbs through prompting method, the agentic loop, agents, and closes on evals and shipping."
          />
          <ol className="mt-12 space-y-3">
            {WEEKS.map((week) => (
              <li
                key={week.n}
                className="group grid gap-3 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-sm font-semibold text-primary">{week.n}</span>
                <div>
                  <h3 className="font-semibold tracking-tight">{week.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{week.desc}</p>
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
                  <Wrench className="h-3 w-3 text-gold" />
                  {week.tools}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project 1 */}
      <section id="project-1" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            kicker="current assignment"
            title="Project 01 — Prompt to Web App"
            lead="You have 40 minutes. Come up with a cool mobile phone web app, iterate until it does what you want, and ship it."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Rocket className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">The task</h3>
              </div>
              <ul className="mt-5 space-y-3.5 text-muted-foreground">
                <li className="flex gap-2.5">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong className="text-foreground">Pick your tool:</strong> Lovable (publish for
                    you) or UW Purple (runs inside UW, fully private). Use the course code to upgrade
                    Lovable to Pro first.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong className="text-foreground">Build:</strong> ask the tool for ideas if you
                    need them, then iterate until it does what you want.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong className="text-foreground">Annotate at least once:</strong> in Lovable,
                    select a part of the preview or draw on it and describe the change; in Purple,
                    screenshot the region and send it with your change.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong className="text-foreground">Due:</strong>{" "}
                    <span className="font-mono text-gold">Tuesday, 11:59 pm</span> on the Project 1
                    assignment in Canvas.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <ListChecks className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">What to turn in</h3>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                      Lovable track
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-sm text-muted-foreground">
                      <li>· Published app link</li>
                      <li>· Shared project link (so we can read your prompts)</li>
                      <li>· Screenshot of you using the annotation tool</li>
                      <li>· Submit as Text: links + image</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                      Purple track
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-sm text-muted-foreground">
                      <li>· The html file Purple wrote</li>
                      <li>· A text file with your prompts, in order</li>
                      <li>· The screenshots you sent Purple</li>
                      <li>· Submit as Upload: all together</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/15 text-chart-2">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">This week's readings</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {READINGS.map((r) => (
                    <li
                      key={r.title}
                      className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
                    >
                      <span className="text-foreground">{r.title}</span>
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
      <section id="grading" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            kicker="grading"
            title="Fair, repeatable, auto-graded"
            lead="Projects are graded against a standard rubric by analyzing the code and the generation trace — two students doing similar work score about the same."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <GradeCard pct="80%" label="Projects" note="Weekly builds, 10 points each, plus 1 bonus point for the most polished or creative submission — demoed at the start of the next lecture." />
            <GradeCard pct="10%" label="Quizzes" note="Weekly auto-graded quizzes on the core concepts and the readings." />
            <GradeCard pct="10%" label="Participation" note="Includes the short feedback survey after each lecture — your input literally reshapes the course." />
          </div>
          <p className="mt-8 rounded-xl border border-dashed border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground">
            <span className="font-mono font-semibold text-gold">bonus:</span> out-of-class AI
            artifacts earn extra credit, with awards at the end of the quarter and short demos
            during lectures.
          </p>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading kicker="staff" title="The instructional team" />
          <div className="mt-10 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 font-mono text-lg font-bold text-primary">
                  SS
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Steve Seitz</h3>
                  <p className="text-sm text-muted-foreground">Professor · Instructor</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Professor in UW CSE working on computer vision, graphics, and generative AI — and a
                VP Fellow at Google, where he has led teams building products like Beam and Flow.
                He normally teaches the computer graphics course.
              </p>
              <a
                href="mailto:seitz@cs.washington.edu"
                className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> seitz@cs.washington.edu
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Users className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">Teaching assistants</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {TAS.map((ta) => (
                  <li
                    key={ta}
                    className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2.5"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-mono text-xs font-semibold text-secondary-foreground">
                      {ta.split(" ").map((w) => w[0]).join("")}
                    </span>
                    <span className="text-sm">{ta}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Every TA here has serious vibe-coding mileage — bring them your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
          <p className="font-mono text-sm text-muted-foreground">
            <GraduationCap className="mr-2 inline h-4 w-4 text-primary" />
            CSE 490 A2 · Vibe Coding · University of Washington
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            $ echo "intent in, steering out, verification at the end"
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm text-gold">
        <span className="text-muted-foreground">## </span>
        {kicker}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 leading-relaxed text-muted-foreground">{lead}</p> : null}
    </div>
  );
}

function FeatureCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
        {icon}
      </span>
      <h3 className="mt-4 font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function GradeCard({ pct, label, note }: { pct: string; label: string; note: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-6">
      <p className="font-mono text-4xl font-bold text-primary">{pct}</p>
      <p className="mt-1 font-semibold">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p>
    </div>
  );
}
