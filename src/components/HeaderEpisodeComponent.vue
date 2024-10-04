<script setup>
  import { ref } from 'vue';


  // defineProps (['data'])

  // const isOpen = ref(false)
  
  // function getImgUrl(subUrl) {
  //   return `https://image.tmdb.org/t/p/original${subUrl}`
  // }

</script>

<template>
  <div class="body">
    <div class="visible" @click="isOpen = !isOpen">
        
      <div class="column" id="series-data">
        <div id="series-name">
          Series Name:
        </div>
        
        <div id="rating">
          Rating:
        </div>
      </div> 
     
      <div class="column" id="epi-season">
        <div id="episode-name">
          Episode Name:
        </div>
        
        <div id="season-num">
          Season:
        </div>
      </div>


      <div class="column" id="time">
        <div id="runtime">
          Runtime:
        </div>
  
        <div id="set">
          Set:
        </div>
      </div>
 
      <div class="list column" id="sels1">
        SELs
      </div>
 
      <div class="list column" id="sels2">
        Secondary SELs
      </div>
 
      <div class="list column" id="situations">
        Situations
      </div>
 
      <div class="list column" id="settings">
        Settings
      </div>
 
      <div class="list column" id="heads-ups">
        HeadsUps
      </div>
 
    <!-- </div>
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
      </div> -->

    </div>
  </div>
</template>



<style scoped>
div.body {
  width: 1600px;
  height:auto;
  background-color: var(--dark-green);
  border-radius: 30px;
  margin: 10px 2px;
  
  div.visible { 
    /* display: inline; */
    /* background-color: var(--mindaro);
    color: var(--dark-green); */
    background-color: var(--dark-green);
    color: white;
    font-weight: bold;
    border-radius: 30px;
    padding: 10px;
    height: 70px;
    /* overflow: scroll; */
    position: relative;

    div.column {
      display: block;
      position: absolute;
      top: 10px;
    }

    div.list {
      /* height: 90px; */
      overflow: hidden;
    }
  }

  div.hidden{
    background-color: var(--persian-orange);
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
  left: 20px;
}

#epi-season {
  left: 150px;
}

#time {
  left: 400px;
}
 
#sels1 {
  left: 600px;
}
 
#sels2 {
  left: 800px;
}
 
#situations {
  left:1000px;
}
 
#settings {
  left: 1200px;
}

#heads-ups {
  left: 1400px;
}
 



</style>