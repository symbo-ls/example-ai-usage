#!/usr/bin/env node
// Simple static file server - no dependencies required

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = process.env.PORT || 8080;
const ROOT_DIR = __dirname;

// MIME types
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};

const server = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Default to index.html
  if (pathname === "/") {
    pathname = "/index.html";
  }

  // Resolve file path
  let filePath = path.join(ROOT_DIR, pathname);

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    // If it's a directory, try to serve index.js from that directory
    if (stats.isDirectory()) {
      filePath = path.join(filePath, "index.js");
      fs.stat(filePath, (dirErr, dirStats) => {
        if (dirErr || !dirStats.isFile()) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 Not Found");
          return;
        }
        serveFile(filePath, res);
      });
      return;
    }

    // If it's a file, serve it
    if (stats.isFile()) {
      serveFile(filePath, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  });
});

function serveFile(filePath, res) {
  // Get MIME type
  const ext = path.extname(filePath);
  const mimeType = mimeTypes[ext] || "application/octet-stream";

  // Read and serve file
  fs.readFile(filePath, (readErr, data) => {
    if (readErr) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Server Error");
      return;
    }

    res.writeHead(200, { "Content-Type": mimeType });
    res.end(data);
  });
}

server.listen(PORT, () => {
  console.log(`✓ Server running at http://localhost:${PORT}`);
  console.log(`✓ Serving files from ${ROOT_DIR}`);
});
