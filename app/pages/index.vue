<script setup lang="ts">
const { data } = await useFetch("/api/content", {
  pick: ["works", "blogs", "socialAccounts", "site"],
})
if (!data.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "failed to load content",
  })
}
const { works, blogs, socialAccounts, site } = data.value
</script>

<template>
  <Layout>
    <Metadata :site="site" />
    <WholeContainer>
      <SelfSection />
      <BlogsSection :blogs="blogs" />
      <ActivitiesSection :works="works" />
      <SocialSection :social-accounts="socialAccounts" />
    </WholeContainer>
  </Layout>
</template>
