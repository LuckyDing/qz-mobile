<template>
  <div v-title :data-title="title">
    <DySearch placeholder="请输入订单号" v-on:getValue='OnSearch'></DySearch>
    <tab v-show="pageType == 'all'" bar-active-color="#dabb84" active-color='#dabb84' custom-bar-width="4em" :line-width="2" prevent-default @on-before-index-change="switchTabItem">
      <tab-item :selected="index  === selectedIndex" v-for="(item, index) in tabList" :key="index">{{item}}</tab-item>
    </tab>
    <div class="tab-content">
      <router-link :to="{ name: 'MerchantOrderInfo', params: {'id':1} }">
        <div class="order_item">
          <p class="order_item_header">
            <span>2017.11.29 11:22 </span>
            <span class="float-right" color="indigo">已支付</span>
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
      </router-link>
      <router-link :to="{ name: 'MerchantOrderInfo', params: {'id':2} }">
        <div class="order_item">
          <p class="order_item_header">
            <span>2017.11.29 11:22 </span>
            <span class="float-right" color="indigo">已支付</span>
          </p>
          <div class="order_goods">
            <div class="order_goods_item goods_image">
              <img src="./../../assets/images/logo_disable.jpg" />
            </div>
            <div class="order_goods_item">
              <p class="order_goods_name">
                <span class="goods_name">z-code 超滤超滤饮水机超滤饮水机超水机超滤饮水机超滤饮水机超滤饮水机超滤饮水机</span>
                <span class="goods_price">￥ 1699</span>
              </p>
              <p class="order_goods_attr">
                <span class="goods_attr">属性；属性2</span>
                <span class="goods_number">x1</span>
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
      </router-link>
    </div>
  </div>
</template>

<script>
import DySearch from './../common/DySearch.vue'
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const tabList = () => ['全部', '已支付', '已发货', '已收货', '返佣成功']
export default {
  name: 'HelloWorld',
  components: {
    DySearch,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      tabList: tabList(),
      selectedIndex: 0,
      pageType: '',
      title: '全部订单'
    }
  },
  created: function () {
    this.pageType = this.$route.params.pageType
    switch (this.$route.params.pageType) {
      case 'afterSale': {
        this.title = '退款/退货订单'
        break
      }
      case 'success': {
        this.title = '返佣成功订单'
        break
      }
      default: {
        break
      }
    }
  },
  methods: {
    OnSearch: function (data) {
      console.log(data)
      this.$router.push('MerchantOrderSearch')
    },
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.selectedIndex = index
      }, 100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    /*font-size: 0.875em;*/
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
    font-size:1.25em;
  }
  .order_goods_attr .goods_attr{
    color: #888
  }
  .order_item_header,.order_item_footer{
    font-size: 13px;
    padding: .2rem 0.5em;
  }
  .order_item_footer{
    text-align: right;
  }
</style>
