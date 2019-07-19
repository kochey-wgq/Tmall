<template>
    <div class="nav-icon">
        <ul>
            <li v-for="item in navIconList" :key="item.id">
                <img :src="item.url">
                <br>
                <span class="title-icon">{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "navIcon",
  data () {
      return {
        navIconList : []
      }
  },
  mounted () {
      this.getInfoNav()
  },
  methods: {
         getInfoNav(){
            this.axios.get('http://localhost:8080/js/data.json').then((res)=>{
                var res = res.data;
                if(res.msg === "ok"){
                    this.navIconList = res.navIconData
                }
            })
         }
  }
}
</script>

<style lang="stylus" scoped>
    .nav-icon
        width 100% 
        height 1.875rem
        margin-top .2rem
        ul
            box-sizing border-box
            padding-left .3rem
            display flex
            width 100%
            li
                flex 1
                text-align center
                img
                    display inline
                    width 1.025rem
                    height 1.025rem
                    margin-bottom .2rem
                .title-icon
                    display block
                    width 100%
                    text-align center
</style>
