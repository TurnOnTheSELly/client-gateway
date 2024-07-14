<script setup>
    import { ref } from 'vue';
    import { useSeriesFormStore } from '@/stores/seriesForm';
    import { useUserStore } from '@/stores/theUser';

    const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL

    const seriesForm = useSeriesFormStore();
    const theUser = useUserStore();
    const serviceHTTPCode = ref(null);
    const bEHTTPCode = ref(null);
    const newSeriesData = ref([]);


    function reset() { 
      seriesForm.$reset()
      serviceHTTPCode.value = null
      bEHTTPCode.value = null
      newSeriesData.value = []
    }

    async function createSeries() {
      const requestOptions = {
        method: "Post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: seriesForm.id,
          name: seriesForm.name,
          img: seriesForm.img,
          website: seriesForm.website,
          overview: seriesForm.overview,
          genres: seriesForm.genres,
          posterPath: seriesForm.posterPath,
          creator_id: theUser.id
        })
      };
      const response = await fetch(tv_service_root_url + "api/v1/series", requestOptions);
      if (response.status == 201 ) {
        reset()
        bEHTTPCode.value = response.status
        const data = await response.json()
        newSeriesData.value.push(data.name)
        newSeriesData.value.push(data.id)


      } else {
        bEHTTPCode.value = response.status
      }

    }

    async function findSeriesDetails() {
        const headers = { "Content-Type": "application/json" };
        const response = await fetch(tv_service_root_url + `api/v1/series_services/${seriesForm.id}`, { headers })
        if (response.status == 201) {
            const data = await response.json()
          seriesForm.name = data.name 
          seriesForm.img = data.img 
          seriesForm.website = data.website 
          seriesForm.overview = data.overview 
          seriesForm.genres = data.genres 
          seriesForm.posterPath = data.poster_path
          serviceHTTPCode.value = response.status
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

    <p> ID: {{ seriesForm.id }}</p>
    <p> Bluey: 82728 </p>
    <form>
      <label> TMDB Series ID number:  </label>
      <input v-model="seriesForm.id" placeholder="number from TMDB" @keyup.enter="findSeriesDetails"/>
      <button type="button" @click="findSeriesDetails()">Auto Fill Form</button><br>

      <label> Series Name: </label>
      <input v-model="seriesForm.name" placeholder="show name"/><br>

      <label> Homepage URL </label>
      <input v-model="seriesForm.website" placeholder="url"/><br>
      Test Link: <a v-if="seriesForm.website" v-bind:href="seriesForm.website" target="_blank"> Test </a><br>

      <label> Series image(URL subdirectory): </label> 
      <input v-model="seriesForm.img" placeholder="end of url"/><br>
      Test Link: <a v-if="seriesForm.img" v-bind:href="'https://image.tmdb.org/t/p/original/' + seriesForm.img" target="_blank"> Test </a><br>

      <label>Poster Path(URL subdirectory):</label>
      <input v-model="seriesForm.posterPath" placeholder="end of url"/><br>
      Test Link: <a v-if="seriesForm.posterPath" v-bind:href="'https://image.tmdb.org/t/p/original/' + seriesForm.posterPath" target="_blank"> Test </a><br>

      <label> Series Overview </label><br>
      <textarea v-model="seriesForm.overview" placeholder="description"></textarea><br>

      <label>Series Genres</label><br>
      <textarea v-model="seriesForm.genres" placeholder="2d array"></textarea>

    </form>
 
    <button @click="reset()">Reset</button>
    <button @click="createSeries()">Submit</button>

</template>


<style></style>