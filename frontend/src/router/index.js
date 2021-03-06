import Vue from 'vue'
import VueRouter from 'vue-router'
import Connect from '../views/Connect.vue'
import Signup from '../views/Signup.vue'
import CreerDiscussion from '../views/CreerDiscussion.vue'
import Accueil from '../views/Accueil.vue'
import Sujet from '../views/Sujet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connect',
    component: Connect
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/CreerDiscussion',
    name: 'CreerDiscussion',
    component: CreerDiscussion
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Sujet/:id', 
    name: 'Sujet',
    component: Sujet
  }
]

const router = new VueRouter({
  routes
})

export default router
