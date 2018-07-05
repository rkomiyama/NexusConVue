<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
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
    <v-toolbar class="navBar" :class="{ 'navBar--squished': drawer }" fixed>
      <v-toolbar-side-icon v-if="$mq !== 'desktop'" @click.stop="drawer=!drawer" />
      <v-toolbar-title>NexusCon</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        {
          path: "/",
          icon: "home",
          label: "Home"
        },
        {
          path: "/about",
          icon: "info",
          label: "About Us"
        },
        {
          path: "/activities",
          icon: "color_lens",
          label: "Activities"
        },
        {
          path: "/gallery",
          icon: "photo_camera",
          label: "Gallery"
        },
        {
          path: "/guests",
          icon: "group",
          label: "Guests"
        },
        {
          path: "/registration",
          icon: "check_box",
          label: "Registration"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navBar--squished {
  left: 300px;
}
</style>
