<script setup>

  const props = defineProps ({ 
    show: { type: Boolean, default: false }
  })

</script>

<template>
  <div class="notification-container" :class="props.show ? 'show' : ''">
    <p>You have already entered this letter</p>
  </div>
</template>