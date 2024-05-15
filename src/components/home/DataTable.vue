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
      {{ entity[searchKeys[0]] }}
    </template>
    <template #column1="{ entity }">
      {{ entity[searchKeys[1]] }}
    </template>
    <template #column2="{ entity }">
      {{ entity[searchKeys[2]]}}
    </template>
    <template #column3="{ entity }">
      {{ entity[searchKeys[3]] }}
    </template>
    <template #column4="{ entity }">
      {{ entity[searchKeys[4]] }}
    </template>
    <template #column5="{ entity }">
      {{ entity[searchKeys[5]] }}
    </template>
    <template #column6="{ entity }">
      {{ entity[searchKeys[6]] }}
    </template>
    <template #column7="{ entity }">
      {{  entity[searchKeys[7]] }}
    </template>
    <template #column8="{ entity }">
      {{ entity[searchKeys[8]] }}
    </template>
    <template #column9="{ entity }">
      {{  entity[searchKeys[9]] }}
    </template>
    <template #column10="{ entity }">
      {{ entity[searchKeys[10]] }}
    </template>
    <template #column11="{ entity }">
      {{ entity[searchKeys[11]] }}
    </template>
    <template #column12="{ entity }">
      <!-- const selString = entity.sel.split("| ") -->
      <li v-for="(sel, i) in entity.sel.split('| ')" :key="`${sel}-${i}`">
      {{ sel }}
      </li>
    </template>
    <template #column13="{ entity }">
      {{ entity[searchKeys[1]] }}
    </template>
    <template #column14="{ entity }">
      <li v-for="(heads_up, i) in entity.heads_up.split('| ')" :key="`${heads_up}-${i}`">
        {{ heads_up }}
      </li>
    </template>
    <template #column15="{ entity }">
      <li v-for="(situation, i) in entity.situations.split('| ')" :key="`${situation}-${i}`">
        {{ situation }}
      </li>
    </template>
  </DataRow>



</template>

<style scoped>

</style>