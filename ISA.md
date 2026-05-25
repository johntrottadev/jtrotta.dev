---
task: "Build personal resume website to help land a job"
slug: 20260525-resume-website
project: website
effort: advanced
effort_source: classifier
phase: complete
progress: 34/34
mode: interactive
started: 2026-05-25T01:30:00Z
updated: 2026-05-25T01:30:00Z
---

## Problem

John Trotta is a CTO-level technology executive with 17 years of experience, CISSP certification, and a track record of zero major security incidents — but has no personal web presence beyond a LinkedIn profile. Without a polished, easily-shareable resume website, recruiters and hiring managers who Google his name or receive his application have no single destination that showcases his full professional profile, projects, and technical credibility. The resume PDF works for formal submissions but doesn't differentiate in a competitive VP/CTO job market where technical leaders are expected to demonstrate their craft.

## Vision

A recruiter Googles "John Trotta" and lands on a clean, fast, authoritative single-page site that immediately communicates "senior technology leader who ships." The site loads in under a second, looks sharp on mobile, and presents his 17-year arc from business analyst to CTO alongside concrete proof points (99.99% uptime, zero incidents, 10+ clean audits). His GitHub link signals he still builds. The overall impression: this person runs real infrastructure at scale and has the certs to prove it.

## Out of Scope

- No blog or content management system — static content only for v1.
- No backend, database, or authentication — purely static site.
- No contact form with server-side processing — mailto link and LinkedIn suffice.
- No custom domain setup — Vercel default domain is fine for v1; custom domain is a follow-up.
- No analytics or tracking scripts in v1.
- No dark mode toggle — ship one polished theme.

## Principles

- First impression wins: the site must look executive-grade in under 2 seconds.
- Content density over decoration: recruiters scan, they don't read prose. Lead with proof points.
- The site itself is a credential: clean code, fast load, modern stack signals technical currency.
- Mobile-first: recruiters often check candidates on their phone between meetings.

## Constraints

- TypeScript + Next.js 14 (App Router) + Tailwind CSS — John's standard stack.
- bun as package manager — never npm/npx.
- Deployable to Vercel with zero configuration.
- Single-page layout — no routing beyond `/`.
- All content hardcoded in TypeScript data files — no CMS, no MDX.
- No external API calls at runtime — fully static export.
- Accessible: WCAG 2.1 AA contrast ratios.

## Goal

Ship a polished, mobile-responsive single-page resume website at the Vercel default URL that presents John Trotta's full professional profile (experience, education, certifications, skills, projects, GitHub link, contact info) in a way that impresses hiring managers and recruiters for VP/CTO-level infrastructure and security roles.

## Criteria

### Project Setup

- [x] ISC-1: `bun install` completes with exit 0 and produces a `node_modules/` directory.
- [x] ISC-2: `bun run build` exits 0 with zero TypeScript errors.
- [x] ISC-3: `bun run dev` starts a dev server that returns HTTP 200 on `localhost:3000`.
- [x] ISC-4: `package.json` uses `bun` as the package manager, not npm.

### Hero Section

