<script setup lang="ts">
const focusInsight = useFocusInsightStore()

const mysterySets = [
  {
    id: 'GM01',
    announcement: 'The First Glorious Mystery – The Resurrection of Jesus',
    fruit: 'Faith',
    insights: focusInsight.gloriousInsights.first
  },
  {
    id: 'GM02',
    announcement: 'The Second Glorious Mystery – The Ascension of Jesus',
    fruit: 'Hope',
    insights: focusInsight.gloriousInsights.second
  },
  {
    id: 'GM03',
    announcement: 'The Third Glorious Mystery – The Descent of the Holy Spirit',
    fruit: 'Love of God',
    insights: focusInsight.gloriousInsights.third
  },
  {
    id: 'GM04',
    announcement: 'The Fourth Glorious Mystery – The Assumption of Mary',
    fruit: 'Mary as Our Mother',
    insights: focusInsight.gloriousInsights.fourth
  },
  {
    id: 'GM05',
    announcement: 'The Fifth Glorious Mystery – The Coronation of Mary as Queen of Heaven and Earth',
    fruit: 'Mary as Our Queen and Lady',
    insights: focusInsight.gloriousInsights.fifth
  }
]
</script>

<template>
  <RosaryMysterySetRenderer :mysterySets="mysterySets" />
</template>

<style scoped>

</style>