<script setup>
  import { computed, ref, watch, onMounted } from 'vue'

  const props = defineProps ({
    status: {type: String, default: '' },
    word: { type: String, default: '' }
  })

  const emit = defineEmits(['reset', 'supply']);

  const form = ref(false);
  const phrase = ref("");


  const finalMessage = computed(() => {
    if (props.status === 'win') {
      return 'Congratulations! You won!'
    } else if (props.status === 'start') {
      return 'Thank you for joining us'
    } else {
      return ''
    }
  })

  const reset = () => { emit('reset'); };
  const supply = () => { 
    emit('supply', phrase.value); 
    form.value = false
  };

</script>

<template>
  <div v-if="finalMessage" class="popup-container" id="popup-container">
    <div class="popup">
      <h2>{{ finalMessage }}</h2>
      <button v-if="!form" id="play-button" @click="reset">Play Random Phrase</button>
      <br>
      <button v-if="!form" id="play-button" @click="form = true">Play with Custom Phrase</button>
      <br>
      <label v-if="form"  for="phrase">Please add phrase</label>
      <br>
      <input v-if="form" id="phrase" v-model="phrase" ref="phraseInput" v-on:keyup.enter="supply">
      <br>
      <button v-if="form" @click="supply">Submit</button>
    </div>
  </div>

</template>