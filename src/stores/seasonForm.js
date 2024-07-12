import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSeasonFormStore = defineStore( 'seasonsForm', () => {
  const id = ref(null)
  const seasonNum = ref(null)
  const seriesId = ref(null)
  const flatrate = ref(null)
  const buy = ref(null)

  function $reset() {
    id.value = null
    seasonNum.value = null
    seriesId.value = null
    flatrate.value = null
    buy.value = null
  }

  return { id, seasonNum, seriesId, flatrate, buy, $reset }
})