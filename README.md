# jtrotta.dev

Personal site for John Trotta — Chief Technology & Security Officer.

Built with Next.js 14 and Tailwind CSS. Static export, deployed to GitHub Pages via GitHub Actions on push to `main`.

## Local development

```bash
bun install
bun run dev
```

Dev server runs at http://localhost:3050.

## Build

```bash
bun run build
```

Static output is written to `out/`. The deploy workflow at `.github/workflows/deploy.yml` runs this same build and publishes to Pages.
