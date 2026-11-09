<script setup lang="ts">
import type { SocialAccount } from "~~/src/model"

defineProps<{ socialAccounts: readonly SocialAccount[] }>()
</script>

<template>
  <Section id="social">
    <HorizontalList>
      <li
        v-for="({ url, alternativeText, service, color }, i) in socialAccounts"
        :key="i"
      >
        <a :href="url"
          ><img
            class="h-[2em] w-[2em] rounded-[1.2em] p-[0.2em]"
            :style="{ backgroundColor: color }"
            :src="`/images/vendor/drawic/${service}.svg`"
            :alt="alternativeText"
        /></a>
      </li>
    </HorizontalList>
  </Section>
</template>
