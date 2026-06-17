# Portfolio — Ikenna Onuoha

Personal portfolio and CV site built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** + TypeScript
- **Vite 8** — build tooling
- **ESLint** — linting
- Vanilla CSS — one file per component

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── data.ts              # All portfolio content (skills, projects, experience, etc.)
├── components/
│   ├── Nav.tsx           # Sticky nav with mobile toggle + CV download
│   ├── Hero.tsx          # Hero with typewriter role cycling
│   ├── Console.tsx       # Terminal widget
│   ├── Skills.tsx        # Skills grid
│   ├── Projects.tsx      # Project cards
│   ├── Experience.tsx    # Work history timeline
│   ├── Education.tsx     # Education & certifications
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Footer
│   └── Divider.tsx       # Section divider
├── App.tsx               # Root layout
├── main.tsx              # Entry point
└── index.css             # Global styles & design tokens
```

To update portfolio content, edit `src/data.ts`.
