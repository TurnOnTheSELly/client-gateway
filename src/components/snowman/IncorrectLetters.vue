<script setup>
  defineProps ({incorrectLetters: { type: Array, default: [] }})
</script>

<template>
  <div class="incorrect-letters-container">
    <div class="incorrect-letters">
      <p v-show="incorrectLetters.length > 0">Incorrect</p>
      <span v-for="(letter, i) in incorrectLetters" :key="letter">
        {{ letter }}
        {{ i === incorrectLetters.length - 1 ? '' : ', ' }}
      </span>
    </div>
  </div>
</template>