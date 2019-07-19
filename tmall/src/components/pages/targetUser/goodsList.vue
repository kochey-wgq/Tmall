<template>
    <div class="goodsList">
        <ul class="goods-wrap">
            <li class="iconfont">
                <span class="icon-daifukuan my"></span>
                <br>
                <span class="title">待付款</span>
            </li>
            <li class="iconfont">
                <span class="icon-daifahuo my"></span>
                <br>
                <span class="title">待发货</span>
            </li>
            <li class="iconfont">
                <span class="icon-tubiaolunkuo- my"></span>
                <br>
                <span class="title">待收货</span>
            </li>
            <li class="iconfont">
                <span class="icon-daipingjia my"></span>
                <br>
                <span class="title">待评价</span>
            </li>
            <li class="iconfont">
                <span class="icon-icon5 my"></span>
                <br>
                <span class="title">退款/售后</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "goodsList"
}
</script>

<style lang="stylus" scoped>
    .goodsList
        width 100%
        height 1.875rem
        margin-bottom 6%
        .goods-wrap
            display flex
            justify-content space-around
            box-sizing border-box
            padding-top 3%
            width 100%
            height 1.875rem
            background-color white
            li
                width 25%
                height 100%
                .my
                    display block
                    font-size .8rem
                    width 100%
                    text-align center
                    color #666
                .title
                    display block
                    text-align center
                    margin-top -.2rem
                    font-size .2rem
</style>
