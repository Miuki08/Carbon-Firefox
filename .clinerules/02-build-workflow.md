# Build Workflow

Always work from the project root.

Before making changes, inspect the existing implementation.

After completing a change:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Report the result clearly.
4. Do not claim success if either command fails.

If a build or lint error appears:

- Read the full error message.
- Identify the exact file and line.
- Fix only the relevant issue.
- Run the commands again.

Do not delete `node_modules`, `package-lock.json`, or generated build output unless explicitly instructed.

Do not install new dependencies unless they are necessary and explicitly approved.

If a dependency is required, explain:
- Why it is needed.
- What it replaces.
- Its approximate bundle/runtime impact.
- Whether it is actively maintained.