<script setup lang="ts">
  const { data: posts } = await useAsyncData('insight-list', () => queryCollection('insights')
      .order('date', 'DESC')
      .select('title', 'path', 'image', 'description')
      .all()
  )
</script>

<template>
  <NuxtLink v-for="post in posts" :key="post.path" :to="post.path">
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
  </NuxtLink>
</template>

<style scoped>

</style>