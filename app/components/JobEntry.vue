<script setup lang="ts">
import type { JobEntry } from "~~/src/model"

const { jobEntry } = defineProps<{ jobEntry: JobEntry }>()

const jaFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "long",
})

const toMonth = (dateTime: string) => {
  const dt = new Date(Date.parse(dateTime))
  const month = dt.getMonth() + 1
  return {
    dateTime: `${dt.getFullYear()}-${month < 10 ? `0${month}` : month}`,
    label: jaFormatter.format(dt),
  }
}

const start = toMonth(jobEntry.startDate)
const finish = jobEntry.finishDate ? toMonth(jobEntry.finishDate) : undefined
</script>

<template>
  <Section margin-top="mt-45">
    <Heading>{{ jobEntry.title }}</Heading>
    <div class="-mt-5 text-sm text-muted">
      <time :datetime="start.dateTime">{{ start.label }}</time
      >〜<time v-if="finish" :datetime="finish.dateTime">{{
        finish.label
      }}</time
      ><template v-else>現在</template>
    </div>
    <div v-if="jobEntry.body !== undefined" v-html="jobEntry.body" />
    <RelatedWorksList
      v-if="
        jobEntry.relatedWorks !== undefined && jobEntry.relatedWorks.length > 0
      "
      :related-works="jobEntry.relatedWorks"
    />
  </Section>
</template>
