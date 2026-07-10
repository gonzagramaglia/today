# Project Overview

**Project Name:** Hoy & Today
**URL:** https://hoy.today
**Type:** Privacy-first local personal dashboard

---

## What is Hoy & Today?

A minimalist productivity hub that keeps your focus sharp and your data persistent. It combines smart note-taking, daily/weekly/monthly task tracking, countdown timers, configurable shortcuts, a built-in emoji/symbol collection, and a minigame — all in a clean, high-performance interface.

---

## Core Principles

1. **Privacy First** — All user data lives in Local Storage. No accounts required, no data leaves the browser.
2. **Minimalist UI** — Clean, distraction-free interface with a subtle wallpaper background.
3. **Bilingual** — Full Spanish 🇪🇸 and English 🇺🇸 support across the Emojis section.
4. **Self-contained** — Everything runs client-side. The app is a static Next.js export with no external API dependencies for core features.

---

## Key Features

| Feature | Description |
|---------|-------------|
| Smart Notes | Markdown support, auto-preservation, emoji integration, drag & drop attachments |
| Daily Tasks | Auto-reset every midnight (Argentina Time), focus mode, multi-step deletion |
| Weekly Tasks | Persistent weekly checklist |
| Monthly Tasks | Persistent monthly checklist |
| Countdowns | Up to 3 configurable countdown timers |
| Shortcut Hub | User-configurable shortcuts with auto-loading favicons, drag reordering |
| Emojis | 1000+ symbols organized by category with smart search and instant copy |
| Emotes | Twitch emote collection from NattPitt channel |
| Antipala Pro | Built-in arcade minigame with Classic and Insane modes |

---

## Target Audience

Anyone who wants a fast, private, local productivity dashboard — ideally set as their browser's new tab page.

---

## Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (static export) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript |
| Storage | Local Storage (browser) |
| Auth (optional) | Supabase (for future cloud sync) |
| Typography | Geist Sans / Mono |
| Icons | Lucide React |
| Testing | Vitest + React Testing Library |
| Code Review | CodeRabbit |
| Commit Standards | Commitlint + Husky |
