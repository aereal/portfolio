// DO NOT EDIT
// tslint:disable
export type Maybe<T> = T | undefined;

export interface SitePageConnectionSort {
  readonly fields: ReadonlyArray<Maybe<SitePageConnectionSortByFieldsEnum>>;

  readonly order?: SitePageConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSitePage {
  readonly jsonName?: Maybe<SitePageConnectionJsonNameQueryString>;

  readonly internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >;

  readonly path?: Maybe<SitePageConnectionPathQueryString_2>;

  readonly component?: Maybe<SitePageConnectionComponentQueryString>;

  readonly componentChunkName?: Maybe<
    SitePageConnectionComponentChunkNameQueryString
  >;

  readonly pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>;

  readonly pluginCreatorId?: Maybe<
    SitePageConnectionPluginCreatorIdQueryString_2
  >;

  readonly componentPath?: Maybe<SitePageConnectionComponentPathQueryString>;

  readonly id?: Maybe<SitePageConnectionIdQueryString_2>;

  readonly internal?: Maybe<SitePageConnectionInternalInputObject_2>;
}

export interface SitePageConnectionJsonNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionComponentQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorInputObject {
  readonly resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>;

  readonly id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>;

  readonly name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>;

  readonly version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>;

  readonly pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsInputObject
  >;

  readonly nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>;

  readonly browserAPIs?: Maybe<
    SitePageConnectionPluginCreatorBrowserApIsQueryList
  >;

  readonly ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>;

  readonly pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >;

  readonly packageJson?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonInputObject
  >;

  readonly internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  readonly name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsNameQueryString
  >;

  readonly path?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathQueryString
  >;

  readonly trackingId?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsTrackingIdQueryString
  >;

  readonly pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsTrackingIdQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  readonly eq?: Maybe<boolean>;

  readonly ne?: Maybe<boolean>;

  readonly in?: Maybe<ReadonlyArray<Maybe<boolean>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<boolean>>>;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  readonly name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonNameQueryString
  >;

  readonly description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >;

  readonly version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonVersionQueryString
  >;

  readonly main?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonMainQueryString
  >;

  readonly author?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonAuthorQueryString
  >;

  readonly license?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonLicenseQueryString
  >;

  readonly dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >;

  readonly devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >;

  readonly peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  readonly keywords?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  readonly elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  readonly name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >;

  readonly version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  readonly elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  readonly name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >;

  readonly version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  readonly elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  readonly name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >;

  readonly version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  readonly contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >;

  readonly type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>;

