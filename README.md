# Bosqen — AI-Driven Digital Marketing Site

A single-page marketing site for **Bosqen**, an AI-driven digital marketing platform. Built with **React 19**, **Vite 7**, and **Tailwind CSS v4**. Icons by [lucide-react](https://lucide.dev).

All site copy lives in **`src/constants/content.js`** — edit strings there, not in components. Pricing and trials are enquiry-based via `support@bosqen.com` (no sign-up/login flows).

## Sections (single page, top-to-bottom)

1. **Hero** — operator-first headline, animated AI dashboard mock, campaign badge
2. **Live activity ticker** — rotating proof that work is happening right now
3. **Services** — 9 AI marketing solutions as animated cards
4. **How it works** — first email to live campaigns in days
5. **Why Bosqen** — concrete commitments (24h reply, weekly proof, your accounts)
6. **FAQ** — straight answers, including “how do you prove results before we commit?”
7. **Contact** — mailto enquiries to support@bosqen.com (no pricing, no login)

No testimonials or client logos: the trust story is built on transparency, guarantees, and live-activity proof instead.

## Run in Visual Studio Code

1. Open the workspace: `code ai-marketing-site.code-workspace` (or `File → Open Folder…`)
2. Press **F5** — VS Code will:
   - start the Vite dev server (`npm: dev` task),
   - open Chrome in debug mode at http://localhost:5173,
   - stop the server automatically when you end the debug session.

Recommended extensions (VS Code will prompt you): ESLint, Prettier, Tailwind CSS IntelliSense.

### Launch log

Every dev-server boot writes **`logs/launch-log.json`** (via a small Vite plugin in `vite.config.js`) with the status, timestamps, versions, resolved URLs, and an event trail — useful for confirming how the project was launched.

## Terminal workflow

```bash
npm install
npm run dev      # http://localhost:5173
```

## Other scripts

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```
