import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LoginView from '../views/LoginView.vue'
import BuildSnowmanView from '@/views/games/BuildSnowmanView.vue'
import CreateSeriesView from '../views/CreateSeriesView.vue'
import CreateSeasonView from '@/views/CreateSeasonView.vue'
import CreateEpisodeView from '@/views/CreateEpisodeView.vue'
import GlossaryView from '@/views/GlossaryView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/glossary',
      name: 'glossary',
      component: GlossaryView
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: LoginView
    // },
    {
      path: '/games/buildsnowman',
      name: 'buildsnowman',
      component: BuildSnowmanView
    },
    {
      path: '/createSeries',
      name: 'createSeries',
      component: CreateSeriesView 
    },
    {
      path: '/createSeason',
      name: 'createSeason',
      component: CreateSeasonView
    },
    {
      path: '/createEpisode',
      name: 'createEpisode',
      component: CreateEpisodeView
    }
  ]
})

export default router
