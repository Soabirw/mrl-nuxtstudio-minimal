<script setup lang="ts">
import {defineProps} from 'vue'

const user = useUserStore()

const props = defineProps(['insights'])
</script>

<template>
  <ol v-if="user.showFocusInsights">
    <li v-for="insight in props.insights" :key="insight.id">
      {{ insight.text[(user.focusInsightStyle || 'Summary').toLowerCase()] }}
      <UTooltip v-if="insight.link" :text="insight.link.tip">
        <a :href="insight.link.url" target="_blank">{{ insight.link.label }}</a>
      </UTooltip>
    </li>
  </ol>
</template>

<style scoped>

</style>