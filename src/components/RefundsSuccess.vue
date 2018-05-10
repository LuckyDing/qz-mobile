<template>
  <div v-title="'提交成功 '">
    <div class="body">
      <img src="./../assets/images/success.jpg" />
      <h2>提交成功</h2>
      <p>客服将尽快处理您的申请，请耐心等待。我们会尽快提升产品服务，欢迎您再次选购我们的产品。</p>
      <flexbox>
        <flexbox-item>
          <div class="btn btn_disabled" @click="show = true">返回订单</div>
        </flexbox-item>
        <flexbox-item>
          <router-link :to="{ name: 'Refunds', params: {} }"><div class="btn btn_color">查看详情</div></router-link>
        </flexbox-item>
      </flexbox>
    </div>
    <p class="desc">
      *安全提醒：七智科技不会以任何理由要求您提供银行卡信息或支付额外费用，请谨防钓鱼链接或诈骗电话。
    </p>
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
    padding: 2em 0 1em 0;
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
    margin: 1em 2em;
    color:black;
}
.btn_disabled{
    color: #bdbdbd !important;
    border: 1px solid #bdbdbd !important;
}
.btn_color{
    color: #f23030 !important;
    border-color:#f23030 !important;
}
.desc{
  padding: 1em 24px;
  color:#888;
  font-size:0.875em;
}
</style>
