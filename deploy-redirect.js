const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Read the redirect HTML file
const redirectHtml = fs.readFileSync("redirect-index.html", "utf8");

// Clean the build directory (remove old files)
const buildDir = path.join(__dirname, "build");
if (fs.existsSync(buildDir)) {
  // Remove all files and directories in build
  const files = fs.readdirSync(buildDir);
  files.forEach((file) => {
    const filePath = path.join(buildDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(filePath);
    }
  });
} else {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Write only the redirect index.html to build folder
fs.writeFileSync(path.join(buildDir, "index.html"), redirectHtml);

console.log("✅ Build folder cleaned and redirect page copied");
console.log("📦 Ready to deploy with: npm run deploy");
