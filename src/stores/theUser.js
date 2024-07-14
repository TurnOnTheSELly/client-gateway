import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userId = ref(null)
  const userName = ref("Not Logged In")
  const userEmail = ref(null)
  const userSub = ref(null)
  const userUsername = ref(null)
  const isEpisodeCreator = ref(false)
  const isSeasonCreator = ref(false)
  const isSeriesCreator = ref(false)
  const userRole = ref(0)




  function isLoggedIn(){
     return userName.value != "Not Logged In";
  }



  function setInfo(newId, newName, newEmail, newSub, newUserUsername, newIsSeriesCreator, newIsSeasonCreator, newIsEpisodeCreator, newUserRole) {
    userId.value = newId
    userName.value = newName
    userEmail.value = newEmail
    userSub.value = newSub
    userUsername.value = newUserUsername
    isSeriesCreator.value = newIsSeriesCreator
    isSeasonCreator.value = newIsSeasonCreator
    isEpisodeCreator.value = newIsEpisodeCreator
    userRole.value = newUserRole
  }

  function $reset() {
    userId.value = null
    userName.value = "Not Logged In"
    userEmail.value = null
    userSub.value = null
    userUsername.value = null
    isSeriesCreator.value = false
    isSeasonCreator.value = false
    isEpisodeCreator.value = false
    userRole.value = 0
    console.log ("logged out")
  }

  return { userId, userName, userEmail, userSub, setInfo, isLoggedIn, $reset, userUsername, isSeriesCreator, isSeasonCreator, isEpisodeCreator, userRole}
})
