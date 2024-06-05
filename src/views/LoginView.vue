<script setup>
import { onMounted, ref } from 'vue';
import { GoogleLogin, decodeCredential, googleLogout, googleOneTap } from 'vue3-google-login';
import { useUserStore } from '@/stores/theuser';
// import { forceUpdate } from 'vue'

const theUser = useUserStore();
let loggedIn = ref(false);
let user = ref(null);

function logout(){
  googleLogout()
  loggedIn.value = false
}

const callback = (response) => {
  console.log("first:")
  console.log(loggedIn)
  loggedIn.value = true
  console.log("logged in:")
  console.log(response)
  console.log(decodeCredential(response.credential))
  console.log("second:")
  console.log(loggedIn)
  user.value = decodeCredential(response.credential)
  theUser.setInfo(user.value.name, user.value.email, user.value.sub)
  // $forceUpdate()
}


</script>

<template>
  <div> logged in: {{ theUser.isLoggedIn() }}</div>
  <p>The name is also: {{ theUser.userName}}</p>
    <div v-if="theUser.isLoggedIn()" class="login">
      <button @click="logout" >Logout</button>

      <h1>This is a view page</h1>

      <!-- <p>The name is: {{ user.name }}</p>
      <p>The email is: {{ user.email }}</p> -->

    </div>
    <div v-else class="loggedIn">
      <GoogleLogin :callback="callback" />
    </div>
    <div>test</div>
  </template>
  
  <style>
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  </style>