<script setup lang="ts">
import {defineProps} from 'vue'

const user = useUserStore()

const props = defineProps(['insights'])
</script>

<template>
  <UFormGroup>
    <div v-for="insight in props.insights" :key="insight.id">
      <UCheckbox :id="insight.id" type="checkbox" class="inline-block align-top mt-2"/>
      <div class="inline-block py-1 w-5/6">
        <label :for="insight.id" class="px-2">{{ insight.text[(user.focusInsightStyle || 'Summary').toLowerCase()] }}</label>
        <a :href="insight.link.url" target="_blank">{{ insight.link.label }}</a>
      </div>
    </div>
  </UFormGroup>
</template>

<style scoped>

</style>