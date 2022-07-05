import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Postagens from '../views/Postagens.vue'
import Home from "@/views/Home.vue"
import Exercicios from "@/views/Exercicios.vue"
import NovaPostagem from "@/views/NovaPostagem.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:posts',
    name: 'posts',
    component: Postagens
  },
  {
    path: '/exercicios/:exercicios',
    name: 'exercicios',
    component: Exercicios
  },
  {
    path: '/novapostagem',
    name: 'novapostagem',
    component: NovaPostagem
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastros.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
