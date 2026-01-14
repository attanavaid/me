# GitHub Pages Redirect Setup

This guide will help you set up a redirect from GitHub Pages to your new portfolio site at `attanavaid.com`.

**Note:** The repository must remain **public** for GitHub Pages to work on free accounts. Only the redirect page will be deployed to the `gh-pages` branch.

## Quick Deploy

Simply run:

```bash
npm run deploy-redirect
```

This will:

1. Clean the `build` folder
2. Copy only the redirect page
3. Deploy to the `gh-pages` branch

## Step 1: Keep Repository Public

**Important:** Keep your repository **public** because:

- Free GitHub accounts only support GitHub Pages for public repositories
- Private repositories require GitHub Pro/Team for Pages
- The redirect page is minimal and safe to have public

## Step 2: Deploy the Redirect Page

Use the automated script for the easiest deployment:

### Option A: Automated Script (Recommended)

Run the new deploy script:

```bash
npm run deploy-redirect
```

This automatically:

- Cleans the `build` folder
- Copies the redirect page
- Deploys to `gh-pages` branch

### Option B: Manual Deployment

### Option B: Manual Deployment to gh-pages Branch

If you prefer to manually manage the gh-pages branch:

1. Checkout or create the gh-pages branch:

   ```bash
   git checkout -b gh-pages
   # OR if branch exists: git checkout gh-pages
   ```

2. Replace the contents with just the redirect file:

   ```bash
   # Remove all files except redirect-index.html
   rm -rf * .*
   cp redirect-index.html index.html
   ```

3. Commit and push:
   ```bash
   git add index.html
   git commit -m "Redirect to new portfolio site"
   git push origin gh-pages --force
   ```

## Step 3: Verify the Redirect

1. After deployment, visit `https://attanavaid.github.io/me`
2. You should be automatically redirected to `https://attanavaid.com`

## Notes

- GitHub Pages will still work even if the repository is private (as long as you have GitHub Pro/Team, or if it was public before making it private)
- The redirect uses both meta refresh and JavaScript for maximum compatibility
- The redirect is permanent (301-like behavior) using `window.location.replace()` which doesn't add to browser history
