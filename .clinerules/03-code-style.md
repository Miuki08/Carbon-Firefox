# Code Style

Use TypeScript and functional React components.

Use `"use client"` only when required by:
- React state.
- Effects.
- Browser APIs.
- Motion interactions.
- Event handlers.

Keep client components small.

Use existing CSS variables:

- `--background`
- `--surface`
- --border`
- `--text-primary`
- `--text-secondary`
- `--accent`
- `--accent-soft`

Do not hard-code colors when an existing variable is available.

Use Tailwind for layout, spacing, typography, and responsive behavior.

Use Motion for entrance animations and micro-interactions.

Animation rules:

- Use short durations.
- Use spring transitions for hover and tap.
- Avoid long delays.
- Avoid unnecessary looping animations.
- Respect `prefers-reduced-motion`.

Naming conventions:

- Components: `PascalCase.tsx`
- Hooks and utility files: `camelCase.ts`
- Constants: `UPPER_SNAKE_CASE`
- CSS classes: `kebab-case`

Do not create duplicate components when an existing component can be extended safely.