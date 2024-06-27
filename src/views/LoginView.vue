<script setup>
import { ref } from 'vue';
import { GoogleLogin, decodeCredential, googleLogout} from 'vue3-google-login';
import { useUserStore } from '@/stores/theuser';
// import { forceUpdate } from 'vue'

const theUser = useUserStore();
let loggedIn = ref(false);


const checkLogin = (name, email, sub, service) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({userName: name, userEmail: email, googleSub: sub, type: service})
  };
  fetch("http://localhost:3000/api/v1/users", requestOptions)
    .then(response => response.json())
    .then(data => (
      // console.log(data.name, data.email, data.googleSub, data.username, data.showCreator, data.seasonCreator, data.episodeCreator, data.role)
      theUser.setInfo(data.name, data.email, data.googleSub, data.username, data.showCreator, data.seasonCreator, data.episodeCreator, data.role)
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
  // console.log("first:")
  // console.log(loggedIn)
  // loggedIn.value = true
  // console.log("logged in:")
  // console.log(response)
  // console.log(decodeCredential(response.credential))
  // console.log("second:")
  console.log(theUser.isLoggedIn)
  let creds = decodeCredential(response.credential)
  localStorage.setItem("name", creds.name)
  checkLogin(creds.name, creds.email, creds.sub, "google")
  console.log(theUser.isLoggedIn)

  // console.log(theData)
  console.log(creds)
  // theUser.setInfo(user.value.name, user.value.email, user.value.sub)
  // $forceUpdate()
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