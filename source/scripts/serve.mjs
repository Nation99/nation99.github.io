import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const joined = path.join(root, decoded);
  return joined.startsWith(root) ? joined : root;
}

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-cache",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(body);
}

const server = http.createServer((request, response) => {
  let target = safePath(request.url || "/");
  if (target.endsWith(path.sep)) target = path.join(target, "index.html");
  if (!path.extname(target)) target += ".html";

  fs.stat(target, (error, stats) => {
    if (!error && stats.isFile()) {
      const type = types[path.extname(target).toLowerCase()] || "application/octet-stream";
      response.writeHead(200, {
        "Content-Type": type,
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      });
      fs.createReadStream(target).pipe(response);
      return;
    }

    const notFound = path.join(root, "404.html");
    fs.readFile(notFound, (readError, body) => {
      if (readError) {
        send(response, 404, "Not found");
        return;
      }
      send(response, 404, body, types[".html"]);
    });
  });
});

server.listen(port, () => {
  console.log(`Serving ${root}`);
  console.log(`http://localhost:${port}`);
});
