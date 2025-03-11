<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
</script>

<template>
  <p>Close decade with <span class="prayer-name">Glory Be</span></p>

  <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

  <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

  <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>
</template>

<style scoped>

</style>