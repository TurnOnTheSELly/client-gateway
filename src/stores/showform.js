import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShowFormStore = defineStore('showForm', () => {
  const showID = ref(null)
  const showName = ref(null)
  const showImg = ref(null)
  const showWebsite = ref(null)
  const showOverview = ref(null)
  const showGenres = ref([])
  const showPosterPath = ref(null)



  function $reset() {
    showName.value = null
    showImg.value = null
    showWebsite.value = null
    showOverview.value = null
    showGenres.value = []
    showPosterPath.value = null
  }

  return [showID, showName, showImg, showWebsite, showOverview, showGenres, showPosterPath, $reset ]

})