<template>
    <div class="header-swiper">
        <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length>1">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.targetUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
        <div class="advertisement">
            <img :src="Advertisement">
        </div>
  </div>
</template>

<script>

export default {
  name: "HaederSwiper",
  
  data () {
      return {
          swiperOption: {
              autoplay: {//自动播放
                 delay: 3000,
                 disableOnInteraction: false
              },
              loop:true,
              pagination : {
                  el : ".swiper-pagination"
              }
          },
          swiperList:[],
          Advertisement : []
      }
  },
  mounted () {
      this.getInfoSwiper()
  },
  methods: {
      getInfoSwiper(){
          this.axios.get('http://localhost:8080/js/data.json').then((res)=>{
              var res = res.data;
              if(res.msg === "ok"){
                this.swiperList = res.swiperData
                this.Advertisement = res.AdvertisementData.url
              }
          })
      }
  }
}
</script>

<style lang="stylus" scoped>
    .header-swiper
        position relative
        overflow hidden
        width 100%
        height 38%
        .swiper-img
            width 95% 
            height 100%
            box-shadow 0 1px .1rem #000
            margin 3%
        .advertisement
            img
                width 100%
                height 100%
</style>
