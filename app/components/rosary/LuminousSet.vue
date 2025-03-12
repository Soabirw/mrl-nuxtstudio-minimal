<script setup lang="ts">
const focusInsight = useFocusInsightStore()

const mysterySets = [
  {
    id: 'LM01',
    announcement: 'The First Luminous Mystery – The Baptism of the Lord',
    fruit: 'Gratitude for the Gift of Faith',
    insights: focusInsight.luminousInsights.first
  },
  {
    id: 'LM02',
    announcement: 'The Second Luminous Mystery – The Wedding in Cana',
    fruit: 'Fidelity',
    insights: focusInsight.luminousInsights.second
  },
  {
    id: 'LM03',
    announcement: 'The Third Luminous Mystery – The Proclamation of the Kingdom of God and the call to conversion',
    fruit: 'Christian Witness',
    insights: focusInsight.luminousInsights.third
  },
  {
    id: 'LM04',
    announcement: 'The Fourth Luminous Mystery – The Transfiguration',
    fruit: 'Spiritual Courage',
    insights: focusInsight.luminousInsights.fourth
  },
  {
    id: 'LM05',
    announcement: 'The Fifth Luminous Mystery – The Institution of the Eucharist',
    fruit: 'Love of Our Eucharistic Lord',
    insights: focusInsight.luminousInsights.fifth
  },
]
</script>

<template>
  <RosaryMysterySetRenderer :mysterySets="mysterySets" />
</template>

<style scoped>

</style>