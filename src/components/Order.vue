<template>
  <div class="body" v-title="'订单详情'">
    <div class="header">
      <div color="white">
        {{statusDesc}}
        <p class="font-14" v-show="orderStatus === 0">
          1小时后自动取消订单
        </p>
      </div>
      <div style="text-align:right">
        <img :src='statusImage' />
      </div>
    </div>
    <div class="dy_panel" v-show="orderStatus === 2 || orderStatus === 3">
      <div class="dy_panel_item">
        <img src="./../assets/images/wuliu.png" />
      </div>
      <div class="dy_panel_item">
          <p class="name font-16">
            <span>顺风速运</span>
            <span class="float-right">快递单号 1284182183</span>
          </p>
          <p color="gray" class="price font-14">
            <span v-if="orderStatus === 2">发货日期 </span>
            <span v-else>收货日期 </span>
            2017-11-28
            <span color="blue" class="underline float-right copy" data-clipboard-text="1284182183" @click="copySn">复制单号</span>
          </p>
      </div>
    </div>
    <div class="dy_panel">
      <div class="dy_panel_item">
        <img style="width:60%" src="./../assets/images/address.png" />
      </div>
      <div class="dy_panel_item">
          <p class="name font-16">
            <span>豆豆</span>
            <span class="float-right">18888888888</span>
          </p>
          <p color="gray" class="price font-14">100%正品，杜绝假货，让您无忧购物</p>
      </div>
    </div>
    <div class="order_item" style="margin-top:1em">
      <div class="order_goods">
        <div class="order_goods_item goods_image">
          <img src="./../assets/images/logo_disable.jpg" />
        </div>
        <div class="order_goods_item">
          <p class="order_goods_name">
            <span class="goods_name">z-code 超滤饮水机超滤饮水机超滤饮水机超滤饮水机超滤饮水机</span>
            <span class="goods_price">￥ 1699</span>
          </p>
          <p class="order_goods_attr">
            <span class="goods_attr">属性；属性2</span>
            <span class="goods_number">x1</span>
          </p>
        </div>
      </div>
    </div>
    <div class="order_details">
      <p><span>订单日期</span>2017-11-28 09:25</p>
      <p><span>订单编号</span>HSJF8888423842384</p>
      <p><span>送货时间</span>不限</p>
      <p><span>发票类型</span>不开发票</p>
    </div>
    <div class="fixed">
      <div class="fixed_item" style="text-align:right" v-show="orderStatus === 0">
        <span style="margin-right:1em">合计：<b color="red">￥ {{amount}}</b></span>
        <x-button mini action-type="button" :gradients="['#ff3000', '#ff3000']">去支付</x-button>
      </div>
      <div class="fixed_item" v-show="orderStatus === 1" style="text-align:right">
        <router-link :to="{ name: 'Refunds', params: {} }"><x-button mini action-type="button">申请退款</x-button></router-link>
      </div>
      <div class="fixed_item border-red" v-show="orderStatus === 2" style="text-align:right">
        <x-button mini action-type="button">确认收货</x-button>
      </div>
      <div class="fixed_item" v-show="orderStatus === 3">
        <router-link :to="{ name: 'AfterSaleApply', params: {} }"><x-button mini action-type="button">申请售后</x-button></router-link>
      </div>
      <div class="fixed_item border-red" v-show="orderStatus === 3">
        <x-button mini action-type="button">再次购买</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Flexbox, XButton } from 'vux'
import Clipboard from 'clipboard'
let clipboard = ''
export default {
  components: {
    Flexbox,
    XButton
  },
  data () {
    return {
      orderStatus: 3,
      statusDesc: '正在配货中',
      statusImage: './../src/assets/images/package.png',
      amount: 100
    }
  },
  created: function () {
    switch (this.orderStatus) {
      case 0:
        this.statusDesc = '等待付款'
        this.statusImage = './../src/assets/images/card_big.png'
        break
      case 1:
        this.statusDesc = '正在配货中'
        this.statusImage = './../src/assets/images/package.png'
        break
      case 2:
        this.statusDesc = '仓库已发货'
        this.statusImage = './../src/assets/images/shipping_big.png'
        break
      default:
        this.statusDesc = '已完成'
        this.statusImage = './../src/assets/images/bag_big.png'
        break
    }
  },
  methods: {
    copySn () {
      if (clipboard) {
        clipboard.destroy()
      }
      clipboard = new Clipboard('.copy')
      const vue = this
      clipboard.on('success', function (e) {
        vue.$vux.toast.show({
          text: '复制成功',
          type: 'success',
          position: 'middle'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background-image: url('./../assets/images/orderback.png');
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 1.5em 2em;
  min-height: 4em;
}
.header div{
  flex:1
}
.header img{
  width: 60px
}
.dy_panel{
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  background-color: #fff;
  position: relative;
}
.dy_panel_item{
  width: 2em;
  position: relative;
}
.dy_panel .dy_panel_item{
  flex: 1;
  padding: 0.1rem 0;
  margin-left: 1em
}
.dy_panel .dy_panel_item:first-child{
  flex: initial;
  margin-left: 0;
  text-align: center;
}
.dy_panel_item .name{
  margin-bottom: .25em;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.dy_panel_item img{
  width: 80%;
}
.order_info{
  margin-top: 1em;
  background-color: #fff;
}
.order_item{
  background-color: #fff;
}
.order_goods{
  display: flex;
  align-items: start;
  padding: 1em;
  /*margin-bottom: 0.5em;*/
  position: relative;
}
.dy_panel:not(:last-child)::after,.order_goods:not(:last-child)::after{
  content: '';
  position: absolute;
  bottom: 0;
  width: calc(100% - 1em);
  border-top: 1px solid #eee;
}
.order_item .order_goods:last-of-type{
  margin-bottom: 0
}
.order_goods_item{
  flex: 1;
  margin-left: 1em
}
.goods_image{
  flex: initial;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0
}
.goods_image img{
  width: 100%
}
.order_goods_name{
  position: relative;
}
.order_goods_name .goods_name{
  margin-bottom: .5em;
  width: 69%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 3em;
  line-height: 1.5em
}
.order_goods_name .goods_price{
  color:#f23030;
  position: absolute;
  right: 0;
  top: 0
}
.order_goods_attr{
  font-size: 12px;
  margin-top: .5em;
}
.order_goods_attr .goods_number{
  float: right;
  font-size:1.25em;
}
.order_goods_attr .goods_attr{
  color: #888
}
.order_goods_attr img{
  width: 1em;
  vertical-align: middle;
}
.order_details{
  background-color: #fff;
  padding:.5em 1em;
  margin-top: 1em;
  line-height: 1.5em
}
.order_details span{
  color:#888;
  margin-right: 0.5em;
}
.fixed{
  position: fixed;
  bottom:0;
  width: 7.5rem;
  /* height: 64px;
  line-height: 64px; */
  border-top: 1px solid #eee;
  background-color: #fff;
  padding: 1em;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.fixed_item{
  flex: 1;
}
.fixed_item:last-child{
  text-align: right;
}
>>> button.weui-btn_mini{
  line-height:3;
  padding: 0 2em;
}
.border-red >>> button.weui-btn_mini{
  color:red;
  border-color: red !important;
  background-color:#fff;
}
.border-red >>> .weui-btn:after{
    border-color: red
}
.border-red >>> .weui-btn:active {
    border-color: rgba(206, 60, 57, 0.6)!important;
    color: rgba(206, 60, 57, 0.6)!important;
    background-color: transparent;
  }
</style>
