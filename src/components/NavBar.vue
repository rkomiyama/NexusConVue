<template>
  <div>
    <v-navigation-drawer
      fixed
      app
      v-model="drawer"
      v-if="$mq === 'mobile'">
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
    <mq-layout mq="tablet">
      <v-toolbar class="navBar">
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="link.path"
            flat>
            <v-icon>
              {{ link.icon }}
            </v-icon>
            {{ link.label }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </mq-layout>
    <mq-layout mq="mobile">
      <v-toolbar class="navBar">
        <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
        <v-toolbar-title>NexusCon</v-toolbar-title>
      </v-toolbar>
    </mq-layout>
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
