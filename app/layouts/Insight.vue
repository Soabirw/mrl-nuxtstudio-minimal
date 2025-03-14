<script setup lang="ts">
import {computed} from 'vue'

const links = computed(() => ([
  {
    label: 'Insights',
    to: '/insights',
    icon: 'clarity:library-solid',
  },
  {
    label: route.meta.title,
    icon: 'majesticons:article'
  }
]))

const route = useRoute()
</script>

<template>
  <div class="bg-di-serria-100 flex flex-col min-h-screen">
    <LayoutHeader/>

    <UContainer class="flex-grow py-4">
      <UBreadcrumb :links="links" class="pb-3"/>
      <main class="p-6">
        <slot />
      </main>
    </UContainer>

    <LayoutFooter/>
  </div>
</template>

<style scoped>

</style>