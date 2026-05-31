# Enchufe Virtual

**Version 2.0.0**

Enchufe Virtual is an open source showcase built with Next.js, designed to present software projects, stores, and digital experiences. This release ends the React Router era and moves the whole app into the Next.js App Router with static export support.

## 🚀 What changed in v2.0.0

- Migrated from `react-router-dom` to **Next.js App Router**.
- Added a product/store showcase experience.
- Created dynamic route pages for projects via `app/search/[slug]/page.jsx`.
- Added sections for **open source**, **client work**, and **personal projects**.
- Improved responsive UI, global styles, and loading behavior.
- Prepared the app for **static export** and **GitHub Pages deployment**.

## ✅ Main features

- Next.js App Router with static export (`output: 'export'`).
- Responsive Hero, Main, Footer, and card layouts.
- Global state management via React context.
- Search and category filters for project listings.
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

Install dependencies:

```bash
npm install
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

Preview the production output locally:

```bash
npm run preview
```

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
- If your site is served from a GitHub Pages repo page, make sure `homepage` in `package.json` matches the repo URL.

## ⚠️ GitHub Pages path handling

If your site is hosted at:

```text
https://<username>.github.io/<repo-name>
```

then `homepage` in `package.json` should use that URL.

For a custom domain like `https://enchufevirtual.com`, keep the custom domain in `homepage` and verify that your DNS is correctly configured.

## 🤝 Contributing

Contributions are welcome. If you want to help improve the project:

- Open an issue describing the bug or feature.
- Create a pull request with your changes.
- Keep contributions small, clear, and tested.
- Follow the existing code style and structure.

## 📬 Contact

- GitHub: [https://github.com/soychendo](https://github.com/soychendo)
- Email: enchufevirtual@gmail.com

## ⚖️ License

This project is licensed under the **MIT License**.

Use it, modify it, distribute it, and fork it freely.
