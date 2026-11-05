# Carbon Protection Rules

You are working on Carbon, a personal Firefox New Tab application.

Treat the existing design, animation system, and project structure as protected work.

Before modifying any file:

1. Read the relevant existing file first.
2. Identify what the current implementation does.
3. Make the smallest change necessary.
4. Do not rewrite unrelated files.
5. Do not refactor working code unless explicitly asked.

Protected areas:

- `app/globals.css`
- `components/NewTabShell.tsx`
- `components/Clock.tsx`
- `components/Greeting.tsx`
- `components/ShortcutGrid.tsx`
- `components/WeatherWidget.tsx`
- `components/TimeAccent.tsx`
- `lib/shortcuts.ts`

Do not remove or weaken these features:

- Time-aware accent themes.
- Aurora background.
- Floating orbs.
- Grain texture.
- Icon-only shortcut grid.
- Command Launcher.
- Weather widget.
- Footer identity mark.

Do not replace Motion animations with random CSS animations unless explicitly requested.

Do not add emojis to UI text, comments, commit messages, or component labels.

If a requested change conflicts with these rules, stop and ask for confirmation.