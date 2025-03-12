<script setup lang="ts">
defineProps(['mysterySets'])
</script>

<template>
  <div>
    <section v-for="mystery in mysterySets" :key="mystery.id">
      <RosaryMysteryAnnounce :name="mystery.announcement"/>

      <RosaryMysteryOpeningPrayers/>

      <RosarySpiritualFruit :fruit="mystery.fruit"/>

      <RosaryFocusInsights :insights="mystery.insights"/>

      <RosaryMysteryClosingPrayers/>
    </section>
  </div>
</template>

<style scoped>

</style>