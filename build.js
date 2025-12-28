import nunjucks from "nunjucks";
import fs from "fs";

nunjucks.configure("src/templates", { autoescape: true });

const html = nunjucks.render("index.njk", {
  title: "Internship Task 2"
});

// FORCE create dist folder
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.writeFileSync("dist/index.html", html);

console.log("HTML built successfully");
