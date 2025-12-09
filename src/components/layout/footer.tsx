"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border-t border-border-subtle/60 bg-background/80 py-6"
    >
      <div className="mx-auto flex flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8 section-max-width">
        <p>
          © {new Date().getFullYear()} Vishwajeet Jadhav. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <motion.a
            href={pathname === "/blogs" ? "#blogs" : "#hero"}
            whileHover={{ y: -1, opacity: 1 }}
            className="rounded-full px-1 hover:text-foreground focus-visible:ring-focus-visible"
          >
            Back to top
          </motion.a>
          <motion.a
            href="https://github.com/dev-vishwajeet-jadhav"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1, opacity: 1 }}
            className="rounded-full px-1 hover:text-foreground focus-visible:ring-focus-visible"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vishwajeet-jadhav7/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1, opacity: 1 }}
            className="rounded-full px-1 hover:text-foreground focus-visible:ring-focus-visible"
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
