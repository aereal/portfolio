import { graphql as gql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

import { MetadataFragment } from "../types"

export const query = gql`
  fragment MetadataFragment on siteMetadata_2 {
    title
    description
    facebookApp {
      id
      publisher
    }
    twitterCard {
      owner
      type
    }
  }
`

export const Metadata: React.SFC<{
  metadata: MetadataFragment.Fragment
}> = ({ metadata: { title, description, facebookApp, twitterCard } }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta
      property="og:image"
      content="https://aereal.org/images/og-image.jpg"
    />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://aereal.org/" />
    <meta
      prefix="fb: http://ogp.me/ns/fb#"
      property="fb:app_id"
      content={facebookApp!.id}
    />
    <meta property="article:publisher" content={facebookApp!.publisher} />
    <meta name="twitter:card" content={twitterCard!.type} />
    <meta name="twitter:site" content={twitterCard!.owner} />
  </Helmet>
)
