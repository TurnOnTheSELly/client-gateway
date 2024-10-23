<script setup>
  import { computed } from 'vue'

  const props = defineProps ({
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
  <div v-if="finalMessage" class="popup-container" id="popup-container">
    <div class="popup">
      <h2>{{ finalMessage }}</h2>
      <!-- <h3></h3> -->
      <button id="play-button" @click="reset">Play Again</button>
    </div>
  </div>

</template>