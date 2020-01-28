// DO NOT EDIT
// tslint:disable
export type Maybe<T> = T | undefined;

export interface StringQueryOperatorInput {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;
}

export interface IntQueryOperatorInput {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DateQueryOperatorInput {
  readonly eq?: Maybe<Date>;

  readonly ne?: Maybe<Date>;

  readonly gt?: Maybe<Date>;

  readonly gte?: Maybe<Date>;

  readonly lt?: Maybe<Date>;

  readonly lte?: Maybe<Date>;

  readonly in?: Maybe<ReadonlyArray<Maybe<Date>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<Date>>>;
}

export interface FloatQueryOperatorInput {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface NodeFilterInput {
  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;
}

export interface NodeFilterListInput {
  readonly elemMatch?: Maybe<NodeFilterInput>;
}

export interface InternalFilterInput {
  readonly content?: Maybe<StringQueryOperatorInput>;

  readonly contentDigest?: Maybe<StringQueryOperatorInput>;

  readonly description?: Maybe<StringQueryOperatorInput>;

  readonly fieldOwners?: Maybe<StringQueryOperatorInput>;

  readonly ignoreType?: Maybe<BooleanQueryOperatorInput>;

  readonly mediaType?: Maybe<StringQueryOperatorInput>;

  readonly owner?: Maybe<StringQueryOperatorInput>;

  readonly type?: Maybe<StringQueryOperatorInput>;
}

export interface BooleanQueryOperatorInput {
  readonly eq?: Maybe<boolean>;

  readonly ne?: Maybe<boolean>;

  readonly in?: Maybe<ReadonlyArray<Maybe<boolean>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<boolean>>>;
}

export interface ActivitiesYamlFilterListInput {
  readonly elemMatch?: Maybe<ActivitiesYamlFilterInput>;
}

export interface ActivitiesYamlFilterInput {
  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;

  readonly type?: Maybe<StringQueryOperatorInput>;

  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly url?: Maybe<StringQueryOperatorInput>;

  readonly recordedAt?: Maybe<ActivitiesYamlRecordedAtFilterInput>;
}

export interface ActivitiesYamlRecordedAtFilterInput {
  readonly type?: Maybe<StringQueryOperatorInput>;

  readonly url?: Maybe<StringQueryOperatorInput>;

  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly startDate?: Maybe<DateQueryOperatorInput>;

  readonly location?: Maybe<ActivitiesYamlRecordedAtLocationFilterInput>;
}

export interface ActivitiesYamlRecordedAtLocationFilterInput {
  readonly type?: Maybe<StringQueryOperatorInput>;

  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly address?: Maybe<ActivitiesYamlRecordedAtLocationAddressFilterInput>;
}

export interface ActivitiesYamlRecordedAtLocationAddressFilterInput {
  readonly type?: Maybe<StringQueryOperatorInput>;

  readonly addressRegion?: Maybe<StringQueryOperatorInput>;
}

export interface BlogsYamlFilterListInput {
  readonly elemMatch?: Maybe<BlogsYamlFilterInput>;
}

export interface BlogsYamlFilterInput {
  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;

  readonly summary?: Maybe<StringQueryOperatorInput>;

  readonly title?: Maybe<StringQueryOperatorInput>;

  readonly url?: Maybe<StringQueryOperatorInput>;
}

export interface SocialAccountsYamlFilterListInput {
  readonly elemMatch?: Maybe<SocialAccountsYamlFilterInput>;
}

export interface SocialAccountsYamlFilterInput {
  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;

  readonly service?: Maybe<StringQueryOperatorInput>;

  readonly url?: Maybe<StringQueryOperatorInput>;

  readonly alt?: Maybe<StringQueryOperatorInput>;

  readonly color?: Maybe<StringQueryOperatorInput>;
}

export interface FileFilterInput {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>;

  readonly absolutePath?: Maybe<StringQueryOperatorInput>;

  readonly relativePath?: Maybe<StringQueryOperatorInput>;

  readonly extension?: Maybe<StringQueryOperatorInput>;

  readonly size?: Maybe<IntQueryOperatorInput>;

  readonly prettySize?: Maybe<StringQueryOperatorInput>;

