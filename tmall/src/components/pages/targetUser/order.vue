<template>
    <div class="order">
        <ul class="order">
            <li v-for="item of orderList" :key="item.id" class="order-wrap">
                <i :class="item.icon"></i>
                <label for="#">{{item.msg}}</label>
                <em>&gt;</em>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "order",
  data () {
      return {
          orderList:[]
      }
  },
  mounted () {
      this.getOrderInfo()
  },
  methods: {
      getOrderInfo () {
           this.axios.get('http://localhost:8080/js/data.json').then((res)=>{
              var res = res.data;
              if(res.msg === "ok"){
                this.orderList = res.orderData
              }
          })
      }
  }
}
</script>

<style lang="stylus" scoped>
    .order
        width 100%
        height 4rem
        margin-bottom 5%
        .order-wrap
            display flex 
            width 100%
            line-height 1rem
            height 0
            padding-bottom 13%
            background-color white
            i  
                flex 1
                font-size .6rem
                height 1rem
                line-height 1rem
                text-align center
                display block
                border-bottom 1px solid white
                color orangered
            label 
                flex 3
                height 1.04rem
                border-bottom .1px solid #ccc
            em  
                height 1.04rem
                border-bottom .1px solid #ccc
                font-size .5rem
</style>
