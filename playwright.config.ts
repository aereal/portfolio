import { defineConfig, devices } from "@playwright/test"

const port = 4173

export default defineConfig({
  testDir: "./e2e",
  snapshotPathTemplate: "{testDir}/__snapshots__/{testFilePath}/{arg}{ext}",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: "list",
  use: {
    baseURL: `http://localhost:${port}`,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "node e2e/server.mjs",
    url: `http://localhost:${port}/`,
    env: { PORT: String(port) },
    reuseExistingServer: !process.env.CI,
  },
})
