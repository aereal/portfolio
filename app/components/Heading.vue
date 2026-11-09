<script setup lang="ts">
const levelClassNames = [
  "text-h1 font-bold",
  "text-h2 font-bold",
  "text-h3 font-bold",
  "text-h4 font-normal [section>&:first-child]:-mt-20",
  "text-h5 font-normal [section>&:first-child]:-mt-20",
  "text-h6 font-normal [section>&:first-child]:-mt-20",
] as const

const level = Math.min(useHeadingLevel(), levelClassNames.length)
</script>

<template>
  <component
    :is="`h${level}`"
    :class="`mt-0 mb-15 leading-[1.25] tracking-[-0.1rem] ${levelClassNames[level - 1]}`"
    ><slot
  /></component>
</template>
