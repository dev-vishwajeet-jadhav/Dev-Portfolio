"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-scroll-mt space-y-5 rounded-[var(--radius-xl)] bg-surface/95 p-6 shadow-subtle ring-1 ring-border-subtle/70 sm:p-8 lg:p-10"
    >
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <h2
            id="projects-heading"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
          >
            Selected Work
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-[15px]">
            A curated set of projects that show how I design and ship production-ready systems,
            from UI flows and APIs to data models and testing.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.06, duration: 0.55, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-background/90 p-4 text-sm shadow-subtle transition-all duration-300 ease-out focus-within:ring-focus-visible"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {project.period}
                </p>
                <p className="text-[11px] text-muted-foreground">{project.role}</p>
              </div>
              <h3 className="text-base font-semibold tracking-tight">
                <Link
                  href={`/projects/${project.slug}`}
                  className="focus-visible:ring-focus-visible rounded"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">{project.summary}</p>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground focus-visible:ring-focus-visible rounded-full px-1"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground focus-visible:ring-focus-visible rounded-full px-1"
                  >
                    Live Demo
                  </a>
                )}
                <button
                  type="button"
                  className="hover:text-foreground focus-visible:ring-focus-visible rounded-full px-1"
                >
                  View Case Study →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
