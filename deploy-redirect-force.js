const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🚀 Starting force deployment of redirect page...\n");

// Read the redirect HTML files
const redirectHtml = fs.readFileSync("redirect-index.html", "utf8");

// Clean the build directory completely
const buildDir = path.join(__dirname, "build");
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
}
fs.mkdirSync(buildDir, { recursive: true });

// Write the redirect files to build folder
fs.writeFileSync(path.join(buildDir, "index.html"), redirectHtml);
fs.writeFileSync(path.join(buildDir, "404.html"), redirectHtml);
fs.writeFileSync(path.join(buildDir, ".nojekyll"), "");

console.log("✅ Build folder prepared with:");
console.log("   - index.html");
console.log("   - 404.html");
console.log("   - .nojekyll\n");

// Check if gh-pages branch exists locally
try {
  execSync("git show-ref --verify --quiet refs/heads/gh-pages", {
    stdio: "ignore",
  });
  console.log("📦 gh-pages branch exists locally");
} catch (e) {
  console.log("📦 Creating gh-pages branch...");
  execSync("git checkout --orphan gh-pages", { stdio: "inherit" });
  execSync("git rm -rf .", { stdio: "inherit" });
}

// Stage all files in build directory
process.chdir(buildDir);
execSync("git init", { stdio: "inherit" });
execSync("git add .", { stdio: "inherit" });
execSync('git commit -m "Deploy redirect page"', { stdio: "inherit" });

// Force push to gh-pages branch
console.log("\n📤 Force pushing to gh-pages branch...");
execSync("git push origin gh-pages --force", { stdio: "inherit" });

process.chdir(__dirname);
console.log("\n✅ Deployment complete!");
console.log(
  "🌐 Your redirect page should be live at: https://attanavaid.github.io/me"
);
