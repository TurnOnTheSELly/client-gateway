<script setup>
  import { computed, ref } from 'vue'


  const words = [
    "Martin Luther King Jr.",
    "Balance screen time with kindness in mind",
    "In world where you can be anything be kind",
    "Kindness begets kindness",
    "Open-minded",
    "Mahatma Gandhi",
    "Malala Yousafzai",
    "Green Energy",
    "Solar Panels on a house",
    "Renewable energy",
    "Sharing is caring",
    "Take care of yourself",
    "Recycle, Reuse, Repurpose, Reduce",
    "Geothermal Heat Pump",
    "Waste not, want not",
  ]
  const randomWord = () => words[Math.floor(Math.random() * words.length)]

</script>
<template>
  <p>hello</p>
</template>
<style>
</style>