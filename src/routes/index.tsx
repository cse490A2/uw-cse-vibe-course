import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight, Mail, Users } from "lucide-react";

import { ProjectMarkdown } from "@/components/ProjectMarkdown";
import { fetchText, projectTitle, stripFrontMatter } from "@/lib/published";
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
            <Link to="/projects" className="transition-colors hover:text-primary">
              Projects
            </Link>
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
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 lg:pt-20">
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
              Learn the latest AI-based tools for software development — by building. Ten Thursdays,
              ten builds: from a single prompt to a shipped app.
            </p>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              Thursdays 10:00–11:20 · Savery Hall 220 · Steve Seitz
            </p>
          </div>
        </div>
      </section>

      {/* About / format */}
      <section id="about" className="border-b-4 border-ink">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading kicker="about" title="The goal: build your own Claude Code" />
          <div className="mt-10 border-4 border-ink bg-primary p-8 text-primary-foreground shadow-hard-lg sm:p-12">
            <p className="max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">
              By the end of the quarter, you won't just use AI coding tools — you'll have built one:
              your own coding agent, with a harness, tools, and guardrails you understand line by
              line.
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
                  <span key={tag} className="border-2 border-primary-foreground/50 px-2.5 py-1">
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

      {/* Project 1: the published handout itself, fetched at view time (pointer, never a copy) */}
      <CurrentProject id="P01" />

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
                VP Fellow at Google, where he has led teams building products like Beam and Flow. He
                normally teaches the computer graphics course.
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
                      {ta
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
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

function CurrentProject({ id }: { id: string }) {
  const q = useQuery({
    queryKey: ["published", id, "handout"],
    queryFn: () => fetchText(`projects/${id}/README.md`),
    enabled: typeof window !== "undefined",
    staleTime: 60_000,
  });
  const title = q.data ? projectTitle(q.data, id) : `Project ${Number(id.slice(1))}`;
  return (
    <section id="project-1" className="border-b-4 border-ink">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading kicker="current assignment" title={title} />
        <Link
          to="/projects/$"
          params={{ _splat: id }}
          className="mt-4 inline-flex items-center gap-1.5 border-2 border-ink bg-card px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest shadow-hard-sm transition-transform hover:-translate-y-0.5"
        >
          Setup, submission and starter files <ChevronRight className="h-3.5 w-3.5" />
        </Link>
        <div className="mt-10 border-4 border-ink bg-card p-8 shadow-hard-lg sm:p-10">
          {q.isPending && (
            <p className="font-mono text-sm text-muted-foreground">Loading the handout…</p>
          )}
          {q.isError && (
            <div>
              <p className="font-medium">The handout did not load from the course repository.</p>
              <button
                onClick={() => q.refetch()}
                className="mt-3 inline-flex items-center border-2 border-ink bg-primary px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-hard-sm"
              >
                Try again
              </button>
            </div>
          )}
          {q.data && <ProjectMarkdown id={id} markdown={stripFrontMatter(q.data)} />}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
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
