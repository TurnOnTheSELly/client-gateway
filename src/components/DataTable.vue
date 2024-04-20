<script setup>
import DataRow from './DataRow.vue'
import { ref, onMounted } from 'vue'
// http://localhost:3000/api/v1/search

const searchData = ref([])
const searchKeys = ref([])

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/search');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data); // Log the response data
    searchData.value = data;
    searchKeys.value = Object.keys(data[0]);
  } catch (error) {
    console.error('Error fetching data:', error); // Log any errors
  }
};

onMounted(fetchData)


</script>

<template>
  <p> {{ searchKeys }} </p>

  <!-- <main>
    <DataRow v-for="rowObject in searchData" :key="rowObject[0].id" :rowObject="rowObject" />
  </main> -->


  <DataRow :rowObject="searchData" :searchKeys="searchKeys">
    <template #column0="{ entity }">
      {{ entity.id }}
    </template>
    <template #column1="{ entity }">
      {{ entity.show_name }}
    </template>
    <template #column2="{ entity }">
      {{ entity.episode_name }}
    </template>
    <template #column3="{ entity }">
      {{ entity.set }}
    </template>
    <template #column4="{ entity }">
      {{ entity.still_path }}
    </template>
    <template #column5="{ entity }">
      {{ entity.season_num }}
    </template>
    <template #column6="{ entity }">
      {{ entity.show_name }}
    </template>
    <template #column7="{ entity }">
      {{  entity.img }}
    </template>
    <template #column8="{ entity }">
      {{ entity.website }}
    </template>
    <template #column9="{ entity }">
      {{  entity.purchase }}
    </template>
    <template #column10="{ entity }">
      {{ entity.flatrate }}
    </template>
    <template #column11="{ entity }">
      {{ entity.sel }}
    </template>
    <template #column12="{ entity }">
      {{ entity.setting }}
    </template>
    <template #column13="{ entity }">
      {{ entity.heads_up }}
    </template>
    <template #column14="{ entity }">
      {{ entity.situations }}
    </template>
  </DataRow>



</template>

<style scoped>

</style>