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

      <h2> {{ data.episode_name }} of {{ data.series_name}} season: {{ data.season_num }} </h2>

      <div id="image">
        <img :src="getImgUrl(data.poster_path)" width="150px">
      </div>

      <div id="details">
        <div id="episode-overview">
          Overview: {{ data.overview }}
        </div>

        <div id="series-overview">
          Series Overview: {{ data.series_overview }}
        </div>

        <div id="air-date">
          Air Date(yyyy-mm-dd): {{ data.air_date }}
        </div>
      </div>

    </div>
  </div>
</template>



<style>
div.body {
  width: 1600px;
  height:auto;
  background-color: var(--overlay);
  border-radius: 30px;
  margin: 10px 2px;

  div.visible { 
    /* display: inline; */
    background-color: var(--overlay);
    border-radius: 30px;
    padding: 10px;
    height: 100px;
    /* overflow: scroll; */
    position: relative;

    div {
      /* height: 100px;
      overflow: scroll; */
      display: block;
      padding: 2px 5px;
      /* width: 100px; */
    }
  }

  div.hidden{
    background-color: var(--muted);
    height: 100;
    border-radius: 30px;

    h2 {
     padding: 30px 0 0 30px;
      display: block;

    }
    img {
      display:inline-block
    }
    
    div {
      display: inline-block;
      margin-top: 5px;
      /* height: 100px; */
      /* overflow: scroll; */

      div {
        margin: 0 0 20px 0;
      }
    }
  }
}

.list {
  width: 200px;
}

#image {
  /* margin: 10px 0 0 10px; */
  box-sizing: content-box;
  margin: 20px;
  width: 150px;
  height: auto;
  /* border-radius: 30px; */
  overflow: hidden;
  img {
    /* object-fit: contain; */
    border-radius: 30px;

  }
}
#details {
  position: absolute;
  width: 800px;
  margin: 50px 0 0 30px;
  /* border-radius: 30px; */
  /* top: 5px; */

}

#series-data {
  position: absolute;
  top: 10px
}

#epi-season {
  position: absolute;
  top: 10px;
  left: 150px;
}

#time {
  position: absolute;
  top: 10px;
  left: 400px;
}
 
#sels1 {
  height: 90px;
  position: absolute;
  top: 10px;
  left: 600px;
  overflow: scroll;
}
 
#sels2 {
  position: absolute;
  top: 10px;
  left: 800px;
}
 
#situations {
  position: absolute;
  top: 10px;
  left:1000px;
}
 
#settings {
  position: absolute;
  top: 10px;
  left: 1200px;
}

#heads-ups {
  position: absolute;
  top: 10px;
  left: 1400px;
}
 



</style>