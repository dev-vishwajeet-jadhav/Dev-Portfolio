"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle({
  currentTheme,
}: {
  currentTheme: "light" | "dark";
}) {
  const { setTheme } = useTheme();
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activate light theme" : "Activate dark theme"}
      className="relative flex h-8 w-14 items-center rounded-full bg-surface/90 p-1 text-[10px] text-muted-foreground shadow-subtle ring-offset-background transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
    >
      <span className="z-10 flex-1 text-center">L</span>
      <span className="z-10 flex-1 text-center">D</span>
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="absolute inset-y-1 w-1/2 rounded-full bg-accent shadow-sm"
        style={{ left: isDark ? "50%" : "0%" }}
      />
    </button>
  );
}
