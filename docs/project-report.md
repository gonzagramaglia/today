# Project Report

**Project Name:** Hoy & Today
**URL:** https://hoy.today

---

## 1. Executive Summary

"Hoy & Today" is a minimalist productivity hub designed to keep your focus sharp and your data persistent. It combines smart note-taking, daily task tracking, and quick navigation in a clean, high-performance interface — all running locally in the browser with zero server-side data storage. A built-in emoji/symbol collection, Twitch emote browser, and arcade minigame round out the experience.

---

## 2. Project Overview

### 2a. Why we're building this

Productivity tools often require accounts, sync services, and internet connectivity. Hoy & Today takes the opposite approach: everything stays local, loads instantly, and works offline. It's designed to be set as your browser's new tab page for a frictionless daily workflow.

### 2b. Target Audience

Anyone who wants a fast, private, local productivity dashboard — particularly developers and power users who value speed and data ownership.

---

## 3. Key Features

### 📝 Smart Notes
- Local Storage persistence — notes and tasks stored securely on the local device.
- Auto-Preservation — a fresh note is automatically generated whenever the workspace is cleared.
- Rich Formatting — Markdown support (`*bold*`, `_italics_`) and automated link detection.
- Emoji Support — native emoji integration via quick-insert shortcuts.
- Universal Attachments:
  - Smart Grid — automatically manages layouts for up to 4 images.
  - File Previews — interactive buttons for PDF and diverse document types in the note footer.
  - Lightbox Preview — high-quality fullscreen image viewer.
  - Drag & Drop — seamlessly attach media by dropping files onto the workspace.

### ✅ Focus-Driven Tasks
- Focus Mode — active task creation fades out distractions to keep focus.
- Daily Reset — daily tasks automatically unchecked every midnight (Argentina Time 🇦🇷).
- Weekly & Monthly Tasks — persistent checklists with collapsible UI.
- Safe Management — multi-step confirmation for deletions to prevent data loss.

### ⏱️ Countdown Timers
- Up to 3 configurable countdown timers with individual collapse and persistence.

### 🧭 Navigation & Shortcuts
- Shortcut Hub — dynamic, user-configurable shortcuts with auto-loading favicons and drag reordering.
- Animated Loaders — smooth pulse-loading states for remote data fetching.
- Floating Links — quick access to Home, Emojis, Emotes, and Minigame.

### 😎 Emojis (Built-in Symbol Collection)
A fast, accessible, and global collection of 1000+ emojis and symbols for quick copy and pasting.
- Internationalization — seamless toggle between Spanish 🇪🇸 and English 🇺🇸.
- Smart Search — find emojis by name (e.g., "Rocket"), category (e.g., "Symbols"), or semantic tags (e.g., #Math, #Office).
- Instant Copy — one-click copy with immediate visual feedback.
- Organized Library — structured categories for Emojis, Expressions, Letters, and Symbols.

### 😎 Emotes (Twitch Emote Collection)
A dedicated page to browse and copy Twitch emote names from favorite channels.
- Instant Copy — one-click copy of the emote's Twitch name with visual feedback.
- Smart Search — find emotes by name, Twitch name, or semantic tags.
- Channel Links — each emote links directly to its Twitch channel.
- Channel Attribution — visual badge showing which channel owns each emote.

### 🎮 Antipala Pro (Built-in Minigame)
A high-stakes arcade survival runner integrated directly into the dashboard.
- Custom Character — play as a hand in a grabbing position dodging shovels.
- Multiple Modes — Classic (original experience) and Insane (enhanced challenge with horizontal movement).
- Combat System — in Insane Mode, use the Spacebar to charge and shoot rocks to destroy destructible obstacles.
- Invincible Cops — face cops that block projectiles and must be jumped over.
- Weekly Leaderboard — compete for the best score of the week (auto-reset every Friday at 23:59).
- Controls — jump using Spacebar (Classic), 'W' key, or Arrow Up. Move with A/D (Insane).

---

## 4. Technology Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 16 (App Router) |
| State & Flow | React 19 |
| Styling | Tailwind CSS 4 |
| Database | Local Storage |
| Type Safety | TypeScript |
| Icons | Lucide React |
| Web Typography | Geist Sans / Mono |
| Testing | Vitest + React Testing Library |
| Code Review | CodeRabbit |
| Commit Standards | Commitlint + Husky |

---

## 5. Architecture

```text
┌─────────────────────────────────────────────────────────┐
│                 Browser (Client-side)                     │
│                                                          │
│  Next.js App Router                                      │
│  ├── Pages (thin route files)                            │
│  ├── Components (all UI logic)                           │
│  ├── Contexts (language, game mode)                      │
│  ├── Data (i18n, symbols, emotes)                        │
│  └── Hooks (auth)                                        │
│                                                          │
│  Local Storage (all user data persistence)               │
└─────────────────────────────────────────────────────────┘
         │ (optional, not required for core features)
         ▼
┌─────────────────────────┐
│   Supabase (Optional)    │
│   Auth + Future Sync     │
└─────────────────────────┘
```

**Data Flow:** User interaction → Component state → Local Storage → Hydrate on next load

---

## 6. Testing

Unit tests run with **Vitest** and **React Testing Library** in a jsdom environment.

| Area | Tests |
|------|-------|
| Contexts | `game-context`, `language-context` |
| Hooks | `useAuth` |
| Data | `symbols` (integrity, no duplicates), `i18n` |
| Components | `footer` |

**Coverage thresholds:** 80% minimum (statements, branches, functions, lines).

```bash
yarn test              # run all tests
yarn test:coverage     # run with coverage report
```

---

## 7. Quality & CI

| Tool | Purpose |
|------|---------|
| Husky (pre-commit) | Runs `yarn build` — blocks commits if build fails |
| Husky (commit-msg) | Runs Commitlint — enforces Conventional Commits |
| CodeRabbit | Automated AI code review on non-draft PRs to `main` |
| Vitest | Unit tests with 80% coverage threshold |

---

## 8. Security & Privacy

- **No accounts required** — core features work without authentication
- **Local Storage only** — user data never leaves the browser
- **No external API calls** — core app is fully offline-capable
- **Supabase (optional)** — only used for future cloud sync, not required

---

## 9. Future Improvements

- Cloud sync with Supabase (opt-in) for cross-device access
- PWA support (installable, push notifications for countdowns)
- Dark mode
- Export/import data as JSON backup
- More emote channel integrations
- Pomodoro timer integration
- Note tagging and search

---

## 10. Tools Used

| Tool | Purpose |
|------|---------|
| Kiro | Primary AI development environment |
| CodeRabbit | Automated code review on PRs |
| Next.js | Framework and static site generation |
| Vitest | Unit testing framework |
