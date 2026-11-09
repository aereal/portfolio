<script setup lang="ts">
const GA_PROP = "UA-36542486-1"

useHead({
  link: [
    {
      key: "font",
      href: "https://fonts.googleapis.com/css?family=Lato",
      rel: "stylesheet",
    },
  ],
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_PROP}`,
      async: true,
      tagPosition: "bodyClose",
    },
  ],
})

onMounted(() => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push("js", new Date())
  window.dataLayer.push("config", GA_PROP)
})
</script>

<template>
  <slot />
</template>
