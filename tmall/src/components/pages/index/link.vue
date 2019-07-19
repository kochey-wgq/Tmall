<template>
    <div class="link">
        <div class="linkTitle">
            <span>{{listTitle}}</span>
        </div>
            <ul class="link-list">
                <li v-for="item of linkList" :key="item.id">
                    <ul>
                        <div class="info-wrap">
                            <img :src="item.url">
                            <br>
                            <span data-title="title">{{item.title}}</span>
                            <br>
                            <label for="#">{{item.coupon}}</label>
                            <label for="#">{{item.retreat}}</label>
                            <br>
                            <i>{{item.money}}</i>
                            <i>{{item.beSimilar}}</i>
                        </div>
                    </ul>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
  name: "link",
  data () {
      return {
          linkList:[],
          listTitle:null
      }
  },
  mounted () {
      this.getLinkInfo()
  },
  methods: {
      getLinkInfo () {
           this.axios.get('http://localhost:8080/js/data.json').then((res)=>{
              var res = res.data;
              if(res.msg === "ok"){
                this.linkList = res.likeData
                this.listTitle = res.linkTitle.title
              }
          })
      }
  }
}
</script>

<style lang="stylus" scoped>
    .link
        width 100%
        box-sizing border-box
        padding .2rem
        .linkTitle
            span
                display block
                width 100%
                height .6rem
                font-weight bold
                font-size .38rem
        .link-list
            display flex
            flex-wrap wrap
            justify-content space-around 
            width 100%
            li
                width 45% 
                background-color rgba(0, 0, 0, 0.03)
                border 1px solid #ccc
                margin-bottom .2rem         
                .info-wrap
                    box-sizing border-box
                    padding .2rem
                    [data-title=title]
                        display block
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                        -webkit-line-clamp 2
                    label
                        border 1px solid blue
                        color blue
                    label:nth-of-type(odd)
                        border 1px solid red
                        color red 
                    i
                        display block                         
                    i:nth-of-type(1)
                        margin-top .2rem
                        font-size .4rem
                        color red
                        float left
                    i:nth-of-type(2)
                        margin-top .1rem
                        width 1.5rem
                        height .5rem
                        line-height .5rem
                        text-align center
                        float right
                        border-radius 1rem
                        background-color rgb(255, 230, 235)
                        color rgb(255, 0, 54)
                    img
                        margin .1rem 
                        width 100%

</style>
