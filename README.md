# Bosqen — AI-Driven Digital Marketing Site

A single-page marketing site for **Bosqen**, an AI-driven digital marketing platform. Built with **React 19**, **Vite 7**, and **Tailwind CSS v4**. Icons by [lucide-react](https://lucide.dev).

All site copy lives in **`src/constants/content.js`** — edit strings there, not in components. Pricing and trials are enquiry-based via `support@bosqen.com` (no sign-up/login flows).

## Standalone pages

- **`/privacy-policy.html`** — privacy policy covering GDPR/CCPA-style rights, POS data handling, subprocessors, retention, and cookies. Copy lives in `src/constants/content.js` under `PRIVACY`.
- **`/contact.html`** — standalone demo/enquiry form (name, optional business, email, phone, message, consent). Submissions POST JSON to **`/api/contact`**, a Vercel serverless function that validates the data and delivers the enquiry to `support@bosqen.com` through **Resend** (see `api/contact.js` and `src/pages/EnquiryFormPage.jsx`).

Both are standalone Vite entry points (multi-page build configured in `vite.config.js`) and share the site styling.

### Enquiry form — Resend via Vercel function

`/contact.html` posts JSON to **`/api/contact`** (`api/contact.js`, a zero-dependency Vercel Node function). The function validates the submission, then sends the email through [Resend](https://resend.com) to `support@bosqen.com` with subject `New Bosqen enquiry — {Name}`, `reply-to` set to the visitor's address, and all user values HTML-escaped.

HTTP contract: `POST` only (`405` otherwise) · `400` invalid input · `500` when Resend rejects or fails — success is returned only after Resend accepts the email. Client-facing errors are always generic; details go to the Vercel runtime logs.

**Secret handling.** The Resend API key exists only server-side. It is stored as the GitHub Actions secret `RESEND_API_KEY`; the deploy workflow (`.github/workflows/vercel-deploy.yml`) links the CI checkout to the Vercel project (`vercel link` using the `VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` secrets — CI runners have no `.vercel` directory, which `vercel env add` requires) and then syncs the key into Vercel's runtime environment with `vercel env add RESEND_API_KEY production preview --force`, piping the value via stdin and discarding CLI output, so it never appears in logs, frontend JavaScript, or build artifacts. The function reads it with `process.env.RESEND_API_KEY`. There is no `.env` file in the repo.

#### One-time Resend setup (user action required)

1. Create a [Resend](https://resend.com) account and add the **bosqen.com** domain under *Domains*.
2. Add the SPF/DKIM DNS records Resend displays at bosqen.com's DNS provider, and wait for Resend to verify the domain.
3. The function sends from the default `Bosqen <enquiries@bosqen.com>` — override with the optional Vercel env var `CONTACT_FROM_EMAIL` if you prefer a different address.

Until the domain is verified, Resend rejects sends from the domain and the form shows its error banner (visitors are directed to `support@bosqen.com`). For end-to-end testing before DNS is ready, temporarily set `CONTACT_FROM_EMAIL=Bosqen <onboarding@resend.dev>` in Vercel — Resend then delivers only to the email address that owns the Resend account.

#### Testing

- **Production:** submit the form at `https://bosqen.com/contact.html`, then check the `support@bosqen.com` inbox and the Vercel function logs (`npx vercel logs`) for `[contact]` entries.
- **Local, without the real key:** run `npx vercel dev` and set a dummy `RESEND_API_KEY` (e.g. `re_dummy_local`) — Resend rejects it with `401`, so the function returns `500` and the form shows its error banner; validation paths can be exercised with `curl`:

  ```bash
  curl -i -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' \
    -d '{"name":"Test User","email":"t@example.com","phone":"9876543210","consent":true}'   # → 500 (dummy key)
  curl -i http://localhost:3000/api/contact                                                        # → 405
  curl -i -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{}'   # → 400
  ```

- **Offline API tests:** `node --test scripts/` runs `scripts/test-contact-api.mjs`, which stubs `fetch` and exercises every branch of the function (405, 400, 500, honeypot, success payload) without network access.

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
npm run build    # production build to dist/ (all three pages)
npm run preview  # serve the production build locally
```

### Deploy (Vercel)

Deploys are automated via GitHub Actions (`.github/workflows/vercel-deploy.yml`): pushes to `main` go to production, PRs get preview URLs. Requires the `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, and `RESEND_API_KEY` repo secrets (the workflow syncs `RESEND_API_KEY` into Vercel's environment on every deploy).
