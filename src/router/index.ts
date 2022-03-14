import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Counter from '../views/Counter.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
]

const router = createRouter({
  history: createWebHistory(), // search information
  routes,
})

export default router
