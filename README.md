# Your Room — static website

This is a small single-page static site (PWA-ready) for notes, tasks, a PDF bookshelf and a UPSC tracker. Data is stored locally in the browser (localStorage) — no server required.

Files included:
- index.html — main app (improved accessibility + PWA registration)
- manifest.json — web manifest for installability
- sw.js — simple service worker for offline support
- icons/ (optional) — add `icon-192.png` and `icon-512.png` if you want app icons

How to run locally:
- Option A (quick): open index.html directly in your browser (some PWA features may be limited).
- Option B (recommended): run a local static server:
  - `npx serve .` or `npx http-server` or `python -m http.server 8000`
  - Then visit http://localhost:5000 (or the port used)

Deploy options:
- GitHub Pages:
  1. Create a new repo and push these files to the `main` branch.
  2. In the repository Settings → Pages, set the source to `main / root`.
  3. Wait a minute and visit https://<your-username>.github.io/<repo>.

- Netlify / Vercel:
  - Drag & drop the project folder onto Netlify, or connect the Git repo and deploy.
  - Vercel: `vercel` CLI or connect the repo.

Notes & next steps:
- The app stores files (PDFs) as Data URLs in localStorage — this works for small collections but is not suitable for many or very large PDFs. Consider switching to IndexedDB (or a backend) for large storage.
- Add icons to `icons/icon-192.png` and `icons/icon-512.png` to enable a proper app install icon.
- If you want, I can:
  - Convert this into a GitHub repository (I can create it for you if you give the name).
  - Replace localStorage with IndexedDB to support larger file storage.
  - Add import/export of data (backup/restore).
  - Provide a small CI/CD deployment config (GitHub Actions) to automatically publish to Pages.

Enjoy — tell me where you'd like this hosted and I can add steps or push it for you.
