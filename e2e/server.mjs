// Serves the static export (dist/) the same way Firebase Hosting does (cleanUrls: true).
import { createServer } from "node:http"
import handler from "serve-handler"

const port = Number(process.env.PORT ?? 4173)

createServer((req, res) =>
  handler(req, res, { public: "dist", cleanUrls: true })
).listen(port, () => {
  console.log(`serving dist/ on http://localhost:${port}`)
})
