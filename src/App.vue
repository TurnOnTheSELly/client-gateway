<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/theUser';

const userStore = useUserStore();
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <div class=banner>
        <img src="@/assets/images/selly_banner_w_slogan.png" height="100px" />
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> 
        <RouterLink to="/glossary">Glossary</RouterLink> 
        <RouterLink to="/login">Login</RouterLink>
        <!-- <RouterLink to="/games_teacher">Games (teacher)</RouterLink> -->
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
  display: inline
  /* max-height: 100vh; */
}

.banner {
  position: relative;
  top: 15px;
  left: 0px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
}
</style>
