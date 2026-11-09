<script setup lang="ts">
import type { JobPosition } from "~~/src/model"

defineProps<{ jobPosition: JobPosition }>()
</script>

<template>
  <Section>
    <Heading>{{ jobPosition.name }}</Heading>
    <JobAssignment
      v-for="jobAssignment in jobPosition.assignments ?? []"
      :key="jobAssignment.name"
      :job-assignment="jobAssignment"
    />
  </Section>
</template>
