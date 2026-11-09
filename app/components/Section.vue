<script setup lang="ts">
const { marginTop = "mt-40" } = defineProps<{ marginTop?: string }>()
provideNextHeadingLevel()
</script>

<template>
  <section :class="`${marginTop} [&_p]:mt-15 [&_ul]:list-none`">
    <slot />
  </section>
</template>
