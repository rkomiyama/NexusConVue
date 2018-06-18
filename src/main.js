import Vue from 'vue'
import Vuetify from 'vuetify'
import VueMq from 'vue-mq'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    tablet: 768
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
