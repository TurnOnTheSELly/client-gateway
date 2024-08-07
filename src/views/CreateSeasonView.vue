<script setup>
  import { ref } from 'vue';
  import { useSeasonFormStore} from '@/stores/seasonForm';
  import { useUserStore } from '@/stores/theUser';

  const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL

  const seasonForm = useSeasonFormStore()
  const userStore = useUserStore()

  const seriesOptions = ref([])
  const serviceHTTPCode = ref(null);
  const bEHTTPCode = ref(null);
  const newSeasonData = ref([]);


  function reset() { 
      seasonForm.$reset()
      serviceHTTPCode.value = null
      bEHTTPCode.value = null
      newSeasonData.value = []
    }

  async function getSeries() {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + 'api/v1/series/', { headers })
    seriesOptions.value = await response.json()
  }

  async function findSeasonDetails() {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + `api/v1/remote/series/${seasonForm.seriesId}/seasons/${seasonForm.seasonNum}`, { headers })
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

  async function createSeason() {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: seasonForm.id,
        buy: seasonForm.buy, 
        flatrate: seasonForm.flatrate,
        seasonNum: seasonForm.seasonNum,
        seriesId: seasonForm.seriesId,
        creatorId: userStore.userId
      })
    };
    const response = await fetch(tv_service_root_url + "api/v1/seasons", requestOptions)
    if (response.status == 201 ) {
      reset()
      bEHTTPCode.value = response.status
      const data = await response.json()
      newSeasonData.value.push(data.name)
      newSeasonData.value.push(data.id)


    } else {
      bEHTTPCode.value = response.status
    }
  }



</script>
<template>
  <body v-if= "userStore.isSeasonCreator">
    <div>
      <p v-if= "serviceHTTPCode === 204">ID number not found</p>
      <p v-if= "serviceHTTPCode === 304">Already exists: please use another ID number</p>
      <p v-if= "serviceHTTPCode === 9000">Something went wrong</p>
      <p v-if= "bEHTTPCode === 201">Thank you for adding {{ newSeasonData[0]}} with id ({{ newSeasonData[1] }})!</p>
      <p v-if= "bEHTTPCode === 401">Something went wrong</p>
      <p v-if= "bEHTTPCode === 500">Something else went wrong</p>
    </div>

    <div>

      <p>userStore: {{ userStore.userId }}</p>
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

      <button @click="reset()">Reset</button>
      <button @click="createSeason()">Submit</button>

    </div>
  </body>
  <body v-else>
    <h1>Please log in</h1>
  </body>
</template>

<style>
body {
  color: black;
}
</style>