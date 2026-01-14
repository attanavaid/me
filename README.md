# Portfolio (Deprecated)

> **⚠️ This portfolio has been deprecated.**  
> **My new portfolio is now live at [attanavaid.com](https://attanavaid.com)**

This repository is kept public to maintain the GitHub Pages redirect functionality. The site at `attanavaid.github.io/me` now displays a modal informing visitors that the portfolio has moved, and automatically redirects to the new site.

---

## Previous Portfolio Details

This was a modern, accessible portfolio website showcasing my work as a Web Developer, Front-End Developer, Back-End Developer, 3D Artist, and Fullstack Developer.

## Previous Portfolio Features

- **Accessibility First**: WCAG compliant with ARIA labels, semantic HTML, keyboard navigation, and screen reader support
- **Performance Optimized**: Code splitting, lazy loading, and optimized images
- **Modern React**: Built with React 18 using createRoot API
- **Error Handling**: Error boundaries for graceful error handling
- **SEO Optimized**: Proper meta tags and semantic structure

## Redirect Deployment

To deploy the redirect page to GitHub Pages:

```bash
npm run deploy-redirect
```

This will:

- Clean the `build` folder completely
- Copy the redirect modal page (`index.html` and `404.html`)
- Add `.nojekyll` file to disable Jekyll processing
- Deploy to the `gh-pages` branch

The redirect page shows a modal with a deprecation notice and automatically redirects visitors to [attanavaid.com](https://attanavaid.com) after 10 seconds, or they can click the button for immediate redirect.

### If the redirect doesn't appear:

1. **Wait 2-5 minutes** - GitHub Pages can take time to update
2. **Clear browser cache** - Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
3. **Try clean deployment**: `npm run deploy-redirect-clean`
4. **Check GitHub Pages settings** - Ensure source is set to `gh-pages` branch

The `gh-pages` branch should only contain: `index.html`, `404.html`, and `.nojekyll`

## Previous Development Setup

1. Install dependencies: `npm install`
2. Create a `.env` file in the root directory (see `.env.example` for template)
3. Add your EmailJS credentials to `.env`
4. Run `npm start` to start the development server
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Previous Optimizations

### Accessibility

- ✅ ARIA labels and roles on all interactive elements
- ✅ Semantic HTML (proper heading hierarchy, landmarks)
- ✅ Skip links for keyboard navigation
- ✅ Focus indicators for all interactive elements
- ✅ Screen reader support with sr-only class
- ✅ Proper form labels (not just placeholders)
- ✅ Alt text for all images
- ✅ Keyboard navigation support
- ✅ Live regions for dynamic content

### Performance

- ✅ Code splitting with React.lazy()
- ✅ Lazy loading for images
- ✅ Suspense boundaries for loading states
- ✅ Error boundaries for error handling
- ✅ React 18 createRoot API
- ✅ Font preconnect for faster font loading

### Best Practices

- ✅ Environment variables for API keys
- ✅ Error boundaries
- ✅ Proper error handling and user feedback
- ✅ SEO meta tags
- ✅ rel="noopener noreferrer" on external links
- ✅ Proper semantic HTML structure

## Previous Technologies Used

- React 18
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons
- Various animation libraries

---

**Note:** This repository remains public to ensure GitHub Pages continues to function, allowing visitors to be properly redirected to the new portfolio site.
