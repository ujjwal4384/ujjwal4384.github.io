# AGENTS.md

Single-page React portfolio (Ujjwal Chitransh). Vite + React 18 + TypeScript + Tailwind v3 + shadcn/ui.

## Commands

- `npm run dev` — dev server on **port 8080** (not Vite's default 5173)
- `npm run lint` — ESLint (`eslint .`); `@typescript-eslint/no-unused-vars` is off
- `npm test` — Vitest (jsdom, globals enabled, setup at `src/test/setup.ts`); tests are `src/**/*.{test,spec}.{ts,tsx}`
- `npm run build` — production build to `dist/`
- `npm run deploy` — runs build, then `gh-pages -d dist` (publishes GitHub Pages)
- No `typecheck` script; `strict` is disabled in all tsconfigs

Use **npm**, not bun (both `bun.lock` and `package-lock.json` exist, but all scripts and CI-style flow assume npm).

## Structure

- Entrypoint: `src/main.tsx` → `src/App.tsx` → `src/pages/Index.tsx` (the only real page; `NotFound.tsx` is a catch-all route)
- `src/pages/Index.tsx` renders one section component per anchor (Navbar, Hero, Education, Experience, etc.) — no router between them
- **Content lives inline in the section components** (e.g. the `experiences` array inside `src/components/ExperienceSection.tsx`). There is no `src/data/` directory despite what README says. To change portfolio content, edit the component.
- `src/components/ui/*` are shadcn-generated primitives; don't hand-modify them.
- Path alias `@/*` → `./src/*` (configured in Vite, Vitest, and tsconfig).

## Conventions

- Theme colors are HSL CSS vars in `src/index.css` (including custom `--surface`, `--glow`, `--highlight`) mapped through `tailwind.config.ts`; Tailwind `darkMode` is `class`.
- Resume buttons link to a Google Drive URL (in `HeroSection.tsx` and `Navbar.tsx`), not to the repo PDF.
- `dist/` is gitignored; deployment relies on the GitHub Pages **user-site root** (`ujjwal4384.github.io`), so Vite `base` stays unset.
- `lovable-tagger` is injected only in development mode via `vite.config.ts`.
