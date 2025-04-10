import { createWebHistory, createRouter } from 'vue-router'

import TemplateDefault from "@/templates/ViewDefault.vue"
import About from "@/components/About/About.vue"
import Home from "@/components/Home/Home.vue"
import Text from '../components/Text/Text.vue'
import Autor from '../components/Autor/Autor.vue'
import Videos from '../components/Videos/Videos.vue'
import Repertorio from '../components/Repertorio/Repertorio.vue'
import TextPage from '../pages/TextPage.vue'


const routes = [
  { 
    path: '', 
    component: TemplateDefault,
    children: [
      { 
        path: '', 
        component: Home,
        name: 'Home'
      }, 
      { 
        path: '/sobre', 
        component: About,
        name: 'About'
      },
      { 
        path: '/texto', 
        component: Text,
        name: 'text'
      },
      { 
        path: '/Videos', 
        component: Videos,
        name: 'Videos'
      },{ 
        path: '/Repertorio', 
        component: Repertorio,
        name: 'Repertorio'
      },
      { 
        path: '/seja-autor', 
        component: Autor,
        name: 'Autor'
      },
      { 
        path: '/texto/:slug', 
        component: TextPage,
        name: 'Texto'
      },
    ]
  },
]          


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router