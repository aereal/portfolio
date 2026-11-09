<script setup lang="ts">
import type { Work } from "~~/src/model"

defineProps<{ works: readonly Work[] }>()
</script>

<template>
  <Section id="activities">
    <h2>Activities</h2>
    <ul class="mt-0 mb-25 list-none pl-0">
      <Activity v-for="(work, i) in works" :key="i" :work="work" />
    </ul>
  </Section>
</template>
