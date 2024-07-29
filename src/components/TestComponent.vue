<script setup>

import { ref } from 'vue';
defineProps (['testData'])

const isOpen = ref(false)

</script>

<template>
  <div class="item" @click="isOpen = !isOpen"> {{ testData.episode_name }} </div>
  
  <div v-if="isOpen" > testData.website </div>

<p>Whats up</p>
</template>