import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSeriesFormStore = defineStore('seriesForm', () => {
  const id = ref(null)
  const name = ref(null)
  const img = ref(null)
  const website = ref(null)
  const overview = ref(null)
  const genres = ref([])
  const posterPath = ref(null)



  function $reset() {
    id.value = null
    name.value = null
    img.value = null
    website.value = null
    overview.value = null
    genres.value = []
    posterPath.value = null
  }

  return { id, name, img, website, overview, genres, posterPath, $reset }

})