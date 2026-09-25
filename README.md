# MG Flooring — Website Redesign

A premium redesign of [mgflooring.co.zw](https://mgflooring.co.zw/) built with **React + Vite + Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Structure

- `src/data/site.js` — single source of truth for all content (services, projects, blog posts, contact details).
- `src/components/` — shared layout, UI primitives, icons.
- `src/pages/` — Home, Services, Projects, About, Blog, BlogPost, Contact, 404.
- `public/img` & `public/video` — real company assets (renamed from the provided files).

## Design system

- **Typography:** Fraunces (display serif) + Manrope (body).
- **Palette:** warm cream / espresso / brass — no gradients, no glassmorphism, one accent.
- **Motion:** staggered scroll reveals and refined hover states via `IntersectionObserver`, respecting `prefers-reduced-motion`.

## Notes for the client

- **Form:** the contact form opens the visitor's email app (mailto). For a hosted form backend (e.g. Formspree/Netlify Forms), swap `handleSubmit` in `src/pages/Contact.jsx`.
- **Placeholder images:** services/projects flagged `placeholder: true` in `src/data/site.js` need real photos — the current images are representative stand-ins.
- **Deployment:** static build — deploy `dist/` to Netlify/Vercel/any static host. For deep links on shared hosting, add an SPA rewrite (`.htaccess`/`_redirects`) pointing all routes to `index.html`.
