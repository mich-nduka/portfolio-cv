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
│   ├── Nav.tsx           # Sticky nav: active-section pill, theme toggle, CV download
│   ├── Hero.tsx          # Hero with typewriter role cycling + stats
│   ├── Console.tsx       # Terminal widget
│   ├── Section.tsx       # Shared numbered section header + reveal wrapper
│   ├── Skills.tsx        # Skills table
│   ├── Projects.tsx      # Project cards with cursor spotlight
│   ├── Experience.tsx    # Work history timeline
│   ├── Education.tsx     # Education & certifications
│   ├── Contact.tsx       # Contact links + copy-email
│   └── Footer.tsx        # Footer with live Abuja time
├── hooks.ts              # Scroll reveal, active section, theme, clock
├── App.tsx               # Root layout
├── main.tsx              # Entry point
└── index.css             # Global styles & design tokens (dark + light)
```

To update portfolio content, edit `src/data.ts`.
