<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
</script>

<template>
  <div>
    <p><span class="prayer-name">Hail Holy Queen</span></p>

    <p v-if="user.showPrayerText" class="prayer-text">
      {{ prayer.hailHolyQueen }}
    </p>

    <p>Say the <span class="prayer-name">Concluding Prayer</span></p>

    <p v-if="user.showPrayerText" class="prayer-text">
      {{ prayer.concludingPrayer }}
    </p>

  </div>
</template>

<style scoped>

</style>