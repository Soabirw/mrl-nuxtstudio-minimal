<script setup lang="ts">
const user = useUserStore()

const items = [
  {
    label: 'Chaplet Options',
    defaultOpen: true,
    slot: 'options',
  },
  {
    label: 'Chaplet Guide',
    defaultOpen: true,
    slot: 'guide',
  }
]

</script>

<template>
  <UAccordion multiple :items="items" class="w-full">
    <template #options>
      <ChapletBuilderOptions/>

      <slot name="moreOptions"/>
    </template>

    <template #guide>
      <div class="text-base">
        <slot name="prayerSet"/>
      </div>
    </template>
  </UAccordion>
</template>

<style scoped>

</style>