  readonly owner?: Maybe<
    SitePageConnectionPluginCreatorInternalOwnerQueryString
  >;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionComponentPathQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionInternalInputObject_2 {
  readonly type?: Maybe<SitePageConnectionInternalTypeQueryString_2>;

  readonly contentDigest?: Maybe<
    SitePageConnectionInternalContentDigestQueryString_2
  >;

  readonly description?: Maybe<
    SitePageConnectionInternalDescriptionQueryString
  >;

  readonly owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionSort {
  readonly fields: ReadonlyArray<Maybe<SitePluginConnectionSortByFieldsEnum>>;

  readonly order?: SitePluginConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  readonly resolve?: Maybe<SitePluginConnectionResolveQueryString_2>;

  readonly id?: Maybe<SitePluginConnectionIdQueryString_2>;

  readonly name?: Maybe<SitePluginConnectionNameQueryString_2>;

  readonly version?: Maybe<SitePluginConnectionVersionQueryString_2>;

  readonly pluginOptions?: Maybe<
    SitePluginConnectionPluginOptionsInputObject_2
  >;

  readonly nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>;

  readonly browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>;

  readonly ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>;

  readonly pluginFilepath?: Maybe<
    SitePluginConnectionPluginFilepathQueryString_2
  >;

  readonly packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>;

  readonly internal?: Maybe<SitePluginConnectionInternalInputObject_2>;
}

export interface SitePluginConnectionResolveQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  readonly name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>;

  readonly path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;

  readonly trackingId?: Maybe<
    SitePluginConnectionPluginOptionsTrackingIdQueryString_2
  >;

  readonly pathCheck?: Maybe<
    SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2
  >;
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPluginOptionsTrackingIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  readonly eq?: Maybe<boolean>;

  readonly ne?: Maybe<boolean>;

  readonly in?: Maybe<ReadonlyArray<Maybe<boolean>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<boolean>>>;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  readonly name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>;

  readonly description?: Maybe<
    SitePluginConnectionPackageJsonDescriptionQueryString_2
  >;

  readonly version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>;

  readonly main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>;

  readonly author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>;

  readonly license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>;

  readonly dependencies?: Maybe<
    SitePluginConnectionPackageJsonDependenciesQueryList_2
  >;

  readonly devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >;

  readonly peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >;

  readonly keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  readonly elemMatch?: Maybe<
    SitePluginConnectionPackageJsonDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  readonly name?: Maybe<
    SitePluginConnectionPackageJsonDependenciesNameQueryString_2
  >;

  readonly version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  readonly elemMatch?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  readonly name?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2
  >;

  readonly version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  readonly elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  readonly name?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
  >;

  readonly version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionInternalInputObject_2 {
  readonly contentDigest?: Maybe<
    SitePluginConnectionInternalContentDigestQueryString_2
  >;

  readonly type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>;

  readonly owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionSort {
  readonly fields: ReadonlyArray<Maybe<DirectoryConnectionSortByFieldsEnum>>;

  readonly order?: DirectoryConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDirectory {
  readonly id?: Maybe<DirectoryConnectionIdQueryString_2>;

  readonly internal?: Maybe<DirectoryConnectionInternalInputObject_2>;

  readonly sourceInstanceName?: Maybe<
    DirectoryConnectionSourceInstanceNameQueryString_2
  >;

  readonly absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>;

  readonly relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>;

  readonly extension?: Maybe<DirectoryConnectionExtensionQueryString_2>;

  readonly size?: Maybe<DirectoryConnectionSizeQueryInteger_2>;

  readonly prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>;

  readonly modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>;

  readonly accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>;

  readonly changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>;

  readonly birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>;

  readonly root?: Maybe<DirectoryConnectionRootQueryString_2>;

  readonly dir?: Maybe<DirectoryConnectionDirQueryString_2>;

  readonly base?: Maybe<DirectoryConnectionBaseQueryString_2>;

  readonly ext?: Maybe<DirectoryConnectionExtQueryString_2>;

  readonly name?: Maybe<DirectoryConnectionNameQueryString_2>;

  readonly relativeDirectory?: Maybe<
    DirectoryConnectionRelativeDirectoryQueryString_2
  >;

  readonly dev?: Maybe<DirectoryConnectionDevQueryInteger_2>;

  readonly mode?: Maybe<DirectoryConnectionModeQueryInteger_2>;

  readonly nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>;

  readonly uid?: Maybe<DirectoryConnectionUidQueryInteger_2>;

  readonly gid?: Maybe<DirectoryConnectionGidQueryInteger_2>;

  readonly rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>;

  readonly blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>;

  readonly ino?: Maybe<DirectoryConnectionInoQueryInteger_2>;

  readonly blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>;

  readonly atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>;

  readonly mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>;

  readonly ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>;

  readonly birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>;

  readonly atime?: Maybe<DirectoryConnectionAtimeQueryString_2>;

  readonly mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>;

  readonly ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>;

  readonly birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>;
}

export interface DirectoryConnectionIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionInternalInputObject_2 {
  readonly contentDigest?: Maybe<
    DirectoryConnectionInternalContentDigestQueryString_2
  >;

  readonly type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>;

  readonly description?: Maybe<
    DirectoryConnectionInternalDescriptionQueryString_2
  >;

  readonly owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>;
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionExtensionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionRootQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionDirQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionBaseQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionExtQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionDevQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionModeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionUidQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionGidQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionInoQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryConnectionAtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionMtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionCtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionSort {
  readonly fields: ReadonlyArray<Maybe<FileConnectionSortByFieldsEnum>>;

  readonly order?: FileConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterFile {
  readonly id?: Maybe<FileConnectionIdQueryString_2>;

  readonly internal?: Maybe<FileConnectionInternalInputObject_2>;

  readonly sourceInstanceName?: Maybe<
    FileConnectionSourceInstanceNameQueryString_2
  >;

  readonly absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>;

  readonly relativePath?: Maybe<FileConnectionRelativePathQueryString_2>;

  readonly extension?: Maybe<FileConnectionExtensionQueryString_2>;

  readonly size?: Maybe<FileConnectionSizeQueryInteger_2>;

  readonly prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>;

  readonly modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>;

  readonly accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>;

  readonly changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>;

  readonly birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>;

  readonly root?: Maybe<FileConnectionRootQueryString_2>;

  readonly dir?: Maybe<FileConnectionDirQueryString_2>;

  readonly base?: Maybe<FileConnectionBaseQueryString_2>;

  readonly ext?: Maybe<FileConnectionExtQueryString_2>;

  readonly name?: Maybe<FileConnectionNameQueryString_2>;

  readonly relativeDirectory?: Maybe<
    FileConnectionRelativeDirectoryQueryString_2
  >;

  readonly dev?: Maybe<FileConnectionDevQueryInteger_2>;

  readonly mode?: Maybe<FileConnectionModeQueryInteger_2>;

  readonly nlink?: Maybe<FileConnectionNlinkQueryInteger_2>;

  readonly uid?: Maybe<FileConnectionUidQueryInteger_2>;

  readonly gid?: Maybe<FileConnectionGidQueryInteger_2>;

  readonly rdev?: Maybe<FileConnectionRdevQueryInteger_2>;

  readonly blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>;

  readonly ino?: Maybe<FileConnectionInoQueryInteger_2>;

  readonly blocks?: Maybe<FileConnectionBlocksQueryInteger_2>;

  readonly atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>;

  readonly mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>;

  readonly ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>;

  readonly birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>;

  readonly atime?: Maybe<FileConnectionAtimeQueryString_2>;

  readonly mtime?: Maybe<FileConnectionMtimeQueryString_2>;

  readonly ctime?: Maybe<FileConnectionCtimeQueryString_2>;

  readonly birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>;

  readonly publicURL?: Maybe<PublicUrlQueryString_4>;
}

export interface FileConnectionIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionInternalInputObject_2 {
  readonly contentDigest?: Maybe<
    FileConnectionInternalContentDigestQueryString_2
  >;

  readonly type?: Maybe<FileConnectionInternalTypeQueryString_2>;

  readonly mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>;

  readonly description?: Maybe<FileConnectionInternalDescriptionQueryString_2>;

  readonly owner?: Maybe<FileConnectionInternalOwnerQueryString_2>;
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionAbsolutePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionRelativePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionExtensionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionSizeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionPrettySizeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionModifiedTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionAccessTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionChangeTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionBirthTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionRootQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionDirQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionBaseQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionExtQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionDevQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionModeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionNlinkQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionUidQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionGidQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionRdevQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionBlksizeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionInoQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionBlocksQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileConnectionAtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionMtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionCtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileConnectionBirthtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface PublicUrlQueryString_4 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlConnectionSort {
  readonly fields: ReadonlyArray<
    Maybe<SocialAccountsYamlConnectionSortByFieldsEnum>
  >;

  readonly order?: SocialAccountsYamlConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSocialAccountsYaml {
  readonly service?: Maybe<SocialAccountsYamlConnectionServiceQueryString_2>;

  readonly url?: Maybe<SocialAccountsYamlConnectionUrlQueryString_2>;

  readonly alt?: Maybe<SocialAccountsYamlConnectionAltQueryString_2>;

  readonly color?: Maybe<SocialAccountsYamlConnectionColorQueryString_2>;

  readonly id?: Maybe<SocialAccountsYamlConnectionIdQueryString_2>;

  readonly internal?: Maybe<SocialAccountsYamlConnectionInternalInputObject_2>;
}

export interface SocialAccountsYamlConnectionServiceQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlConnectionUrlQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlConnectionAltQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlConnectionColorQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlConnectionIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlConnectionInternalInputObject_2 {
  readonly contentDigest?: Maybe<
    SocialAccountsYamlConnectionInternalContentDigestQueryString_2
  >;

  readonly type?: Maybe<SocialAccountsYamlConnectionInternalTypeQueryString_2>;

  readonly owner?: Maybe<
    SocialAccountsYamlConnectionInternalOwnerQueryString_2
  >;
}

export interface SocialAccountsYamlConnectionInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlConnectionInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlConnectionInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlConnectionSort {
  readonly fields: ReadonlyArray<Maybe<BlogsYamlConnectionSortByFieldsEnum>>;

  readonly order?: BlogsYamlConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterBlogsYaml {
  readonly summary?: Maybe<BlogsYamlConnectionSummaryQueryString_2>;

  readonly title?: Maybe<BlogsYamlConnectionTitleQueryString_2>;

  readonly url?: Maybe<BlogsYamlConnectionUrlQueryString_2>;

  readonly id?: Maybe<BlogsYamlConnectionIdQueryString_2>;

  readonly internal?: Maybe<BlogsYamlConnectionInternalInputObject_2>;
}

export interface BlogsYamlConnectionSummaryQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlConnectionTitleQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlConnectionUrlQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlConnectionIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlConnectionInternalInputObject_2 {
  readonly contentDigest?: Maybe<
    BlogsYamlConnectionInternalContentDigestQueryString_2
  >;

  readonly type?: Maybe<BlogsYamlConnectionInternalTypeQueryString_2>;

  readonly owner?: Maybe<BlogsYamlConnectionInternalOwnerQueryString_2>;
}

export interface BlogsYamlConnectionInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlConnectionInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlConnectionInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionSort {
  readonly fields: ReadonlyArray<
    Maybe<ActivitiesYamlConnectionSortByFieldsEnum>
  >;

  readonly order?: ActivitiesYamlConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterActivitiesYaml {
  readonly type?: Maybe<ActivitiesYamlConnectionTypeQueryString_2>;

  readonly name?: Maybe<ActivitiesYamlConnectionNameQueryString_2>;

  readonly url?: Maybe<ActivitiesYamlConnectionUrlQueryString_2>;

  readonly recordedAt?: Maybe<ActivitiesYamlConnectionRecordedAtInputObject_2>;

  readonly id?: Maybe<ActivitiesYamlConnectionIdQueryString_2>;

  readonly internal?: Maybe<ActivitiesYamlConnectionInternalInputObject_2>;
}

export interface ActivitiesYamlConnectionTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionUrlQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionRecordedAtInputObject_2 {
  readonly type?: Maybe<ActivitiesYamlConnectionRecordedAtTypeQueryString_2>;

  readonly url?: Maybe<ActivitiesYamlConnectionRecordedAtUrlQueryString_2>;

  readonly name?: Maybe<ActivitiesYamlConnectionRecordedAtNameQueryString_2>;

  readonly startDate?: Maybe<
    ActivitiesYamlConnectionRecordedAtStartDateQueryString_2
  >;

  readonly location?: Maybe<
    ActivitiesYamlConnectionRecordedAtLocationInputObject_2
  >;
}

export interface ActivitiesYamlConnectionRecordedAtTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionRecordedAtUrlQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionRecordedAtNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionRecordedAtStartDateQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionRecordedAtLocationInputObject_2 {
  readonly type?: Maybe<
    ActivitiesYamlConnectionRecordedAtLocationTypeQueryString_2
  >;

  readonly name?: Maybe<
    ActivitiesYamlConnectionRecordedAtLocationNameQueryString_2
  >;

  readonly address?: Maybe<
    ActivitiesYamlConnectionRecordedAtLocationAddressInputObject_2
  >;
}

export interface ActivitiesYamlConnectionRecordedAtLocationTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionRecordedAtLocationNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionRecordedAtLocationAddressInputObject_2 {
  readonly type?: Maybe<
    ActivitiesYamlConnectionRecordedAtLocationAddressTypeQueryString_2
  >;

  readonly addressRegion?: Maybe<
    ActivitiesYamlConnectionRecordedAtLocationAddressAddressRegionQueryString_2
  >;
}

export interface ActivitiesYamlConnectionRecordedAtLocationAddressTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionRecordedAtLocationAddressAddressRegionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionInternalInputObject_2 {
  readonly contentDigest?: Maybe<
    ActivitiesYamlConnectionInternalContentDigestQueryString_2
  >;

  readonly type?: Maybe<ActivitiesYamlConnectionInternalTypeQueryString_2>;

  readonly owner?: Maybe<ActivitiesYamlConnectionInternalOwnerQueryString_2>;
}

export interface ActivitiesYamlConnectionInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlConnectionInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageJsonNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageInternalComponentNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageComponentQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageComponentChunkNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorInputObject {
  readonly resolve?: Maybe<SitePagePluginCreatorResolveQueryString>;

  readonly id?: Maybe<SitePagePluginCreatorIdQueryString>;

  readonly name?: Maybe<SitePagePluginCreatorNameQueryString>;

  readonly version?: Maybe<SitePagePluginCreatorVersionQueryString>;

  readonly pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>;

  readonly nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>;

  readonly browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>;

  readonly ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>;

  readonly pluginFilepath?: Maybe<
    SitePagePluginCreatorPluginFilepathQueryString
  >;

  readonly packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>;

  readonly internal?: Maybe<SitePagePluginCreatorInternalInputObject>;
}

export interface SitePagePluginCreatorResolveQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorIdQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  readonly name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>;

  readonly path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;

  readonly trackingId?: Maybe<
    SitePagePluginCreatorPluginOptionsTrackingIdQueryString
  >;

  readonly pathCheck?: Maybe<
    SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean
  >;
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPluginOptionsTrackingIdQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  readonly eq?: Maybe<boolean>;

  readonly ne?: Maybe<boolean>;

  readonly in?: Maybe<ReadonlyArray<Maybe<boolean>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<boolean>>>;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  readonly name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>;

  readonly description?: Maybe<
    SitePagePluginCreatorPackageJsonDescriptionQueryString
  >;

  readonly version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>;

  readonly main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>;

  readonly author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>;

  readonly license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>;

  readonly dependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesQueryList
  >;

  readonly devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >;

  readonly peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  readonly keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  readonly elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesInputObject
  >;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  readonly name?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesNameQueryString
  >;

  readonly version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  readonly elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesInputObject
  >;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  readonly name?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString
  >;

  readonly version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  readonly elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  readonly name?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString
  >;

  readonly version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorInternalInputObject {
  readonly contentDigest?: Maybe<
    SitePagePluginCreatorInternalContentDigestQueryString
  >;

  readonly type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>;

  readonly owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageComponentPathQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageInternalInputObject_2 {
  readonly type?: Maybe<SitePageInternalTypeQueryString_2>;

  readonly contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>;

  readonly description?: Maybe<SitePageInternalDescriptionQueryString>;

  readonly owner?: Maybe<SitePageInternalOwnerQueryString_2>;
}

export interface SitePageInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageInternalDescriptionQueryString {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePageInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginResolveQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPluginOptionsInputObject_2 {
  readonly name?: Maybe<SitePluginPluginOptionsNameQueryString_2>;

  readonly path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;

  readonly trackingId?: Maybe<SitePluginPluginOptionsTrackingIdQueryString_2>;

  readonly pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPluginOptionsTrackingIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  readonly eq?: Maybe<boolean>;

  readonly ne?: Maybe<boolean>;

  readonly in?: Maybe<ReadonlyArray<Maybe<boolean>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<boolean>>>;
}

export interface SitePluginNodeApIsQueryList_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginBrowserApIsQueryList_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginSsrApIsQueryList_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPluginFilepathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonInputObject_2 {
  readonly name?: Maybe<SitePluginPackageJsonNameQueryString_2>;

  readonly description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>;

  readonly version?: Maybe<SitePluginPackageJsonVersionQueryString_2>;

  readonly main?: Maybe<SitePluginPackageJsonMainQueryString_2>;

  readonly author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>;

  readonly license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>;

  readonly dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>;

  readonly devDependencies?: Maybe<
    SitePluginPackageJsonDevDependenciesQueryList_2
  >;

  readonly peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesQueryList_2
  >;

  readonly keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  readonly name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>;

  readonly version?: Maybe<
    SitePluginPackageJsonDependenciesVersionQueryString_2
  >;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  readonly name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>;

  readonly version?: Maybe<
    SitePluginPackageJsonDevDependenciesVersionQueryString_2
  >;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  readonly elemMatch?: Maybe<
    SitePluginPackageJsonPeerDependenciesInputObject_2
  >;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  readonly name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>;

  readonly version?: Maybe<
    SitePluginPackageJsonPeerDependenciesVersionQueryString_2
  >;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginInternalInputObject_2 {
  readonly contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>;

  readonly type?: Maybe<SitePluginInternalTypeQueryString_2>;

  readonly owner?: Maybe<SitePluginInternalOwnerQueryString_2>;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePluginInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteSiteMetadataInputObject_2 {
  readonly title?: Maybe<SiteSiteMetadataTitleQueryString_2>;

  readonly description?: Maybe<SiteSiteMetadataDescriptionQueryString_2>;

  readonly facebookApp?: Maybe<SiteSiteMetadataFacebookAppInputObject_2>;

  readonly twitterCard?: Maybe<SiteSiteMetadataTwitterCardInputObject_2>;
}

export interface SiteSiteMetadataTitleQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteSiteMetadataDescriptionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteSiteMetadataFacebookAppInputObject_2 {
  readonly id?: Maybe<SiteSiteMetadataFacebookAppIdQueryString_2>;

  readonly publisher?: Maybe<SiteSiteMetadataFacebookAppPublisherQueryString_2>;
}

export interface SiteSiteMetadataFacebookAppIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteSiteMetadataFacebookAppPublisherQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteSiteMetadataTwitterCardInputObject_2 {
  readonly type?: Maybe<SiteSiteMetadataTwitterCardTypeQueryString_2>;

  readonly owner?: Maybe<SiteSiteMetadataTwitterCardOwnerQueryString_2>;
}

export interface SiteSiteMetadataTwitterCardTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteSiteMetadataTwitterCardOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePortQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteHostQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePathPrefixQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SitePolyfillQueryBoolean_2 {
  readonly eq?: Maybe<boolean>;

  readonly ne?: Maybe<boolean>;

  readonly in?: Maybe<ReadonlyArray<Maybe<boolean>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<boolean>>>;
}

export interface SiteBuildTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteInternalInputObject_2 {
  readonly contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>;

  readonly type?: Maybe<SiteInternalTypeQueryString_2>;

  readonly owner?: Maybe<SiteInternalOwnerQueryString_2>;
}

export interface SiteInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SiteInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryInternalInputObject_2 {
  readonly contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>;

  readonly type?: Maybe<DirectoryInternalTypeQueryString_2>;

  readonly description?: Maybe<DirectoryInternalDescriptionQueryString_2>;

  readonly owner?: Maybe<DirectoryInternalOwnerQueryString_2>;
}

export interface DirectoryInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryInternalDescriptionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectorySourceInstanceNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryAbsolutePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryRelativePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryExtensionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectorySizeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryPrettySizeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryModifiedTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryAccessTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryChangeTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryBirthTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryRootQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryDirQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryBaseQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryExtQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryDevQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryModeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryNlinkQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryUidQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryGidQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryRdevQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryBlksizeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryInoQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryBlocksQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryAtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryMtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryCtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface DirectoryAtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryMtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryCtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface DirectoryBirthtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileInternalInputObject_2 {
  readonly contentDigest?: Maybe<FileInternalContentDigestQueryString_2>;

  readonly type?: Maybe<FileInternalTypeQueryString_2>;

  readonly mediaType?: Maybe<FileInternalMediaTypeQueryString_2>;

  readonly description?: Maybe<FileInternalDescriptionQueryString_2>;

  readonly owner?: Maybe<FileInternalOwnerQueryString_2>;
}

export interface FileInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileInternalMediaTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileInternalDescriptionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileSourceInstanceNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileAbsolutePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileRelativePathQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileExtensionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileSizeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FilePrettySizeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileModifiedTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileAccessTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileChangeTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileBirthTimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileRootQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileDirQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileBaseQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileExtQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileRelativeDirectoryQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileDevQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileModeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileNlinkQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileUidQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileGidQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileRdevQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileBlksizeQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileInoQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileBlocksQueryInteger_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileAtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileMtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileCtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileBirthtimeMsQueryFloat_2 {
  readonly eq?: Maybe<number>;

  readonly ne?: Maybe<number>;

  readonly gt?: Maybe<number>;

  readonly gte?: Maybe<number>;

  readonly lt?: Maybe<number>;

  readonly lte?: Maybe<number>;

  readonly in?: Maybe<ReadonlyArray<Maybe<number>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<number>>>;
}

export interface FileAtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileMtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileCtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface FileBirthtimeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface PublicUrlQueryString_3 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlServiceQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlUrlQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlAltQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlColorQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlInternalInputObject_2 {
  readonly contentDigest?: Maybe<
    SocialAccountsYamlInternalContentDigestQueryString_2
  >;

  readonly type?: Maybe<SocialAccountsYamlInternalTypeQueryString_2>;

  readonly owner?: Maybe<SocialAccountsYamlInternalOwnerQueryString_2>;
}

export interface SocialAccountsYamlInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface SocialAccountsYamlInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlSummaryQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlTitleQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlUrlQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlInternalInputObject_2 {
  readonly contentDigest?: Maybe<BlogsYamlInternalContentDigestQueryString_2>;

  readonly type?: Maybe<BlogsYamlInternalTypeQueryString_2>;

  readonly owner?: Maybe<BlogsYamlInternalOwnerQueryString_2>;
}

export interface BlogsYamlInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface BlogsYamlInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlUrlQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlRecordedAtInputObject_2 {
  readonly type?: Maybe<ActivitiesYamlRecordedAtTypeQueryString_2>;

  readonly url?: Maybe<ActivitiesYamlRecordedAtUrlQueryString_2>;

  readonly name?: Maybe<ActivitiesYamlRecordedAtNameQueryString_2>;

  readonly startDate?: Maybe<ActivitiesYamlRecordedAtStartDateQueryString_2>;

  readonly location?: Maybe<ActivitiesYamlRecordedAtLocationInputObject_2>;
}

export interface ActivitiesYamlRecordedAtTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlRecordedAtUrlQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlRecordedAtNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlRecordedAtStartDateQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlRecordedAtLocationInputObject_2 {
  readonly type?: Maybe<ActivitiesYamlRecordedAtLocationTypeQueryString_2>;

  readonly name?: Maybe<ActivitiesYamlRecordedAtLocationNameQueryString_2>;

  readonly address?: Maybe<
    ActivitiesYamlRecordedAtLocationAddressInputObject_2
  >;
}

export interface ActivitiesYamlRecordedAtLocationTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlRecordedAtLocationNameQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlRecordedAtLocationAddressInputObject_2 {
  readonly type?: Maybe<
    ActivitiesYamlRecordedAtLocationAddressTypeQueryString_2
  >;

  readonly addressRegion?: Maybe<
    ActivitiesYamlRecordedAtLocationAddressAddressRegionQueryString_2
  >;
}

export interface ActivitiesYamlRecordedAtLocationAddressTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlRecordedAtLocationAddressAddressRegionQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlIdQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlInternalInputObject_2 {
  readonly contentDigest?: Maybe<
    ActivitiesYamlInternalContentDigestQueryString_2
  >;

  readonly type?: Maybe<ActivitiesYamlInternalTypeQueryString_2>;

  readonly owner?: Maybe<ActivitiesYamlInternalOwnerQueryString_2>;
}

export interface ActivitiesYamlInternalContentDigestQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlInternalTypeQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export interface ActivitiesYamlInternalOwnerQueryString_2 {
  readonly eq?: Maybe<string>;

  readonly ne?: Maybe<string>;

  readonly regex?: Maybe<string>;

  readonly glob?: Maybe<string>;

  readonly in?: Maybe<ReadonlyArray<Maybe<string>>>;

  readonly nin?: Maybe<ReadonlyArray<Maybe<string>>>;
}

export type SitePageConnectionSortByFieldsEnum =
  | "jsonName"
  | "internalComponentName"
  | "path"
  | "component"
  | "componentChunkName"
  | "pluginCreator___NODE"
  | "pluginCreatorId"
  | "componentPath"
  | "id"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___owner";

export type SitePageConnectionSortOrderValues = "ASC" | "DESC";

export type SitePageDistinctEnum =
  | "jsonName"
  | "internalComponentName"
  | "path"
  | "component"
  | "componentChunkName"
  | "pluginCreator___NODE"
  | "pluginCreatorId"
  | "componentPath"
  | "id"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___owner";

export type SitePageGroupEnum =
  | "jsonName"
  | "internalComponentName"
  | "path"
  | "component"
  | "componentChunkName"
  | "pluginCreator___NODE"
  | "pluginCreatorId"
  | "componentPath"
  | "id"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___owner";

export type SitePluginConnectionSortByFieldsEnum =
  | "resolve"
  | "id"
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
  | "packageJson___devDependencies"
  | "packageJson___peerDependencies"
  | "packageJson___keywords"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type SitePluginConnectionSortOrderValues = "ASC" | "DESC";

export type SitePluginDistinctEnum =
  | "resolve"
  | "id"
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
  | "packageJson___devDependencies"
  | "packageJson___peerDependencies"
  | "packageJson___keywords"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type SitePluginGroupEnum =
  | "resolve"
  | "id"
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
  | "packageJson___devDependencies"
  | "packageJson___peerDependencies"
  | "packageJson___keywords"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type DirectoryConnectionSortByFieldsEnum =
  | "id"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___description"
  | "internal___owner"
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
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

export type DirectoryConnectionSortOrderValues = "ASC" | "DESC";

export type DirectoryDistinctEnum =
  | "id"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___description"
  | "internal___owner"
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
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

export type DirectoryGroupEnum =
  | "id"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___description"
  | "internal___owner"
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
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

export type FileConnectionSortByFieldsEnum =
  | "id"
  | "children"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___mediaType"
  | "internal___description"
  | "internal___owner"
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
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "publicURL";

export type FileConnectionSortOrderValues = "ASC" | "DESC";

export type FileDistinctEnum =
  | "id"
  | "children"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___mediaType"
  | "internal___description"
  | "internal___owner"
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
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

export type FileGroupEnum =
  | "id"
  | "children"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___mediaType"
  | "internal___description"
  | "internal___owner"
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
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

export type SocialAccountsYamlConnectionSortByFieldsEnum =
  | "service"
  | "url"
  | "alt"
  | "color"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type SocialAccountsYamlConnectionSortOrderValues = "ASC" | "DESC";

export type SocialAccountsYamlDistinctEnum =
  | "service"
  | "url"
  | "alt"
  | "color"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type SocialAccountsYamlGroupEnum =
  | "service"
  | "url"
  | "alt"
  | "color"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type BlogsYamlConnectionSortByFieldsEnum =
  | "summary"
  | "title"
  | "url"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type BlogsYamlConnectionSortOrderValues = "ASC" | "DESC";

export type BlogsYamlDistinctEnum =
  | "summary"
  | "title"
  | "url"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type BlogsYamlGroupEnum =
  | "summary"
  | "title"
  | "url"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type ActivitiesYamlConnectionSortByFieldsEnum =
  | "type"
  | "name"
  | "url"
  | "recordedAt___type"
  | "recordedAt___url"
  | "recordedAt___name"
  | "recordedAt___startDate"
  | "recordedAt___location___type"
  | "recordedAt___location___name"
  | "recordedAt___location___address"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type ActivitiesYamlConnectionSortOrderValues = "ASC" | "DESC";

export type ActivitiesYamlDistinctEnum =
  | "type"
  | "name"
  | "url"
  | "recordedAt___type"
  | "recordedAt___url"
  | "recordedAt___name"
  | "recordedAt___startDate"
  | "recordedAt___location___type"
  | "recordedAt___location___name"
  | "recordedAt___location___address"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

export type ActivitiesYamlGroupEnum =
  | "type"
  | "name"
  | "url"
  | "recordedAt___type"
  | "recordedAt___url"
  | "recordedAt___name"
  | "recordedAt___startDate"
  | "recordedAt___location___type"
  | "recordedAt___location___name"
  | "recordedAt___location___address"
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

// ====================================================
// Documents
// ====================================================

export namespace IndexQuery {
  export type Variables = {};

  export type Query = {
    readonly __typename?: "Query";

    readonly allBlogsYaml: Maybe<AllBlogsYaml>;

    readonly allSocialAccountsYaml: Maybe<AllSocialAccountsYaml>;

    readonly allActivitiesYaml: Maybe<AllActivitiesYaml>;
  };

  export type AllBlogsYaml = {
    readonly __typename?: "BlogsYamlConnection";

    readonly edges: Maybe<ReadonlyArray<Maybe<Edges>>>;
  };

  export type Edges = {
    readonly __typename?: "BlogsYamlEdge";

    readonly node: Maybe<Node>;
  };

  export type Node = BlogFragment.Fragment;

  export type AllSocialAccountsYaml = {
    readonly __typename?: "SocialAccountsYamlConnection";

    readonly edges: Maybe<ReadonlyArray<Maybe<_Edges>>>;
  };

  export type _Edges = {
    readonly __typename?: "SocialAccountsYamlEdge";

    readonly node: Maybe<_Node>;
  };

  export type _Node = SocialAccountFragment.Fragment;

  export type AllActivitiesYaml = {
    readonly __typename?: "ActivitiesYamlConnection";

    readonly edges: Maybe<ReadonlyArray<Maybe<__Edges>>>;
  };

  export type __Edges = {
    readonly __typename?: "ActivitiesYamlEdge";

    readonly node: Maybe<__Node>;
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
    readonly __typename?: "recordedAt_2";

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

export namespace SocialAccountFragment {
  export type Fragment = {
    readonly __typename?: "SocialAccountsYaml";

    readonly alt: Maybe<string>;

    readonly url: Maybe<string>;

    readonly service: Maybe<string>;

    readonly color: Maybe<string>;
  };
}
