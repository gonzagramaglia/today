# Code Standards

Implementation rules and conventions for the Hoy & Today project. Follow these in every session to prevent pattern drift.

---

## Engineering Mindset

- **Think before implementing** — understand what exists before writing new code
- **Read context files first** — verify against `architecture.md` and `project-overview.md`
- **Scope is sacred** — only build what the current task requires
- **Clean over clever** — simple, readable code that any developer can follow
- **One thing at a time** — complete one feature fully before moving to the next

---

## Git & PR Workflow

1. **Feature Branches:** Create a branch for each feature or fix. Use naming from `PR_STANDARDS.md`:
   - `feat/emojis-search-filter`
   - `fix/daily-tasks-reset`
   - `test/coverage-improvements`

2. **Commits:** Follow Conventional Commits (enforced by Commitlint):
   - `feat(emojis): add search by semantic tags`
   - `fix(tasks): correct midnight reset timezone`
   - `refactor(shortcuts): extract drag logic to hook`

3. **Pre-commit:** Husky runs `yarn build` on every commit. If it fails, the commit is rejected.

4. **Commit-msg:** Husky runs `commitlint` to validate the commit message format.

5. **PR:** Open against `main`. CodeRabbit auto-reviews non-draft PRs.

---

## TypeScript

- Use `const` by default — only `let` when reassignment is necessary
- Prefer explicit types for function parameters and return values
- Use `type` for object shapes — use `interface` only for component props that may be extended
- Avoid `any` — use `unknown` and narrow the type when needed
- All async operations must have proper error handling

---

## React & Next.js Conventions

- All components are **functional components** using hooks
- Use **named exports** for components (not default exports), except for page files which use default exports per Next.js convention
- Client components must have `"use client"` at the top
- Keep page files thin — delegate to components in `app/components/`
- Contexts are consumed only via their custom hooks (`useLanguage`, `useGame`)

---

## Component Structure

Every component follows this order:

```typescript
"use client"; // if needed

// 1. External imports
import { useState } from "react";

// 2. Internal imports
import { useLanguage } from "../contexts/language-context";

// 3. Type definitions
type Props = {
  lang: "es" | "en";
};

// 4. Component
export function ComponentName({ lang }: Props) {
  // state
  // derived values
  // handlers
  // return JSX
}
```

---

## File Naming

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `DailyTasks.tsx`, `EmojisPage.tsx` |
| Utilities / hooks | camelCase | `useAuth.ts`, `language-context.tsx` |
| Data files | camelCase | `symbols.ts`, `i18n.ts` |
| Pages | `page.tsx` (Next.js convention) | `app/emojis/page.tsx` |
| Tests | `*.test.{ts,tsx}` | `footer.test.tsx` |

**Legacy exceptions:** The following files use kebab-case or lowercase instead of PascalCase. They predate this standard and are kept as-is to avoid unnecessary churn:
- `app/components/footer.tsx`
- `app/components/emojis/symbol-browser.tsx`
- `app/components/emojis/floating-links.tsx`
- `app/components/emojis/footer.tsx`

---

## Styling

- Use Tailwind utility classes exclusively — no inline `style` objects unless required for dynamic values
- Follow the token palette from `ui-tokens.md`
- Never hardcode hex colors in components — use Tailwind classes
- Responsive design: mobile-first, sidebar shows at `lg` breakpoint

---

## Data & State

- All persistent state uses **Local Storage** via JSON serialization
- React state (`useState`) for ephemeral UI state
- React Context for shared state across component trees (language, game mode)
- Data files in `app/data/` are pure exports — no side effects

---

## Testing

- Tests live in `app/__tests__/`
- Use Vitest + React Testing Library
- Mock external dependencies (Supabase, next/navigation)
- Test contexts via consumer components
- Coverage thresholds: 80% on statements, branches, functions, and lines
- Test files are excluded from the Next.js TypeScript build (`tsconfig.json`)

---

## What NOT To Do

- Never import from page files in components
- Never use `localStorage` directly in data files — only in components/hooks
- Never add runtime API calls for core features (the app must work offline)
- Never commit without the build passing
- Never push directly to `main`
