import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Select from '../views/Select.vue'
import Home from "@/views/Home.vue"
import Exercicios from "@/views/Exercicios.vue"
import Postagens from "@/views/Postagens.vue"
import NovaPostagem from "@/views/NovaPostagem.vue"
import MainMenu from "@/components/MainMenu.vue"
import SubMenu from "@/components/SubMenu.vue"
import Post from "@/components/Post.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    children: [
      {path: "/",
      component: MainMenu
      },
      {
        path: "/:submenu",
        component: SubMenu
      }
    ]

  },
  
  {
    path: '/:categoria/:page',
    component: Postagens
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
