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
} from "./@types/@aereal/portfolio"

export type Work = IWork
export type Blog = IBlog
export type SocialAccount = ISocialAccount
export type Site = ISite

interface ContentTypeToEntryType {
  blog: Blog
  site: Site
  socialAccount: SocialAccount
  work: Work
}

interface ContentTypeToFieldType {
  blog: IBlogFields
  site: ISiteFields
  socialAccount: ISocialAccountFields
  work: IWorkFields
}

export type FieldTypeOf<CT extends CONTENT_TYPE> = ContentTypeToFieldType[CT]

export type EntryTypeOf<CT extends CONTENT_TYPE> = ContentTypeToEntryType[CT]
