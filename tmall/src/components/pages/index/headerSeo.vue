<template>
    <div class="header-seo">
        <i class="iconfont icon-sousuo"></i>
        <input class="detail-seo" placeholder="搜索商品/店铺/品牌">
    </div>
</template>

<script>
export default {
  name: 'headerSeo'
}
</script>

<style lang="stylus" scoped>
    .header-seo
        box-sizing border-box
        position relative
        height 1.125rem
        width 100%
        background-color #000
        padding .15rem
        i 
            display block
            position absolute
            top .35rem
            left .3rem
        .detail-seo
            box-sizing border-box
            width 100%
            height .8rem
            border-radius 5px
            padding-left .7rem
</style>
