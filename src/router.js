import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = () => import('./components/home/Home.vue')
const AboutPage = () => import('./components/about/About.vue')
const ActivitiesPage = () => import('./components/activities/Activities.vue')
const GalleryPage = () => import('./components/gallery/Gallery.vue')
const VendorsPage = () => import('./components/vendors/Vendors.vue')
const GuestsPage = () => import('./components/guests/Guests.vue')
const RegistrationPage = () => import('./components/registration/Registration.vue')

const routes = [
	{ path: '/', component: HomePage },
	{ path: '/about', component: AboutPage },
	{ path: '/activities', component: ActivitiesPage },
	{ path: '/gallery', component: GalleryPage },
	{ path: '/vendors', component: VendorsPage },
	{ path: '/guests', component: GuestsPage },
	{ path: '/registration', component: RegistrationPage },
	{ path: '*', redirect: '/' }
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