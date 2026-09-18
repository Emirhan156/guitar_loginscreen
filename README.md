<div align="center">

# Guitar Login Screen

An animated, dark-themed login and sign-up screen prototype for a gamified
guitar-learning app.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

</div>

---

## Contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Repository layout](#repository-layout)
- [Getting started](#getting-started)
- [Project status](#project-status)

## Overview

This repository is a single-screen UI prototype: the entry screen of a guitar
learning platform, with a motivational hero section on the left and a
login / sign-up card on the right. It is the first version of the login screen
that was later carried over, almost unchanged, into the FretFlow app
(`src/screens/login` there). The follow-up prototype that adds a landing page is
[`guitar_introductionscreen`](https://github.com/Emirhan156/guitar_introductionscreen).

It is front-end only: the form does not submit anywhere and there is no
authentication.

## Features

- **Hero section** — "Every Guitar Legend Started Somewhere." headline with
  gamification preview widgets (current streak, level, total XP) showing sample values.
- **Auth card** — Log In / Sign Up tabs; the sign-up tab adds a username field and
  the log-in tab shows "Remember me" and "Forgot password?".
- **Social buttons** — Google and Apple buttons (visual only).
- **Animated background** — drifting neon glows, six glowing "guitar strings" and
  floating particles, built with Framer Motion.
- **Responsive layout** — side-by-side on large screens, stacked on mobile.

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React 19, TypeScript 6 |
| Styling | Tailwind CSS 4 (theme tokens in `src/index.css`), Inter font |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Tooling | Vite 8, ESLint |

## Repository layout

```text
.
├── src/
│   ├── App.tsx                   Page layout: hero section + auth card
│   ├── index.css                 Tailwind import, colour tokens, glass/neon utilities
│   ├── main.tsx                  React entry point
│   └── components/
│       ├── AnimatedBackground.tsx
│       ├── AuthCard.tsx
│       └── HeroSection.tsx
├── public/                       Favicon and static icons
├── index.html                    Vite entry page
└── vite.config.ts                Vite configuration
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (required by Vite 8) and npm

### Install and run

```sh
git clone https://github.com/Emirhan156/guitar_loginscreen.git
cd guitar_loginscreen
npm install
npm run dev
```

Open the URL Vite prints (by default http://localhost:5173).

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check (`tsc -b`) and build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

No environment variables or other configuration are needed.

## Project status

This is an archived UI prototype; development continued in FretFlow.

- `npm run build` currently stops at the TypeScript step because of an unused
  `React` import in `src/App.tsx`; `npx vite build` produces a bundle.
- `npm run lint` reports `react-hooks/purity` errors for `Math.random` in
  `AnimatedBackground.tsx`.
- `package-lock.json` is out of sync with `package.json`, so `npm ci` fails; use
  `npm install`.
