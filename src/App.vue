<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useUserStore } from './stores/theUser';
import { GoogleLogin, decodeCredential, googleLogout} from 'vue3-google-login';

const userStore = useUserStore();

// start login
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
    // localStorage.setItem("name", creds.name)
    checkLogin(creds.name, creds.email, creds.sub, "google")
    console.log(theUser.isLoggedIn)

    console.log(creds)
  }
// end login
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <div class=banner>
        <img src="@/assets/images/selly_banner_w_slogan.png" height="100px" />
        <div class="support"> 
          <a href="https://themoviedb.org" target="_blank"><img src="/tmdb.svg"  width="120px"> </a>
          <div >Many details are from <a href="https://themoviedb.org" target="_blank">TheMovieDB</a>. Please visit!</div>
        </div>
        <div class="login">
          <!-- <div> logged in: {{ theUser.isLoggedIn() }}</div> -->

          <div v-if="theUser.isLoggedIn()" class="login">
            <button @click="logout" >Logout</button>
          </div>
          <div v-else class="loggedIn">
            <GoogleLogin :callback="callback" />
          </div>
        </div>

      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> 
        <RouterLink to="/glossary">Glossary</RouterLink> 
        <RouterLink to="/games/buildsnowman">Build a Snowman</RouterLink>
        <!-- <RouterLink to="/login">Login</RouterLink> -->
        <br><br><p>
          <RouterLink v-if= "userStore.isSeriesCreator" to="/createSeries">Create Shows</RouterLink>
          <RouterLink v-if= "userStore.isSeasonCreator" to="/createSeason">Create Seasons</RouterLink>
          <RouterLink v-if= "userStore.isEpisodeCreator" to="/createEpisode">Create Episodes</RouterLink>
          <!-- <RouterLink v-if= "userStore.userRole >= 3" to="/test">Change Details</RouterLink> -->
          <!-- <RouterLink v-if= "userStore.userRole >= 5" to="/test">User Permissions</RouterLink> -->
        </p>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<style scoped>

header {
  line-height: 1.5;
  display: inline;
  width: 100%;
  position: relative;
  z-index: 8;
  /* max-height: 100vh; */
}

.banner {
  position: relative;
  width: 100%;
  top: 15px;
  left: 0px;

  img {
    position: relative;
    display: inline-block;
  }
  
  .support {
    position: relative;
    display: inline-block;
    padding: 10px 0 0 10px;
    width: 200px;
    /* top: 100px; */
    /* left: 10px; */

    a {
      padding: 0;
    }
    /* margin-bottom: 10px; */

  }
  .login {
    position: absolute;
    display: inline-block;
    /* width: 200px; */
    right: 0;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /* position: absolute; */
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  /* top: 300px; */
}

nav a.router-link-exact-active {
  color: var(--golden-brown);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--cal-poly-green);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: inline;

    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: inline;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .banner {
    position: relative;
    width: 100%;
    top: 15px;
    left: 0px;

    img {
      position: relative;
      display: inline-block;
    }
    
    .support {
      position: absolute;
      display: inline-block;
      padding: 10px 0 0 10px;
      width: 200px;
      top: 0;

      a {
        padding: 0;
      }
      /* margin-bottom: 10px; */

    }
    .login {
      position: absolute;
      display: inline-block;
      /* width: 200px; */
      right: 0;
    }
  }
}


</style>
