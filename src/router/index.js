import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import TeamView from '../views/TeamView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { order: 0 } },
  { path: '/about', name: 'about', component: AboutView, meta: { order: 1 } },
  { path: '/services', name: 'services', component: ServicesView, meta: { order: 2 } },
  { path: '/portfolio', name: 'portfolio', component: PortfolioView, meta: { order: 3 } },
  { path: '/team', name: 'team', component: TeamView, meta: { order: 4 } },
  { path: '/contact', name: 'contact', component: ContactView, meta: { order: 5 } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
