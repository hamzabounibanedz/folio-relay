const { copyFileSync, mkdirSync } = require("node:fs");
const { createRequire } = require("node:module");
const fromReactPdf = createRequire(require.resolve("react-pdf"));
mkdirSync("public/_static", { recursive: true });
copyFileSync(fromReactPdf.resolve("pdfjs-dist/build/pdf.worker.min.js"), "public/_static/pdf.worker.min.js");
