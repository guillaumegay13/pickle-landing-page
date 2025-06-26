# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server on port 8080 with hot reload
- `npm run build` - Create production build
- `npm run lint` - Run ESLint code quality checks
- `npm run preview` - Preview production build locally

### Testing
No test framework is currently configured. If tests need to be added, consider setting up Vitest or Jest with React Testing Library.

## High-Level Architecture

### Tech Stack
- **React 18.3** with TypeScript
- **Vite** as build tool with SWC for fast refresh
- **shadcn/ui** components (copy-pasted, not npm dependencies)
- **Tailwind CSS** for styling
- **React Router v6** for client-side routing
- **i18next** for internationalization (English and French)
- **React Query** configured but not actively used

### Project Structure
```
/src
├── components/       # Feature components (Header, Hero, Features, etc.)
│   └── ui/          # shadcn/ui atomic components
├── pages/           # Route components (Index, Terms, Privacy, NotFound)
├── i18n/            # Internationalization setup and locales
├── hooks/           # Custom React hooks
└── lib/             # Utilities (cn() for classnames)
```

### Key Architectural Patterns

1. **Component Composition**: Simple linear composition on landing page. Each section component is independent with no shared state between siblings.

2. **State Management**: No global state library. State is local to components. Language preference stored in localStorage.

3. **Internationalization**: All user-facing text externalized to `/i18n/locales/`. Use `useTranslation()` hook to access translations. Language switching handled by custom `useLanguage()` hook.

4. **Routing**: Four routes defined in App.tsx. Hash links (`react-router-hash-link`) for smooth scrolling to sections.

5. **Styling**: Utility-first with Tailwind. Use `cn()` helper from `/lib/utils` to merge classnames. All shadcn/ui components are customizable in `/components/ui/`.

### Important Development Notes

- **Path Alias**: `@/` maps to `./src/` directory
- **TypeScript**: Configured with relaxed settings (no implicit any, no strict null checks)
- **No Backend**: Pure frontend app. Download links point to external App Store
- **Lovable Integration**: Project ID `5e84d412-c2fd-42e9-9bc5-5de160afa9b5`
- **Git**: Main branch is `main`. Clean working directory as of last check

### Common Tasks

**Adding a new translation:**
1. Add keys to both `/i18n/locales/en.json` and `/i18n/locales/fr.json`
2. Use `const { t } = useTranslation()` and `t('section.key')`

**Adding a new page:**
1. Create component in `/pages/`
2. Add route in `App.tsx`
3. Update navigation in `Header.tsx` if needed

**Modifying UI components:**
- shadcn/ui components in `/components/ui/` are fully customizable
- Maintain consistent theming with existing Tailwind classes