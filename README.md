# Enchufe Virtual

**Version 3.0.0**

Enchufe Virtual is an open source showcase built with Next.js 16, React 19, and React DOM 19. It presents software projects, stores, and digital experiences.

## 🚀 What's new in v3.0.0

- A new visual appearance and an improved user experience.

## 🚀 What changed in v3.0.0

- Migrated from `react-router-dom` to **Next.js App Router**.
- Added a product/store showcase experience.
- Created dynamic project pages via `app/project/[slug]/page.jsx`.
- Kept legacy `/page/[slug]` links working by forwarding them to `/project/[slug]`.
- Added sections for **open source**, **client work**, and **personal projects**.
- Improved responsive UI, global styles, and loading behavior.
- Prepared the app for **static export** and **GitHub Pages deployment**.

## ✅ Main features

- Next.js 16 App Router with React 19 and React DOM 19.
- Static site export (`output: 'export'`) for GitHub Pages hosting.
- Search engine metadata, Open Graph cards, canonical URLs, `sitemap.xml`, and `robots.txt`.
- Responsive Hero, Main, Footer, and card layouts.
- Global state management via React context.
- Category filters for project listings.
- Clean and accessible HTML structure.
- GitHub Pages support with `.nojekyll` and custom domain handling.

## 📁 Project structure

- `app/` — Next.js App Router pages and layout.
- `src/components/` — reusable UI components.
- `src/containers/` — main sections and page views.
- `src/context/` — global state provider and reducer logic.
- `src/styles/` — SCSS styles grouped by component.
- `public/` — static assets and SVG files.

## 💻 Local development

Requirements: Node.js 20.9.0 or newer and npm.

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## 🧪 Build and preview

Create a production build:

```bash
npm run build
```

Serve the static production output locally after building:

```bash
python3 -m http.server 3000 --directory out
```

Open `http://localhost:3000` to preview the exported site. The `next start` command is not used because this project is configured for static export.

## 🚢 Deploy to GitHub Pages

This repository uses `gh-pages` and exports the static site to the `out/` folder.

Build and prepare deployment:

```bash
npm run predeploy
```

Publish to GitHub Pages:

```bash
npm run deploy
```

### Deployment notes

- `out/CNAME` is created automatically with the custom domain.
- `out/.nojekyll` is created automatically to ensure GitHub Pages serves `_next` assets.
- The build generates `out/sitemap.xml` and `out/robots.txt`; submit `https://enchufevirtual.com/sitemap.xml` in Google Search Console after deployment.
- This repository is configured for the custom domain `https://enchufevirtual.com`. The `homepage` field alone does not configure Next.js paths for a GitHub Pages project URL such as `https://<username>.github.io/<repo-name>`.

## 🤝 Contributing

Contributions are welcome. If you want to help improve the project:

- Open an issue describing the bug or feature.
- Create a pull request with your changes.
- Keep contributions small, clear, and tested.
- Follow the existing code style and structure.

## 📬 Contact

- GitHub: [https://github.com/soychendo](https://github.com/soychendo)
- Email: contacto@enchufevirtual.com

## ⚖️ License

This project is licensed under the **MIT License**.

Use it, modify it, distribute it, and fork it freely.
