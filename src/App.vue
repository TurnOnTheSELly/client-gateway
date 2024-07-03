<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useUserStore } from './stores/theUser';

const theUser = useUserStore();
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="Turn on the Selly" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> 
        <RouterLink to="/login">Login</RouterLink>
        <!-- <RouterLink to="/games_teacher">Games (teacher)</RouterLink> -->
        <br><br><p>
          <RouterLink v-if= "theUser.isSeriesCreator" to="/createSeries">Create Shows</RouterLink>
          <!-- <RouterLink v-if= "theUser.isSeasonCreator" to="/test">Create Seasons</RouterLink>
          <RouterLink v-if= "theUser.isEpisodeCreator" to="/test">Create Episodes</RouterLink>
          <RouterLink v-if= "theUser.userRole >= 3" to="/test">Change Details</RouterLink>
          <RouterLink v-if= "theUser.userRole >= 5" to="/test">User Permissions</RouterLink> -->
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
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
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
