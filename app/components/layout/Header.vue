<script setup lang="ts">
const links = [
  {
    label: 'Home',
    to: '/',
    icon: 'tabler:home-filled',
  },
  {
    label: 'Rosary Builder',
    to: '/rosary-builder',
    icon: 'game-icons:prayer-beads',
  },
  {
    label: 'Insights',
    to: '/insights',
    icon: 'clarity:library-solid',
  },
]

const uiOverride = {
  active: 'text-white group-hover:text-black hover:text-black after:bg-di-serria-500',
  inactive: 'text-white group-hover:text-black hover:text-black',
  icon: {
    active: 'text-white group-hover:text-black',
    inactive: 'text-white group-hover:text-black'
  },
}
</script>

<template>
  <header class="flex bg-di-serria-800">
    <UContainer>
      <UHorizontalNavigation :links="links" :ui="uiOverride">
      </UHorizontalNavigation>
    </UContainer>

  </header>
</template>

<style scoped>

</style>