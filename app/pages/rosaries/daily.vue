<script setup lang="ts">
import {computed} from 'vue'

definePageMeta({
  layout: 'rosary'
});

const dailyMystery = {
  'sunday': 'glorious', // TODO: adjust for advent, christmas, lent, etc
  'monday': 'joyful',
  'tuesday': 'sorrowful',
  'wednesday': 'glorious',
  'thursday': 'luminous',
  'friday': 'sorrowful',
  'saturday': 'joyful',
}
const dailyMysteryList = Object.values(dailyMystery)

const today = new Date().getDay();
const shouldShowGlorious = computed(() => (dailyMysteryList[today] === 'glorious'))
const shouldShowJoyful = computed(() => (dailyMysteryList[today] === 'joyful'))
const shouldShowSorrowful = computed(() => (dailyMysteryList[today] === 'sorrowful'))
const shouldShowLuminous = computed(() => (dailyMysteryList[today] === 'luminous'))

</script>

<template>
  <RosaryPanel>
    <template v-slot:rosarySet>
      <RosaryJoyfulSet v-if="shouldShowJoyful"/>
      <RosaryLuminousSet v-if="shouldShowLuminous"/>
      <RosarySorrowfulSet v-if="shouldShowSorrowful"/>
      <RosaryGloriousSet v-if="shouldShowGlorious"/>
    </template>
  </RosaryPanel>
</template>

<style scoped>

</style>