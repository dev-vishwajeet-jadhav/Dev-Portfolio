"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Savitribai Phule Pune University, Pune",
    period: "2021 – 2024",
    detail:
      "Graduated with a 9.05/10 CGPA, with a strong focus on core CS fundamentals, software engineering, and applied project work.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Maharashtra State Board of Technical Education, Pune",
    period: "2017 – 2020",
    detail:
      "Completed diploma with 85% and hands-on exposure to core CS subjects, laying the groundwork for later engineering work.",
  },
  {
    degree: "SSC (10th)",
    institution: "Maharashtra State Board, Pune",
    period: "2017",
    detail: "Secured 71.43% with strong foundations in mathematics and science.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section-scroll-mt space-y-5 rounded-[var(--radius-xl)] bg-surface/95 p-6 shadow-subtle ring-1 ring-border-subtle/70 sm:p-8 lg:p-10"
    >
      <div className="space-y-2">
        <h2
          id="education-heading"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
        >
          Education
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-[15px]">
          A steady path through computer engineering, building from fundamentals to project-based
          work that now feeds directly into how I design and ship software.
        </p>
      </div>

      <div className="space-y-3">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.55, ease: "easeOut" }}
            className="flex flex-col justify-between gap-1 rounded-2xl border border-border-subtle/80 bg-background/95 p-4 text-sm text-muted-foreground shadow-subtle transition-all duration-300 ease-out sm:flex-row sm:items-baseline"
          >
            <div>
              <h3 className="text-sm font-medium text-foreground">{item.degree}</h3>
              <p className="text-xs sm:text-[13px]">{item.institution}</p>
              <p className="mt-1 text-xs sm:text-[13px]">{item.detail}</p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground sm:mt-0">{item.period}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
