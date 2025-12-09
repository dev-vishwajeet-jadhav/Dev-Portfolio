"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
};

const posts: BlogPost[] = [
  {
    slug: "building-production-ready-portfolios",
    title: "Designing a Production-Ready Developer Portfolio",
    summary:
      "How I think about structure, performance, and UX when building portfolio sites with Next.js.",
    tags: ["Next.js", "UX", "Performance"],
    image: "/Nature2.jpg",
  },
  {
    slug: "improving-core-web-vitals",
    title: "Improving Core Web Vitals in Real Projects",
    summary:
      "Practical tactics I used to tighten Core Web Vitals in React and Angular applications.",
    tags: ["Core Web Vitals", "React", "Angular"],
    image: "/Nature1.jpg",
  },
  {
    slug: "ai-assisted-tools",
    title: "Using AI-Assisted Tools Without Losing Engineering Discipline",
    summary:
      "Thoughts on combining AI tooling with solid testing, reviews, and clean architecture.",
    tags: ["AI/ML", "Engineering", "Productivity"],
    image: "/Tech1.jpg",
  },
];

export default function BlogsPage() {
  return (
    <section
      id="blogs"
      className="section-scroll-mt space-y-5 rounded-[var(--radius-xl)] bg-surface/95 p-6 shadow-subtle ring-1 ring-border-subtle/70 sm:p-8 lg:p-10"
    >
      <div className="space-y-2">
        <h1 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Blogs
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-[15px]">
          A space where I write about my learnings, experiences, and the things that inspire me — from tech and personal growth to nature and everyday life.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
            className="group relative flex h-56 overflow-hidden rounded-2xl border border-border-subtle/80 bg-background/95 text-sm text-muted-foreground shadow-subtle transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft sm:h-60"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={640}
              height={320}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/5" />

            <div className="relative z-10 flex h-full flex-col justify-between p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {`Blog ${String(index + 1).padStart(2, "0")}`}
              </p>

              <div className="space-y-1.5">
                <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-[17px]">
                  {post.title}
                </h2>
                <p className="max-w-xl text-xs sm:text-[13px]">
                  {post.summary}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
