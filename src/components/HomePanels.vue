<template>
  <v-flex class="homePanels" :class="$mq">
    <div 
      v-for="(link, i) in links"
      :key="i"
      :style="{'background-color': link.bgColor}"
      class="homePanel"
      @click="link.click"
      @mouseover="link.select"
      v-on-clickaway="clickAwayFromPanel">
      <h3
        class="homePanel-title"
        :style="{'background': 'linear-gradient(to right,' + link.bgColor + ', transparent)'}">
        {{ link.name }}
      </h3>
    </div>
  </v-flex>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [ clickaway ],
  data() {
    return {
      selected: -1,
      links: [
        {
          name: 'About Us',
          path: '/about',
          bgColor: '#5392ff'
        },
        {
          name: 'Activities',
          path: '/activities',
          bgColor: '#71cddd'
        },
        {
          name: 'Vendors',
          path: '/vendors',
          bgColor: '#34bc6e'
        },
        {
          name: 'Guests',
          path: '/guests',
          bgColor: '#95d13c'
        },
        {
          name: 'Registration',
          path: '/registration',
          bgColor: '#ffb000'
        }
      ]
    }
  },
  methods: {
    clickAwayFromPanel() {
      this.selected = -1;
    }
  },
  created() {
    for(let i = 0; i < this.links.length; i++) {
      this.links[i].click = () => {
        if (this.selected === i) {
          this.$router.push(this.links[i].path);
        }
      }
      this.links[i].select = () => {
        setTimeout(() => {
          if (this.selected !== i){
            this.selected = i;
          }
        }, 1);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.homePanels {
  display: flex;
  height: 300px;
  background-color: black;
  cursor: pointer;

  &.mobile,
  &.tablet,
  &.laptop {
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }

  &.desktop {
    margin-left: calc(50% - 50vw + 150px);
    margin-right: calc(50% - 50vw + 150px);
  }
}

.homePanel {
  flex: 1;
  white-space: nowrap;
  transition: all 500ms;

  .homePanel-title {
    position: relative;
    top: 2rem;
    padding-left: 1rem;
  }

  &:hover {
    flex: 2;
    background-color: black !important;
  }
}
</style>
