import { createRouter, createWebHistory } from 'vue-router'

// app //
import MainContainer from './app/layouts/MainContainer.vue'
import Home from './app/views/Home.vue'

const routes = [
  { 
    path: '/',
    name: 'MainContainer',
    component: MainContainer
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router