  readonly modifiedTime?: Maybe<DateQueryOperatorInput>;

  readonly accessTime?: Maybe<DateQueryOperatorInput>;

  readonly changeTime?: Maybe<DateQueryOperatorInput>;

  readonly birthTime?: Maybe<DateQueryOperatorInput>;

  readonly root?: Maybe<StringQueryOperatorInput>;

  readonly dir?: Maybe<StringQueryOperatorInput>;

  readonly base?: Maybe<StringQueryOperatorInput>;

  readonly ext?: Maybe<StringQueryOperatorInput>;

  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;

  readonly dev?: Maybe<IntQueryOperatorInput>;

  readonly mode?: Maybe<IntQueryOperatorInput>;

  readonly nlink?: Maybe<IntQueryOperatorInput>;

  readonly uid?: Maybe<IntQueryOperatorInput>;

  readonly gid?: Maybe<IntQueryOperatorInput>;

  readonly rdev?: Maybe<IntQueryOperatorInput>;

  readonly ino?: Maybe<FloatQueryOperatorInput>;

  readonly atimeMs?: Maybe<FloatQueryOperatorInput>;

  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>;

  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>;

  readonly atime?: Maybe<DateQueryOperatorInput>;

  readonly mtime?: Maybe<DateQueryOperatorInput>;

  readonly ctime?: Maybe<DateQueryOperatorInput>;

  readonly birthtime?: Maybe<DateQueryOperatorInput>;

  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>;

  readonly blksize?: Maybe<IntQueryOperatorInput>;

  readonly blocks?: Maybe<IntQueryOperatorInput>;

  readonly publicURL?: Maybe<StringQueryOperatorInput>;

  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;

  readonly childrenActivitiesYaml?: Maybe<ActivitiesYamlFilterListInput>;

  readonly childrenBlogsYaml?: Maybe<BlogsYamlFilterListInput>;

  readonly childrenSocialAccountsYaml?: Maybe<
    SocialAccountsYamlFilterListInput
  >;
}

export interface FileSortInput {
  readonly fields?: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;

  readonly order?: ReadonlyArray<Maybe<SortOrderEnum>>;
}

export interface DirectoryFilterInput {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>;

  readonly absolutePath?: Maybe<StringQueryOperatorInput>;

  readonly relativePath?: Maybe<StringQueryOperatorInput>;

  readonly extension?: Maybe<StringQueryOperatorInput>;

  readonly size?: Maybe<IntQueryOperatorInput>;

  readonly prettySize?: Maybe<StringQueryOperatorInput>;

  readonly modifiedTime?: Maybe<DateQueryOperatorInput>;

  readonly accessTime?: Maybe<DateQueryOperatorInput>;

  readonly changeTime?: Maybe<DateQueryOperatorInput>;

  readonly birthTime?: Maybe<DateQueryOperatorInput>;

  readonly root?: Maybe<StringQueryOperatorInput>;

  readonly dir?: Maybe<StringQueryOperatorInput>;

  readonly base?: Maybe<StringQueryOperatorInput>;

  readonly ext?: Maybe<StringQueryOperatorInput>;

  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;

  readonly dev?: Maybe<IntQueryOperatorInput>;

  readonly mode?: Maybe<IntQueryOperatorInput>;

  readonly nlink?: Maybe<IntQueryOperatorInput>;

  readonly uid?: Maybe<IntQueryOperatorInput>;

  readonly gid?: Maybe<IntQueryOperatorInput>;

  readonly rdev?: Maybe<IntQueryOperatorInput>;

  readonly ino?: Maybe<FloatQueryOperatorInput>;

  readonly atimeMs?: Maybe<FloatQueryOperatorInput>;

  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>;

  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>;

  readonly atime?: Maybe<DateQueryOperatorInput>;

  readonly mtime?: Maybe<DateQueryOperatorInput>;

  readonly ctime?: Maybe<DateQueryOperatorInput>;

  readonly birthtime?: Maybe<DateQueryOperatorInput>;

  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>;

  readonly blksize?: Maybe<IntQueryOperatorInput>;

