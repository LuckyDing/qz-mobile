<template>
  <div v-title="'搜索'">
    <div class="dy-search-bar" ref="dySearch">
      <form action="." class="dy-search-bar__form">
        <router-link :to="{ name: 'MerchantOrders'}"><i class="iconfont icon-left"></i></router-link>
        <div class="dy-search-bar__box">
          <input type="search" v-model="inputValue" placeholder="请输入订单号" id="search_input" class="dy-search-bar__input">
        </div>
      </form>
      <span class="dy-search-bar__btn" @click="search">搜索</span>
    </div>
    <div class="tab-content">
      <div class="order_item">
        <p class="order_item_header">
          <span>2017.11.29 11:22 </span>
          <span class="float-right">已支付</span>
        </p>
        <div class="order_goods">
          <div class="order_goods_item goods_image">
            <img src="./../../assets/images/logo_disable.jpg" />
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
        <p class="order_item_footer">
          <span>共1件商品 </span>
          <span>合计:￥ 1699 （含运费 ￥0元）</span>
          <span color="price_merchant">预计佣金 ￥10</span>
        </p>
      </div>
      <div class="order_none" v-show="showNone">
        没有您搜索的订单，请检查订单号是否正确。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DySearch',
  data () {
    return {
      inputValue: '',
      showNone: false
    }
  },
  methods: {
    search: function () {
      console.log(this.inputValue)
      this.showNone = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dy-search-bar {
      position: relative;
      padding: 8px 0.5em;
      display: flex;
      box-sizing: border-box;
      background-color: #EFEFF4;
  }
  .dy-search-bar__form {
    position: relative;
    flex: 1;
    flex: auto;
    background-color: #EFEFF4;
  }
  .dy-search-bar__box {
      position: relative;
      margin-left: 1.5em;
      padding-right: 1em;
      padding-left: 0.5em;
      height: 100%;
      box-sizing: border-box;
      z-index: 1;
      background-color: #fff;
      border-radius: 3px
  }
  .dy-search-bar__box .dy-search-bar__input {
    width: 100%;
    height: 28px;
    border: 0;
    font-size: 14px;
    line-height: 28px;
    box-sizing: content-box;
    background: transparent;
  }
  .dy-search-bar__btn{
    margin-left: 0.5em;
    background-color: #49556b;
    border-radius: 2px;
    text-align: center;
    padding: 8px;
    color: #fff;
    line-height: 12px;
    height: 12px;
    font-size: 14px
  }
  .icon-left{
    position: absolute;
    left: 0;
    top: 0;
    line-height: 28px;
    width: 1.5em;
  }
  .tab-content {
    /*background-color: #fff;*/
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
    font-weight: bolder;
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
  .order_item_header,.order_item_footer{
    font-size: 12px;
    padding: .2rem 0.5em;
  }
  .order_item_footer{
    text-align: right;
  }
  .order_none{
    text-align: center;
    padding: 2em 1em;
    background-color: #fff
  }
</style>
