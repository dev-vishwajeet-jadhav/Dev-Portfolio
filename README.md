# Vishwajeet Jadhav – Full‑Stack Developer Portfolio

A modern, production‑ready portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Overview

This site showcases my work as a full‑stack developer: selected projects, tech stack, experience, and a small blog section. The layout is intentionally clean, with subtle animations and a focus on readability.

## Main Sections

- **Hero** – intro, role, and primary CTAs (Download CV, Let's Connect)
- **About** – concise bio + highlights
- **Projects** – selected projects with case‑study pages
- **Tech Stack** – core and supporting technologies
- **Blogs** – separate `/blogs` page with image-based cards
- **Contact** – form + social links

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion

## Features

- **Responsive layout** tuned for desktop and mobile.
- **Sticky header** with smooth section navigation.
- **Typewriter hero** headline with rotating titles.
- **Project case studies** via `/projects/[slug]`.
- **Blogs page** with full‑image cards and subtle hover effects.
- **Contact form** with basic validation.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```


## Build

```bash
npm run build
npm start
```

## Project Structure (high level)

- `src/app/page.tsx` – main landing page (all sections).
- `src/app/blogs/page.tsx` – blogs listing page.
- `src/app/projects/[slug]/page.tsx` – individual project pages.
- `src/components/layout` – header, footer, theme shell.
- `src/components/sections` – hero, about, projects, tech, education, certs, contact.
- `src/lib/projects.ts` – project data used by the Projects section and case studies.

## Deployment

This is a standard Next.js app and can be deployed to any Next‑compatible host (Vercel, Netlify, etc.).

- **Vercel (recommended):** import this GitHub repo, keep the default settings (`npm run build`, output `.next`), and deploy.




