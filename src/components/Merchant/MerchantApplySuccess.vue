<template>
  <div class="body" v-title="'信息已提交 '">
    <img src="./../../assets/images/success.jpg" />
    <h2>提交成功</h2>
    <p>我们的工作人员会尽快完成您的资料审核并与您联系。感谢您的支持！</p>
    <flexbox>
      <flexbox-item>
        <div class="btn btn_disabled" @click="show = true">回主页</div>
      </flexbox-item>
      <flexbox-item>
        <router-link :to="{ name: 'MerchantApplyProgress', params: {} }"><div class="btn blue_btn">查看审核进度</div></router-link>
      </flexbox-item>
    </flexbox>
    <popup v-model="show" position='top'>
      <img src="./../../assets/images/lm_shadow.png" alt="">
    </popup>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Popup } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Popup
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
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
    color:#00b7ee;
    text-align: center;
    border-bottom: 1px solid #eee;
    margin:0  24px;
    padding: 16px 0;
}
p{
    padding: 1em 24px;
    /*font-weight: bolder;*/
}
.weui-flex{
    padding: 1em;
}
.weui-flex__item{
    text-align: center;
}
.btn{
    border-radius: 5px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 1px solid #000;
    margin: 1em;
    color:black;
}
.btn_disabled{
    color: #bdbdbd !important;
    border: 1px solid #bdbdbd !important;
}
.blue_btn{
    color: #00b8ff !important;
    border-color:#00b8ff !important;
}
.vux-popup-dialog{
  background:rgba(0, 0, 0, 0)
}
.vux-popup-dialog img{
  width: 60%;
  margin: 0 auto;
}
</style>
