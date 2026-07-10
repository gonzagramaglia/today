# 🗓️ Hoy & Today

**Your privacy-first, local personal dashboard.**

"Hoy & Today" is a minimalist productivity hub designed to keep your focus sharp and your data persistent. It combines smart note-taking, daily task tracking, and quick navigation in a clean, high-performance interface — all running locally in the browser with zero server-side data storage. A built-in emoji/symbol collection, Twitch emote browser, and arcade minigame round out the experience.

---

## ✨ Key Features

### 📝 Smart Notes
- **Local Storage**: Your notes and tasks are stored securely on your local device.
- **Auto-Preservation**: A fresh note is automatically generated whenever you clear your workspace.
- **Rich Formatting**: Markdown support (`*bold*`, `_italics_`) and automated link detection.
- **Emoji Support**: Native emoji integration via quick-insert shortcuts.
- **Universal Attachments**:
  - **Smart Grid**: Automatically manages layouts for up to 4 images.
  - **File Previews**: Interactive buttons for PDF and diverse document types in the note footer.
  - **Lightbox Preview**: High-quality fullscreen image viewer.
  - **Drag & Drop**: Seamlessly attach media by dropping files onto your workspace.

### ✅ Focus-Driven Tasks
- **Focus Mode**: Active task creation fades out distractions to keep you in the zone.
- **Daily Reset**: Daily tasks are automatically unchecked every midnight (Argentina Time 🇦🇷) to start fresh.
- **Safe Management**: Multi-step confirmation for deletions to prevent data loss.



### 🧭 Navigation & Shortcuts
- **Shortcut Hub**: Dynamic, user-configurable shortcuts with auto-loading favicons.
- **Animated Loaders**: Smooth pulse-loading states for remote data fetching.
- **Floating Links**: Quick access to Home, Emojis and Minigame.

### 😎 Emojis (Built-in Symbol Collection)
A fast, accessible, and global collection of emojis and symbols for quick copy and pasting.
- **🌐 Internationalization**: Seamless toggle between Spanish 🇪🇸 and English 🇺🇸.
- **🔎 Smart Search**: Find emojis by Name (e.g., "Rocket"), Category (e.g., "Symbols"), or Semantic tags (e.g., #Math, #Office).
- **📋 Instant Copy**: One-click copy with immediate visual feedback.
- **📂 Organized Library**: Structured categories for Emojis, Expressions, Letters, and Symbols.

### 😎 Emotes (Twitch Emote Collection)
A dedicated page to browse and copy Twitch emote names from your favorite channels.
- **📋 Instant Copy**: One-click copy of the emote's Twitch name with visual feedback.
- **🔎 Smart Search**: Find emotes by name, Twitch name, or semantic tags.
- **🔗 Channel Links**: Each emote links directly to its Twitch channel.
- **🎨 Channel Attribution**: Visual badge showing which channel owns each emote.


### 🎮 Antipala Pro (Built-in Minigame)
A high-stakes arcade survival runner integrated directly into the dashboard.
- **Custom Character**: Play as a hand in a grabbing position dodging shovels.
- **Multiple Modes**: Choose between **Classic** (original experience) and **Insane** (enhanced challenge with horizontal movement).
- **Combat System**: In Insane Mode, use the **Spacebar** to charge and shoot rocks to destroy destructible obstacles.
- **Invincible Cops**: Face cops that block your projectiles and must be jumped over.
- **Weekly Leaderboard**: Compete for the best score of the week—high scores automatically reset every Friday at 23:59.
- **Controls**: Jump using Spacebar (Classic), 'W' key, or Arrow Up. Move with A/D (Insane).

---

## 🛠️ Technology Stack

| Component | Technology |
| :--- | :--- |
| **Framework** | [**Next.js 16**](https://nextjs.org/) |
| **State & Flow** | [**React 19**](https://react.dev/) |
| **Styling** | [**Tailwind CSS 4**](https://tailwindcss.com/) |
| **Database** | Local Storage |
| **Type Safety** | [**TypeScript**](https://www.typescriptlang.org/) |
| **Icons** | [**Lucide React**](https://lucide.dev/) |
| **Web Typography** | [**Geist Sans/Mono**](https://vercel.com/font) |
| **Testing** | [**Vitest**](https://vitest.dev/) + [**Testing Library**](https://testing-library.com/) |
| **Code Review** | [**CodeRabbit**](https://coderabbit.ai/) |
| **Commit Standards** | [**Commitlint**](https://commitlint.js.org/) + [**Husky**](https://typicode.github.io/husky/) |

---

## 🧪 Testing & Quality

Unit tests run with **Vitest** and **React Testing Library** under a jsdom environment.

```bash
yarn test              # run all tests
yarn test:coverage     # run tests with coverage report
```

- **Coverage thresholds**: 80% minimum on statements, branches, functions, and lines.
- **Scope**: Contexts, hooks, i18n translations, data integrity, and UI components.
- **Conventional Commits**: Enforced via Commitlint + Husky `commit-msg` hook.
- **Automated Code Review**: CodeRabbit reviews every non-draft PR against `main`.

---

## 📦 Extensions (Recommended)
Enhance your flow with these productivity tools:
- **[New Tab Redirect](https://chromewebstore.google.com/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna)**: Set _Hoy & Today_ as your default dashboard.
- **[Just Focus](https://chromewebstore.google.com/detail/just-focus/gefaddaengbodpiobpbgblajdboalmgc)**: Eliminate distractions during deep work sessions.
- **[Malwarebytes Browser Guard](https://chromewebstore.google.com/detail/malwarebytes-browser-guar/ihcjicgdanjaechkgeegckofjjedodee)**: Privacy focused ad & tracker blocking.

---

Made with 💛 by [**Gonza**](https://gonzagramaglia.github.io)