<script setup lang="ts">
import type { JobAssignment } from "~~/src/model"

defineProps<{ jobAssignment: JobAssignment }>()
</script>

<template>
  <Section>
    <Heading>{{ jobAssignment.name }}</Heading>
    <div v-html="jobAssignment.description" />
    <JobEntry
      v-for="jobEntry in jobAssignment.activities ?? []"
      :key="jobEntry.title"
      :job-entry="jobEntry"
    />
  </Section>
</template>
