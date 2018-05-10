<template>
  <div class="content" v-title="'提现成功'">
    <img src="./../../assets/images/success.jpg" />
    <h2 color="price_merchant">提现成功</h2>
    <p>提现金额已通过公众号发红包的形式发送到您微信号,查收红包请退回到公众号主页。</p>
    <Flexbox>
      <FlexboxItem>
        <div class="btn btn_disabled" style="width:7em;margin:0 auto" @click="withdraw">继续提现</div>
      </FlexboxItem>
      <FlexboxItem>
        <div class="btn" @click="goHome">返回公众号主页</div>
      </FlexboxItem>
    </Flexbox>
    <popup v-model="show" position='top'>
      <img src="./../../assets/images/lm_shadow.png" alt="">
    </popup>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Popup } from 'vux'

export default {
  name: 'WithdrawSuccess',
  components: {
    Flexbox,
    FlexboxItem,
    Popup
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    withdraw: function () {
      this.$router.back(-1)
    },
    goHome: function () {
      this.show = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    background-color: #fff;
    padding: 2em 0;
}
img{
    width:6em;
    margin:0 auto;
    padding-top: 2em;
    display: block;
}
h2{
    text-align: center;
    border-bottom: 1px solid #eee;
    margin:0  24px;
    padding: 16px 0;
}
p{
    padding: 1em 2.5em;
    text-align: justify;
    line-height: 1.5em;
    font-size: 14px
}
.weui-flex__item{
    text-align: center;
}
.btn{
    border-radius: 2px;
    height: 2.5em;
    line-height: 2.5em;
    text-align: center;
    border: 1px solid #000;
    margin: 1em;
    font-weight: bolder;
    color:black;
}
.btn_disabled{
    color: #bdbdbd !important;
    border: 1px solid #bdbdbd !important;
}
.vux-popup-dialog{
  background:rgba(0, 0, 0, 0)
}
.vux-popup-dialog img{
  width: 60%;
  margin: 0 auto;
}
</style>
