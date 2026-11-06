import { expect, Page, test } from "@playwright/test"

// Expectations live in e2e/__snapshots__/ as plain text so that they can be reviewed in diffs.
// Regenerate them with `pnpm e2e --update-snapshots` only when a content change is intended.

const headMetadata = (page: Page) =>
  page.evaluate(() => ({
    title: document.title,
    meta: Array.from(
      document.head.querySelectorAll<HTMLMetaElement>(
        "meta[property], meta[name]"
      )
    )
      .map((m) => ({
        key: m.getAttribute("property") ?? m.getAttribute("name"),
        content: m.content,
      }))
      .sort((a, b) => (a.key ?? "").localeCompare(b.key ?? "")),
  }))

const images = (page: Page) =>
  page.locator("img").evaluateAll((imgs) =>
    (imgs as HTMLImageElement[]).map((img) => ({
      alt: img.alt,
      loaded: img.complete && img.naturalWidth > 0,
    }))
  )

const toJSON = (value: unknown) => JSON.stringify(value, null, 2) + "\n"

const visit = async (page: Page, path: string) => {
  const res = await page.goto(path)
  // wait for client-side effects (e.g. data refetch after hydration) to settle
  await page.waitForLoadState("networkidle")
  return res
}

test.describe("/", () => {
  test("head", async ({ page }) => {
    await visit(page, "/")
    expect(toJSON(await headMetadata(page))).toMatchSnapshot("index.head.json")
  })

  test("body", async ({ page }) => {
    const res = await visit(page, "/")
    expect(res?.status()).toBe(200)
    await expect(page.locator("main")).toMatchAriaSnapshot({
      name: "index.main.aria.yml",
    })
  })

  test("images", async ({ page }) => {
    await visit(page, "/")
    expect(toJSON(await images(page))).toMatchSnapshot("index.images.json")
  })
})

test.describe("/resume", () => {
  test("head", async ({ page }) => {
    await visit(page, "/resume")
    expect(toJSON(await headMetadata(page))).toMatchSnapshot(
      "resume.head.json"
    )
  })

  test("body", async ({ page }) => {
    const res = await visit(page, "/resume")
    expect(res?.status()).toBe(200)
    await expect(page.locator("main")).toMatchAriaSnapshot({
      name: "resume.main.aria.yml",
    })
  })

  test("images", async ({ page }) => {
    await visit(page, "/resume")
    expect(toJSON(await images(page))).toMatchSnapshot("resume.images.json")
  })
})

test.describe("not found", () => {
  test("body", async ({ page }) => {
    const res = await visit(page, "/no-such-page")
    expect(res?.status()).toBe(404)
    await expect(page.locator("body")).toMatchAriaSnapshot({
      name: "404.body.aria.yml",
    })
  })
})
