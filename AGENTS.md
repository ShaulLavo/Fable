# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` — key areas: `components/`, `hooks/`, `utils/`, `service/`, `stores/`, `context/`, `consts/`, `types/`, `themes/`, `workers/`, `assets/`.
- Entry points: `src/index.tsx`, `src/App.tsx`, `src/Main.tsx`.
- Build output: `dist/`. Static HTML: `index.html`.
- Tooling: Vite + SolidJS + TypeScript + Tailwind CSS (v4). Node stdlib shims via `vite.config.ts` (aliases `fs` to `src/node/FS.ts`).

## Build, Test, and Development Commands
- Install: `bun install` (or `npm install`).
- Dev server: `bun run dev` (or `npm run dev`) → http://app.localhost:8000 with COOP/COEP headers.
- Build: `bun run build` (or `npm run build`) → emits to `dist/`.
- Preview: `bun run serve` (or `npm run serve`) → locally serves the production build.

## Coding Style & Naming Conventions
- TypeScript: `strict: true` (see `tsconfig.json`). Prefer explicit types for public APIs.
- Formatting: Prettier (repo default settings). Run `npx prettier --write .` or `bunx prettier --write .`.
- Components: PascalCase files (`Button.tsx`), hooks: `useX.ts`, services: `X.service.ts`, constants: `UPPER_SNAKE_CASE`, utilities: camelCase.
- Tailwind: co-locate classes in `.tsx`; keep design tokens centralized in `themes/` when possible.

## Testing Guidelines
- Automated tests are not yet configured. For changes, verify via dev server and preview.
- If introducing tests, prefer Vitest + Testing Library; place files as `*.test.ts(x)` near sources.

## Commit & Pull Request Guidelines
- Commits: Imperative, concise. Prefer Conventional Commits (e.g., `feat: add OPFS write queue`, `fix: debounce file tree rename`).
- PRs: Include summary, rationale, screenshots for UI changes, and reproduction steps. Link related issues. Ensure `dev`, `build`, and `serve` succeed locally.

## Security & Configuration Tips
- Env: Store secrets in `.env` (never commit). Vite exposes `import.meta.env` only if prefixed `VITE_`.
- Cross-origin isolation: Dev runs on port 8000 with COOP/COEP for OPFS/SharedArrayBuffer; open `http://app.localhost:8000/`.
