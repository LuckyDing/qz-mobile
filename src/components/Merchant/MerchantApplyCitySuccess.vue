<template>
  <div class="body" v-title="'客户申请合作'">
    <img class="image" src="./../../assets/images/city.png" />
    <p>该城市暂未开通商户代理服务开通后，我们将发消息通知您请您持续关注我们的公众号！</p>
    <flexbox>
      <flexbox-item>
        <div class="btn btn_disabled" @click="show = true">回主页</div>
      </flexbox-item>
      <flexbox-item>
        <div class="btn blue_btn" onclick="window.location.href='#'">去商城看看</div>
      </flexbox-item>
    </Flexbox>
    <x-dialog v-model="show" hide-on-blur dialog-transition="none" :dialog-style="{'max-width': '100%', width: '100%','background-color': 'transparent','top':0,'left':0,'transform': 'none'}">
      <div class="dialog">
        <img src="./../../assets/images/lm_shadow.png" alt="">
      </div>
    </x-dialog>
  </div>
</template>

<script>
import { XDialog, Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    XDialog,
    Flexbox,
    FlexboxItem
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
.dialog img{
  width: 60%
}
.image{
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
    padding: 1em 5em;
    text-align: justify;
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
</style>
