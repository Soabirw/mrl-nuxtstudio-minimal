<script setup lang="ts">
const focusInsight = useFocusInsightStore()

const mysterySets = [
  {
    id: 'SM01',
    announcement: 'The First Sorrowful Mystery – The Agony in the Garden',
    fruit: 'Sorrow for Sin',
    insights: focusInsight.sorrowfulInsights.first
  },
  {
    id: 'SM02',
    announcement: 'The Second Sorrowful Mystery – The Scourging at the Pillar',
    fruit: 'Purity',
    insights: focusInsight.sorrowfulInsights.second
  },
  {
    id: 'SM03',
    announcement: 'The Third Sorrowful Mystery – The Crowning with Thorns',
    fruit: 'Courage',
    insights: focusInsight.sorrowfulInsights.third
  },
  {
    id: 'SM04',
    announcement: 'The Fourth Sorrowful Mystery – The Carrying of the Cross',
    fruit: 'Patience',
    insights: focusInsight.sorrowfulInsights.fourth
  },
  {
    id: 'SM05',
    announcement: 'The Fifth Sorrowful Mystery – The Crucifixion',
    fruit: 'Perseverance',
    insights: focusInsight.sorrowfulInsights.fifth
  }
]
</script>

<template>
  <RosaryMysterySetRenderer :mysterySets="mysterySets" />
</template>

<style scoped>

</style>