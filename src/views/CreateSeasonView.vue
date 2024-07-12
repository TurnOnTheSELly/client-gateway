<script setup>
  import { ref } from 'vue';
  import { useSeasonFormStore} from '@/stores/seasonForm';
  import { useUserStore } from '@/stores/theUser';

  const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL

  const seasonForm = useSeasonFormStore()

  const seriesOptions = ref([])
  const serviceHTTPCode = ref(null);
  const bEHTTPCode = ref(null);

  function reset() { 
      seasonForm.$reset()
      serviceHTTPCode.value = null
      bEHTTPCode.value = null
      // newSeriesData.value = []
    }

  async function getSeries() {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + 'api/v1/series/', { headers })
    seriesOptions.value = await response.json()
  }

  async function findSeasonDetails() {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + `api/v1/series_services/${seasonForm.seriesId}/season_services/${seasonForm.seasonNum}`, { headers })
    if (response.status == 201) {
        const data = await response.json()
          seasonForm.id = data.id
          seasonForm.flatrate = data.flatrate
          seasonForm.buy = data.buy
    } else if (response.status == 204){
      reset()
      serviceHTTPCode.value = 204
    } else if (response.status == 304){
      reset()
      serviceHTTPCode.value = 304
    } else {
      serviceHTTPCode.value = 9000
    }
  }



</script>
<template>
  <div>
    <p v-if= "serviceHTTPCode === 204">ID number not found</p>
    <p v-if= "serviceHTTPCode === 304">Already exists: please use another ID number</p>
    <p v-if= "serviceHTTPCode === 9000">Something went wrong</p>
    <p v-if= "bEHTTPCode === 201">Thank you for adding {{ newSeriesData[0]}} with id ({{ newSeriesData[1] }})!</p>
    <p v-if= "bEHTTPCode === 401">Something went wrong</p>
    <p v-if= "bEHTTPCode === 500">Something else went wrong</p>
  </div>

  <div>
  <p>{{ tv_service_root_url }}</p>
  <p>bluey: 82728, 0: 138218, 1:110147, 2:143749, 3:209453 </p>

  <form>
    <p> Series ID: {{ seasonForm.seriesId }}</p>
    <label for="series-id" >Select Series: </label>
    <select id="series-id" v-model="seasonForm.seriesId" @click.once="getSeries()">
      <option v-for="series in seriesOptions" :value="series.id" :key="series.id"> {{ series.name }} </option>
    </select>
    <label for="season-num"> Season number: </label>
    <input id="season-num" v-model="seasonForm.seasonNum" placeholder="0... ">
    <button type="button" @click="findSeasonDetails">Fill form</button><br>

    <label for="season-id"> Season ID: </label>
    <input v-model="seasonForm.id" placeholder="Season ID" id="season-id"><br>

    <label for="flatrate">Flatrate: </label><br>
    <textarea id="flatrate" v-model="seasonForm.flatrate" placeholder="hash"></textarea><br>

    <label for="buy"> Buy: </label><br>
    <textarea id="buy" v-model="seasonForm.buy" placeholder="hash"></textarea>
    

  </form>

  <!-- submit -->
  <!-- reset -->
</div>
</template>
<style>
</style>