<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{ error: NuxtError }>()
</script>

<template>
  <main>
    <h1>{{ error.statusCode }}</h1>
    <h2>
      {{
        error.statusCode === 404
          ? "This page could not be found."
          : "An unexpected error has occurred."
      }}
    </h2>
  </main>
</template>
