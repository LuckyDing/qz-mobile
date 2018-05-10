<template>
  <div class="body" v-title="'确认订单'">
    <div class="user_address dy_link">
      <p class="user_name">
        <span style="margin-left: calc(1em + 4px)">姓名</span>
        <span>18610000000</span>
      </p>
      <p>
        <span><i class="iconfont icon-dingwei"></i></span>
        <span>福建省厦门市思明区11号</span>
      </p>
      <b class="location_border"></b>
    </div>
    <div class="order_info">
      <div class="order_item">
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
            <p class="order_goods_attr">
              <img src="./../assets/images/sevenok.png" />
              <span color="sevenok">支持7天无理由退货</span>
            </p>
          </div>
        </div>
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
            <p class="order_goods_attr">
              <img src="./../assets/images/sevenok.png" />
              <span color="sevenok">支持7天无理由退货</span>
            </p>
          </div>
        </div>
      </div>
      <div class="pay_type">
        <img src="./../assets/images/wxpay.png" />
        <span>微信支付</span>
        <x-icon class="float-right x-icon" type="ios-checkmark" size="30"></x-icon>
      </div>
      <group>
        <popup-picker title="配送方式" :data='deliveryList' v-model='delivery' show-name @on-change="onChange"></popup-picker>
        <popup-picker title="送货时间" :data='deliveryTime' v-model='time' show-name></popup-picker>
      </group>
    </div>
    <div class="fixed">
      <div class="fixed_item">
        <span>合计：<b color="red">￥ {{amount}}</b></span>
      </div>
      <div class="fixed_item">
        <x-button mini action-type="button" @click.native="pay">支付</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell, CellBox, PopupPicker, XButton } from 'vux'
export default {
  components: {
    Group,
    Cell,
    CellBox,
    PopupPicker,
    XButton
  },
  data () {
    return {
      deliveryList: [[
        {
          name: '快递运输',
          value: '1'
        },
        {
          name: '到店自取',
          value: '2'
        }
      ]],
      delivery: ['1'],
      deliveryTime: [[
        {
          name: '不限配送时间',
          value: '0'
        },
        {
          name: '工作日配送',
          value: '1'
        },
        {
          name: '周末配送',
          value: '2'
        }
      ]],
      time: ['0'],
      amount: 3588
    }
  },
  methods: {
    onChange () {
      console.log(this.delivery)
    },
    pay () {
      this.$router.push({ name: 'Order' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user_address{
  position: relative;
  background-color: #fff;
  padding: 1em
}
.user_name{
  font-weight: bolder;
  margin-bottom: 0.5em;
}
.dy_link::after{
  right: 1em;
}
.location_border{
    position: absolute;
    bottom: 1px;
    left: 0;
    height: 3px;
    width: 100%;
    background: url('./../assets/images/location-border.png') repeat-x;
    background-size: 80px 4px;
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
.order_goods::after{
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
.pay_type{
  padding: 1em;
}
.pay_type img{
  vertical-align: middle;
  margin-right: 1em;
}
.x-icon {
  fill: #008bff;
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
  background-color: #f23030;
  color:#fff;
  padding: 0 2em;
}
</style>
