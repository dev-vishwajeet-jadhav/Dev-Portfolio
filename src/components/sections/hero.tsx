"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HERO_PHRASES = [
  "Vishwajeet Jadhav",
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "Angular & React Specialist",
  "AI/ML-Driven Problem Solver",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = HERO_PHRASES[phraseIndex];

    const isDoneTyping = !isDeleting && displayedText === fullText;
    const isDoneDeleting = isDeleting && displayedText === "";

    let timeout: number | undefined;

    if (isDoneTyping) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1300);
    } else if (isDoneDeleting) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
      }, 260);
    } else {
      const nextLength = displayedText.length + (isDeleting ? -1 : 1);
      const delay = isDeleting ? 55 : 95;
      timeout = window.setTimeout(() => {
        setDisplayedText(fullText.slice(0, nextLength));
      }, delay);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="section-scroll-mt relative overflow-hidden rounded-[var(--radius-xl)] bg-surface/95 px-6 py-10 shadow-soft ring-1 ring-border-subtle/70 sm:px-10 sm:py-14 lg:px-14 lg:py-16 glass-surface"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
        <div className="absolute -left-40 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle/70 bg-background/80 px-3 py-1 text-xs text-muted-foreground shadow-subtle backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Full-stack engineer available for product-focused roles & collaborations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.06, duration: 0.65, ease: "easeOut" }}
            className="space-y-3"
          >
            <h1
              id="hero-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl pb-1"
            >
              Hi, I&apos;m
              <span className="ml-2 inline-block bg-gradient-to-r from-accent via-accent-alt to-accent bg-clip-text text-transparent">
                {displayedText}
              </span>
            </h1>
             <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
              Full-Stack Developer specialising in <span className="font-medium text-foreground">MERN</span>,
              <span className="font-medium text-foreground"> Python</span>,
              <span className="font-medium text-foreground"> JavaScript</span>, and
              <span className="font-medium text-foreground"> AI/ML</span>. I design and ship
              production-grade experiences that balance clean architecture with meticulous detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <a
              href="https://docs.google.com/document/d/14ySc_Yjagm8ik9qITqNZ6dMH8QadxiJ6_74Dzbo5dqg/edit?usp=sharing"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle/80 bg-background/90 px-4 py-2 text-xs font-medium text-foreground shadow-subtle transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
            >
              Let&apos;s Connect
            </a>
            <p className="w-full text-xs text-muted-foreground sm:w-auto">
              React · Next.js · Angular · Node.js · Python · AI/ML
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
          className="mt-4 flex items-center justify-center lg:mt-0"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-[1.75rem] border border-border-subtle/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-soft">
            <div className="absolute inset-0 opacity-60">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(148,163,184,0.4),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.32),transparent_45%),radial-gradient(circle_at_0%_100%,rgba(16,185,129,0.32),transparent_55%)]" />
            </div>
            <div className="relative flex h-full flex-col justify-between p-4 text-xs text-slate-100">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-900/70 px-2 py-0.5 text-[10px] font-medium text-slate-200">
                  Full-Stack
                </span>
                <span className="text-[10px] text-slate-300">MERN · Python</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Selected Focus
                </p>
                <p className="mt-1 text-xs font-medium text-slate-100">
                  Building calm, resilient systems with elegant interfaces.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
