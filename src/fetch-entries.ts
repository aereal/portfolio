import { createClient, Entry } from "contentful"
import {
  IWorkFields,
  CONTENT_TYPE,
  IBlogFields,
  ISocialAccountFields,
  ISiteFields,
} from "./@types/@aereal/portfolio"
import { Work, Blog, Site, SocialAccount } from "./model"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
  environment: "master",
})

interface WholeEntries {
  readonly works: Work[]
  readonly blogs: Blog[]
  readonly socialAccounts: SocialAccount[]
  site: Site
}

export const fetchEntries = async (): Promise<WholeEntries> => {
  const entries = await client.getEntries()
  const accum: WholeEntries = {
    works: [],
    blogs: [],
    socialAccounts: [],
    site: null as any,
  }
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
        accum.site = item as Site
        break
    }
  }
  return accum
}
