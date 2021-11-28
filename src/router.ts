import { createRouter, createWebHistory } from 'vue-router'

import TheIndex from '@/pages/TheIndex.vue'
import TheLogin from '@/pages/TheLogin.vue'
import TheError from '@/pages/TheError.vue'

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
  {
    path: '/:pathMatch(.*)*',
    component: TheError,
    name: 'error',
    meta: { noLayout: true },
    props: true
  }
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
