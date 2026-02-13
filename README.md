# Qwik + Drizzle ORM + PostgreSQL Starter

This project is a modern, full-stack web application built with [Qwik](https://qwik.dev/) and [Drizzle ORM](https://orm.drizzle.team/), using [PostgreSQL](https://www.postgresql.org/) as the database. It provides a solid foundation for building fast, resumable applications with a type-safe database layer.

## 🚀 Tech Stack

- **Framework**: [Qwik City](https://qwik.dev/docs/qwikcity/) (Full-stack framework for Qwik)
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via `pg` driver)
- **Package Manager**: npm
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS (Standard)
- **Linting & Formatting**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 📁 Project Structure

```text
app-drizzle-pg/
├── src/
│   ├── components/       # Reusable UI components
│   ├── db/               # Database configuration and schema
│   │   ├── migrations/   # Drizzle generated migrations
│   │   ├── index.ts      # Database connection setup
│   │   └── schema.ts     # Drizzle schema definitions (e.g., users table)
│   ├── routes/           # Qwik City file-based routing
│   │   └── index.tsx     # Homepage (displays users from DB)
│   ├── entry.dev.tsx     # Development entry point
│   ├── entry.preview.tsx # Preview entry point
│   ├── entry.ssr.tsx     # Server-side rendering entry point
│   ├── global.css        # Global styles
│   └── root.tsx          # Root component
├── public/               # Static assets
├── drizzle.config.ts     # Drizzle Kit configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Check `package.json` for supported versions)
- [PostgreSQL](https://www.postgresql.org/) instance

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd app-drizzle-pg
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your PostgreSQL connection string:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/your_database
   ```

### Running the Application

- **Development Mode**: starts the Vite dev server with SSR support.
  ```bash
  npm run dev
  ```
- **Preview Mode**: builds the app and runs the preview server.
  ```bash
  npm run preview
  ```

## 🗄️ Database Management

This project uses **Drizzle Kit** for database management.

### Generate Migrations

Whenever you modify `src/db/schema.ts`, generate a new migration:

```bash
npx drizzle-kit generate
```

### Push Changes (Directly to DB)

To push schema changes directly to the database (useful for local development):

```bash
npx drizzle-kit push
```

### Drizzle Studio

Explore your database visually:

```bash
npx drizzle-kit studio
```

## 📜 Available Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Build and preview the production build.
- `npm run fmt`: Format code with Prettier.
- `npm run lint`: Lint code with ESLint.
- `npm run qwik`: Run Qwik CLI commands.

## 📄 License

Individual project license applies.
