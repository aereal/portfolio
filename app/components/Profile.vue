<script setup lang="ts">
import type { Profile } from "~~/src/model"

defineProps<{ profile: Profile }>()
</script>

<template>
  <Section>
    <Heading>基本情報</Heading>
    <div class="flex flex-col sm:flex-row">
      <figure class="m-0 w-full sm:order-2 sm:w-1/2">
        <img
          class="max-w-full"
          :src="profile.profileImage.url"
          :alt="profile.profileImage.title"
        />
        <figcaption class="text-right italic">近影</figcaption>
        <footer class="text-right text-sm text-muted">
          Original archived in
          <a
            href="https://photos.google.com/share/AF1QipPCVWlDbsbfy1QLt-ULcpUsM7LhVmZNx7M23z15-8HHTp0bKcC1PhMTh2C6cJxXWg?key=UHAwU2x4TWlibm1jNF9aeVlIVjFMN05LQlF6MGRn"
            >builderscon tokyo 2019 スピーカーディナー</a
          >
          by builderscon licensed under
          <a
            rel="license"
            href="https://creativecommons.org/licenses/by-nc/4.0/deed"
            >CC-BY-NC 4.0</a
          >
        </footer>
      </figure>
      <div class="sm:order-1">
        <p>aerealという名前で活動している。本名は中澤亮太 (RYOTA,Nakazawa)。</p>
        <p>
          <time datetime="1990-08-27">1990年8月27日</time
          >生まれ。北海道旭川市出身、石川県金沢市在住。
        </p>
      </div>
    </div>
  </Section>
</template>
