<script setup lang="ts">
const user = useUserStore()

const styles = ['Scriptural', 'Summary']
const artStyles = ['My Rosary Life', 'Renaissance', 'Stain Glass']
</script>

<template>
 <div>
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
 </div>
</template>

<style scoped>

</style>