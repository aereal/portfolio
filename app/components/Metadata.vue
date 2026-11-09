<script setup lang="ts">
import type { Site } from "~~/src/model"

const { site } = defineProps<{ site: Site }>()

useHead({
  title: site.title,
  meta: [
    { key: "og_title", property: "og:title", content: site.title },
    { key: "og_site_name", property: "og:site_name", content: site.title },
    {
      key: "og_image",
      property: "og:image",
      content: "https://aereal.org/images/og-image.jpg",
    },
    {
      key: "og_description",
      property: "og:description",
      content: site.description,
    },
    { key: "og_type", property: "og:type", content: "article" },
    { key: "og_url", property: "og:url", content: "https://aereal.org/" },
    // unhead's types do not know the prefix attribute; kept to render the same markup as before.
    {
      key: "fb_app_id",
      prefix: "fb: http://ogp.me/ns/fb#",
      property: "fb:app_id",
      content: site.facebookAppId,
    } as { key: string; property: string; content: string },
    {
      key: "publisher",
      property: "article:publisher",
      content: site.facebookAppPublisher,
    },
    {
      key: "twitter_card_type",
      name: "twitter:card",
      content: site.twitterCardType,
    },
    {
      key: "twitter_card_site",
      name: "twitter:site",
      content: site.twitterCardOwner,
    },
  ],
})
</script>

<template>
  <slot />
</template>
