# Mohd Ihsan Ahmed Rizwan Portfolio

Modern portfolio website rebuilt with React, TypeScript, Tailwind CSS, and Vite.

## Features

- Responsive portfolio layout
- Dark mode toggle with saved preference
- SEO metadata and canonical URL
- Preserved portfolio content, skills, projects, experience, education, certifications, languages, and contact links
- GitHub Pages deployment workflow

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- GitHub Actions
- GitHub Pages

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deployment

This project is configured for GitHub Pages at:

```text
https://ihsan-03.github.io/portfolio-website/
```

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `main`.

Repository settings required on GitHub:

1. Go to `Settings > Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to the `main` branch.
4. Wait for the `Deploy to GitHub Pages` workflow to complete.

## Useful Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```
