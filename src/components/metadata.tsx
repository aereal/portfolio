import React from "react"
import { Helmet } from "react-helmet"
import { Site } from "../fetch-entries"

export const Metadata: React.SFC<{
  readonly site: Site
}> = ({
  site: {
    fields: {
      title,
      description,
      facebookAppId,
      facebookAppPublisher,
      twitterCardOwner,
      twitterCardType,
    },
  },
}) => (
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
      content={facebookAppId}
    />
    <meta property="article:publisher" content={facebookAppPublisher} />
    <meta name="twitter:card" content={twitterCardType} />
    <meta name="twitter:site" content={twitterCardOwner} />
  </Helmet>
)