- [x] ISC-5: The page contains "John Trotta" in an `h1` element visible above the fold.
- [x] ISC-6: The subtitle "VP of Technology | Infrastructure and Security Leadership" is visible below the name.
- [x] ISC-7: A professional summary paragraph (the resume's executive summary) is present below the subtitle.
- [x] ISC-8: Links to LinkedIn (`linkedin.com/in/johntrotta1`) and GitHub (`github.com/johntrottadev`) are present and clickable in the hero.
- [x] ISC-9: Contact email `johntrottadev@gmail.com` is present as a mailto link.

### Experience Section

- [x] ISC-10: A section headed "Experience" exists on the page.
- [x] ISC-11: The CTO role at RTR Financial Services (Aug 2019 – Present) is displayed with title, company, dates, and location.
- [x] ISC-12: At least 5 CTO bullet points from the resume are rendered.
- [x] ISC-13: The IT Manager role (Feb 2017 – Aug 2019) is displayed with title, company, dates.
- [x] ISC-14: Earlier roles (Systems Engineer, Support Technician, Business Analyst) are listed with title, company, and dates.

### Education & Certifications

- [x] ISC-15: An "Education" section shows "CUNY Baruch College, Zicklin School of Business" with the BBA degree.
- [x] ISC-16: A "Certifications" section lists all four certs: CISSP, VCP, MCSE, CCNA.
- [x] ISC-17: Each certification includes the full credential name and specialization area.

### Skills / Tech Stack

- [x] ISC-18: A "Skills" or "Technologies" section exists grouping technical competencies.
- [x] ISC-19: Skills are organized into logical categories (Security, Infrastructure, Cloud, Automation, etc.).

### Projects / GitHub

- [x] ISC-20: A section links to GitHub profile `github.com/johntrottadev` with a call-to-action.
- [x] ISC-21: At least 2 notable projects from the resume or GitHub are highlighted with short descriptions.

### Contact Section

- [x] ISC-22: A footer or contact section includes email, LinkedIn, and GitHub links.
- [x] ISC-23: The contact section includes location "NY / NJ".

### Visual Design & Responsiveness

- [x] ISC-24: The page renders without horizontal scroll at viewport width 375px (mobile).
- [x] ISC-25: The page renders without horizontal scroll at viewport width 1440px (desktop).
- [x] ISC-26: Text contrast ratios meet WCAG 2.1 AA (4.5:1 for body text).
- [x] ISC-27: The page uses a consistent color scheme (no more than 3 primary colors).
- [x] ISC-28: Antecedent: Typography uses a professional sans-serif font appropriate for executive-level presentation.

### Performance

- [x] ISC-29: `bun run build` produces a static export under 500KB total (HTML + CSS + JS).
- [x] ISC-30: No external font files are loaded (use system font stack or bundled).

### Code Quality

- [x] ISC-31: Resume data is stored in a separate TypeScript data file, not inline in components.
- [x] ISC-32: The project has a clean `tsconfig.json` with strict mode enabled.

### Anti-criteria

- [x] ISC-33: Anti: No placeholder or lorem ipsum text appears anywhere on the rendered page.
- [x] ISC-34: Anti: No broken links (all `href` values resolve to valid targets or mailto).

## Test Strategy

| ISC | Type | Check | Threshold | Tool |
|-----|------|-------|-----------|------|
| ISC-1 | command | `bun install` exit code | 0 | Bash |
| ISC-2 | command | `bun run build` exit code + stderr | 0 errors | Bash |
| ISC-3 | command | `curl -s -o /dev/null -w '%{http_code}' localhost:3000` | 200 | Bash |
| ISC-4 | file | grep `packageManager` in package.json | contains "bun" | Grep |
| ISC-5 | content | grep for `<h1` containing "John Trotta" in page output | present | Bash |
| ISC-6 | content | grep for subtitle text in source | present | Grep |
| ISC-7 | content | grep for "17 years" or executive summary text | present | Grep |
| ISC-8 | content | grep for linkedin and github URLs | both present | Grep |
| ISC-9 | content | grep for mailto:johntrottadev | present | Grep |
| ISC-10 | content | grep for "Experience" heading | present | Grep |
| ISC-11 | content | grep for "Chief Technology Officer" and "RTR Financial" | present | Grep |
| ISC-12 | content | count CTO bullet points in data file | ≥5 | Grep |
| ISC-13 | content | grep for "IT Manager" and dates | present | Grep |
| ISC-14 | content | grep for "Systems Engineer", "Support Technician", "Business Analyst" | all present | Grep |
| ISC-15 | content | grep for "Baruch College" and "Zicklin" | present | Grep |
| ISC-16 | content | grep for CISSP, VCP, MCSE, CCNA | all four present | Grep |
| ISC-17 | content | grep for cert specialization text | present | Grep |
| ISC-18 | content | grep for skills section heading | present | Grep |
| ISC-19 | content | count skill category groupings | ≥3 categories | Grep |
| ISC-20 | content | grep for github.com/johntrottadev link | present | Grep |
| ISC-21 | content | count project entries | ≥2 | Grep |
| ISC-22 | content | grep for contact section with email + social links | all present | Grep |
| ISC-23 | content | grep for "NY" in contact area | present | Grep |
| ISC-24 | visual | viewport 375px, no horizontal overflow | no scrollbar | Interceptor |
| ISC-25 | visual | viewport 1440px, no horizontal overflow | no scrollbar | Interceptor |
| ISC-26 | visual | contrast check on primary text colors in Tailwind config | ≥4.5:1 | Bash |
| ISC-27 | visual | count distinct primary colors in Tailwind config | ≤3 | Read |
| ISC-28 | visual | font-family declaration in globals.css or layout | professional sans-serif | Read |
| ISC-29 | command | measure build output size | <500KB | Bash |
| ISC-30 | file | grep for external font imports | none found | Grep |
| ISC-31 | file | separate data file exists with resume content | exists | Read |
| ISC-32 | file | tsconfig.json strict mode | true | Read |
| ISC-33 | content | grep for "lorem ipsum" or "placeholder" in rendered output | not found | Grep |
| ISC-34 | content | validate all href values in source | no broken links | Grep |

## Features

| Name | Description | Satisfies | Depends On | Parallelizable |
|------|-------------|-----------|------------|----------------|
| project-scaffold | Next.js 14 + Tailwind CSS project init with bun | ISC-1, ISC-2, ISC-3, ISC-4, ISC-32 | — | yes |
| resume-data | TypeScript data file with all resume content | ISC-31 | project-scaffold | yes |
| hero-section | Name, title, summary, social links | ISC-5, ISC-6, ISC-7, ISC-8, ISC-9 | resume-data | yes |
| experience-section | Work history with roles and bullet points | ISC-10, ISC-11, ISC-12, ISC-13, ISC-14 | resume-data | yes |
| education-certs | Education and certifications display | ISC-15, ISC-16, ISC-17 | resume-data | yes |
| skills-section | Categorized technical skills grid | ISC-18, ISC-19 | resume-data | yes |
| projects-section | GitHub link and highlighted projects | ISC-20, ISC-21 | resume-data | yes |
| contact-footer | Contact info footer with social links | ISC-22, ISC-23 | resume-data | yes |
| visual-polish | Typography, color scheme, responsive layout | ISC-24, ISC-25, ISC-26, ISC-27, ISC-28, ISC-30 | hero-section | no |
| build-verify | Static export size and code quality checks | ISC-29, ISC-33, ISC-34 | all sections | no |

## Decisions

- 2026-05-25: Chose Next.js 14 App Router + Tailwind over plain HTML — aligns with John's TypeScript-first stack and gives static export + future extensibility. Vercel deploy is zero-config.
- 2026-05-25: Single-page layout over multi-page — recruiters want one scroll, not navigation. Every section visible without clicks.
- 2026-05-25: System font stack over Google Fonts — eliminates external font loading, improves performance, avoids privacy concerns.
- 2026-05-25: Resume data in a separate .ts file — keeps content editable without touching components. Pattern from resume-data feature.
- 2026-05-25: Site positioning is intentionally broad — John is targeting multiple career paths (engineering management, security management/CISO, compliance/GRC, consulting/vCISO, Director-level at larger firms). Hero and skills sections should frame him as a technology executive with depth across security, infrastructure, and compliance rather than narrowing to a single track. Skills grouped by career-path-relevant categories: Security & Compliance, Infrastructure & Cloud, Automation & Engineering, Leadership & Strategy.
