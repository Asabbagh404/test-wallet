import {createRouter, createWebHistory} from 'vue-router'

import TheError from '@/pages/TheError.vue'
import TheIndex from '@/pages/TheIndex.vue'
import TheLogin from '@/pages/TheLogin.vue'
import {store} from "./store";

const routes = [
  {
    path: '/',
    component: TheIndex,
    beforeEnter: isInit,
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

function isInit(to: Function, from: Function, next: Function) { //TODO: find good types
  console.log(store.getters.isReady)
  if(!store.getters.isReady) {
    next({ path: '/login'});
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
