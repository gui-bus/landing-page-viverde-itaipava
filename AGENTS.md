# Workspace Guidelines & Project Rules

## 1. Commit Conventions
- **Format**: Always use **Conventional Commits** (`feat:`, `fix:`, `refactor:`, `chore:`, `style:`, `docs:`, `perf:`).
- **Language**: All commit messages must be strictly in **English** (lowercase header, clear concise description).
- **Example**: `feat(theme): implement animated circular ripple theme toggler`

## 2. Code Quality & Formatting
- **No Comments in Code**: Before committing, always run the comment stripping script:
  ```bash
  node scripts/stripComments.js
  ```
- **Component Naming**: Always use **camelCase** for component file names (e.g., `heroSection.tsx`, `conceptSection.tsx`, `lightboxModal.tsx`, `animatedThemeToggler.tsx`).

## 3. Typography Policy
- **Headings (`h1-h6`, `.font-heading`)**: Exclusively **Gotham** font family.
- **Body & General UI**: Exclusively **Plus Jakarta Sans** (`next/font/google`).
- **Forbidden Fonts**: Never use Montserrat, Georgia, or `font-serif`.

## 4. Styling & Tailwind CSS
- **Pure Tailwind CSS**: Avoid custom CSS in `globals.css`. Use `@theme`, `@custom-variant`, and utility classes.
- **Dark Mode**: Configured with `@custom-variant dark (&:is(.dark, .dark *));`.
- **Layout Width Limit**: All main pages must respect the centered `max-w-440` (`max-w-[1760px] mx-auto`) container.
- **Theme Transitions**: View transition animations must remain bounded within `#page-container` and never bleed into outer margins.

## 5. Image Assets
- All images must be stored locally in `public/` and referenced via absolute paths (e.g. `/viverde/...`, `/localizacao/...`, `/logo/...`, `/parceiros/...`).
- No external unsplash or blob URLs.
