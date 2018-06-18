<template>
  <div id="app">
    <v-app id="nexuscon" dark>
      <NavBar />
      <v-content>
        <v-container class="app-container">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
body {
  font-size: 16px;
}
body, h1, h2, h3, h4, h5, h6 {
  font-size-adjust: 0.5;
}
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.app-container {
  font-size: 1em;
  line-height: 1.25;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 150ms ease-out forwards;
  transition: opacity 150ms;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-active {
  animation: slide-out 150ms ease-out forwards;
  transition: opacity 150ms;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
}
@media (min-width: 43.75em) {
  .app-container {
    line-height: 1.375;
    width: 35em;
  }
}
</style>
