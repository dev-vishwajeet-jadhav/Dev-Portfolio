"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  const { theme } = useTheme();

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#tech", label: "Tech" },
    { href: "/#education", label: "Education" },
    { href: "/#certifications", label: "Certs" },
    { href: "/#contact", label: "Contact" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 0.84, 0.44, 1] } }}
      className="sticky top-0 z-30 border-b border-border-subtle/60 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[var(--header-height)] items-center justify-between px-4 sm:px-6 lg:px-8 section-max-width">
        <Link href="/#hero" className="flex items-center gap-2">
          <motion.div
            whileHover={{ y: -1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex h-8 w-8 items-center justify-center rounded-2xl bg-accent-soft text-xs font-semibold text-foreground shadow-sm"
          >
            VJ
          </motion.div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium tracking-tight">
              Vishwajeet Jadhav
            </span>
            <span className="text-[11px] text-muted-foreground">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          {navItems.map((item, index) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-1 py-0.5"
              >
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05 * index,
                      duration: 0.25,
                      ease: [0.16, 0.84, 0.44, 1],
                    },
                  }}
                  whileHover={{ y: -1, opacity: 1 }}
                  className="transition-colors hover:text-foreground focus-visible:ring-focus-visible"
                >
                  {item.label}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ y: -1, boxShadow: "var(--shadow-soft)" }}
            className="hidden rounded-full border border-border-subtle bg-surface/80 px-4 py-1.5 text-xs font-medium text-foreground shadow-subtle transition focus-visible:ring-focus-visible sm:inline-flex"
          >
            Let&apos;s Connect
          </motion.a>

          <Link
            href="/blogs"
            className="inline-flex items-center rounded-full border border-border-subtle bg-surface/80 px-3 py-1 text-[11px] font-medium text-foreground shadow-subtle transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible sm:hidden"
          >
            Blogs
          </Link>

          <ThemeToggle currentTheme={theme} />
        </div>
      </div>
    </motion.header>
  );
}
