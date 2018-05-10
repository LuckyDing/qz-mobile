<template>
  <div class="body" v-title="'七智厨房-登录'">
    <div class="header">
        <img src="./../assets/images/logo.png" />
    </div>
    <group>
      <x-input placeholder="请输入手机号" :max='11'>
        <div slot="label" style="padding-right:10px;display:block;" width="24" height="24">
            <i class="iconfont icon-touxiang"></i>
        </div>
      </x-input>
      <x-input :type="inputType" ref='password' placeholder="请输入密码" :show-clear="false">
        <div slot="label" style="padding-right:10px;display:block;" width="24" height="24">
            <i class="iconfont icon-suo"></i>
        </div>
        <div slot="right" width="24" height="24"  @click="seePassword">
          <i class="iconfont" :class="{'blue': hidden==false, 'icon-biyan': hidden == true, 'icon-yan': hidden == false}"></i>
        </div>
      </x-input>
    </group>

    <div class="btn" @click="login">登录</div>
    <div class="actions">
        <router-link :to="{ name: 'ChangePassword'}"><span>忘记密码?</span></router-link>
        <router-link :to="{ name: 'Register'}"><span>快速注册</span></router-link>
    </div>
  </div>
</template>

<script>
import { Group, XInput } from 'vux'
export default {
  components: {
    Group,
    XInput
  },
  data () {
    return {
      hidden: true,
      inputType: 'password'
    }
  },
  methods: {
    seePassword: function () {
      if (this.inputType === 'password') {
        this.inputType = 'tel'
        this.hidden = false
      } else {
        this.inputType = 'password'
        this.hidden = true
      }
    },
    login () {
      this.$router.push({ name: 'MerchantCenter' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
    background-color: #00b7ee;
    color: #fff;
    border-radius: 5px;
    height: 44px;
    line-height: 44px;
    width: 90%;
    text-align: center;
    margin: 1em auto;
    margin-top: 2em;
}
.header img{
    width: 25%;
    padding: 2em 0;
    display: block;
    margin: 0 auto;
}
.weui-label{
    width: auto;
}
.iconfont{
    color: #a9a9a9;
    font-size: 1.5em;
    margin-right: 0.5em;
}
.password_icon{
    position: absolute;
    right: 5px;
}
.blue{
    color: #008bff !important;
}
.actions{
    margin: 0 auto;
    color: #a9a9a9;
    width: 90%;
}
.actions a{
    display: inline-block;
    color: #a9a9a9;;
}
.actions a:last-child{
    float: right;
}
</style>
