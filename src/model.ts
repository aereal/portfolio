export interface Work {
  readonly name: string
  readonly url: string
  readonly eventName: string
  readonly eventUrl?: string
  readonly performedDate: string
  readonly performedAt: { readonly lat: number; readonly lon: number }
}

export interface Blog {
  readonly title: string
  readonly url: string
  readonly summary: string
}

export interface SocialAccount {
  readonly service: string
  readonly url: string
  readonly alternativeText: string
  readonly color: string
}

export interface Site {
  readonly title: string
  readonly description: string
  readonly facebookAppId: string
  readonly facebookAppPublisher: string
  readonly twitterCardType: string
  readonly twitterCardOwner: string
}

export interface JobEntry {
  readonly title: string
  readonly startDate: string
  readonly finishDate?: string
  /** HTML */
  readonly body?: string
  readonly relatedWorks?: readonly Work[]
}

export interface JobAssignment {
  readonly name: string
  /** HTML */
  readonly description: string
  readonly activities?: readonly JobEntry[]
}

export interface JobPosition {
  readonly name: string
  readonly assignments?: readonly JobAssignment[]
}

export interface Profile {
  readonly profileImage: { readonly url: string; readonly title: string }
}
