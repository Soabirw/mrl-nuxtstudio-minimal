<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps({
  name: String
})
</script>

<template>
  <p>Announce “<span class="prayer-name">{{ props.name }}</span>”</p>
</template>

<style scoped>

</style>