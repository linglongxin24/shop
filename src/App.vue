<template>
  <div id="app">
    <router-view></router-view>
   <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide'

import {mapActions} from 'vuex'
export default {
  components: {
    FootGuide
  },
  mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress()
  },
  methods: {
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
