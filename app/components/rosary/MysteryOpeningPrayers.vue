<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
</script>

<template>
  <p v-if="user.showMysterySummaries"></p>

  <p>Say the <span class="prayer-name">Our Father</span></p>

  <p v-if="user.showPrayerText">
    {{ prayer.ourFather }}
  </p>

  <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>
</template>

<style scoped>

</style>