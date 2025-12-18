# Portfolio

A modern, accessible portfolio website showcasing my work as a Web Developer, Front-End Developer, Back-End Developer, 3D Artist, and Fullstack Developer.

## Features

- **Accessibility First**: WCAG compliant with ARIA labels, semantic HTML, keyboard navigation, and screen reader support
- **Performance Optimized**: Code splitting, lazy loading, and optimized images
- **Modern React**: Built with React 18 using createRoot API
- **Error Handling**: Error boundaries for graceful error handling
- **SEO Optimized**: Proper meta tags and semantic structure

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory (see `.env.example` for template)
4. Add your EmailJS credentials to `.env`:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```
5. Run `npm start` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Deployment Instructions

1. Edit content in VSCode
2. Run `npm start` to preview changes on development server
3. `git add .` and `git commit -m "message"` to commit changes
4. `git push origin master` to push changes to the main branch
5. Run `npm run deploy` to deploy to GitHub Pages (gh-pages branch)

## Optimizations Implemented

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

## Technologies Used

- React 18
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons
- Various animation libraries
