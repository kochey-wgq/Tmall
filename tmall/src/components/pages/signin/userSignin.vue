<template>
    <div class="user-signin">
        <header>淘宝账户登录</header>
        <section>
            <form action="#" method="post">
                <div class="user">
                    <label for="#">账户</label>
                    <input v-model="userVal" required style="border-bottom:.1px solid #ccc" :type="userType" name="user" placeholder="手机/邮箱/会员名">
                </div>
                <div class="pasw">
                    <label for="#">登录密码</label>
                    <input v-model="paswVal" title="请输入首3位字母和4位或7位数字" :pattern="patternPasw" required type="passwold" name="user-pswd" placeholder="请输入密码首3位字母和4位或7位数字">
                </div>
                <router-link tag="div" :to="to">
                    <input 
                      type="submit" 
                      value="登录" 
                      class="submit" 
                      @click="handleSuccess">
                </router-link>
                <br>
                <a href="javascript:;">短信校验码登录</a>
                <a href="javascript:;">免费注册</a>
            </form>
        </section>
    </div>
</template>

<script>
export default {
  name: "UserSignin",
  data () {
      return {
          userType:"email",
          patternPasw:"[A-z]{3}[0-9]{4,7}",
          userVal:"",
          paswVal:"",
          userIf:false,     //逆向思维设置双开关
          paswIf:false,
          to:"",
      }
  },
  methods: {
      handleSuccess(){
          return this.to = (this.userIf && this.paswIf) ? "/index/signin/user-target" : ""
      }
  },
  watch: {
      userVal(val){
          if(val.indexOf('@') == -1){   //模拟数据库检索字符
              this.userIf = false
          }else{
              this.userIf = true
          }
          console.log(val)
      },
      paswVal(val){
            console.log(val.length)
            return this.paswIf = (val.length == 7 || val.length == 10) ? true : false
      }
  }
}
</script>

<style lang="stylus" scoped>
    .user-signin
        width 100%
        height 100%
        background-color #F0F0F0
        color #555
        header 
            width 100%
            line-height .95rem
            text-align center
            font-size .38rem
            background-color #f7f7f7
            border-bottom .1px solid #ccc
        section
            margin-top .6rem
        .user,.pasw
            position relative
            width 100%
            height 1.125rem
            label
                position absolute
                top 0
                left 0
                width 1.5rem
                height 100%
                line-height 1.125rem
                margin-left .3rem
                font-size .35rem
            input
                display inline-block
                box-sizing border-box
                padding-left 2rem
                width 100%
                height inherit
            input::placeholder
                font-size .35rem
                color #ccc
                font-weight bold
        [type=submit]
            width 95%
            height 1rem
            line-height 1rem
            margin .2rem
            color #ccc
            background-color #ff0036
            font-size .5rem
            border-radius 5px
        a:nth-of-type(1)
            display inline-block
            margin .2rem
        a:nth-of-type(2)
            float right
            margin .2rem
        a
            color red
</style>
