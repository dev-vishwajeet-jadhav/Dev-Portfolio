"use client";

import { motion } from "framer-motion";

const primaryStack = [
  "JavaScript / TypeScript (modern ES, async patterns)",
  "React 18 / Next.js (App Router, SSR/ISR)",
  "Angular 14+ (feature modules, RxJS)",
  "Node.js / Express (REST APIs, auth, file uploads)",
  "Python (Django, data/ML workflows)",
  "MongoDB / MySQL / SQL (schema design, querying)",
];

const secondaryStack = [
  "HTML5 / CSS3 / Tailwind / Bootstrap / Material-UI",
  "RESTful APIs, JSON payload design",
  "Firebase Auth & hosting (prototyping, auth flows)",
  "Testing with Jasmine & Karma (unit + basic E2E)",
  "CI/CD, Git, GitHub, Vercel deployments",
];

export function TechStack() {
  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="section-scroll-mt space-y-5 rounded-[var(--radius-xl)] bg-surface/95 p-6 shadow-subtle ring-1 ring-border-subtle/70 sm:p-8 lg:p-10"
    >
      <div className="space-y-2">
        <h2
          id="tech-heading"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
        >
          Stack & Focus
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-[15px]">
          I work across the stack with a focus on maintainable, well-tested systems that
          stay fast in production and feel intentional for end users and teams.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.3fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-3 rounded-2xl border border-border-subtle/80 bg-background/90 p-4 text-sm shadow-subtle transition-all duration-300 ease-out"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Core
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {primaryStack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-3 rounded-2xl border border-border-subtle/80 bg-background/90 p-4 text-sm shadow-subtle"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Also Comfortable With
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {secondaryStack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
