"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Official Appreciation – Angular Minds",
    description:
      "Recognised by Angular Minds leadership for consistently delivering high-quality front-end modules and achieving 100% feature acceptance on client projects.",
  },
  {
    title: "Programming Foundation Fundamentals – LinkedIn Learning",
    description:
      "Completed core programming fundamentals, strengthening problem-solving, control flow, and data structure basics.",
  },
  {
    title: "Introduction to Artificial Intelligence – SimpliLearn",
    description:
      "Covered key AI concepts, typical ML workflows, and where AI fits into real-world products.",
  },
  {
    title: "Entrepreneurship Development",
    description:
      "Participated in an entrepreneurship development program focused on product thinking, experimentation, and execution.",
  },
  {
    title: "Project Competition Recognition",
    description:
      "Recognised for participation and performance in academic project competitions, highlighting applied work beyond the classroom.",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-scroll-mt space-y-5 rounded-[var(--radius-xl)] bg-surface/95 p-6 shadow-subtle ring-1 ring-border-subtle/70 sm:p-8 lg:p-10"
    >
      <div className="space-y-2">
        <h2
          id="certifications-heading"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
        >
          Certifications & Recognitions
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-[15px]">
          A few highlights that reflect continuous learning, recognition for delivered work, and
          curiosity beyond day-to-day engineering.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.55, ease: "easeOut" }}
            className="rounded-2xl border border-border-subtle/80 bg-background/95 p-4 text-sm text-muted-foreground shadow-subtle transition-all duration-300 ease-out"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-xs sm:text-[13px]">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
