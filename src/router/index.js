import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CreateSeriesView from '../views/CreateSeriesView.vue'
import CreateSeasonView from '@/views/CreateSeasonView.vue'


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
      path: '/login',
      name: 'login',
      component: LoginView
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
    }
  ]
})

export default router
