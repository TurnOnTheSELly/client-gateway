import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore( 'search', () => {
  const seriesOptions = ref([]);
  const selsOptions = ref([]);
  const headsUpsOptions = ref([]);
  const situationsOptions = ref([]);
  const settingsOptions = ref([]);

  const series = ref([]);
  const sels = ref([]);
  const headsUps = ref([]);
  const situations = ref([]);
  const settings = ref([]);
  const maxRuntime = null;

  function $reset() {
    seriesOptions.value = []
    selsOptions.value = []
    headsUpsOptions.value = []
    situationsOptions.value = []
    settingsOptions.value = []

    series.value = []
    sels.value = []
    headsUps.value = []
    situations.value = []
    settings.value = []
    maxRuntime.value = []
  }


  return {
    seriesOptions,
    selsOptions,
    headsUpsOptions,
    situationsOptions,
    settingsOptions,
    series,
    sels,
    headsUps,
    situations,
    settings,
    maxRuntime,
    $reset
  }

})