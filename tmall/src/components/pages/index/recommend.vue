<template>
    <div class="recommend">
        <ul class="recommend-wrap">
            <li v-for="item of recommendList" :key="item.id">
                <span class="title">{{item.title}}</span>
                <br>
                <div class="detail-wrap">
                    <ul class="detail">
                        <li>
                            <img :src="item.targetUrlOne">
                            <br>
                            <span>{{item.targetUrlOneInfo}}</span>
                        </li>
                        <li>
                            <img :src="item.targetUrlTwo">
                            <br>
                            <span>{{item.targetUrlTwoInfo}}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Recommend",
  data () {
      return {
          recommendList : []
      }
  },
  mounted () {
      this.getRecommendInfo()
  },
  methods: {
      getRecommendInfo(){
            this.axios.get('http://localhost:8080/js/data.json').then((res)=>{
                var res = res.data;
                if(res.msg === "ok"){
                    this.recommendList = res.recommendData
                }
            })
      }
  }
}
</script>

<style lang="stylus" scoped>
    .recommend
        box-sizing border-box
        height 50%
        width  100%
        padding .2rem
        .recommend-wrap
            display flex
            flex-wrap wrap
            justify-content space-between
            box-sizing  border-box
            width 100%
            li
                width 46%
                border 1px solid #ccc
                margin .1rem
                .title
                    display block
                    height 0
                    padding 4% 3%
                    width 100%
                    font-weight bolder
                    font-size 1.33444em
                    color #555
                .detail-wrap
                    .detail
                        display flex
                        justify-content space-around
                        li
                            width 43%
                            img
                                width 100%
                                height 80%
                                border-bottom 1px solid #ccc
                            span
                                display block
                                width 100% 
                                text-align center
                                color red
                                font-weight bold

</style>
