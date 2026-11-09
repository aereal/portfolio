<script setup lang="ts">
import type { Blog } from "~~/src/model"

defineProps<{ blogs: readonly Blog[] }>()
</script>

<template>
  <Section id="blogs">
    <h2>Blogs</h2>
    <ul class="ps-0">
      <li v-for="({ url, title, summary }, i) in blogs" :key="i">
        <a :href="url">{{ title }}</a> - {{ summary }}
      </li>
    </ul>
  </Section>
</template>
