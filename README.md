# Synquora Docs

A documentation site for Synquora, the modern Discord community event scheduler. Built with **Astro**, **Starlight**, and **MD**.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 📁 Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images or static files used in docs
│   ├── content/
│   │   └── docs/          # Your markdown/MDX content
│   └── styles/            # Optional global styles
├── astro.config.mjs       # Astro config (Starlight integration)
├── content.config.ts      # Content collection schema
├── package.json
└── tsconfig.json
```

## 📚 Docs Organization

Your documentation lives in `src/content/docs/` and supports Markdown (`.md`) and MDX (`.mdx`).

Use `_category_.json` files in folders to group pages and customize sidebar labels.

## 🧪 Dev Commands

| Command             | Description                                  |
|---------------------|----------------------------------------------|
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build the static site to `./dist/`          |
| `npm run preview`   | Preview the build output locally             |

> 💡 You can also use `yarn` if you prefer.

## 📦 Deployment

Synquora Docs can be deployed to any static host:

- [Deploy to Vercel](https://vercel.com/import/project?template=https://github.com/margauxflores/synquora-docs)
- [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/margauxflores/synquora-docs)

## 📝 Customization

To modify the sidebar or page layout:

- Update `astro.config.mjs` → `sidebar` section
- Use frontmatter (`title`, `description`) in each `.mdx` file
- Add `_category_.json` files for section labels and ordering

## 🌐 Useful Links

- [Synquora GitHub](https://github.com/margauxflores/synquora)
- [Starlight Docs](https://starlight.astro.build)
- [Astro Docs](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
