<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app>
      <v-list>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.path">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ link.label }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="navBar">
      <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title>NexusCon</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
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
          icon: 'color_lens',
          label: 'Activities'
        },
        gallery: {
          path: '/gallery',
          icon: 'photo_camera',
          label: 'Gallery'
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
  z-index: 1;
}
</style>
