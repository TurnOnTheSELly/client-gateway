<script setup>
const props = defineProps (['rowObject'])

</script>

<template>
  <div class="row">
    <div class="data">{{ rowObject.show_name}}</div>
    <div class="data">{{ rowObject.episode_name }}</div>
    <div class="data">{{ rowObject.set }}</div>
    <div class="data">{{ rowObject.note }}</div>
    <div class="data">{{ rowObject.season_num }}</div>
    <div class="data">{{ rowObject.website }}</div>
    <div class="data">{{ rowObject.sel }}</div>
    <div class="data">{{ rowObject.setting }}</div>
    <div class="data">{{ rowObject.heads_up}}</div>
    <div class="data">{{ rowObject.situation }}</div>
  </div> <br>
</template>


<style scoped>
.row {
  display: inline;
  background-color: var(--pine);
  border: 5px solid var(--foam);
  border-radius: 25px;
  margin: 5px;
  padding: 5px;
  max-height: 75px;
  overflow: scroll;
}

.data {
  display: inline-block;
  padding: 10px 20px;
  margin: 3px;

}
</style>