  readonly blocks?: Maybe<IntQueryOperatorInput>;

  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;
}

export interface DirectorySortInput {
  readonly fields?: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;

  readonly order?: ReadonlyArray<Maybe<SortOrderEnum>>;
}

export interface BlogsYamlSortInput {
  readonly fields?: Maybe<ReadonlyArray<Maybe<BlogsYamlFieldsEnum>>>;

  readonly order?: ReadonlyArray<Maybe<SortOrderEnum>>;
}

export interface SocialAccountsYamlSortInput {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SocialAccountsYamlFieldsEnum>>>;

  readonly order?: ReadonlyArray<Maybe<SortOrderEnum>>;
}

export interface ActivitiesYamlSortInput {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ActivitiesYamlFieldsEnum>>>;

  readonly order?: ReadonlyArray<Maybe<SortOrderEnum>>;
}

export interface SiteSiteMetadataFilterInput {
  readonly title?: Maybe<StringQueryOperatorInput>;

  readonly description?: Maybe<StringQueryOperatorInput>;

  readonly facebookApp?: Maybe<SiteSiteMetadataFacebookAppFilterInput>;

  readonly twitterCard?: Maybe<SiteSiteMetadataTwitterCardFilterInput>;
}

export interface SiteSiteMetadataFacebookAppFilterInput {
  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly publisher?: Maybe<StringQueryOperatorInput>;
}

export interface SiteSiteMetadataTwitterCardFilterInput {
  readonly type?: Maybe<StringQueryOperatorInput>;

  readonly owner?: Maybe<StringQueryOperatorInput>;
}

export interface SiteFilterInput {
  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;

  readonly siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;

  readonly port?: Maybe<IntQueryOperatorInput>;

  readonly host?: Maybe<StringQueryOperatorInput>;

  readonly polyfill?: Maybe<BooleanQueryOperatorInput>;

  readonly pathPrefix?: Maybe<StringQueryOperatorInput>;

  readonly buildTime?: Maybe<DateQueryOperatorInput>;
}

export interface SiteSortInput {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;

  readonly order?: ReadonlyArray<Maybe<SortOrderEnum>>;
}

export interface SitePluginPluginOptionsFilterInput {
  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly path?: Maybe<StringQueryOperatorInput>;

  readonly trackingId?: Maybe<StringQueryOperatorInput>;

