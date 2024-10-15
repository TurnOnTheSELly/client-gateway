<script setup>
  import { computed } from 'vue'

  defineProps ({
    status: {type: String, default: '' },
    word: { type: String, default: '' }
  })

  const emit = defineEmits(['reset']);

  const finalMessage = computed(() => {
    if (props.status === 'win') 
      return 'Congratulations! You won!'
  })

  const reset = () => { emit('reset'); };

</script>

<template>
  <div class="popup-container" id="popup-container">
    <div class="popup">
      <h2 id="final-message"></h2>
      <h3 id="final-message-reveal-word"></h3>
      <button id="play-button" @click="reset">Play Again</button>
    </div>
  </div>

</template>