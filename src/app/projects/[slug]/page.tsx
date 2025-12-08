import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.title} – Case Study | Vishwajeet Jadhav`;
  const description = project.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <article className="space-y-6 rounded-[var(--radius-xl)] bg-surface/95 p-6 shadow-subtle ring-1 ring-border-subtle/70 sm:p-8 lg:p-10">
      <header className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Case Study · {project.period}
        </p>
        <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {project.role} · {project.summary}
        </p>
      </header>

      <section className="space-y-3 text-sm text-muted-foreground sm:text-[15px]">
        <p>{project.description}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-[minmax(0,1.2fr),minmax(0,0.9fr)]">
        <div className="space-y-3 rounded-2xl border border-border-subtle/80 bg-background/95 p-4 text-sm shadow-subtle">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Highlights
          </h2>
          <ul className="mt-2 space-y-2.5 text-sm text-muted-foreground">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-border-subtle/80 bg-background/95 p-4 text-sm shadow-subtle">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Stack & Links
          </h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-xs">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border-subtle/80 bg-background px-3 py-1.5 text-xs font-medium hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border-subtle/80 bg-background px-3 py-1.5 text-xs font-medium hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
              >
                Live Site
              </a>
            )}
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle/80 bg-background px-3 py-1.5 text-xs font-medium hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
            >
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