  readonly pathCheck?: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginPackageJsonFilterInput {
  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly description?: Maybe<StringQueryOperatorInput>;

  readonly version?: Maybe<StringQueryOperatorInput>;

  readonly main?: Maybe<StringQueryOperatorInput>;

  readonly author?: Maybe<StringQueryOperatorInput>;

  readonly license?: Maybe<StringQueryOperatorInput>;

  readonly dependencies?: Maybe<
    SitePluginPackageJsonDependenciesFilterListInput
  >;

  readonly devDependencies?: Maybe<
    SitePluginPackageJsonDevDependenciesFilterListInput
  >;

  readonly peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;

  readonly keywords?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDependenciesFilterListInput {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDependenciesFilterInput {
  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterListInput {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterInput {
  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
  readonly elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterInput {
  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginFilterInput {
  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;

  readonly resolve?: Maybe<StringQueryOperatorInput>;

  readonly name?: Maybe<StringQueryOperatorInput>;

  readonly version?: Maybe<StringQueryOperatorInput>;

  readonly pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;

  readonly nodeAPIs?: Maybe<StringQueryOperatorInput>;

  readonly browserAPIs?: Maybe<StringQueryOperatorInput>;

  readonly ssrAPIs?: Maybe<StringQueryOperatorInput>;

  readonly pluginFilepath?: Maybe<StringQueryOperatorInput>;

  readonly packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}

export interface SitePluginSortInput {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;

  readonly order?: ReadonlyArray<Maybe<SortOrderEnum>>;
}

export interface SitePageFilterInput {
  readonly id?: Maybe<StringQueryOperatorInput>;

  readonly parent?: Maybe<NodeFilterInput>;

  readonly children?: Maybe<NodeFilterListInput>;

  readonly internal?: Maybe<InternalFilterInput>;

  readonly path?: Maybe<StringQueryOperatorInput>;

  readonly internalComponentName?: Maybe<StringQueryOperatorInput>;

  readonly component?: Maybe<StringQueryOperatorInput>;

  readonly componentChunkName?: Maybe<StringQueryOperatorInput>;

  readonly isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;

  readonly pluginCreator?: Maybe<SitePluginFilterInput>;

  readonly pluginCreatorId?: Maybe<StringQueryOperatorInput>;

  readonly componentPath?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageSortInput {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;

  readonly order?: ReadonlyArray<Maybe<SortOrderEnum>>;
}

export type FileFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "publicURL"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "childrenActivitiesYaml"
  | "childrenActivitiesYaml___id"
  | "childrenActivitiesYaml___parent___id"
  | "childrenActivitiesYaml___parent___parent___id"
  | "childrenActivitiesYaml___parent___parent___children"
  | "childrenActivitiesYaml___parent___children"
  | "childrenActivitiesYaml___parent___children___id"
  | "childrenActivitiesYaml___parent___children___children"
  | "childrenActivitiesYaml___parent___internal___content"
  | "childrenActivitiesYaml___parent___internal___contentDigest"
  | "childrenActivitiesYaml___parent___internal___description"
  | "childrenActivitiesYaml___parent___internal___fieldOwners"
  | "childrenActivitiesYaml___parent___internal___ignoreType"
  | "childrenActivitiesYaml___parent___internal___mediaType"
  | "childrenActivitiesYaml___parent___internal___owner"
  | "childrenActivitiesYaml___parent___internal___type"
  | "childrenActivitiesYaml___children"
  | "childrenActivitiesYaml___children___id"
  | "childrenActivitiesYaml___children___parent___id"
  | "childrenActivitiesYaml___children___parent___children"
  | "childrenActivitiesYaml___children___children"
  | "childrenActivitiesYaml___children___children___id"
  | "childrenActivitiesYaml___children___children___children"
  | "childrenActivitiesYaml___children___internal___content"
  | "childrenActivitiesYaml___children___internal___contentDigest"
  | "childrenActivitiesYaml___children___internal___description"
  | "childrenActivitiesYaml___children___internal___fieldOwners"
  | "childrenActivitiesYaml___children___internal___ignoreType"
  | "childrenActivitiesYaml___children___internal___mediaType"
  | "childrenActivitiesYaml___children___internal___owner"
  | "childrenActivitiesYaml___children___internal___type"
  | "childrenActivitiesYaml___internal___content"
  | "childrenActivitiesYaml___internal___contentDigest"
  | "childrenActivitiesYaml___internal___description"
  | "childrenActivitiesYaml___internal___fieldOwners"
  | "childrenActivitiesYaml___internal___ignoreType"
  | "childrenActivitiesYaml___internal___mediaType"
  | "childrenActivitiesYaml___internal___owner"
  | "childrenActivitiesYaml___internal___type"
  | "childrenActivitiesYaml___type"
  | "childrenActivitiesYaml___name"
  | "childrenActivitiesYaml___url"
  | "childrenActivitiesYaml___recordedAt___type"
  | "childrenActivitiesYaml___recordedAt___url"
  | "childrenActivitiesYaml___recordedAt___name"
  | "childrenActivitiesYaml___recordedAt___startDate"
  | "childrenActivitiesYaml___recordedAt___location___type"
  | "childrenActivitiesYaml___recordedAt___location___name"
  | "childrenBlogsYaml"
  | "childrenBlogsYaml___id"
  | "childrenBlogsYaml___parent___id"
  | "childrenBlogsYaml___parent___parent___id"
  | "childrenBlogsYaml___parent___parent___children"
  | "childrenBlogsYaml___parent___children"
  | "childrenBlogsYaml___parent___children___id"
  | "childrenBlogsYaml___parent___children___children"
  | "childrenBlogsYaml___parent___internal___content"
  | "childrenBlogsYaml___parent___internal___contentDigest"
  | "childrenBlogsYaml___parent___internal___description"
  | "childrenBlogsYaml___parent___internal___fieldOwners"
  | "childrenBlogsYaml___parent___internal___ignoreType"
  | "childrenBlogsYaml___parent___internal___mediaType"
  | "childrenBlogsYaml___parent___internal___owner"
  | "childrenBlogsYaml___parent___internal___type"
  | "childrenBlogsYaml___children"
  | "childrenBlogsYaml___children___id"
  | "childrenBlogsYaml___children___parent___id"
  | "childrenBlogsYaml___children___parent___children"
  | "childrenBlogsYaml___children___children"
  | "childrenBlogsYaml___children___children___id"
  | "childrenBlogsYaml___children___children___children"
  | "childrenBlogsYaml___children___internal___content"
  | "childrenBlogsYaml___children___internal___contentDigest"
  | "childrenBlogsYaml___children___internal___description"
  | "childrenBlogsYaml___children___internal___fieldOwners"
  | "childrenBlogsYaml___children___internal___ignoreType"
  | "childrenBlogsYaml___children___internal___mediaType"
  | "childrenBlogsYaml___children___internal___owner"
  | "childrenBlogsYaml___children___internal___type"
  | "childrenBlogsYaml___internal___content"
  | "childrenBlogsYaml___internal___contentDigest"
  | "childrenBlogsYaml___internal___description"
  | "childrenBlogsYaml___internal___fieldOwners"
  | "childrenBlogsYaml___internal___ignoreType"
  | "childrenBlogsYaml___internal___mediaType"
  | "childrenBlogsYaml___internal___owner"
  | "childrenBlogsYaml___internal___type"
  | "childrenBlogsYaml___summary"
  | "childrenBlogsYaml___title"
  | "childrenBlogsYaml___url"
  | "childrenSocialAccountsYaml"
  | "childrenSocialAccountsYaml___id"
  | "childrenSocialAccountsYaml___parent___id"
  | "childrenSocialAccountsYaml___parent___parent___id"
  | "childrenSocialAccountsYaml___parent___parent___children"
  | "childrenSocialAccountsYaml___parent___children"
  | "childrenSocialAccountsYaml___parent___children___id"
  | "childrenSocialAccountsYaml___parent___children___children"
  | "childrenSocialAccountsYaml___parent___internal___content"
  | "childrenSocialAccountsYaml___parent___internal___contentDigest"
  | "childrenSocialAccountsYaml___parent___internal___description"
  | "childrenSocialAccountsYaml___parent___internal___fieldOwners"
  | "childrenSocialAccountsYaml___parent___internal___ignoreType"
  | "childrenSocialAccountsYaml___parent___internal___mediaType"
  | "childrenSocialAccountsYaml___parent___internal___owner"
  | "childrenSocialAccountsYaml___parent___internal___type"
  | "childrenSocialAccountsYaml___children"
  | "childrenSocialAccountsYaml___children___id"
  | "childrenSocialAccountsYaml___children___parent___id"
  | "childrenSocialAccountsYaml___children___parent___children"
  | "childrenSocialAccountsYaml___children___children"
  | "childrenSocialAccountsYaml___children___children___id"
  | "childrenSocialAccountsYaml___children___children___children"
  | "childrenSocialAccountsYaml___children___internal___content"
  | "childrenSocialAccountsYaml___children___internal___contentDigest"
  | "childrenSocialAccountsYaml___children___internal___description"
  | "childrenSocialAccountsYaml___children___internal___fieldOwners"
  | "childrenSocialAccountsYaml___children___internal___ignoreType"
  | "childrenSocialAccountsYaml___children___internal___mediaType"
  | "childrenSocialAccountsYaml___children___internal___owner"
  | "childrenSocialAccountsYaml___children___internal___type"
  | "childrenSocialAccountsYaml___internal___content"
  | "childrenSocialAccountsYaml___internal___contentDigest"
  | "childrenSocialAccountsYaml___internal___description"
  | "childrenSocialAccountsYaml___internal___fieldOwners"
  | "childrenSocialAccountsYaml___internal___ignoreType"
  | "childrenSocialAccountsYaml___internal___mediaType"
  | "childrenSocialAccountsYaml___internal___owner"
  | "childrenSocialAccountsYaml___internal___type"
  | "childrenSocialAccountsYaml___service"
  | "childrenSocialAccountsYaml___url"
  | "childrenSocialAccountsYaml___alt"
  | "childrenSocialAccountsYaml___color";

export type SortOrderEnum = "ASC" | "DESC";

export type DirectoryFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type BlogsYamlFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "summary"
  | "title"
  | "url";

export type SocialAccountsYamlFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "service"
  | "url"
  | "alt"
  | "color";

export type ActivitiesYamlFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "type"
  | "name"
  | "url"
  | "recordedAt___type"
  | "recordedAt___url"
  | "recordedAt___name"
  | "recordedAt___startDate"
  | "recordedAt___location___type"
  | "recordedAt___location___name"
  | "recordedAt___location___address___type"
  | "recordedAt___location___address___addressRegion";

export type SiteFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "siteMetadata___title"
  | "siteMetadata___description"
  | "siteMetadata___facebookApp___id"
  | "siteMetadata___facebookApp___publisher"
  | "siteMetadata___twitterCard___type"
  | "siteMetadata___twitterCard___owner"
  | "port"
  | "host"
  | "polyfill"
  | "pathPrefix"
  | "buildTime";

export type SitePluginFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "resolve"
  | "name"
  | "version"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___trackingId"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "browserAPIs"
  | "ssrAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___dependencies___name"
  | "packageJson___dependencies___version"
  | "packageJson___devDependencies"
  | "packageJson___devDependencies___name"
  | "packageJson___devDependencies___version"
  | "packageJson___peerDependencies"
  | "packageJson___peerDependencies___name"
  | "packageJson___peerDependencies___version"
  | "packageJson___keywords";

export type SitePageFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "path"
  | "internalComponentName"
  | "component"
  | "componentChunkName"
  | "isCreatedByStatefulCreatePages"
  | "pluginCreator___id"
  | "pluginCreator___parent___id"
  | "pluginCreator___parent___parent___id"
  | "pluginCreator___parent___parent___children"
  | "pluginCreator___parent___children"
  | "pluginCreator___parent___children___id"
  | "pluginCreator___parent___children___children"
  | "pluginCreator___parent___internal___content"
  | "pluginCreator___parent___internal___contentDigest"
  | "pluginCreator___parent___internal___description"
  | "pluginCreator___parent___internal___fieldOwners"
  | "pluginCreator___parent___internal___ignoreType"
  | "pluginCreator___parent___internal___mediaType"
  | "pluginCreator___parent___internal___owner"
  | "pluginCreator___parent___internal___type"
  | "pluginCreator___children"
  | "pluginCreator___children___id"
  | "pluginCreator___children___parent___id"
  | "pluginCreator___children___parent___children"
  | "pluginCreator___children___children"
  | "pluginCreator___children___children___id"
  | "pluginCreator___children___children___children"
  | "pluginCreator___children___internal___content"
  | "pluginCreator___children___internal___contentDigest"
  | "pluginCreator___children___internal___description"
  | "pluginCreator___children___internal___fieldOwners"
  | "pluginCreator___children___internal___ignoreType"
  | "pluginCreator___children___internal___mediaType"
  | "pluginCreator___children___internal___owner"
  | "pluginCreator___children___internal___type"
  | "pluginCreator___internal___content"
  | "pluginCreator___internal___contentDigest"
  | "pluginCreator___internal___description"
  | "pluginCreator___internal___fieldOwners"
  | "pluginCreator___internal___ignoreType"
  | "pluginCreator___internal___mediaType"
  | "pluginCreator___internal___owner"
  | "pluginCreator___internal___type"
  | "pluginCreator___resolve"
  | "pluginCreator___name"
  | "pluginCreator___version"
  | "pluginCreator___pluginOptions___name"
  | "pluginCreator___pluginOptions___path"
  | "pluginCreator___pluginOptions___trackingId"
  | "pluginCreator___pluginOptions___pathCheck"
  | "pluginCreator___nodeAPIs"
  | "pluginCreator___browserAPIs"
  | "pluginCreator___ssrAPIs"
  | "pluginCreator___pluginFilepath"
  | "pluginCreator___packageJson___name"
  | "pluginCreator___packageJson___description"
  | "pluginCreator___packageJson___version"
  | "pluginCreator___packageJson___main"
  | "pluginCreator___packageJson___author"
  | "pluginCreator___packageJson___license"
  | "pluginCreator___packageJson___dependencies"
  | "pluginCreator___packageJson___dependencies___name"
  | "pluginCreator___packageJson___dependencies___version"
  | "pluginCreator___packageJson___devDependencies"
  | "pluginCreator___packageJson___devDependencies___name"
  | "pluginCreator___packageJson___devDependencies___version"
  | "pluginCreator___packageJson___peerDependencies"
  | "pluginCreator___packageJson___peerDependencies___name"
  | "pluginCreator___packageJson___peerDependencies___version"
  | "pluginCreator___packageJson___keywords"
  | "pluginCreatorId"
  | "componentPath";

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

// ====================================================
// Documents
// ====================================================

export namespace IndexQuery {
  export type Variables = {};

  export type Query = {
    readonly __typename?: "Query";

    readonly site: Maybe<Site>;

    readonly allBlogsYaml: AllBlogsYaml;

    readonly allSocialAccountsYaml: AllSocialAccountsYaml;

    readonly allActivitiesYaml: AllActivitiesYaml;
  };

  export type Site = {
    readonly __typename?: "Site";

    readonly siteMetadata: Maybe<SiteMetadata>;
  };

  export type SiteMetadata = MetadataFragment.Fragment;

  export type AllBlogsYaml = {
    readonly __typename?: "BlogsYamlConnection";

    readonly edges: ReadonlyArray<Edges>;
  };

  export type Edges = {
    readonly __typename?: "BlogsYamlEdge";

    readonly node: Node;
  };

  export type Node = BlogFragment.Fragment;

  export type AllSocialAccountsYaml = {
    readonly __typename?: "SocialAccountsYamlConnection";

    readonly edges: ReadonlyArray<_Edges>;
  };

  export type _Edges = {
    readonly __typename?: "SocialAccountsYamlEdge";

    readonly node: _Node;
  };

  export type _Node = SocialAccountFragment.Fragment;

  export type AllActivitiesYaml = {
    readonly __typename?: "ActivitiesYamlConnection";

    readonly edges: ReadonlyArray<__Edges>;
  };

  export type __Edges = {
    readonly __typename?: "ActivitiesYamlEdge";

    readonly node: __Node;
  };

  export type __Node = ActivityFragment.Fragment;
}

export namespace ActivityFragment {
  export type Fragment = {
    readonly __typename?: "ActivitiesYaml";

    readonly name: Maybe<string>;

    readonly url: Maybe<string>;

    readonly recordedAt: Maybe<RecordedAt>;
  };

  export type RecordedAt = {
    readonly __typename?: "ActivitiesYamlRecordedAt";

    readonly url: Maybe<string>;

    readonly name: Maybe<string>;

    readonly startYear: Maybe<Date>;

    readonly startDate: Maybe<Date>;
  };
}

export namespace BlogFragment {
  export type Fragment = {
    readonly __typename?: "BlogsYaml";

    readonly title: Maybe<string>;

    readonly summary: Maybe<string>;

    readonly url: Maybe<string>;
  };
}

export namespace MetadataFragment {
  export type Fragment = {
    readonly __typename?: "SiteSiteMetadata";

    readonly title: Maybe<string>;

    readonly description: Maybe<string>;

    readonly facebookApp: Maybe<FacebookApp>;

    readonly twitterCard: Maybe<TwitterCard>;
  };

  export type FacebookApp = {
    readonly __typename?: "SiteSiteMetadataFacebookApp";

    readonly id: Maybe<string>;

    readonly publisher: Maybe<string>;
  };

  export type TwitterCard = {
    readonly __typename?: "SiteSiteMetadataTwitterCard";

    readonly owner: Maybe<string>;

    readonly type: Maybe<string>;
  };
}

export namespace SocialAccountFragment {
  export type Fragment = {
    readonly __typename?: "SocialAccountsYaml";

    readonly alt: Maybe<string>;

    readonly url: Maybe<string>;

    readonly service: Maybe<string>;

    readonly color: Maybe<string>;
  };
}
