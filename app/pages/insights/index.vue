<script setup lang="ts">
  const { data: posts } = await useAsyncData('insight-list', () => queryCollection('insights')
      .all()
  )

  console.log(posts)
</script>

<template>
  <div class="flex items-start mb-6" v-for="post in posts" :key="post.path">
    <!-- Image -->
    <NuxtLink :to="post.path">
      <img :src="post.image" :alt="post.title" class="w-32 h-32 object-cover mr-4" />
    </NuxtLink>
    <!-- Content -->
    <div class="flex-1">
      <NuxtLink :to="post.path">
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
      </NuxtLink>
      <p class="text-gray-600">{{ post.description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>