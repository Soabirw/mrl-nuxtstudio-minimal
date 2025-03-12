<script setup lang="ts">
definePageMeta({
  layout: 'rosary'
});
</script>

<template>
  <RosaryPanel>
    <template v-slot:rosarySet>
      <RosaryGloriousSet/>
    </template>
  </RosaryPanel>
</template>

<style scoped>

</style>