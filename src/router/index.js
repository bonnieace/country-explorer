import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView,
    },
    
    {
      path: '/country/:countryCode',
      name: 'CountryDetail',
      component: () => import('../views/DetailView.vue'),
    }

    
   
  ],
})

export default router
