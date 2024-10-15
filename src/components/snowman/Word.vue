<script setup>
  defineProps ({ 
    letters: { type: Array, require: true},
    correctLetters: { type: Array, default: []}
  }) 
</script>

<template>
  <div class="word">
    <span class="letter" v-for="(letter, i) in letters" :key="i">
      {{ correctLetters.includes(letter) ? letter : '' }}
    </span>
  </div>
</template>