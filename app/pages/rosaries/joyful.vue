<script setup lang="ts">
definePageMeta({
  layout: 'rosary'
});
</script>

<template>
  <RosaryPanel>
    <template v-slot:rosarySet>
      <RosaryJoyfulSet/>
    </template>
  </RosaryPanel>
</template>

<style scoped>

</style>