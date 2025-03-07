import {
  IBlog,
  IBlogFields,
  IJobAssignment,
  IJobAssignmentFields,
  IJobEntry,
  IJobEntryFields,
  IJobPosition,
  IJobPositionFields,
  IProfile,
  IProfileFields,
  ISite,
  ISiteFields,
  ISocialAccount,
  ISocialAccountFields,
  IWork,
  IWorkFields,
} from "./@types/@aereal/portfolio"

export type Work = IWork
export type Blog = IBlog
export type SocialAccount = ISocialAccount
export type Site = ISite
export type JobEntry = IJobEntry
export type JobPosition = IJobPosition
export type JobAssignment = IJobAssignment
export type Profile = IProfile

interface ContentTypeToEntryType {
  blog: Blog
  site: Site
  socialAccount: SocialAccount
  work: Work
  jobEntry: JobEntry
  jobPosition: JobPosition
  jobAssignment: JobAssignment
  profile: Profile
}

interface ContentTypeToFieldType {
  blog: IBlogFields
  site: ISiteFields
  socialAccount: ISocialAccountFields
  work: IWorkFields
  jobEntry: IJobEntryFields
  jobPosition: IJobPositionFields
  jobAssignment: IJobAssignmentFields
  profile: IProfileFields
}

export type FieldTypeOf<CT extends keyof ContentTypeToFieldType> =
  ContentTypeToFieldType[CT]

export type EntryTypeOf<CT extends keyof ContentTypeToEntryType> =
  ContentTypeToEntryType[CT]
