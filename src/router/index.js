import { createWebHistory, createRouter } from 'vue-router'

import TemplateDefault from "@/templates/ViewDefault.vue"
import About from "@/components/About/About.vue"
import Home from "@/components/Home/Home.vue"

const routes = [
  { 
    path: '/', 
    component: TemplateDefault,
    children: [
      { 
        path: '', 
        component: Home,
        name: 'Home'
      }
    ]
  },
  { 
    path: '/sobre', 
    component: TemplateDefault,
    children: [
      { 
        path: '', 
        component: About,
        name: 'About'
      },
    ]
  },
]          


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router