<template>
    <div class="index">
        <Header />
        <div class="top"></div>
        <navIcon />
        <HeaderSwiper />
        <Recommend />
        <Link />
        <aside class="loading" v-if="show">
          <div class="loading-icon">
            <img :src="loading">
            <i class="show" @click="handleHide">×</i>
          </div>
        </aside>
    </div>
</template>

<script>
import Header from '@/components/pages/index/header'
import navIcon from '@/components/pages/index/navIcon'
import HeaderSwiper from '@/components/pages/index/haederSwiper'
import Recommend from '@/components/pages/index/recommend'
import Link from '@/components/pages/index/link'

export default {
  name: 'Index',
  components: {
    Header,
    navIcon,
    HeaderSwiper,
    Recommend,
    Link
  },
  data () {
    return {
      loading : null,
      show : true
    }
  },
  mounted (){ //
    this.loading = "https://gw.alicdn.com/tfs/TB1OJh.OrrpK1RjSZTEXXcWAVXa-654-760.png"
  },
  methods: {
    handleHide(){
        this.show = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .index
    position relative
    .top 
      width 100%
      height 2.1rem
    .loading
      box-sizing border-box
      position fixed
      z-index 9999
      top 0
      left 0
      width 100%
      height 100%
      padding-top 50%
      background-color rgba(0,0,0,.3)
      text-align center
      .loading-icon
        display inline-block
        width 65%
        height 60%
        img 
          width 100%
          height 100%
          border-radius 10px
        .show
          display inline-block
          margin-top 7%
          width 20%
          height 17%
          font-size 1rem
          border 1px solid #fff
          border-radius 50%
          color white 
</style>
