<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
</script>

<template>
  <div>
    <p>Make the <span class="prayer-name">Sign of the Cross</span></p>

    <p v-if="user.showPrayerText" class="prayer-text">
      {{ prayer.signOfTheCross }}
    </p>

    <p>Say the <span class="prayer-name">Apostle's Creed</span></p>

    <p v-if="user.showPrayerText" class="prayer-text">
      {{ prayer.apostlesCreed }}
    </p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText" class="prayer-text">
      {{ prayer.ourFather }}
    </p>

    <p>Say three <span class="prayer-name">Hail Marys</span> for Faith, Hope, and Charity</p>

    <p v-if="user.showPrayerText" class="prayer-text">
      {{ prayer.hailMary }}
    </p>

    <p>Say the <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText" class="prayer-text">
      {{ prayer.gloryBe }}
    </p>
  </div>
</template>

<style scoped>

</style>