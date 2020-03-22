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
  IJobAssignment,
  IJobAssignmentFields,
  IJobPosition,
  IJobPositionFields,
} from "./@types/@aereal/portfolio"

export type Work = IWork
export type Blog = IBlog
export type SocialAccount = ISocialAccount
export type Site = ISite
export type JobEntry = IJobEntry
export type JobPosition = IJobPosition
export type JobAssignment = IJobAssignment

interface ContentTypeToEntryType {
  blog: Blog
  site: Site
  socialAccount: SocialAccount
  work: Work
  jobEntry: JobEntry
  jobPosition: JobPosition
  jobAssignment: JobAssignment
}

interface ContentTypeToFieldType {
  blog: IBlogFields
  site: ISiteFields
  socialAccount: ISocialAccountFields
  work: IWorkFields
  jobEntry: IJobEntryFields
  jobPosition: IJobPositionFields
  jobAssignment: IJobAssignmentFields
}

export type FieldTypeOf<CT extends CONTENT_TYPE> = ContentTypeToFieldType[CT]

export type EntryTypeOf<CT extends CONTENT_TYPE> = ContentTypeToEntryType[CT]
