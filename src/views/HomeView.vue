<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import DataTable from '../components/home/DataTable.vue'
import TestComponent from '@/components/TestComponent.vue';
import EpisodeComponent from '@/components/EpisodeComponent.vue';
import { ref, onMounted }from 'vue';

const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL;

const searchDatas = ref(null);
const searchKeys = ref(null);

const datas = [
  { "id": 2194074, "episode_name": "Bingo", "set": "1 of 1", "note": null, "still_path": "/3ddURgaQmmHRDw0JBnubWY0GZLZ.jpg", "runtime": 7, "season_num": "2", "series_name": "Bluey", "img": "/7iTOLVTKoBLwDYcoOA1qTS6NY5y.jpg", "website": "https://www.bluey.tv/", "buy": "[{\"logo_path\":\"/9ghgSC0MA082EL6HLCW3GalykFD.jpg\",\"provider_id\":2,\"provider_name\":\"Apple TV\",\"display_priority\":4},{\"logo_path\":\"/seGSXajazLMCKGB5hnRCidtjay1.jpg\",\"provider_id\":10,\"provider_name\":\"Amazon Video\",\"display_priority\":15},{\"logo_path\":\"/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg\",\"provider_id\":3,\"provider_name\":\"Google Play Movies\",\"display_priority\":16},{\"logo_path\":\"/i6lRmkKmJ23oOZ6IyjnOYLKxA9J.jpg\",\"provider_id\":7,\"provider_name\":\"Fandango At Home\",\"display_priority\":40},{\"logo_path\":\"/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg\",\"provider_id\":68,\"provider_name\":\"Microsoft Store\",\"display_priority\":49}]", "flatrate": "[{\"logo_path\":\"/97yvRBw1GzX7fXprcF80er19ot.jpg\",\"provider_id\":337,\"provider_name\":\"Disney Plus\",\"display_priority\":2},{\"logo_path\":\"/9BgaNQRMDvVlji1JBZi6tcfxpKx.jpg\",\"provider_id\":257,\"provider_name\":\"fuboTV\",\"display_priority\":8},{\"logo_path\":\"/d8HzRaIa5aGE5mJB1SsIA9hODdx.jpg\",\"provider_id\":508,\"provider_name\":\"DisneyNOW\",\"display_priority\":152}]", "sel": "Kind(Self)| Kind(Standard)| Kind(True)| Problem Solver| Responsible(Community)| Wise", "setting": "Adventure| Gathering| School(preschool/daycare)", "heads_up": "Death(non-sentient)", "situations": "Getting Hurt| Sharing| Taking Care of Younger" },
  { "id": 3350903, "episode_name": "Omelette", "set": "1 of 1", "note": null, "still_path": "/hFOdB7NghGAKMcQwhwDomrlkvFC.jpg", "runtime": 7, "season_num": "3", "series_name": "Bluey", "img": "/7iTOLVTKoBLwDYcoOA1qTS6NY5y.jpg", "website": "https://www.bluey.tv/", "buy": "[{\"logo_path\":\"/9ghgSC0MA082EL6HLCW3GalykFD.jpg\",\"provider_id\":2,\"provider_name\":\"Apple TV\",\"display_priority\":4},{\"logo_path\":\"/seGSXajazLMCKGB5hnRCidtjay1.jpg\",\"provider_id\":10,\"provider_name\":\"Amazon Video\",\"display_priority\":15},{\"logo_path\":\"/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg\",\"provider_id\":3,\"provider_name\":\"Google Play Movies\",\"display_priority\":16},{\"logo_path\":\"/i6lRmkKmJ23oOZ6IyjnOYLKxA9J.jpg\",\"provider_id\":7,\"provider_name\":\"Fandango At Home\",\"display_priority\":40},{\"logo_path\":\"/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg\",\"provider_id\":68,\"provider_name\":\"Microsoft Store\",\"display_priority\":49}]", "flatrate": "[{\"logo_path\":\"/97yvRBw1GzX7fXprcF80er19ot.jpg\",\"provider_id\":337,\"provider_name\":\"Disney Plus\",\"display_priority\":2},{\"logo_path\":\"/9BgaNQRMDvVlji1JBZi6tcfxpKx.jpg\",\"provider_id\":257,\"provider_name\":\"fuboTV\",\"display_priority\":8},{\"logo_path\":\"/d8HzRaIa5aGE5mJB1SsIA9hODdx.jpg\",\"provider_id\":508,\"provider_name\":\"DisneyNOW\",\"display_priority\":153}]", "sel": "Communicator| Open-minded| Responsible(Self)", "setting": "School(secondary)", "heads_up": "LGBTQ Theme", "situations": "Winning/Losing" }
];

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

onMounted(fetchData)

</script>

<template>
  <p>{{ searchKeys }}</p>
  <p v-for="data in datas" :key="data.id">
    <TestComponent :testData="data" />
  </p>

 <!-- <TestComponent :testData="datas" /> -->
  <body>
    <div v-for="data in searchDatas" :key="data.id">
      <EpisodeComponent :data="data" />
    </div>
  </body>


  <!-- <main>
    <DataTable />
  </main> -->
</template>
