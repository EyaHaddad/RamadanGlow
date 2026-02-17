# Ramadan Greeting Page

## Overview

This is a decorative Ramadan greeting web application that displays an animated Arabic-language landing page with a night sky theme featuring a crescent moon, floating lanterns, and star particles. The project is primarily a static/decorative page with minimal backend functionality. It uses a full-stack TypeScript architecture with an Express backend serving a React frontend, connected to a PostgreSQL database via Drizzle ORM, though the database is barely utilized in the current state.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — single route (`/`) renders the Ramadan page
- **Styling**: Tailwind CSS with CSS variables for theming (dark night sky theme with gold accents)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives — extensive component library installed in `client/src/components/ui/`
- **Animations**: Framer Motion for floating lanterns, moon fade-in, and content entrance animations
- **Fonts**: Arabic Google Fonts (Cairo, Amiri, El Messiri) — RTL layout direction is critical
- **State Management**: TanStack React Query for server state (mostly unused currently)
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **Server**: HTTP server created with `createServer()`, supports both Vite dev middleware and static file serving in production
- **API Routes**: Currently empty — no API endpoints are registered. The `registerRoutes` function in `server/routes.ts` is a stub
- **Storage Layer**: `server/storage.ts` defines a `DatabaseStorage` class implementing `IStorage` interface with user CRUD methods, but they all return undefined or throw — not yet implemented

### Shared Layer
- **Schema**: `shared/schema.ts` defines a `greetings` table (id, message, isVisible) using Drizzle ORM with PostgreSQL dialect and Zod validation via `drizzle-zod`
- **Routes Contract**: `shared/routes.ts` defines a typed API contract for greetings listing, though the endpoint isn't implemented server-side
- **Note**: The schema also references a `users` table import in storage.ts but the users table is not defined in the schema file — this is a known inconsistency

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Connection**: `node-postgres` (pg) Pool using `DATABASE_URL` environment variable
- **Schema Push**: Use `npm run db:push` (runs `drizzle-kit push`) to sync schema to database
- **Migrations**: Output directory is `./migrations`
- **Current Tables**: `greetings` (id serial PK, message text, is_visible boolean)

### Build System
- **Dev**: `tsx server/index.ts` with Vite dev server middleware for HMR
- **Production Build**: Custom `script/build.ts` that runs Vite build for client and esbuild for server, outputting to `dist/` directory. Server bundles select dependencies (from an allowlist) to reduce cold start times
- **Output**: Client builds to `dist/public/`, server builds to `dist/index.cjs`

### Key Design Decisions
1. **Monorepo structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) in one repo with TypeScript path aliases
2. **Shared schema pattern**: Database schema and API contracts live in `shared/` so both client and server can reference the same types
3. **shadcn/ui component library**: Full suite of UI components pre-installed for rapid UI development, even though most aren't used yet
4. **Static-first design**: The main page requires no user interaction or API calls — it's purely decorative with animations

## External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable
- **Google Fonts**: Cairo, Amiri, El Messiri fonts loaded from `fonts.googleapis.com` (Arabic typography)
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` for Replit development environment integration
- **No external APIs**: No third-party API integrations are currently active