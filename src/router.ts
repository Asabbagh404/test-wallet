import { createRouter, createWebHistory } from 'vue-router'

import TheIndex from '@/pages/TheIndex.vue'
import TheLogin from '@/pages/TheLogin.vue'

const routes = [
  {
    path: '/',
    component: TheIndex,
  },
  {
    path: '/login',
    component: TheLogin,
    meta: { noLayout: true }
  },
]

declare module 'vue-router' {
  interface RouteMeta {
    noLayout?: boolean,
    isAdmin?: boolean,
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
