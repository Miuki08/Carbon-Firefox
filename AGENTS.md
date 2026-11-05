# Carbon Firefox — Agent Guide

Carbon is a personal Firefox New Tab application built with Next.js, TypeScript, Tailwind CSS, Motion, Lucide React, and Simple Icons.

## Project intent

Carbon is a private, fast, calm, and visually refined New Tab page.

The design language is “Quiet Focus”:
- Dark charcoal background.
- Minimal layout.
- Large typographic clock.
- Time-aware accent colors.
- Subtle ambient motion.
- Icon-only shortcuts.
- No emojis in the interface.

## Commands

Use these commands from the project root:

```bash
npm run dev
npm run build
npm run lint
```

Before considering a task complete, run:

```bash
npm run lint
npm run build
```

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for animations
- Lucide React for generic UI icons
- @icons-pack/react-simple-icons for brand icons
- Open-Meteo for weather data

## Architecture

- `app/` contains routes, layout, global styles, and metadata files.
- `components/` contains reusable UI components.
- `lib/` contains project data and utility modules.
- `app/globals.css` contains the design tokens, animations, and component styles.
- `components/TimeAccent.tsx` sets `data-period` on `<html>` to switch the accent theme by time of day.

## Design rules

- Preserve the existing dark, calm, premium visual identity.
- Do not use emojis anywhere in the UI.
- Use modern SVG icons, not emoji characters.
- Keep animations subtle, fast, and purposeful.
- Avoid adding large images, heavy animation libraries, or unnecessary dependencies.
- Preserve the aurora, orb, grain, and shortcut-card visual system unless explicitly asked to change it.
- Preserve the time-aware accent system.
- Keep the New Tab fast and lightweight.

## Code style

- Use TypeScript with explicit types where useful.
- Use functional React components.
- Mark components as `"use client"` only when they use state, effects, browser APIs, or Motion interactions.
- Keep components small and focused.
- Use descriptive component and variable names.
- Prefer CSS variables from `app/globals.css` over hard-coded colors.
- Use Tailwind utility classes for layout and spacing.
- Do not introduce a new styling system.

## Security and privacy

- Never read, print, commit, or expose `.env`, `.env.local`, or any secret values.
- Never commit API keys, tokens, passwords, or personal access tokens.
- Do not add analytics, tracking, telemetry, or third-party scripts.
- Do not send project files or secrets to external services unless explicitly instructed.

## Git rules

- Do not run `git push`, `git commit`, or modify Git history unless explicitly instructed.
- Do not force push.
- Do not delete branches.
- Do not modify `.gitignore` unless explicitly requested.
- Before committing, ensure `.env` files and secrets are excluded.