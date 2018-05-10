<template>
  <div v-title="'商户中心'">
    <!-- 基本资料 -->
    <div class="dy_panel">
      <div class="dy_panel_item cicle">
          <img :src='src' />
      </div>
      <div class="dy_panel_item dy_link">
          <p class="name">{{name}}</p>
          <p class="desc">
            <span class="font-12 rank-lable">{{rank}}</span>
            <span class="font-12 underline" color="gray">查看特权</span>
          </p>
      </div>
    </div>
    <!-- 账户 -->
    <div class="merchantMoney">
      <flexbox class="balance_center">
        <flexbox-item>
          <p>账户余额</p>
          <p class="balance">
            <span>￥</span><span class="font-36 price">3000.00</span>
            <router-link :to="{ name: 'Withdraw'}"><span class="btn-circle">提现</span></router-link>
          </p>
        </flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item class="font-16 spart" style="position:relative">
          <p>本月返佣</p>
          <p class="balance"><span>￥</span><span class="font-24 price">500.00</span></p>
          <p class="font-14 desc">
            总计：1000.00
          </p>
        </flexbox-item>
        <flexbox-item class="font-16" style="padding-left:2em">
          <p>本月销售</p>
          <p class="balance"><span>￥</span><span class="font-24 price">5000.00</span></p>
          <p class="font-14 desc">
            总计：10000.00
          </p>
        </flexbox-item>
      </flexbox>
    </div>
    <!-- 商品 -->
    <router-link :to="{ name: 'MerchantGoods'}">
      <div class="dy_panel" id="my_goods">
        <div class="dy_panel_item">
            <img src='./../../assets/images/my_goods.png'/>
        </div>
        <div class="dy_panel_item">
            <p class="name font-18" color="black">我的商品码</p>
            <p class="font-12" style="color:#dabb84">
              打开商品码 > 用户扫描下单 > 拿到佣金
            </p>
        </div>
      </div>
    </router-link>
    <!-- 订单管理 -->
    <div id="order_management" class="background-white">
      <p class="title">订单管理</p>
      <grid>
        <grid-item :link="{ name: 'MerchantOrders', params: { pageType: 'all'}}">
          <img slot="icon" src="./../../assets/images/order_list.png">
          <span slot="label">全部订单</span>
        </grid-item>
        <grid-item :link="{ name: 'MerchantOrders', params: { pageType: 'afterSale'}}">
          <img slot="icon" src="./../../assets/images/after_sale.png">
          <span slot="label">退款/退货</span>
        </grid-item>
        <grid-item :link="{ name: 'MerchantOrders', params: { pageType: 'success'}}" >
          <img slot="icon" src="./../../assets/images/price_list.png">
          <span slot="label">返佣成功</span>
        </grid-item>
      </grid>
    </div>
    <!-- 七智产品库 -->
    <div id="goods_management" class="background-white">
      <p class="title">七智产品库</p>
      <grid>
        <grid-item link="/component/cell" >
          <img slot="icon" src="./../../assets/images/fire.png">
          <span slot="label">每月爆款</span>
        </grid-item>
        <grid-item :link="{ path: '/component/cell'}">
          <img slot="icon" src="./../../assets/images/promotion.png">
          <span slot="label">限时促销</span>
        </grid-item>
        <grid-item link="/component/cell" >
          <img slot="icon" src="./../../assets/images/price_list_big.png">
          <span slot="label">高返佣</span>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Grid, GridItem } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem
  },
  data () {
    return {
      name: '商户名称',
      src: './../src/assets/images/default_headimg.png',
      rank: '普通商家'
    }
  },
  mounted: function () {

  }
}
</script>
<style scoped>
  .dy_panel{
    display: flex;
    align-items: stretch;
    padding: 1em;
    background-color: #fff
  }
  .dy_panel_item{
    position: relative;
  }
  .dy_panel .dy_panel_item:last-child{
    flex: 1;
    padding: 0.1rem 0;
    margin-left: 1em
  }
  .dy_panel .dy_panel_item:first-child{
    width: 1.25rem;
    height: 1.25rem;
  }
  .dy_panel_item .name{
    font-weight: bolder;
    padding-bottom: 1em;
  }
  .dy_panel_item img{
    width: 100%;
  }
  .rank-lable{
    background-color: #49556b;
    color: #fff;
    border-radius: 10px;
    padding: 0.25em 1em;
    margin-right: 0.5em
  }
  .merchantMoney{
    background-color: #49556b;
    padding: 1em;
    color: #fff;
  }
  .price{
    color: #dabb84
  }
  .balance_center{
    border-bottom: 1px solid #717c94
  }
  .balance{
    padding: 0.5em 0
  }
  .spart::after{
    border-right: 1px solid #717c94
  }
  .merchantMoney .desc{
    color:#d9d9d9;
  }
  #my_goods{
    border: 2px solid #dabb84;
    padding:1em;
    margin: 0.5em;
    align-items: center;
  }
  #my_goods .dy_panel_item:first-child{
    width: 1rem;
    height: 1rem;
  }
  #my_goods .dy_panel_item .name{
    padding-bottom: 0.5em;
  }
  #order_management{
    padding: 1em 1em 0 1em;
  }
 .title{
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5em;
    color:#999;
  }
  .weui-grids:before,.weui-grid:after,.weui-grids:after,.weui-grid:before{
    display: none;
  }
  #goods_management{
    padding: 1em 1em 0 1em;
    margin-top: 0.5em;
  }
  .btn-circle{
    border-radius: 20px;
    border: 1px solid #dabb84;
    background-color: #49556b;
    color: #dabb84;
    padding: 0.4em 1.3em;
    font-size: 12px;
    float: right;
  }
</style>
