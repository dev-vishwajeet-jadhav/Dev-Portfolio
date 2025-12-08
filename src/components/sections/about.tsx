"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-scroll-mt space-y-6 rounded-[var(--radius-xl)] bg-surface/95 p-6 shadow-subtle ring-1 ring-border-subtle/70 sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex-1 space-y-3">
          <h2
            id="about-heading"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
          >
            About
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
          >
            I&apos;m a full-stack engineer with around 1.6 years of hands-on experience
            designing, implementing, and shipping production-grade web applications.
            I work across React, Angular, Node.js, and Python, with a strong focus on
            clean architecture, predictable data flows, and performance from UI to API.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.05, duration: 0.55, ease: "easeOut" }}
            className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
          >
            Recently, I&apos;ve delivered and evolved production systems at Weavelinx and Angular
            Minds, tightening Core Web Vitals, raising automated test coverage, and
            improving developer experience through cleaner abstractions and tooling.
            I enjoy taking end-to-end ownership—from clarifying problem statements and
            designing flows to hardening edge cases in QA and monitoring releases in
            production alongside design, product, and QA.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 rounded-[1.5rem] border border-border-subtle/70 bg-background/80 p-4 text-xs text-muted-foreground shadow-subtle transition-all duration-300 ease-out"
        >
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Highlights
          </h3>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2">
              <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Built and shipped React and Angular applications end-to-end, from
                component architecture and state management to deployment pipelines,
                with clear impact on performance and user experience.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Strong testing mindset with hands-on unit and E2E testing (Jasmine, Karma),
                using coverage, regression trends, and CI feedback to keep releases stable
                and catch issues before they reach users.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Comfortable working in agile, product-focused teams where UX quality,
                reliability, and iteration speed all matter—balancing quick delivery with
                maintainable, production-ready code.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
