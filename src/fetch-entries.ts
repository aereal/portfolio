import { createClient, Entry, ContentfulCollection } from "contentful"
import { CONTENT_TYPE } from "./@types/@aereal/portfolio"
import { Work, Blog, Site, SocialAccount, JobEntry, JobPosition } from "./model"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
  environment: "master",
})

interface WholeEntries {
  readonly works: Work[]
  readonly blogs: Blog[]
  readonly socialAccounts: SocialAccount[]
  readonly site: Site
  readonly jobEntries: JobEntry[]
  readonly jobPositions: JobPosition[]
}

export const fetchEntries = async (): Promise<WholeEntries> =>
  transformResponse(await client.getEntries())

export const transformResponse = (
  entries: ContentfulCollection<Entry<unknown>>
): WholeEntries => {
  const accum: Omit<WholeEntries, "site"> = {
    works: [],
    blogs: [],
    socialAccounts: [],
    jobEntries: [],
    jobPositions: [],
  }
  let site: Site | null = null
  for (const item of entries.items) {
    switch (item.sys.contentType.sys.id as CONTENT_TYPE) {
      case "blog":
        accum.blogs.push(item as Blog)
        break
      case "work":
        accum.works.push(item as Work)
        break
      case "socialAccount":
        accum.socialAccounts.push(item as SocialAccount)
        break
      case "site":
        site = item as Site
        break
      case "jobEntry":
        accum.jobEntries.push(item as JobEntry)
        break
      case "jobPosition":
        accum.jobPositions.push(item as JobPosition)
        break
    }
  }
  accum.works.sort(
    (a, b) =>
      Date.parse(b.fields.performedDate) - Date.parse(a.fields.performedDate)
  )
  accum.jobEntries.sort(
    (a, b) => Date.parse(b.fields.startDate) - Date.parse(a.fields.startDate)
  )
  if (site === null) {
    throw new Error("site not found")
  }
  return { ...accum, site }
}
