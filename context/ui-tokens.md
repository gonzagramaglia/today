# UI Tokens

Design tokens for Hoy & Today. These values define the visual language of the app. Reference this file when building or modifying UI components.

---

## Color Palette

The app uses a **light theme** with a minimal palette:

| Token | Value | Usage |
|-------|-------|-------|
| Background | `white` / `bg-white` | Page background |
| Text Primary | `text-black` | Main body text |
| Text Secondary | `text-neutral-800` | Prose paragraphs |
| Text Muted | `text-neutral-500` / `text-neutral-400` | Placeholder, secondary labels |
| Accent (links) | `#fbbf24` (amber-400) | Links inside `.prose` sections |
| Accent (external) | `#6866D6` (indigo) | Links outside prose sections |
| Selection | `#47a3f3` bg, `#fefefe` text | Text selection highlight |
| Border | `border-neutral-200` | Subtle dividers, code blocks |
| Surface | `bg-neutral-50` | Code blocks, elevated surfaces |

---

## Typography

| Element | Font | Class |
|---------|------|-------|
| Body | Geist Sans | `font-sans` (via `GeistSans.variable`) |
| Code | Geist Mono | `font-mono` (via `GeistMono.variable`) |

Both fonts are loaded as CSS variables and applied via Tailwind's font-family utilities.

---

## Spacing & Layout

| Rule | Value |
|------|-------|
| Min width | `360px` (enforced on `<html>`) |
| Content padding top | `pt-0` on mobile, `pt-8` on desktop |
| Left sidebar (desktop) | Fixed at `left-9`, `top-48`, `bottom-32`, width `w-64` |
| Sidebar visibility | Hidden on mobile, `lg:flex` on desktop |

---

## Animations

| Class | Purpose | Duration |
|-------|---------|----------|
| `.animate-occasional-bounce` | Subtle bounce for floating elements | 5s infinite |
| `.animate-spin-slow` | Slow rotation for loading states | 2s linear infinite |

---

## Component Style Rules

1. **Never hardcode colors** — Use Tailwind utility classes from this token set.
2. **Prose content** uses the `.prose` class with custom overrides in `global.css`.
3. **Links in prose** are always amber (`#fbbf24`), no underline.
4. **Links outside prose** (in sections) are indigo (`#6866D6`), no underline.
5. **Code blocks** use `bg-neutral-50` with `border-neutral-200`.
6. **Inputs** have Safari shadow removed via `-webkit-appearance: none`.
7. **Scrollbars** are hidden on `<pre>` elements (code blocks).
8. **Background wallpaper** is a fixed, full-screen image at 5% opacity behind all content.

---

## Responsive Breakpoints

The app follows Tailwind's default breakpoints:

| Breakpoint | Min-width | Usage |
|------------|-----------|-------|
| `sm` | 640px | — |
| `md` | 768px | — |
| `lg` | 1024px | Show sidebar (tasks, shortcuts, countdowns) |
| `xl` | 1280px | — |

The sidebar with Daily/Weekly/Monthly Tasks, Shortcuts, and Countdowns is only visible at `lg` and above.
