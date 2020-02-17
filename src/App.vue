<template>
  <div id="app">
    <router-view></router-view>
   <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide'
import {reqFoodTypes} from './api'

export default {
  components: {
    FootGuide
  },
  async mounted () {
    const foodTypes = await reqFoodTypes()
    console.log(foodTypes)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
