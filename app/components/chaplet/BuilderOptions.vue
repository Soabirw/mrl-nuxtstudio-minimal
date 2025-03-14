<script setup lang="ts">
const user = useUserStore()
</script>

<template>
  <div>
    <div class="columns-1 md:columns-2">
      <UCheckbox v-model="user.showPrayerText" name="showPrayerText" label="Show Prayer Text"/>
    </div>
  </div>
</template>

<style scoped>

</style>