<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import DataTable from '../components/home/DataTable.vue'
// import TestComponent from '@/components/TestComponent.vue';
import EpisodeComponent from '@/components/EpisodeComponent.vue';
import HeaderEpisodeComponent from '@/components/HeaderEpisodeComponent.vue';
import { ref, onMounted }from 'vue';
import Multiselect from 'vue-multiselect';
import { useSearchStore } from '@/stores/search';

import '@/assets/multiselect.css';

const searchStore = useSearchStore();


const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL;

const searchDatas = ref(null);
const searchKeys = ref(null);
const attributeOptions = ref([]);
const test = [{name: "one", id:1}, {name: "two",id: 2}, {name: "three",id: 3}]




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



async function findAttributesIf() {
  if (searchStore.selsOptions.length === 0){
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + `api/v1/attribute_tables?q=search`, { headers })
    const data = await response.json()
      searchStore.seriesOptions = data.series
      searchStore.selsOptions = data.sels
      searchStore.headsUpsOptions = data.heads_ups
      searchStore.situationsOptions = data.situations
      searchStore.settingsOptions =data.settings
  }
}

async function createSearch() {
  const requestOptions = {
    method: "Post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      series: searchStore.series,
      sels: searchStore.sels,
      headsUps: searchStore.headsUps,
      situations: searchStore.situations,
      settings: searchStore.settings,
      maxRuntime: searchStore.maxRuntime
    })
  };
  const response = await fetch(tv_service_root_url + "/api/v1/search", requestOptions)
  const data = await response.json()
    searchDatas.value = data
}

// onMounted(fetchData)
onMounted(findAttributesIf)

</script>

<!-- <style src="@/assets/multiselect.css"></style> -->

<template>
  <p>{{ searchKeys }}</p>
  <button @click="searchStore.$reset">Reset</button>

<div class="multi">
  <div class="search-criteria">
    <label>Select Series(multiple):</label>
    <Multiselect
      v-model="searchStore.series"
      :options="searchStore.seriesOptions"
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
    <label>Select  SELs (multiple):</label>
    <Multiselect
      v-model="searchStore.sels"
      :options="searchStore.selsOptions"
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
      v-model="searchStore.headsUps"
      :options="searchStore.headsUpsOptions"
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
      v-model="searchStore.situations"
      :options="searchStore.situationsOptions"
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
      v-model="searchStore.settings"
      :options="searchStore.settingsOptions"
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
<!-- <label for="runtime"> Max length: </label>
<input id="runtime" v-model="maxRuntime" type="range" min="1" max="100"> -->
<button @click="createSearch">Search</button>


  <body>
    <header class="episode-component-header">
      <HeaderEpisodeComponent  />
    </header>
    
    <div class="episode-component" v-for="data in searchDatas" :key="data.id">
      <EpisodeComponent :data="data" />
    </div>
  </body>


</template>

<style>
div.episode-component {
  height: auto;
  width: auto;
  margin-left: auto;
}

header.episode-component-header {
  margin-left: auto;
}

div.multi {
  width: max-content;
}


div.search-criteria{
  padding: 10px;
  display: inline-block;
  width: max-content;
}

@media only screen and (max-width: 600px) {

div.search-criteria{
  display: block;
  padding: 1px;
  margin-left: auto;
  margin-right: auto;
}
  
}
</style>
