import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userName = ref("Not Logged In")
  const userEmail = ref(null)
  const userSub = ref(null)
  const userUsername = ref(null)
  const isEpisodeCreator = ref(false)
  const isSeasonCreator = ref(false)
  const isShowCreator = ref(false)
  const userRole = ref(0)




  function isLoggedIn(){
     return userName.value != "Not Logged In";
  }



  function setInfo(newName, newEmail, newSub, newUserUsername, newIsShowCreator, newIsSeasonCreator, newIsEpisodeCreator, newUserRole) {
    userName.value = newName
    userEmail.value = newEmail
    userSub.value = newSub
    userUsername.value = newUserUsername
    isShowCreator.value = newIsShowCreator
    isSeasonCreator.value = newIsSeasonCreator
    isEpisodeCreator.value = newIsEpisodeCreator
    userRole.value = newUserRole
  }

  function $reset() {
    userName.value = "Not Logged In"
    userEmail.value = null
    userSub.value = null
    userUsername.value = null
    isShowCreator.value = false
    isSeasonCreator.value = false
    isEpisodeCreator.value = false
    userRole.value = 0
    console.log ("logged out")
  }

  return { userName, userEmail, userSub, setInfo, isLoggedIn, $reset, userUsername, isShowCreator, isSeasonCreator, isEpisodeCreator, userRole}
})
