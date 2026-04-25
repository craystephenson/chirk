# Portfolio

Static site: edit `projects.js` for your Vimeo links and tags.

## Deploy with GitHub and Cloudflare Pages

1. **Push to GitHub** (create an empty repository in the GitHub UI, then):

   ```bash
   git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **Cloudflare Pages**
   - In the [Cloudflare dashboard](https://dash.cloudflare.com/), open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
   - Authorize GitHub, pick this repository, **Begin setup**.
   - **Build settings** (static HTML/CSS/JS, no build step):
     - **Framework preset:** None
     - **Build command:** leave empty
     - **Build output directory:** `/` (or leave default if it expects a subfolder; for root assets use `/` or a single `.` depending on the UI)
   - Save and deploy. Every push to `main` will trigger a new deployment.

3. **Optional:** In Pages → your project → **Custom domains** to attach a domain you manage in Cloudflare.

Notes: Thumbnail loading uses the browser `fetch` API. If previews fail in a rare case, set a `poster` image URL per project in `projects.js` or use the production Pages URL (HTTPS).
