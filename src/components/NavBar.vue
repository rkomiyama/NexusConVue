<template>
  <v-toolbar class="navBar">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.path"
        flat>
        <v-icon>{{ link.icon }}</v-icon>
        {{ link.label }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      links: {
        home: {
          path: '/',
          icon: 'home',
          label: 'Home'
        },
        about: {
          path: '/about',
          icon: 'info',
          label: 'About Us'
        },
        activities: {
          path: '/activities',
          icon: 'list',
          label: 'Activities'
        },
        guests: {
          path: '/guests',
          icon: 'group',
          label: 'Guests'
        },
        registration: {
          path: '/registration',
          icon: 'check_box',
          label: 'Registration'
        }
      }
    }
  }
}
</script>

<style scoped>
.navBar {
  position: relative;
  z-index: 100;
}
</style>
