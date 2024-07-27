import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEpisodeFormStore = defineStore( 'episodesForm', () => {
  const id = ref(null)
  const name = ref(null)
  const seasonData = ref({})
  const episodeNum = ref(null)

  const overview = ref(null)
  const stillPath = ref(null)
  const runtime = ref(null)
  const airDate = ref(null)

  const set = ref("1 of 1")
  const note = ref(null)

  const sels1 = ref([])
  const sels2 = ref([])
  const situations = ref([])
  const headsUps = ref([])
  const settings = ref([])

  function $reset() {
    id.value = null
    name.value = null
    seasonData.value = {}
    episodeNum.value = null
  
    overview.value = null
    stillPath.value = null
    runtime.value = null
    airDate.value = null

    set.value = "1 of 1"
    note.value = null
  
    sels1.value = []
    sels2.value = []
    situations.value = []
    headsUps.value = []
    settings.value = []
  }

  return { 
    id,
    name,
    seasonData, 
    episodeNum,
    overview, 
    stillPath, 
    runtime,
    airDate, 
    set, 
    note, 
    sels1, 
    sels2, 
    situations, 
    headsUps, 
    settings, 
    $reset 
  }

})