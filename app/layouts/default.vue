<script setup lang="ts">

</script>

<template>
  <div class="bg-di-serria-100 flex flex-col min-h-screen">
    <LayoutHeader/>

    <UContainer class="flex-grow py-4">
      <slot />
    </UContainer>

    <LayoutFooter/>
  </div>
</template>

<style scoped>

</style>