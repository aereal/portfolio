import { ContentfulCollection } from "contentful"
import { transformResponse } from "../src/fetch-entries"
import { Work, EntryTypeOf, FieldTypeOf } from "../src/model"
import { CONTENT_TYPE } from "../src/@types/@aereal/portfolio"

describe("transformResponse", () => {
  it("sorts works by performedDate", () => {
    const work1 = buildStubEntry("work", {
      performedDate: "2020-02-03",
      name: "test work 1",
      url: "http://example.com/",
      performedAt: { lat: 0, lon: 0 },
      eventName: "test event 1",
      eventUrl: "http://example.com/",
    })
    const work2 = buildStubEntry("work", {
      performedDate: "2020-02-10",
      name: "test work 2",
      url: "http://example.com/",
      performedAt: { lat: 0, lon: 0 },
      eventName: "test event 2",
      eventUrl: "http://example.com/",
    })

    const resp = transformResponse(
      buildStubCollection<Work>([work1, work2])
    )
    expect(resp.works[0].fields).toMatchObject<Partial<Work["fields"]>>({
      performedDate: "2020-02-10",
    })
    expect(resp.works[1].fields).toMatchObject<Partial<Work["fields"]>>({
      performedDate: "2020-02-03",
    })
  })
})

const buildStubCollection = <T>(items: T[]): ContentfulCollection<T> => ({
  total: items.length,
  skip: 0,
  limit: items.length,
  items,
  toPlainObject: () => ({}),
})

const buildStubEntry = <CT extends CONTENT_TYPE>(
  contentTypeId: CT,
  fields: FieldTypeOf<CT>
): EntryTypeOf<CT> => ({
  sys: {
    type: "",
    id: "",
    createdAt: "",
    updatedAt: "",
    locale: "",
    contentType: {
      sys: {
        type: "Link",
        linkType: "ContentType",
        id: contentTypeId as any,
      },
    },
  },
  fields: fields as any,
  toPlainObject: null as any,
  update: null as any,
})
