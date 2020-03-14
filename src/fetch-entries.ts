import { createClient, Entry } from "contentful"
import {
  IWorkFields,
  CONTENT_TYPE,
  IBlogFields,
} from "./@types/@aereal/portfolio"

export type Work = Entry<IWorkFields>
export type Blog = Entry<IBlogFields>

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
  environment: "master",
})

interface WholeEntries {
  readonly works: Work[]
  readonly blogs: Blog[]
}

export const fetchEntries = async (): Promise<WholeEntries> => {
  const entries = await client.getEntries()
  const accum: WholeEntries = { works: [], blogs: [] }
  for (const item of entries.items) {
    switch (item.sys.contentType.sys.id as CONTENT_TYPE) {
      case "blog":
        accum.blogs.push(item as Blog)
        break
      case "work":
        accum.works.push(item as Work)
        break
    }
  }
  return accum
}
