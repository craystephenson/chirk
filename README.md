# Portfolio

Static site: edit `projects.js` for your Vimeo links and tags.

**Repository:** [github.com/craystephenson/creative-portfolio](https://github.com/craystephenson/creative-portfolio)

## Deploy with GitHub and Cloudflare Pages

1. **Push to GitHub** (if you clone on another machine, add the remote and push):

   ```bash
   git remote add origin https://github.com/craystephenson/creative-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Cloudflare Pages**
   - In the [Cloudflare dashboard](https://dash.cloudflare.com/), open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
   - Authorize GitHub and select **`craystephenson/creative-portfolio`**, then **Begin setup**.
   - **Build settings** (this repo has no build step; files are at the repo root):
     - **Framework preset:** `None`
     - **Build command:** leave **empty**
     - **Build output directory:** enter **`/`** (root of the repository)
   - **Save and deploy.** Pushes to `main` will trigger new deployments automatically.

3. **Optional:** In Pages → your project → **Custom domains** to attach a domain you manage in Cloudflare.

Notes: Thumbnail loading uses the browser `fetch` API. If previews fail in a rare case, set a `poster` image URL per project in `projects.js` or use the production Pages URL (HTTPS).
