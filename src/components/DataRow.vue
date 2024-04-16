<script setup>
const props = defineProps (['row_object'])

</script>

<template>
  <div class="row">
    <div class="data">{{ row_object.show_name}}</div>
    <div class="data">{{ row_object.episode_name }}</div>
    <div class="data">{{ row_object.set }}</div>
    <div class="data">{{ row_object.note }}</div>
    <div class="data">{{ row_object.season_num }}</div>
    <div class="data">{{ row_object.website }}</div>
    <div class="data">{{ row_object.sel }}</div>
    <div class="data">{{ row_object.setting }}</div>
    <div class="data">{{ row_object.heads_up}}</div>
    <div class="data">{{ row_object.situation }}</div>
  </div>
</template>


<style scoped>

</style>