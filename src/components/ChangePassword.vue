<template>
  <div class="body" v-title="'七智厨房-找回密码'">
    <div v-show="step1">
      <group style="margin-top:2em">
        <x-input placeholder="请输入手机号" mask="999 9999 9999" v-model="mobile" :max="13" is-type="tel"></x-input>
      </group>
      <div class="btn" @click="show = true">下一步</div>
      <confirm v-model="show" @on-confirm='sendMsg'>
          <p style="text-align:center;"><p>我们将向您的手机：</br>{{mobile}}</br>发送一条短信验证码</p></p>
      </confirm>
    </div>
    <!-- 步骤2 -->
    <div v-show="step2">
      <group class="weui-cells_form" style="margin-top:2em">
        <x-input placeholder="发送验证码" v-model="code" class="weui-cell_vcode" :show-clear="false">
          <div slot="right" v-show="isSend == true" class="my_vcode_btn btn_disabled">重新获取({{wait}})</div>
          <div slot="right" v-show="isSend == false" class="my_vcode_btn" @click='getCode'>获取验证码</div>
        </x-input>
      </group>
      <div class="btn" @click="nextStep">下一步</div>
    </div>
    <!-- 步骤3 -->
    <div v-show="step3">
      <group style="margin-top:2em">
        <x-input :type="inputType" ref='password' v-model="password1" placeholder="输入密码（至少6位数）" :show-clear="false">
          <div slot="label" style="padding-right:10px;display:block;" width="24" height="24">
              <i class="iconfont icon-suo"></i>
          </div>
          <div slot="right" width="24" height="24"  @click="seePassword('password')">
            <i class="iconfont" :class="{'blue': hidden==false, 'icon-biyan': hidden == true, 'icon-yan': hidden == false}"></i>
          </div>
        </x-input>
        <x-input :type="inputType2" ref='password' v-model="password2" placeholder="请输入密码" :show-clear="false">
          <div slot="label" style="padding-right:10px;display:block;" width="24" height="24">
              <i class="iconfont icon-suo"></i>
          </div>
          <div slot="right" width="24" height="24"  @click="seePassword('password2')">
            <i class="iconfont" :class="{'blue': hidden2==false, 'icon-biyan': hidden2 == true, 'icon-yan': hidden2 == false}"></i>
          </div>
        </x-input>
      </group>
      <p class="warning" v-show="warning">{{warningText}}</p>
      <div class="btn" @click="register">确定</div>
      <x-dialog v-model="showToast" class="dialog-demo">
       <div style="padding:0.5em 0;">
         <div style="padding:1em 0 1.5em 0;">密码修改成功</div>
         <div style="padding-top:0.5em;border-top:1px solid #d4d4d4" @click="login" color="blue">立即登录</div>
       </div>
     </x-dialog>
    </div>
  </div>
</template>

<script>
import { Group, XInput, Confirm, XDialog } from 'vux'
export default {
  components: {
    Group,
    XInput,
    Confirm,
    XDialog
  },
  data () {
    return {
      step1: true,
      step2: false,
      step3: false,
      show: false,
      isSend: false,
      mobile: '',
      wait: 60,
      inputType: 'password',
      inputType2: 'password',
      hidden: true,
      hidden2: true,
      warning: false,
      warningText: '',
      password1: '',
      password2: '',
      code: '',
      showToast: false
    }
  },
  methods: {
    getCode () {
      this.isSend = true
      this.wait --
      if (this.wait === 0) {
        this.wait = 60
        this.isSend = false
      } else {
        setTimeout(this.getCode, 1000)
      }
    },
    sendMsg: function () {
      console.log(111)
      this.step1 = false
      this.step2 = true
      this.getCode()
    },
    nextStep () {
      console.log(222)
      this.step1 = false
      this.step2 = false
      this.step3 = true
    },
    seePassword (type) {
      if (type === 'password') {
        if (this.inputType === 'password') {
          this.inputType = 'tel'
          this.hidden = false
        } else {
          this.inputType = 'password'
          this.hidden = true
        }
      } else {
        if (this.inputType2 === 'password') {
          this.inputType2 = 'tel'
          this.hidden2 = false
        } else {
          this.inputType2 = 'password'
          this.hidden2 = true
        }
      }
    },
    register () {
      console.log('注册成功')
      this.showToast = true
    },
    login () {
      this.$router.push({ name: 'Login' })
    }
  },
  watch: {
    password1 (val) {
      if (val.length < 6) {
        this.warning = true
        this.warningText = '密码少于6位'
      } else {
        this.warning = false
      }
    },
    password2 (val) {
      if (val !== this.password1) {
        this.warning = true
        this.warningText = '两次密码输入不一致 '
      } else {
        this.warning = false
      }
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
.my_vcode_btn{
    margin: 0 15px;
    border: 1px solid #00b8ff;
    border-radius: 2px;
    height: 2em;
    line-height: 2em;
    width: 6em;
    font-size: 0.875em;
    padding: 0 0.25em;
    text-align: center;
    color: #00b8ff;
    position: relative;
}
.my_vcode_btn::before{
  content: '';
  position: absolute;
  left:-1em;
  top:0;
  border-left: 1px solid #eee;
  height: 100%
}
.btn_disabled{
    color: #ccc !important;
    border: 1px solid #ccc !important;
}
.weui-cell_vcode{
    height: 3em;
    line-height: 3em;
}
.blue{
    color: #008bff !important;
}
.warning{
    padding: 1em;
    color: red;
    font-size: 0.875em;
}
</style>
