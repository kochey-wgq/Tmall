<template>
    <div class="header">
        <div class="header-list">
          <div class="iconfont icon-icon-- icon-list"></div>
          <div class="banner-img">
            <img :src="bannerImg">
          </div>
          <router-link tag="div" to="/index/signin" class="signin">登录</router-link>
        </div>
        <router-link tag="div" to="/index/index-seo" class="header-seo">
          <i class="iconfont icon-sousuo"></i>
          <input class="seo" type="text" placeholder="搜索商品、品牌">
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return { 
      bannerImg : []
    }
  },
  mounted () {    //渲染模板完毕后
    this.getBanner()
  },
  methods: { 
    getBanner(){
      this.axios.get('http://localhost:8080/js/data.json').then((res)=>{  //获取数据接口
        var res = res.data;
        if(res.msg === "ok"){ //允许跨域
          this.bannerImg = res.bannerImg.url
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position fixed
    width 100%
    z-index 9999
    height 2.1rem
    background-color #ff0036
    .header-list
      display flex
      width 100%
      height .85rem
      .icon-list
        float left
        width .85rem
        line-height .85rem
        font-size .7rem
        color white
        text-align center
      .banner-img
        flex 1
        line-height .85rem
        text-align center
        img
          display inline
          width 2.5rem
          height .45rem
      .signin
        float right
        width .9rem
        line-height .85rem
        font-size .3rem
        color white
        text-align center
    .header-seo
      box-sizing border-box
      width 100%
      height 0.975rem
      position relative
      padding .22rem
      i
        display block
        position absolute
        top 0.45rem
        left .4rem
      .seo
        box-sizing border-box
        width 100%
        height 0.775rem
        border-radius .1rem
        padding-left .7rem
      .seo::placeholder
        color #ccc
</style>
