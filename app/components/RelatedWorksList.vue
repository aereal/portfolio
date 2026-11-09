<script setup lang="ts">
import type { Work } from "~~/src/model"

defineProps<{ relatedWorks: readonly Work[] }>()
</script>

<template>
  <Heading>関連</Heading>
  <List>
    <ListItem v-for="relatedWork in relatedWorks" :key="relatedWork.url"
      ><a :href="relatedWork.url">{{ relatedWork.name }}</a></ListItem
    >
  </List>
</template>
