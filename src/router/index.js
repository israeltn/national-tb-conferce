import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sponsors from '../views/Sponsors.vue'
import Registration from '../views/Registration.vue'
import Delegates from '../views/Delegates.vue'
import Speakers from '../views/Speakers.vue'

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
      path: '/sponsors',
      name: 'sponsors',
      component: Sponsors
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/delegates',
      name: 'delegates',
      component: Delegates
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: Speakers
    },
  ]
})

export default router
