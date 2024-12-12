<script setup>
  // let points = 100;
  // import { ref } from 'vue';


  defineProps ({points: Number, default: 100})
  
</script>

<template>
  <svg width="600" height="600" viewBox="-300 -300 600 600">
      <rect x="-300" y="-300" width="600" height="600" fill="white" />
      
<!--  arms -->
      <rect x="-10" y="90" width="60" height="10" fill="brown" transform="rotate(45)" v-if="points >= 4" />
      <rect x="50" y="90" width="60" height="10" fill="brown" transform="rotate (10)" v-if="points >= 5" />
      
<!--       snowman body -->
      <circle cx="0" cy="200" r="50" fill="white" stroke="black" stroke-width="5" v-if="points >= 1" />
      <circle cx="0" cy="120" r="45" fill="white" stroke="black" stroke-width="5" v-if="points >= 2" />
      <circle cx="0" cy="50" r="30" fill="white" stroke="black" stroke-width="5" v-if="points >= 3"/>
      
<!--       buttons -->
      <circle cx="0" cy="95" r="7" fill="black" v-if="points >= 15" />
      <circle cx="0" cy="115" r="7" fill="black" v-if="points >= 17"  />
      <circle cx="0" cy="135" r="7" fill="black" v-if="points >= 19" />
      <circle cx="0" cy="155" r="7" fill="black" v-if="points >= 21" />
      
<!--       smile -->
      <circle cx="-17" cy="64" r="3" fill="black" v-if="points >= 8" />
      <circle cx="-9" cy="68" r="3" fill="black" v-if="points >= 9" />
      <circle cx="0" cy="70" r="3" fill="black" v-if="points >= 10" />
      <circle cx="9" cy="68" r="3" fill="black" v-if="points >= 11" />
      <circle cx="17" cy="64" r="3" fill="black" v-if="points >= 12" />
      
<!--       eyes -->
      <circle cx="-9" cy="40" r="5" fill="black" v-if="points >= 6" />
      <circle cx="9" cy="40" r="5" fill="black" v-if="points >= 7" />
      
<!--       nose -->
      <polygon points="0,48 0,58 50,53" fill="orange" v-if="points >= 13" />
               
<!-- hat -->
      <rect x="-25" y="-20" width="50" height="50" fill="black" v-if="points >= 23" />
      <rect x="-35" y="20" width="70" height="10" fill="black" v-if="points >= 24" />
<!-- ribbon -->
      <rect x="-25" y="10" width="50" height="10" fill="red" v-if="points >= 26" />
     
    </svg>

</template>