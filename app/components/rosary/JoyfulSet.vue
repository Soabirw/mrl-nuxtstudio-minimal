<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
const focusInsight = useFocusInsightStore()

const mysterySets = [
  {
    id: 'JM01',
    announcement: 'The First Joyful Mystery – The Annunciation of the Lord to Mary',
    fruit: 'Humility',
    insights: focusInsight.joyfulInsights.first
  },
  {
    id: 'JM02',
    announcement: 'The Second Joyful Mystery – The Visitation of Our Lady with St. Elizabeth',
    fruit: 'Love Others',
    insights: focusInsight.joyfulInsights.second
  },
  {
    id: 'JM03',
    announcement: 'The Third Joyful Mystery – The Nativity of Our Lord',
    fruit: 'Poverty',
    insights: focusInsight.joyfulInsights.third
  },
  {
    id: 'JM04',
    announcement: 'The Fourth Joyful Mystery – The Presentation of the Christ Child in the Temple',
    fruit: 'Obedience',
    insights: focusInsight.joyfulInsights.fourth
  },
  {
    id: 'JM05',
    announcement: 'The Fifth Joyful Mystery – The Finding of the Child Jesus in the Temple',
    fruit: 'Joy in Finding Jesus',
    insights: focusInsight.joyfulInsights.fifth
  },
]
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