import Vue from 'vue'
import Vuetify from 'vuetify/es5/components/Vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VGrid from 'vuetify/es5/components/VGrid'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VToolbar from 'vuetify/es5/components/VToolbar'
import VList from 'vuetify/es5/components/VList'
import VIcon from 'vuetify/es5/components/VIcon'
import VFooter from 'vuetify/es5/components/VFooter'
import VueMq from 'vue-mq'

import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VGrid,
    VNavigationDrawer,
    VToolbar,
    VList,
    VIcon,
    VFooter
  }
});
Vue.use(VueMq, {
  breakpoints: {
    mobile: 400,
    tablet: 768,
    laptop: 1264,
    desktop: Infinity
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
