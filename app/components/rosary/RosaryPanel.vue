<script setup lang="ts">
const user = useUserStore()

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

</script>

<template>
  <UAccordion multiple :items="items" class="w-full">
    <template #options>
      <RosaryBuilderOptions/>

      <slot name="moreOptions"/>
    </template>

    <template #rosary>
      <div class="text-base">
        <RosaryOpeningPrayers v-if="user.showOpeningPrayers"/>

        <slot name="rosarySet"/>

        <RosaryClosingPrayers v-if="user.showClosingPrayers"/>
      </div>
    </template>
  </UAccordion>
</template>

<style scoped>

</style>