import {
  CONTENT_TYPE,
  IWork,
  IBlog,
  ISocialAccount,
  ISite,
  IWorkFields,
  IBlogFields,
  ISocialAccountFields,
  ISiteFields,
  IJobEntryFields,
  IJobEntry,
} from "./@types/@aereal/portfolio"

export type Work = IWork
export type Blog = IBlog
export type SocialAccount = ISocialAccount
export type Site = ISite
export type JobEntry = IJobEntry

interface ContentTypeToEntryType {
  blog: Blog
  site: Site
  socialAccount: SocialAccount
  work: Work
  jobEntry: JobEntry
}

interface ContentTypeToFieldType {
  blog: IBlogFields
  site: ISiteFields
  socialAccount: ISocialAccountFields
  work: IWorkFields
  jobEntry: IJobEntryFields
}

export type FieldTypeOf<CT extends CONTENT_TYPE> = ContentTypeToFieldType[CT]

export type EntryTypeOf<CT extends CONTENT_TYPE> = ContentTypeToEntryType[CT]
