<script setup>
  import { ref } from 'vue';


  defineProps (['data'])

  const isOpen = ref(false)
  
  function getImgUrl(subUrl) {
    return `https://image.tmdb.org/t/p/original${subUrl}`
  }

</script>

<template>
  <div class="body">
    <div class="visible" @click="isOpen = !isOpen">
        
      <div id="series-data">
        <div id="series-name">
          {{ data.series_name }}
        </div>
        
        <div id="rating">
          {{ data.rating }}
        </div>
      </div> 
     
      <div id="epi-season">
        <div id="episode-name">
          {{ data.episode_name }}
        </div>
        
        <div id="season-num">
          season {{ data.season_num }}
        </div>
      </div>


      <div id="time">
        <div id="runtime">
          {{ data.runtime }} minutes
        </div>
  
        <div id="set">
          {{ data.set }}
        </div>
      </div>
 
      <div class="list" id="sels1">
        <li v-for="(sel, i) in data.sels1?.split('| ')" :key="`${sels1}-${i}`">
          {{ sel }}
        </li>
      </div>
 
      <div class="list" id="sels2">
        <li v-for="(sel, i) in data.sel2?.split('| ')" :key="`${sels2}-${i}`">
          {{ sel }}
        </li>
      </div>
 
      <div class="list" id="situations">
        <li v-for="(situation, i) in data.situations?.split('| ')" :key="`${situations}-${i}`">
          {{ situation }}
        </li>
      </div>
 
      <div class="list" id="settings">
        <li v-for="(setting, i) in data.settings?.split('| ')" :key="`${settingsl}-${i}`">
          {{ setting }}
        </li>
      </div>
 
      <div class="list" id="heads-ups">
        <li v-for="(headsUp, i) in data.heads_ups?.split('| ')" :key="`${heads_ups}-${i}`">
          {{ headsUp }}
        </li>
      </div>
 
    </div>
    <div class="hidden" v-if="isOpen">

      <div class="image">
        <img :src="getImgUrl(data.poster_path)" height="100px">
      </div>

      <div class="details">
        <div id="episode-overview">
          Overview: {{ data.overview }}
        </div>

        <div id="series-overview">
          Series Overview: {{ data.series_overview }}
        </div>

        <div id="air-date">
          {{ data.air_date }}
        </div>
      </div>

    </div>
  </div>
</template>



<style>
div.body {
  width:1200px;
  height:auto;
  background-color: var(--overlay);
  border-radius: 30px;
  margin: 10px 2px;

  div.visible { 
    /* display: inline; */
    background-color: var(--overlay);
    padding: 10px;
    height: 30;

    div {
      display: inline-block;
      padding: 2px 5px;
      width: 100px;
    }
  }

  div.hidden{
    /* display: inline ; */
    background-color: var(--muted);
    height: 50;

    img {
      display:inline-block
    }
    
    div {
      display: inline-block;
    }
  }
}

.list {
  width: 200px;
}



</style>