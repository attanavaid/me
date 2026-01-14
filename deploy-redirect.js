const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Read the redirect HTML files
const redirectHtml = fs.readFileSync("redirect-index.html", "utf8");

// Clean the build directory completely (remove old files)
const buildDir = path.join(__dirname, "build");
if (fs.existsSync(buildDir)) {
  // More aggressive cleanup - remove entire directory and recreate
  fs.rmSync(buildDir, { recursive: true, force: true });
}
fs.mkdirSync(buildDir, { recursive: true });

// Write the redirect files to build folder
fs.writeFileSync(path.join(buildDir, "index.html"), redirectHtml);
fs.writeFileSync(path.join(buildDir, "404.html"), redirectHtml); // GitHub Pages serves 404.html for all routes
fs.writeFileSync(path.join(buildDir, ".nojekyll"), ""); // Disable Jekyll processing

console.log("✅ Build folder cleaned and redirect files copied");
console.log("   - index.html (main redirect)");
console.log("   - 404.html (catch-all redirect)");
console.log("   - .nojekyll (disable Jekyll)");
console.log("📦 Deploying to gh-pages branch...");
