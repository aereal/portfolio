<script setup lang="ts">
import type { Work } from "~~/src/model"

defineProps<{ work: Work }>()
</script>

<template>
  <li class="relative mb-10">
    <a class="block pr-40" :href="work.url">{{ work.name }}</a>
    <span class="block pr-40 text-subtle">{{ work.eventName }}</span>
    <span class="absolute top-0 right-0 block pr-40 text-subtle">{{
      work.performedDate
    }}</span>
  </li>
</template>
