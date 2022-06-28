import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from "@/components/HelloWorld.vue"
import Exercicios from "@/components/Exercicios.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/:posts',
    name: 'posts',
    component: HomeView
  },
  {
    path: '/exercicios/:exercicios',
    name: 'exercicios',
    component: Exercicios
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
