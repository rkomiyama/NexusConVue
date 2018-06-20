import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = () => import('./components/Home.vue')
const AboutPage = () => import('./components/About.vue')
const ActivitiesPage = () => import('./components/Activities.vue')
const GalleryPage = () => import ('./components/Gallery.vue')
const VendorsPage = () => import('./components/Vendors.vue')
const GuestsPage = () => import('./components/Guests.vue')
const RegistrationPage = () => import('./components/Registration.vue')

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/activities', component: ActivitiesPage },
  { path: '/gallery', component: GalleryPage },
  { path: '/vendors', component: VendorsPage },
  { path: '/guests', component: GuestsPage },
  { path: '/registration', component: RegistrationPage },
]

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})