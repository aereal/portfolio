import { createClient, Entry } from "contentful"
import { IWorkFields } from "./@types/@aereal/portfolio"

export type Work = Entry<IWorkFields>

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
  environment: "master",
})

export const fetchWorks = async (): Promise<Work[]> => {
  const entries = await client.getEntries<IWorkFields>()
  return entries.items
}
