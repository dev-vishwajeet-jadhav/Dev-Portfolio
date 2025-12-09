"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return;

    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-scroll-mt space-y-5 rounded-[var(--radius-xl)] bg-surface/95 p-6 shadow-subtle ring-1 ring-border-subtle/70 sm:p-8 lg:p-10"
    >
      <div className="space-y-2">
        <h2
          id="contact-heading"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
        >
          Contact
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-[15px]">
          For roles, collaborations, or consulting, feel free to reach out. I usually respond
          within 24–48 hours.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr),minmax(0,0.9fr)]">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4 rounded-2xl border border-border-subtle bg-background p-4 text-sm shadow-subtle transition-all duration-300 ease-out"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="h-9 w-full rounded-lg border border-border-subtle/80 bg-surface px-3 text-sm outline-none ring-offset-background focus-visible:ring-focus-visible"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-9 w-full rounded-lg border border-border-subtle/80 bg-surface px-3 text-sm outline-none ring-offset-background focus-visible:ring-focus-visible"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-lg border border-border-subtle/80 bg-surface px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-focus-visible"
            />
          </div>
          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible disabled:cursor-not-allowed disabled:opacity-80"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-xs text-muted-foreground">Thank you — your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-500">Something went wrong. Please try again or email me directly.</p>
            )}
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-3 rounded-2xl border border-border-subtle/80 bg-background/90 p-4 text-sm shadow-subtle transition-all duration-300 ease-out"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Other Channels
          </h3>
          <p className="text-sm text-muted-foreground">
            Prefer a different channel? Feel free to reach out directly.
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <a
              href="mailto:vishwajeet0097jadhav@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle/80 bg-background px-3 py-1.5 text-xs font-medium hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/vishwajeet-jadhav7/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle/80 bg-background px-3 py-1.5 text-xs font-medium hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dev-vishwajeet-jadhav"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle/80 bg-background px-3 py-1.5 text-xs font-medium hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-focus-visible"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
