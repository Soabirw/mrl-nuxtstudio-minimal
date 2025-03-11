<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps({
  fruit: String,
})
</script>

<template>
  <p>Spiritual Fruit: <span class="prayer-name">{{ props.fruit }}</span></p>
</template>

<style scoped>

</style>