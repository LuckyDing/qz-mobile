<template>
  <div class="body" v-title="'订单详情'">
    <div class="shipping_status">
      <flexbox align="center" justify="center" v-if="isAfterSale==false">
        <flexbox-item v-for="(item, index) in statusLable" :key="index">
          <div class="img_box" v-bind:class="{'chain':index >= status && index != 3,'chain_on':index < status && index != 3}">
            <img :src="item.base" v-if="index >= status"/>
            <img :src="item.on" v-if="index < status"/>
          </div>
          <p v-bind:class="{'price_merchant':index < status}">{{item.label}}</p>
        </flexbox-item>
      </flexbox>
      <p class="after_sale_desc" v-else>
        商品产生售后行为(退款/退货)，佣金发放失败！
      </p>
    </div>
    <p class="title">商品详情</p>
    <div class="tab-content">
      <div class="order_item">
        <p class="order_item_header"></p>
        <div class="order_goods">
          <div class="order_goods_item goods_image">
            <img src="./../../assets/images/logo_disable.jpg" />
          </div>
          <div class="order_goods_item">
            <p class="order_goods_name">
              <span class="goods_name">z-code 超滤饮水机超滤饮水机超滤饮水机超滤饮水机超滤饮水机</span>
              <span class="goods_price">1699元</span>
            </p>
            <p class="order_goods_attr">
              <span class="goods_attr">属性；属性2</span>
              <span class="goods_number font-16">x1</span>
            </p>
          </div>
        </div>
        <div class="order_goods">
          <div class="order_goods_item goods_image">
            <img src="./../../assets/images/logo_disable.jpg" />
          </div>
          <div class="order_goods_item">
            <p class="order_goods_name">
              <span class="goods_name">z-code 超滤饮水机超滤饮水机超滤饮水机超滤饮水机超滤饮水机</span>
              <span class="goods_price">1699元</span>
            </p>
            <p class="order_goods_attr">
              <span class="goods_attr">属性；属性2</span>
              <span class="goods_number font-16">x1</span>
            </p>
          </div>
        </div>
        <p class="order_item_footer">
          <span>共1件商品 </span>
          <span>合计:￥ 1699 （含运费 ￥0元）</span>
          <span color="price_merchant">预计佣金 ￥10</span>
        </p>
      </div>
    </div>
    <div v-show="isAfterSale==true">
      <p class="title">售后详情</p>
      <div class="order_details">
        <p><span>售后类型:</span>仅退款</p>
        <p><span>售后时间:</span>2017.11.28 09:20</p>
        <p><span>售后状态:</span>已退款</p>
      </div>
    </div>
    <p class="title">订单详情</p>
    <div class="order_details">
      <p><span>订单编号:</span>HSJF8888423842384</p>
      <p><span>创建时间:</span>2017.11.28 09:20</p>
      <p><span>成交时间:</span>2017.11.28 09:25</p>
    </div>
    <div class="footer" v-if="isAfterSale==false">
      <x-button mini style="color:#888">取消订单</x-button>
      <x-button mini @click.native="showDialog = true" action-type="button">查看发货信息</x-button>
    </div>
    <x-dialog v-model="showDialog" class="showQrcode" :dialog-style="{'text-align': 'left', 'padding': '1em 0 3em 0'}" hide-on-blur>
        <p>请顾客扫描二维码关注七智厨房公众号</p>
        <p>回复“ 发货信息 ”</p>
        <div class="img-box">
          <img src="./../../assets//images/qz_qrcode.jpg" style="max-width:100%;display:block;margin:0 auto">
        </div>
        <!-- <div @click="showDialog=false">
          <span class="vux-close"></span>
        </div> -->
      </x-dialog>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XButton, XDialog } from 'vux'
const statusLable = () => [
  {
    base: './../src/assets/images/card.png',
    on: './../src/assets/images/card_on.png',
    label: '已支付'
  },
  {
    base: './../src/assets/images/shipping_car.png',
    on: './../src/assets/images/shipping_car_on.png',
    label: '已发货'
  },
  {
    base: './../src/assets/images/bag.png',
    on: './../src/assets/images/bag_on.png',
    label: '已收货'
  },
  {
    base: './../src/assets/images/coin.png',
    on: './../src/assets/images/coin_on.png',
    label: '返佣成功'
  }
]
export default {
  components: {
    Flexbox,
    FlexboxItem,
    XButton,
    XDialog
  },
  data () {
    return {
      statusLable: statusLable(),
      status: 4,
      showDialog: false,
      isAfterSale: false
    }
  },
  methods: {

  },
  filter: {
    filterLable: function (value, index) {
      // 返回处理后的值
      if (value <= index) {
        return true
      }
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body{
    padding-bottom: 54px;
  }
  .title{
    padding: 0.5em 1em;
    color: #888
  }
  .shipping_status{
    font-size: 12px;
    padding:2em 1em;
    background-color: #49556b;
    color:#fff
  }
  .shipping_status .vux-flexbox{
    text-align: center;
  }
  .vux-flexbox-item{
    position: relative;
  }
  .shipping_status .img_box{
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1em;
    position: relative;
  }
  .shipping_status .img_box img{
    width: 2em;
  }
  .chain::after{
    content: '';
    position: absolute;
    right: -25%;
    border-bottom: 1px solid #FFF;
    width: 3em;
    top: 50%;
  }
  .chain_on::after{
    content: '';
    position: absolute;
    right: -25%;
    width: 3em;
    border-bottom: 1px solid #dabb84;
    top: 50%;
  }
  .price_merchant{
    color:#dabb84 !important
  }
  .order_item{
    margin-bottom: 0.5em;
    background-color: #fff;
  }
  .order_goods{
    display: flex;
    align-items: center;
    padding: 0.5em;
    background-color: #f7f7f7;
    margin-bottom: 0.5em;
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
    /*font-weight: bolder;*/
  }
  .order_goods_name .goods_name{
    margin-bottom: .75em;
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
    position: absolute;
    right: 0;
    top: 0
  }
  .order_goods_attr{
    font-size: 12px;
  }
  .order_goods_attr .goods_number{
    float: right;
  }
  .order_goods_attr .goods_attr{
    color: #888
  }
  .order_item_footer{
    font-size: 13px;
    padding: .2rem 0.5em;
  }
  .order_item_header{
    height: 0.5em
  }
  .order_item_footer{
    text-align: right;
  }
  .order_details{
    background-color: #fff;
    padding:.5em 1em;
  }
  .order_details p{
    line-height: 2em
  }
  .order_details p span{
    margin-right: 1em
  }
  .footer{
    background-color: #fff;
    height: 64px;
    line-height: 64px;
    text-align: right;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 1em;
    box-sizing: border-box;
  }
  .showQrcode p{
    padding:0.5em 1em
  }
  .after_sale_desc{
    padding: 1em;
    font-size: 1.25em;
    text-align: center;
  }
  >>> button.weui-btn_mini{
    line-height:3
  }
  >>> .weui-dialog{
    width: 76%;
    max-width: 80%;
  }
</style>
