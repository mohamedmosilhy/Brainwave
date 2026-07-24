# Brainwave

A responsive AI product landing page built with React, Tailwind CSS, and Vite. Brainwave focuses on high-fidelity interface composition: layered artwork, reusable geometric components, parallax motion, responsive navigation, feature cards, pricing, and a visual product roadmap.

[View the live site](https://brainwave-rosy-ten.vercel.app/) · [View the source](https://github.com/mohamedmosilhy/Brainwave)

[![Brainwave video preview](./videos/Screenshot%202024-08-17%20204839.png)](https://drive.google.com/file/d/1D0oLYIPbF8cUhG8tzcJG33_D1YyROF0t/view?usp=drive_link)

Select the preview image to watch the recorded walkthrough.

## Page sections

- Responsive header with desktop navigation and a scroll-locked mobile menu
- Hero composition with parallax artwork, notification cards, and company logos
- Benefits grid with six feature cards
- Collaboration section and integration orbit
- AI service presentations for chat, photo editing, and video generation
- Three-tier pricing area
- Product roadmap with completed and planned items
- Social footer

## Implementation highlights

- Component-based React structure
- Reusable `Section`, `Heading`, `Button`, and design-decoration components
- Data-driven navigation, benefits, pricing, integrations, roadmap, and social links
- `react-just-parallax` effects in the hero
- Responsive menu state and body scroll locking
- Custom Tailwind theme, spacing, typography, gradients, and clip paths
- Vite development and production build workflow

The page is a front-end product presentation. Login, signup, pricing, and roadmap calls to action are illustrative links and are not connected to authentication or billing services.

## Built with

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM
- react-just-parallax
- scroll-lock
- ESLint

## Getting started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/mohamedmosilhy/Brainwave.git
cd Brainwave
npm install
npm run dev
```

Vite prints the local development URL in the terminal, normally `http://localhost:5173`.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
Brainwave/
├── src/
│   ├── assets/          # Artwork and reusable SVG components
│   ├── components/
│   │   └── design/      # Section-specific decorative elements
│   ├── constants/       # Navigation and page content data
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── videos/              # Recorded project preview
├── tailwind.config.js
├── vite.config.js
└── package.json
```
