import { createClient, Entry, ContentfulCollection } from "contentful"
import { CONTENT_TYPE } from "./@types/@aereal/portfolio"
import {
  Work,
  Blog,
  Site,
  SocialAccount,
  JobEntry,
  JobPosition,
  Profile,
} from "./model"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
  environment: "master",
})

interface WholeEntries {
  readonly works: Work[]
  readonly blogs: Blog[]
  readonly socialAccounts: SocialAccount[]
  readonly site: Site | null
  readonly jobEntries: JobEntry[]
  readonly jobPositions: JobPosition[]
  readonly profile: Profile | null
}

export const fetchEntries = async (): Promise<WholeEntries> =>
  transformResponse(await client.getEntries())

export const transformResponse = (
  entries: ContentfulCollection<Entry<unknown>>
): WholeEntries => {
  const accum: Omit<WholeEntries, "site" | "profile"> = {
    works: [],
    blogs: [],
    socialAccounts: [],
    jobEntries: [],
    jobPositions: [],
  }
  let profile: Profile | null = null
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
      case "profile":
        profile = item as Profile
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
  return { ...accum, site, profile }
}
