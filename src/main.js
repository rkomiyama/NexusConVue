import Vue from 'vue'
import Vuetify from 'vuetify'
import VueMq from 'vue-mq'
import Vue2TouchEvents from 'vue2-touch-events'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 400,
    tablet: 768,
    laptop: 1264,
    desktop: Infinity
  }
});
Vue.use(Vue2TouchEvents);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
