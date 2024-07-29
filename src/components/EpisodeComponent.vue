<script setup>
  import { ref } from 'vue';


  defineProps (['data'])

  const isOpen = ref(false)

</script>

<template>
  <body>
    <div class="visable" @click="isOpen = !isOpen">

    </div>
    <div class="hidden" v-if="isOpen">

    </div>
  </body>
</template>