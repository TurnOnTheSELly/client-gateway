<script setup>
import { ref } from 'vue';
import { GoogleLogin, decodeCredential, googleLogout} from 'vue3-google-login';
import { useUserStore } from '@/stores/theUser';
// import { forceUpdate } from 'vue'

const tv_service_root_url = import.meta.env.VITE_TV_SERVICE_URL

const theUser = useUserStore();
let loggedIn = ref(false);


const checkLogin = (name, email, sub, service) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({userName: name, userEmail: email, googleSub: sub, type: service})
  };
  fetch(tv_service_root_url + "api/v1/users", requestOptions)
    .then(response => response.json())
    .then(data => (
      theUser.setInfo(data.id, data.name, data.email, data.googleSub, data.username, data.seriesCreator, data.seasonCreator, data.episodeCreator, data.role)
    ));
}

function logout(){
  googleLogout()
  loggedIn.value = false
  theUser.$reset()
  console.log("hope this worked")
  console.log(theUser.userName)
}

const callback = (response) => {
  console.log(theUser.isLoggedIn)
  let creds = decodeCredential(response.credential)
  localStorage.setItem("name", creds.name)
  checkLogin(creds.name, creds.email, creds.sub, "google")
  console.log(theUser.isLoggedIn)

  console.log(creds)
}


</script>

<template>
        <p> role: {{ theUser }} </p>
      <p> sub: {{ theUser.userSub }} </p>
  <div> logged in: {{ theUser.isLoggedIn() }}</div>
  <p>The name is also: {{ theUser.userName}}</p>
    <div v-if="theUser.isLoggedIn()" class="login">
      <button @click="logout" >Logout</button>

      <h1>This is a view page</h1>
      <p> role: {{ theUser.role }}</p>
      <p> sub: {{  theUser.googleSub }}</p>

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