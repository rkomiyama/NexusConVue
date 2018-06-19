import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/Home.vue'
import AboutPage from './components/About.vue'
import ActivitiesPage from './components/Activities.vue'
import GalleryPage from './components/Gallery.vue'
import VendorsPage from './components/Vendors.vue'
import GuestsPage from './components/Guests.vue'
import RegistrationPage from './components/Registration.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/activities', component: ActivitiesPage },
  { path: '/gallery', component: GalleryPage },
  { path : '/vendors', component: VendorsPage },
  { path: '/guests', component: GuestsPage },
  { path: '/registration', component: RegistrationPage },
]

export default new VueRouter({mode: 'history', routes})