# AGENTS.md

## Read Before Anything Else

Read in this exact order before any implementation:

1. context/project-overview.md
2. context/architecture.md
3. context/ui-tokens.md
4. context/code-standards.md
5. PR_STANDARDS.md

## Rules That Never Change

- Always use `yarn` as the package manager.
- Never push directly to `main` — always work on a feature branch.
- Run `yarn build` before every commit (enforced by Husky pre-commit hook).
- Run `yarn test` to validate unit tests pass before opening a PR.
- Follow Conventional Commits (enforced by Commitlint via commit-msg hook).
- If the same problem persists after two attempts, stop and try a fundamentally different approach.

## Available Commands

```bash
yarn dev            # Start development server
yarn build          # Production build (also runs TypeScript check)
yarn test           # Run all unit tests
yarn test:coverage  # Run tests with coverage report (80% threshold)
```
