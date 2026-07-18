Clean up the Wandr codebase so it's ready to publish to GitHub via Lovable's Git sync.

## What we'll do

1. **Verify the build passes**
   - Run `bun run build` and typecheck to confirm no hidden errors before the repo goes public.

2. **Add a README.md**
   - Create a project README with a short description, tech stack, scripts, and route map (`/`, `/app`, `/flows/*`).
   - The repo currently has no README, which looks incomplete on GitHub.

3. **Tidy project metadata**
   - Review `.gitignore` and `.prettierignore` to make sure generated folders (`dist`, `.output`, `.vinxi`, `tsconfig.tsbuildinfo`) are excluded.
   - Clean up any obvious generated artifacts that shouldn't be committed.

4. **Format and lint**
   - Run `bun run format` and `bun run lint` to normalize formatting across the landing pages, flow pages, and components.

5. **Sanity-check the flow pages**
   - Verify the four `/flows/*` routes and the shared `FlowPage` component have no leftover TODOs, broken imports, or duplicate code.

6. **Final build check**
   - Run a clean build after formatting to confirm everything still compiles.

## Outcome

A polished repo with a README, clean formatting, passing build, and no stray generated files — ready for you to connect via **Plus (+) → GitHub → Connect project** and create the repository.

## No functional changes

This is a cleanup pass only. No app behavior, routes, or visuals will change.
