import { createRouter, createWebHistory } from 'vue-router'

// app //
import MainContainer from './app/layouts/MainContainer.vue'

const routes = [
  {
    path: '/',
    name: 'MainContainer',
    component: MainContainer,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: MainContainer },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
