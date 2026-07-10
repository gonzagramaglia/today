# Architecture

## Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| Framework | Next.js 16 | Static site generation, file-based routing |
| UI | React 19 | Component rendering and state management |
| Styling | Tailwind CSS 4 | Utility-first CSS with design tokens |
| Type Safety | TypeScript | Static type checking across the codebase |
| Storage | Local Storage | Client-side persistence for all user data |
| Auth (optional) | Supabase | OAuth + cloud sync (currently minimal) |
| Typography | Geist Sans / Mono | Web fonts from Vercel |
| Icons | Lucide React | Icon library |
| Testing | Vitest + Testing Library | Unit tests with jsdom environment |
| Code Review | CodeRabbit | Automated AI review on PRs to main |

---

## Folder Structure

```text
/
├── AGENTS.md                 → Instructions for AI coding agents
├── CLAUDE.md                 → Redirects to AGENTS.md
├── PR_STANDARDS.md           → PR format and checklist
├── context/                  → Project documentation for agents
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-tokens.md
│   └── code-standards.md
├── app/
│   ├── layout.tsx            → Root layout (fonts, global sidebar, tasks)
│   ├── global.css            → Tailwind imports, custom animations, prose styles
│   ├── (default)/
│   │   ├── layout.tsx        → Default route group layout
│   │   ├── page.tsx          → Homepage (Spanish)
│   │   └── en/page.tsx       → Homepage (English)
│   ├── components/
│   │   ├── Home.tsx          → Main note editor and note list
│   │   ├── Header.tsx        → App header
│   │   ├── DailyTasks.tsx    → Daily task module (auto-reset)
│   │   ├── WeeklyTasks.tsx   → Weekly task module
│   │   ├── MonthlyTasks.tsx  → Monthly task module
│   │   ├── Countdown.tsx     → Countdown timer component
│   │   ├── ShortcutFloater.tsx → Configurable shortcuts panel
│   │   ├── FloatingLinks.tsx → Navigation floating buttons
│   │   ├── footer.tsx        → Page footer
│   │   ├── emojis/           → Emoji/symbol browser components
│   │   │   ├── EmojisPage.tsx
│   │   │   ├── EmotesPage.tsx
│   │   │   ├── EmoteBrowser.tsx
│   │   │   ├── symbol-browser.tsx
│   │   │   ├── floating-links.tsx
│   │   │   └── footer.tsx
│   │   └── minigame/         → Antipala Pro game components
│   │       ├── MinigamePage.tsx
│   │       ├── GameView.tsx
│   │       └── dino-game.tsx
│   ├── contexts/
│   │   ├── game-context.tsx  → Minigame state (mode, ads)
│   │   └── language-context.tsx → i18n context (es/en)
│   ├── data/
│   │   ├── i18n.ts           → Translation strings
│   │   ├── symbols.ts        → 1000+ emoji/symbol entries
│   │   └── emotes.ts         → Twitch emote entries
│   ├── hooks/
│   │   └── useAuth.ts        → Supabase auth hook
│   ├── emojis/page.tsx       → Emojis route (Spanish)
│   ├── en/emojis/page.tsx    → Emojis route (English)
│   ├── emotes/page.tsx       → Emotes route (Spanish)
│   ├── en/emotes/page.tsx    → Emotes route (English)
│   ├── minigame/page.tsx     → Minigame route (Spanish)
│   ├── en/minigame/page.tsx  → Minigame route (English)
│   └── __tests__/            → Unit tests
├── utils/supabase/           → Supabase client utilities
├── middleware.ts             → Next.js middleware (pass-through)
├── public/                   → Static assets (images, emotes, favicon)
├── vitest.config.ts          → Vitest configuration
├── vitest.setup.ts           → Test setup (jest-dom matchers)
├── commitlint.config.js      → Conventional Commits config
└── .husky/                   → Git hooks (pre-commit: build, commit-msg: commitlint)
```

---

## System Boundaries

| Folder | Owns |
|--------|------|
| `app/(default)/` | Page routes only. Render top-level page components. |
| `app/components/` | All UI logic. Self-contained components with their own state. |
| `app/contexts/` | React contexts providing global state (language, game). |
| `app/data/` | Static data exports (i18n strings, symbols, emotes). No logic. |
| `app/hooks/` | Custom hooks for side effects (auth, storage). |
| `utils/` | Third-party client setup (Supabase). |
| `context/` | Documentation for AI agents. Never imported by code. |

---

## Data Flow

All user data is stored in and read from **Local Storage**. There are no server-side data mutations for core features.

```text
User action (create note, check task, add shortcut)
  ↓
Component state updates
  ↓
Write to Local Storage (JSON serialization)
  ↓
On next page load, read from Local Storage
  ↓
Hydrate component state
```

---

## Routing Strategy

Next.js App Router with route groups:

- `(default)/` — Main app (homepage with notes)
- `emojis/` / `en/emojis/` — Symbol browser
- `emotes/` / `en/emotes/` — Twitch emote browser
- `minigame/` / `en/minigame/` — Antipala Pro game

Spanish routes are at root level, English routes under `/en/`.

---

## Invariants

Rules that must never be violated:

- Components in `app/components/` never import from page files.
- Data files (`app/data/`) are pure exports — no side effects, no imports from components.
- Context providers are only consumed via their custom hook (`useLanguage`, `useGame`).
- All persistent state goes through Local Storage — never use cookies or session storage for user data.
- The app must work fully offline once loaded (no runtime API calls for core features).
- Test files live in `app/__tests__/` and are excluded from the Next.js TypeScript build.
