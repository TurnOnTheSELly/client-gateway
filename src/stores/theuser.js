import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userName = ref("Not Logged In")
  const userEmail = ref(null)
  const userSub = ref(null)
  // const isLoggedIn = computed(() => userName.value != null )
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  function isLoggedIn(){
     return userName.value != "Not Logged In";
  }

  function setInfo(newName, newEmail, newSub) {
    userName.value = newName
    userEmail.value = newEmail
    userSub.value = newSub
  }

  function $reset() {
    userName.value = "Not Logged In"
    userEmail.value = null
    userSub.value = null
    console.log ("logged out")
  }

  return { userName, userEmail, userSub, setInfo, isLoggedIn, $reset}
})
