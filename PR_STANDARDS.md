# Pull Request Standards

This document defines the standard PR format for every pull request in the Hoy & Today project.
Follow this template exactly so every PR is consistent, professional, and easy to review.

---

## Title Format

Follows Conventional Commits. Must be under 50 characters to avoid GitHub truncation.

```text
<type>(<scope>): <short description>
```

| Type | When to use |
|------|-------------|
| `feat` | New feature, page, or component |
| `fix` | Bug fix |
| `chore` | Tooling, config, dependencies |
| `refactor` | Code restructure without behaviour change |
| `test` | Adding or updating tests |
| `docs` | Documentation only |
| `ci` | CI/CD pipeline changes |
| `perf` | Performance improvements |
| `style` | Visual/CSS changes without logic changes |

**Examples:**
- `feat(emojis): add country flags and arroba symbol`
- `fix(notes): prevent note from collapsing on edit`
- `test(coverage): add unit tests with 80% threshold`
- `refactor(auth): remove Google login, enforce local`
- `docs(readme): update technology stack section`
- `style(ui): fine-tune floating buttons dimensions`

---

## Description Template

Copy and paste this into the GitHub PR description box every time.

```markdown
## 🚀 What is this PR?

[One paragraph. State what it accomplishes at a high level.]

## 🛠️ Key Changes

- **[Area]:** [What was built or changed and why it matters.]
- **[Area]:** [What was built or changed and why it matters.]
- **[Area]:** [What was built or changed and why it matters.]

## 📸 Screenshot / Output

[Drag and drop a screenshot of the UI here. For non-UI changes (testing, config), paste the terminal output or test results instead.]

## ✅ Checklist

- [ ] App builds successfully (`yarn build`)
- [ ] Tests pass with ≥80% coverage (`yarn test:coverage`)
- [ ] Conventional Commits applied
- [ ] CodeRabbit review addressed (if applicable)
```

---

## Extended Description (Merge Commit)

When GitHub asks for the Extended Description during the merge, use this bullet format:

```text
- [Area]: [What was done — one line.]
- [Area]: [What was done — one line.]
- [Area]: [What was done — one line.]
```

**Example:**
```text
- Testing: Vitest + Testing Library setup with 80% coverage thresholds.
- CodeRabbit: Assertive auto-review config on PRs to main.
- Data: Fix 6 duplicate symbols in symbols.ts.
```

---

## Screenshot / Output Guidelines

- For **UI changes** (components, pages, layouts): screenshot of the actual screen running in the browser.
- For **non-UI changes** (testing, config, CI): paste the terminal output (e.g. test results, coverage report).
- Always drag the image directly into the GitHub description box — no external hosting needed.
- Delete the placeholder text `[Drag and drop...]` before submitting.

---

## Branch Naming

Branches follow the pattern:

```text
<type>/<short-kebab-description>
```

**Examples:**
- `feat/emojis-symbol-browser`
- `fix/layout-shift-on-load`
- `test/vitest-unit-coverage`
- `feat/coderabbit-and-tests`
- `refactor/supabase-middleware`
- `style/floating-links-redesign`

---

## PR History Reference

| PR | Branch | Description | Status |
|----|--------|-------------|--------|
| #1 | `feat/coderabbit-and-tests` | Vitest setup, unit tests, CodeRabbit config & 80% coverage | ✅ Merged |
| #2 | `docs/agent-context-files` | AGENTS.md, CLAUDE.md, context/ docs, project report | 🟡 Open |

*(Update this table every time a PR is opened or merged.)*
