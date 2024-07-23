<script setup>
  import { ref } from 'vue';
  import { useEpisodeFormStore } from '@/stores/episodeForm';
  import { useUserStore } from '@/stores/theUser';

  const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL

  const episodeForm = useEpisodeFormStore()
  const userStore = useUserStore()

  const seasonsOptions = ref([])
  const serviceHTTPCode = ref(null);
  const bEHTTPCode = ref(null);
  const newEpisodeData = ref([]);


  function reset() {
    episodeForm.$reset()
    serviceHTTPCode.value = null
    bEHTTPCode.value = null
    newEpisodeData.value = []
  }

  async function getSeasons() {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + 'api/v1/seasons?q=concise', { headers })
    seasonsOptions.value = await response.json()

  }

  async function findEpisodeDetails() {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + `api/v1/remote/series/${episodeForm.seasonData.seriesId}/seasons/${episodeForm.seasonData.seasonNum}/episodes/${episodeForm.episodeNum}`, { headers })
    if (response.status == 201) {
      const data = await response.json()
        episodeForm.id = data.id
        episodeForm.overview = data.overview
        episodeForm.stillPath = data.still_path
        episodeForm.runtime = data.runtime
        episodeForm.airDate = data.air_date
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
    <p v-if= "bEHTTPCode === 201">Thank you for adding {{ newSeasonData[0]}} with id ({{ newSeasonData[1] }})!</p>
    <p v-if= "bEHTTPCode === 401">Something went wrong</p>
    <p v-if= "bEHTTPCode === 500">Something else went wrong</p>
  </div>

  <div>
    <p> Series ID: {{ episodeForm.seasonData.seriesId }}</p>
    <p> Season ID: {{ episodeForm.seasonData.seasonId }}</p>
    <p> Season Number: {{ episodeForm.seasonData.seasonNum }}</p>
    <p> Episode ID: {{ episodeForm.id }}</p>
    <form>
      <label for="series-season-id"> Select Season: Season </label>
      <select id="series-season-id" v-model="episodeForm.seasonData" @click.once="getSeasons()">
        <option v-for="season in seasonsOptions" :value="{ seriesId: season.series_id, seasonId: season.id, seasonNum: season.season_num }" :key="season.id">
          {{ season.season_num }} of {{ season.name }}
        </option>
      </select>
      <label for="episode-num"> Episode number: </label>
      <input id="episode-num" v-model="episodeForm.episodeNum" placeholder="0...">
      <button type="button" @click="findEpisodeDetails">Fill form</button><br />
      <br />
      

    </form>
    <button @click="reset()">Reset</button>
  </div>
  <p>
    {}
  </p>
</template>

<style></style>