<script setup>
  import { ref } from 'vue';
  import { useEpisodeFormStore } from '@/stores/episodeForm';
  // import { useUserStore } from '@/stores/theUser';

  const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL

  const episodeForm = useEpisodeFormStore()
  // const userStore = useUserStore()

  const seasonsOptions = ref([]);
  const attributeOptions = ref({})
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


  async function findAttributes() {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(tv_service_root_url + `api/v1/attribute_tables`, { headers })
    attributeOptions.value = await response.json()

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

    <div class="auto-fill">

      <h3>-Auto Filled-</h3>

      <label for="runtime"> Runtime (minutes): </label>
      <input id="runtime" v-model="episodeForm.runtime" placeholder="minutes"><br>

      <label for="airDate"> Aired (yyyy-mm-dd): </label>
      <input id="airDate" v-model="episodeForm.airDate" placeholder="yyyy-mm-dd"><br>

      <label for="stillPath"> Episode image(URL subdirectory): </label>
      <input id="stillPath" v-model="episodeForm.stillPath" placeholder="end of url"><br>
      Test Link: <a v-if="episodeForm.stillPath" v-bind:href="'https://image.tmdb.org/t/p/original/' + episodeForm.stillPath" target="_blank"> Test </a><br><br>

      <label for="overview">Overview</label><br>
      <textarea id="overview" v-model="episodeForm.overview" placeholder="brief description"></textarea>

    </div>

    <div class="manual fill" >

      <h3>-Manual Fill-</h3>
      <button type="button" @click="findAttributes()"> Load Attributes</button><br><br>

      <!-- <p>{{ attributeOptions.sels[1].name }}</p> -->

      <label for="sel1">SEL(primary): {{ episodeForm.sels1.length }} selected</label><br>
      <button type="button" @click="episodeForm.sels1 = []">select none</button><br>
      <select id="sel1" class="manual" v-model="episodeForm.sels1" multiple>
        <option v-for="sels in attributeOptions.sels" :value="sels.id" :key="sels.id">{{ sels.name }}</option>
      </select><br><br>
      
      <label for="sel2">SEL(secondary): {{ episodeForm.sels2.length  }} selected</label><br>
      <button type="button" @click="episodeForm.sels2 = []">select none</button><br>
      <select id="sel2" class="manual" v-model="episodeForm.sels2" multiple>
        <option v-for="sels in attributeOptions.sels" :value="sels.id" :key="sels.id">{{ sels.name }}</option>
      </select><br><br>
      
      <label for="situation">Situation: {{ episodeForm.situations.length  }} selected</label><br>
      <button type="button" @click="episodeForm.situations = []">select none</button><br>
      <select id="situation" class="manual" v-model="episodeForm.situations" multiple>
        <option v-for="data in attributeOptions.situations" :value="data.id" :key="data.id">{{ data.name }}</option>
      </select><br><br>
      
      <label for="setting">Setting: {{ episodeForm.settings.length  }} selected</label><br>
      <button type="button" @click="episodeForm.settings = []">select none</button><br>
      <select id="setting" class="manual" v-model="episodeForm.settings" multiple>
        <option v-for="data in attributeOptions.settings" :value="data.id" :key="data.id">{{ data.name }}</option>
      </select><br><br>
      
      <label for="headsUp">Heads up: {{ episodeForm.headsUps.length  }} selected</label><br>
      <button type="button" @click="episodeForm.headsUps = []">select none</button><br>
      <select id="headsUp" class="manual" v-model="episodeForm.headsUps" multiple>
        <option v-for="data in attributeOptions.heads_ups" :value="data.id" :key="data.id">{{ data.name }}</option>
      </select><br><br>

    </div>


    </form>
    <button @click="reset()">Reset</button>
  </div>
  <p>
    {}
  </p>
</template>

<style>

select.manual {
  width: 200px;
  height: 400px;
}

h3 {
  color: var(--pine);
}

</style>