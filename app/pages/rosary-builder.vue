<script setup lang="ts">

const items = [
  {
    label: 'Rosary Options',
    defaultOpen: true,
    slot: 'options',
  },
  {
    label: 'My Rosary',
    defaultOpen: true,
    slot: 'rosary',
  }
]

const user = useUserStore()
const prayer = usePrayerStore()

const styles = ['Scriptural', 'Summary']
const artStyles = ['My Rosary Life', 'Renaissance', 'Stain Glass']
const selectedSet = ref('daily')
const setOptions = [{
  label: 'Daily',
  value: 'daily',
},
  {
    label: 'Joyful',
    value: 'joyful',
  },
  {
    label: 'Luminous',
    value: 'luminous',
  },
  {
    label: 'Sorrowful',
    value: 'sorrowful',
  },
  {
    label: 'Glorious',
    value: 'glorious',
  }
]

const dailyMystery = {
  'monday': 'joyful',
  'tuesday': 'sorrowful',
  'wednesday': 'glorious',
  'thursday': 'luminous',
  'friday': 'sorrowful',
  'saturday': 'glorious',
  'sunday': 'glorious', // TODO: adjust for advent, christmas, lent, etc
}
</script>

<template>
  <UAccordion multiple :items="items" class="w-full">
    <template #options>
      <div class="columns-1 md:columns-2">
        <UCheckbox v-model="user.showPrayerText" name="showPrayerText" label="Show Prayer Text"/>
      </div>
      <div class="columns-1 md:columns-2">
        <UCheckbox v-model="user.showOpeningPrayers" name="showOpeningPrayers" label="Show Opening Prayers"/>
      </div>
      <div class="columns-1 md:columns-2">
        <UCheckbox v-model="user.showMysterySummaries" name="showMysterySummaries" label="Show Mystery Summaries"/>
        <USelect v-if="user.showMysterySummaries" v-model="user.mysterySummaryStyle" :options="styles"/>
      </div>
      <div class="columns-1 md:columns-2">
        <UCheckbox v-model="user.showArt" name="showMysterySummaries" label="Show Mystery Art"/>
        <USelect v-if="user.showArt" v-model="user.artStyle" :options="artStyles"/>
      </div>
      <div class="columns-1 md:columns-2">
        <UCheckbox v-model="user.showFocusInsights" name="showFocusInsights" label="Show Focus Insights"/>
        <USelect v-if="user.showFocusInsights" v-model="user.focusInsightStyle" :options="styles"/>
      </div>
      <div class="columns-1 md:columns-2">
        <UCheckbox v-model="user.showClosingPrayers" name="showClosingPrayers" label="Show Closing Prayers"/>
      </div>
      <div class="columns-1 md:columns-2">
        <URadioGroup v-model="selectedSet" :options="setOptions" legend="Choose your set of Mysteries"></URadioGroup>
      </div>
    </template>

    <template #rosary>
      <RosaryOpeningPrayers v-if="user.showOpeningPrayers"/>

      <RosaryJoyfulSet/>

      <RosaryClosingPrayers v-if="user.showClosingPrayers"/>
    </template>
  </UAccordion>
</template>

<style scoped>

</style>