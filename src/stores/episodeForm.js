import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEpisodeFormStore = defineStore( 'episodesForm', () => {
  const id = ref(null)
  const seasonData = ref({})
  const episodeNum = ref(null)

  const overview = ref(null)
  const stillPath = ref(null)
  const runtime = ref(null)
  const airDate = ref(null)
  
  const set = ref("1 of 1")
  const note = ref(null)

  const situations = ref(null)
  const sels = ref(null)
  const headsUps = ref(null)
  const settings = ref(null)

  function $reset() {
    id.value = null
    seasonData.value = {}
    episodeNum.value = null
  
    overview.value = null
    stillPath.value = null
    runtime.value = null
    airDate.value = null

    set.value = "1 of 1"
    note.value = null
  
    situations.value = null
    sels.value = null
    headsUps.value = null
    settings.value = null
  }

  return { 
    id,
    seasonData, 
    episodeNum,
    overview, 
    stillPath, 
    runtime,
    airDate, 
    set, 
    note, 
    situations, 
    sels, 
    headsUps, 
    settings, 
    $reset 
  }

})