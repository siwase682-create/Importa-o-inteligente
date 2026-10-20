# Importação Inteligente Angola — Sales Landing Page

A futuristic, high-conversion landing page in dark & gold built for **“Importação Inteligente”**, targeting entrepreneurs and importers in Angola.

---

## Vercel Deployment Troubleshooting & Root Cause Analysis

If you previously encountered a **"404: NOT_FOUND"** or **"Page not found"** error on Vercel, the causes and fixes are detailed below:

### 1. Root Causes of the 404 Error
1. **Missing `vercel.json` SPA Routing:**
   Vite builds a Single Page Application (SPA). Without a `vercel.json` routing configuration, Vercel attempts to resolve paths as direct static files instead of routing them to `dist/index.html`, resulting in a `404: NOT_FOUND`.
2. **Missing `base: '/'` in Vite Config:**
   Without `base: '/'`, asset links can fail to resolve depending on how Vercel serves the base root.
3. **Node ESM `__dirname` Warning / Deprecation:**
   In ESM environments (`"type": "module"`), using `__dirname` directly in `vite.config.ts` without `node:url` can trigger bundler warnings or runtime exceptions during native Vercel builds.
4. **Vercel Output Directory Mismatch:**
   If the Vercel project was imported without the Vite preset, Vercel might look for `build` or `.next` instead of `dist`.

---

## 2. Files Modified & Repaired

- **`vercel.json` (Created):**
  Added explicit framework preset (`"framework": "vite"`), build command (`npm run build`), output directory (`dist`), and wildcard SPA rewrite (`/(.*) -> /index.html`).
- **`vite.config.ts` (Repaired):**
  Added `base: '/'` and modernized path resolution using `fileURLToPath(new URL('.', import.meta.url))` to ensure 100% ESM compliance with no build warnings.
- **`src/main.tsx` (Standardized):**
  Standardized `import App from './App';` without hardcoded `.tsx` extension for universal bundler resolution.
- **`src/config/siteConfig.ts`:**
  Verified WhatsApp redirection to `+244 928 230 620` and order checkout to `https://bit.ly/Importação-inteligente1`.

---

## 3. Required Vercel Project Settings

When importing or configuring your project in the [Vercel Dashboard](https://vercel.com):

| Setting | Value |
|---|---|
| **Framework Preset** | `Vite` |
| **Root Directory** | `./` (or leave default root) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

*(Note: Thanks to the new `vercel.json` file in the repository, Vercel will automatically read and enforce these settings).*

---

## 4. How to Commit & Push to GitHub

Run these commands in your project terminal:

```bash
# 1. Stage all repaired files
git add .

# 2. Commit the fixes
git commit -m "fix(vercel): add vercel.json rewrite, base path in vite config, and ESM compatibility"

# 3. Push to your main branch
git push origin main
```

---

## 5. How to Redeploy on Vercel

1. Once you run `git push origin main`, Vercel will automatically trigger a new deployment.
2. Alternatively, in the Vercel Dashboard:
   - Navigate to your project.
   - Go to the **Deployments** tab.
   - Click the three dots `...` on the latest deployment and select **Redeploy**.
   - Check **"Use existing Build Cache"** (or uncheck if you want a clean build).
   - Click **Redeploy**.
3. Once completed (approx. 20–30 seconds), your landing page will load directly without 404 errors.

---

## 6. Local Development & Testing

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Test production build
npm run build
npm run preview
```
