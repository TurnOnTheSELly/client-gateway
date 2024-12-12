<script setup>

  import { computed } from 'vue'

  const props = defineProps ({ 
    letters: { type: Array, require: true},
    correctLetters: { type: Array, default: []}
  }) 

  const symbols = [".", ",", "-", "'", " ", "/" ]

  const letterClass = (letter) => {
    if (symbols.includes(letter)) {
      return 'symbol';
    } else if (props.correctLetters.includes(letter)) {
      return 'letter';
    } else {
      return 'letter';
    }
  };


  const computedLetter = computed(() => {
    return props.letters.map(letter => {
      if (symbols.includes(letter)) {
        return letter;
      } else if (props.correctLetters.includes(letter)) {
        return letter;
      } else {
        return '';
      }
    });
  });



</script>

<template>
  <div class="word">
    <span v-for="(letter, i) in computedLetter" :key="i" :class="letterClass(letter)" >
      {{ letter }}
    </span>
  </div>
</template>