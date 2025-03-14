<script setup lang="ts">
const currentRoute = useRoute()
const router = useRouter()
const routes = router.getRoutes().filter(route => route.path.includes('insights') && route.path !== currentRoute.path)
</script>

<template>
  <div class="flex items-start mb-6" v-for="post in routes" :key="post.path">
    <!-- Image -->
    <NuxtLink :to="post.path">
      <img :src="post.meta.thumbImage" :alt="post.meta.title" class="w-32 h-32 object-cover mr-4" />
    </NuxtLink>
    <!-- Content -->
    <div class="flex-1">
      <NuxtLink :to="post.path">
        <h2 class="text-xl font-semibold mb-2">{{ post.meta.title }}</h2>
      </NuxtLink>
      <p class="text-gray-600">{{ post.meta.excerpt }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>