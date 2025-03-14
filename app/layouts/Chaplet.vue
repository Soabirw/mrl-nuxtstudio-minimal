<script setup lang="ts">

</script>

<template>
  <div class="bg-di-serria-100 flex flex-col min-h-screen">
    <LayoutHeader/>

    <UContainer class="flex-grow py-4 min-h-screen">
      <div class="grid grid-cols-[20%_80%]">
        <!-- Navigation Column -->
        <aside class="bg-di-serria-200 p-4">
          <ul>
            <li><a href="/chaplets/" class="block py-2">Chaplets Home</a></li>
            <li><a href="/chaplets/st-michael" class="block py-2">St. Michael</a></li>
          </ul>
        </aside>

        <!-- Content Column -->
        <main class="p-6">
          <slot />
        </main>
      </div>
    </UContainer>

    <LayoutFooter/>
  </div>
</template>

<style scoped>

</style>