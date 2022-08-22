import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FamilyView from '../views/FamilyView.vue'
import DonateView from '../views/DonateView.vue'
import StatsView from '../views/StatsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/family',
    name: 'family',
    component: FamilyView
  },
  {
    path: '/donate',
    name: 'donate',
    component: DonateView
  },
  {
    path: '/stats',
    name: 'stats',
    component: StatsView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
