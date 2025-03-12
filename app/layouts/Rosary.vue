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
            <li><a href="/rosaries/" class="block py-2">Rosaries Home</a></li>
            <li><a href="/rosaries/daily" class="block py-2">Daily Rosary</a></li>
            <li><a href="/rosaries/joyful" class="block py-2">Joyful Mysteries</a></li>
            <li><a href="/rosaries/luminous" class="block py-2">Luminous Mysteries</a></li>
            <li><a href="/rosaries/sorrowful" class="block py-2">Sorrowful Mysteries</a></li>
            <li><a href="/rosaries/glorious" class="block py-2">Glorious Mysteries</a></li>
            <li><a href="/rosaries/full" class="block py-2">All Mysteries</a></li>
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