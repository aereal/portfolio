import { describe, expect, it } from "vitest"
import {
  buildContent,
  ContentError,
  loadContent,
  RawContent,
} from "../src/content"

const work = (name: string, performedDate: string) => ({
  name,
  url: `https://example.com/${name}`,
  eventName: `event of ${name}`,
  performedDate,
  performedAt: { lat: 0, lon: 0 },
})

const base: RawContent = {
  works: [],
  blogs: [],
  socialAccounts: [],
  site: {
    title: "t",
    description: "d",
    facebookAppId: "1",
    facebookAppPublisher: "p",
    twitterCardType: "summary",
    twitterCardOwner: "@o",
  },
  jobPositions: [],
  profile: { profileImage: { url: "/images/p.jpg", title: "p" } },
}

describe("buildContent", () => {
  it("sorts works by performedDate in descending order", () => {
    const { works } = buildContent({
      ...base,
      works: [work("old", "2020-02-03"), work("new", "2020-02-10")],
    })
    expect(works.map((w) => w.name)).toEqual(["new", "old"])
  })

  it("resolves relatedWorks by url", () => {
    const { jobPositions } = buildContent({
      ...base,
      works: [work("a", "2020-01-01")],
      jobPositions: [
        {
          name: "position",
          assignments: [
            {
              name: "assignment",
              description: "<p>desc</p>",
              activities: [
                {
                  title: "entry",
                  startDate: "2019-01-01",
                  relatedWorks: ["https://example.com/a"],
                },
              ],
            },
          ],
        },
      ],
    })
    const entry = jobPositions[0].assignments![0].activities![0]
    expect(entry.relatedWorks).toEqual([work("a", "2020-01-01")])
    // absent optional fields must be omitted, not undefined (Next.js props restriction)
    expect(Object.keys(entry)).toEqual(["title", "startDate", "relatedWorks"])
  })

  it("rejects relatedWorks referring to an unknown work", () => {
    expect(() =>
      buildContent({
        ...base,
        jobPositions: [
          {
            name: "position",
            assignments: [
              {
                name: "assignment",
                description: "",
                activities: [
                  {
                    title: "entry",
                    startDate: "2019-01-01",
                    relatedWorks: ["https://example.com/missing"],
                  },
                ],
              },
            ],
          },
        ],
      })
    ).toThrow(
      "jobPositions[0].assignments[0].activities[0].relatedWorks[0]: no work found"
    )
  })

  it("rejects a missing required field with its path", () => {
    expect(() =>
      buildContent({ ...base, blogs: [{ title: "t", url: "u" }] })
    ).toThrow(new ContentError("blogs[0].summary", "is required"))
  })

  it("rejects a malformed date", () => {
    expect(() =>
      buildContent({ ...base, works: [work("a", "2020/01/01")] })
    ).toThrow("works[0].performedDate: expected a date")
  })
})

describe("loadContent", () => {
  it("loads the content files in src/data", () => {
    const content = loadContent()
    expect(content.works.length).toBeGreaterThan(0)
    expect(content.jobPositions.length).toBeGreaterThan(0)
  })
})
