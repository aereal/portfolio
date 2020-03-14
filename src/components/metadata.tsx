import React from "react"
import Head from "next/head"
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
  <Head>
    <title key="title">{title}</title>
    <meta property="og:title" content={title} key="og_title" />
    <meta property="og:site_name" content={title} key="og_site_name" />
    <meta
      property="og:image"
      content="https://aereal.org/images/og-image.jpg"
      key="og_image"
    />
    <meta
      property="og:description"
      content={description}
      key="og_description"
    />
    <meta property="og:type" content="article" key="og_type" />
    <meta property="og:url" content="https://aereal.org/" key="og_url" />
    <meta
      prefix="fb: http://ogp.me/ns/fb#"
      property="fb:app_id"
      content={facebookAppId}
      key="fb_app_id"
    />
    <meta
      property="article:publisher"
      content={facebookAppPublisher}
      key="publisher"
    />
    <meta
      name="twitter:card"
      content={twitterCardType}
      key="twitter_card_type"
    />
    <meta
      name="twitter:site"
      content={twitterCardOwner}
      key="twitter_card_site"
    />
  </Head>
)
