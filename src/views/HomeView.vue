<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import DataTable from '../components/home/DataTable.vue'
// import TestComponent from '@/components/TestComponent.vue';
import EpisodeComponent from '@/components/EpisodeComponent.vue';
import { ref, onMounted }from 'vue';
import Multiselect from 'vue-multiselect'

import '@/assets/multiselect.css';

const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL;

const searchDatas = ref(null);
const searchKeys = ref(null);
const attributeOptions = ref([]);
const test = [{name: "one", id:1}, {name: "two",id: 2}, {name: "three",id: 3}]

const seriesOptions = ref([]);
const selsOptions = ref([]);
const headsUpsOptions = ref([]);
const situationsOptions = ref([]);
const settingsOptions = ref([]);

const series = ref([]);
const sels1 = ref([]);
const sels2 = ref([]);
const headsUps = ref([]);
const situations = ref([]);
const settings = ref([]);
const runtime = ref([]);



const fetchData = async () => {
  try {
    const response = await fetch(tv_service_root_url + 'api/v1/search');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data); // Log the response data
    searchDatas.value = data;
    searchKeys.value = Object.keys(data[0]);
  } catch (error) {
    console.error('Error fetching data:', error); // Log any errors
  }
};

async function findAttributes() {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + `api/v1/attribute_tables?q=search`, { headers })
    const data = await response.json()
      seriesOptions.value = data.series
      selsOptions.value = data.sels
      headsUpsOptions.value = data.heads_ups
      situationsOptions.value = data.situations
      settingsOptions.value =data.settings
  }

onMounted(fetchData)
onMounted(findAttributes)

</script>

<!-- <style src="@/assets/multiselect.css"></style> -->

<template>
  <p>{{ searchKeys }}</p>

<div class="multi">
  <div class="search-criteria">
    <label>Select Series(multiple):</label>
    <Multiselect
      v-model="series"
      :options="seriesOptions"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="id" 
      :preselect-first="false">
      <template #selection="{ values, search, isOpen }">
          <span class="multiselect__single"
                v-if="values.length"
                v-show="!isOpen">{{ values.length }} options selected</span>
        </template>
      </Multiselect>
  </div>
  
  <div class="search-criteria">
    <label>Select Primary Sels (multiple):</label>
    <Multiselect
      v-model="sels1"
      :options="selsOptions"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="id" 
      :preselect-first="false">
      <template #selection="{ values, search, isOpen }">
          <span class="multiselect__single"
                v-if="values.length"
                v-show="!isOpen">{{ values.length }} options selected</span>
        </template>
      </Multiselect>
  </div>
  
  <div class="search-criteria">
    <label>Select Secondary Sels (multiple):</label>
    <Multiselect
      v-model="sels2"
      :options="selsOptions"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="id" 
      :preselect-first="false">
      <template #selection="{ values, search, isOpen }">
          <span class="multiselect__single"
                v-if="values.length"
                v-show="!isOpen">{{ values.length }} options selected</span>
        </template>
      </Multiselect>
  </div>
  
  <div class="search-criteria">
    <label>Select Heads Up (multiple):</label>
    <Multiselect
      v-model="headsUps"
      :options="headsUpsOptions"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="id" 
      :preselect-first="false">
      <template #selection="{ values, search, isOpen }">
          <span class="multiselect__single"
                v-if="values.length"
                v-show="!isOpen">{{ values.length }} options selected</span>
        </template>
      </Multiselect>
  </div>
  
  <div class="search-criteria">
    <label>Select Situations (multiple):</label>
    <Multiselect
      v-model="situations"
      :options="situationsOptions"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="id" 
      :preselect-first="false">
      <template #selection="{ values, search, isOpen }">
          <span class="multiselect__single"
                v-if="values.length"
                v-show="!isOpen">{{ values.length }} options selected</span>
        </template>
      </Multiselect>
  </div>
  
  <div class="search-criteria">
    <label>Select Settings (multiple):</label>
    <Multiselect
      v-model="settings"
      :options="settingsOptions"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="id" 
      :preselect-first="false">
      <template #selection="{ values, search, isOpen }">
          <span class="multiselect__single"
                v-if="values.length"
                v-show="!isOpen">{{ values.length }} options selected</span>
        </template>
      </Multiselect>
  </div>
</div>

<br>
<label for="runtime"> Max length: </label>
<input id="runtime" v-model="runtime" type="range" min="1" max="100">


  <body>
    <div class="episode-component" v-for="data in searchDatas" :key="data.id">
      <EpisodeComponent :data="data" />
    </div>
    <p>This is weird</p>
  </body>


</template>

<style>
div.episode-component {
  height: auto;
  width: auto;
}

div.multi {
  width: max-content;
}


div.search-criteria{
  padding: 10px;
  display: inline-block;
  width: max-content;
}
</style>
