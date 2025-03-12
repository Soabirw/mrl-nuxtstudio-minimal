<script setup lang="ts">
definePageMeta({
  layout: 'rosary'
});

const shouldShowGlorious = ref(true)
const shouldShowJoyful = ref(true)
const shouldShowSorrowful = ref(true)
const shouldShowLuminous = ref(true)

</script>

<template>
  <RosaryPanel>
    <template v-slot:moreOptions>
      <UFormGroup>
        <UCheckbox v-model="shouldShowJoyful" name="shouldShowJoyful" label="Joyful" />
        <UCheckbox v-model="shouldShowLuminous" name="shouldShowLuminous" label="Luminous" />
        <UCheckbox v-model="shouldShowSorrowful" name="shouldShowSorrowful" label="Sorrowful" />
        <UCheckbox v-model="shouldShowGlorious" name="shouldShowGlorious" label="Glorious" />
      </UFormGroup>
    </template>
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