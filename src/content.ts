import { readFileSync } from "node:fs"
import { join } from "node:path"
import { parse } from "yaml"
import type {
  Blog,
  JobAssignment,
  JobEntry,
  JobPosition,
  Profile,
  Site,
  SocialAccount,
  Work,
} from "./model"

export interface WholeContent {
  readonly works: Work[]
  readonly blogs: Blog[]
  readonly socialAccounts: SocialAccount[]
  readonly site: Site
  readonly jobPositions: JobPosition[]
  readonly profile: Profile
}

/** Raw YAML documents, keyed by the file they come from. */
export interface RawContent {
  readonly works: unknown
  readonly blogs: unknown
  readonly socialAccounts: unknown
  readonly site: unknown
  readonly jobPositions: unknown
  readonly profile: unknown
}

const defaultDataDir = join(process.cwd(), "src", "data")

export const loadContent = (dataDir = defaultDataDir): WholeContent => {
  const load = (name: string): unknown =>
    parse(readFileSync(join(dataDir, name), "utf8"))
  return buildContent({
    works: load("works.yaml"),
    blogs: load("blogs.yaml"),
    socialAccounts: load("social-accounts.yaml"),
    site: load("site.yaml"),
    jobPositions: load("job-positions.yaml"),
    profile: load("profile.yaml"),
  })
}

export const buildContent = (raw: RawContent): WholeContent => {
  const works = array(raw.works, "works", toWork).sort(
    (a, b) => Date.parse(b.performedDate) - Date.parse(a.performedDate)
  )
  const worksByUrl = new Map(works.map((w) => [w.url, w]))
  const resolveWork = (v: unknown, path: string): Work => {
    const url = expectString(v, path)
    const work = worksByUrl.get(url)
    if (work === undefined) {
      throw new ContentError(path, `no work found in works.yaml for ${url}`)
    }
    return work
  }

  const toJobEntry = (v: unknown, path: string): JobEntry => {
    const o = object(v, path)
    return {
      title: field(o, "title", path, expectString),
      startDate: field(o, "startDate", path, expectDate),
      ...optional(o, "finishDate", path, expectDate),
      ...optional(o, "body", path, expectString),
      ...optional(o, "relatedWorks", path, (x, p) => array(x, p, resolveWork)),
    }
  }
  const toJobAssignment = (v: unknown, path: string): JobAssignment => {
    const o = object(v, path)
    return {
      name: field(o, "name", path, expectString),
      description: field(o, "description", path, expectString),
      ...optional(o, "activities", path, (x, p) => array(x, p, toJobEntry)),
    }
  }
  const toJobPosition = (v: unknown, path: string): JobPosition => {
    const o = object(v, path)
    return {
      name: field(o, "name", path, expectString),
      ...optional(o, "assignments", path, (x, p) =>
        array(x, p, toJobAssignment)
      ),
    }
  }

  return {
    works,
    blogs: array(raw.blogs, "blogs", toBlog),
    socialAccounts: array(
      raw.socialAccounts,
      "socialAccounts",
      toSocialAccount
    ),
    site: toSite(raw.site, "site"),
    jobPositions: array(raw.jobPositions, "jobPositions", toJobPosition),
    profile: toProfile(raw.profile, "profile"),
  }
}

const toWork = (v: unknown, path: string): Work => {
  const o = object(v, path)
  return {
    name: field(o, "name", path, expectString),
    url: field(o, "url", path, expectString),
    eventName: field(o, "eventName", path, expectString),
    ...optional(o, "eventUrl", path, expectString),
    performedDate: field(o, "performedDate", path, expectDate),
    performedAt: field(o, "performedAt", path, (x, p) => {
      const loc = object(x, p)
      return {
        lat: field(loc, "lat", p, expectNumber),
        lon: field(loc, "lon", p, expectNumber),
      }
    }),
  }
}

const toBlog = (v: unknown, path: string): Blog => {
  const o = object(v, path)
  return {
    title: field(o, "title", path, expectString),
    url: field(o, "url", path, expectString),
    summary: field(o, "summary", path, expectString),
  }
}

const toSocialAccount = (v: unknown, path: string): SocialAccount => {
  const o = object(v, path)
  return {
    service: field(o, "service", path, expectString),
    url: field(o, "url", path, expectString),
    alternativeText: field(o, "alternativeText", path, expectString),
    color: field(o, "color", path, expectString),
  }
}

const toSite = (v: unknown, path: string): Site => {
  const o = object(v, path)
  return {
    title: field(o, "title", path, expectString),
    description: field(o, "description", path, expectString),
    facebookAppId: field(o, "facebookAppId", path, expectString),
    facebookAppPublisher: field(o, "facebookAppPublisher", path, expectString),
    twitterCardType: field(o, "twitterCardType", path, expectString),
    twitterCardOwner: field(o, "twitterCardOwner", path, expectString),
  }
}

const toProfile = (v: unknown, path: string): Profile => {
  const o = object(v, path)
  return {
    profileImage: field(o, "profileImage", path, (x, p) => {
      const img = object(x, p)
      return {
        url: field(img, "url", p, expectString),
        title: field(img, "title", p, expectString),
      }
    }),
  }
}

// --- validation helpers ---

export class ContentError extends Error {
  constructor(path: string, message: string) {
    super(`${path}: ${message}`)
    this.name = "ContentError"
  }
}

type Decoder<T> = (v: unknown, path: string) => T

const object = (v: unknown, path: string): Record<string, unknown> => {
  if (typeof v !== "object" || v === null || Array.isArray(v)) {
    throw new ContentError(path, "expected a mapping")
  }
  return v as Record<string, unknown>
}

const array = <T>(v: unknown, path: string, decode: Decoder<T>): T[] => {
  if (!Array.isArray(v)) {
    throw new ContentError(path, "expected a sequence")
  }
  return v.map((x, i) => decode(x, `${path}[${i}]`))
}

const field = <T>(
  o: Record<string, unknown>,
  key: string,
  path: string,
  decode: Decoder<T>
): T => {
  if (o[key] === undefined || o[key] === null) {
    throw new ContentError(`${path}.${key}`, "is required")
  }
  return decode(o[key], `${path}.${key}`)
}

// Omits the key entirely when absent, since Next.js props cannot contain `undefined`.
const optional = <K extends string, T>(
  o: Record<string, unknown>,
  key: K,
  path: string,
  decode: Decoder<T>
): { [P in K]?: T } =>
  o[key] === undefined || o[key] === null
    ? {}
    : ({ [key]: decode(o[key], `${path}.${key}`) } as { [P in K]: T })

const expectString = (v: unknown, path: string): string => {
  if (typeof v !== "string") {
    throw new ContentError(path, "expected a string")
  }
  return v
}

const expectNumber = (v: unknown, path: string): number => {
  if (typeof v !== "number") {
    throw new ContentError(path, "expected a number")
  }
  return v
}

const expectDate = (v: unknown, path: string): string => {
  const s = expectString(v, path)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s) || Number.isNaN(Date.parse(s))) {
    throw new ContentError(path, `expected a date (YYYY-MM-DD) but got ${s}`)
  }
  return s
}
