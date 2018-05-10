<template>
  <div class="body" v-title="'商品'">
    <span class="top_btn top_left" @click="goBack"><i class="iconfont icon-left"></i></span>
    <swiper :aspect-ratio="300/300">
      <swiper-item v-for="(item, index) in swiperArr" :key="index">
        <img :src="item.img" style="width:100%">
      </swiper-item>
    </swiper>
    <div class="goods">
        <div class="good_header">
            <p class="goods_name">【真空保鲜系列】七智小神鲜真空保鲜玻璃罐</p>
            <p class="goods_price">￥<span class="price">{{price}}</span></p>
        </div>
        <div class="goods_attr dy_link" @click="showPop = true">请选择：属性 </div>
        <div class="goods_attr dy_link" @click="showPop1 = true">
            <span class="font12"><i class="iconfont icon-checked_circle"></i> 正品保障</span>
            <span class="font12"><i class="iconfont icon-checked_circle"></i> 售后无忧</span>
        </div>
    </div>
    <sticky ref="sticky" :check-sticky-support="false">
      <tab id="tab" custom-bar-width="4em" active-color="black" bar-active-color="#f23030">
        <tab-item @on-item-click="changeTab" selected>商品详情</tab-item>
        <tab-item @on-item-click="changeTab" >规则参数</tab-item>
        <tab-item @on-item-click="changeTab" >常见问题</tab-item>
      </tab>
    </sticky>
    <div id="tabContent" class="background-white" v-html="tabContent" :style="{ 'min-height': minHeight +'px' }">
      <!-- {{tabContent}} -->
      <br /><br /><br /><br /><br />
    </div>
    <div class="popup_btn_group" style="position: fixed;bottom: 0">
        <div class="popup_btn_item">
            <div class="icon_btn" onclick="window.location.href='#'">
                <p><i class="iconfont icon-kefu"></i></p>
                <p>客服</p>
            </div>
            <div class="icon_btn" onclick="window.location.href='#'">
                <p>
                    <i class="iconfont icon-cart" style="position: relative">
                        <span id="cart_badge" class="badge" v-show="showNum">{{goodsOfCart}}</span>
                    </i>
                </p>
                <p>购物车</p>
            </div>
        </div>
        <div class="popup_btn_item"  @click="showPop = true">加入购物车</div>
        <div class="popup_btn_item" @click="showPop = true">立即购买</div>
    </div>
    <!-- pop -->
    <popup v-model="showPop" position="bottom" max-height="86%" :hide-on-blur="false" @touchmove.prevent>
      <div class="background-white popContent">
        <div class="dy_panel">
          <div class="dy_panel_item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1532366137,877126934&fm=27&gp=0.jpg" />
          </div>
          <div class="dy_panel_item">
              <p class="name font-24 bloder" color="red">￥ {{price}}</p>
              <p class="price font-14">请选择：颜色，型号</p>
          </div>
          <i class="iconfont icon-close" @click="showPop = false"></i>
        </div>
        <div class="attr_list">
            <div class="attr_item" v-for='(item, index) in goodsAttr' :key="index">
                <p class="attr_title">{{item.attr_name}}</p>
                <checker radio-required v-model="attrValue[index]" default-item-class="attr_btn" selected-item-class="attr_btn_on" @on-change="onChange">
                    <checker-item v-for="(item1, index1) in item.attr_list" :key="index + index1" :value='item1.price'>{{item1.name}}</checker-item>
                </checker>
            </div>
        </div>
        <group>
          <x-number style="font-size:14px !important" title="购买数量" v-model="goodsNum" button-style="round" :min="1"></x-number>
        </group>
        <div class="popup_btn_group">
            <div style="width: 0"></div>
            <div class="popup_btn_item" @click="addToCart">加入购物车</div>
            <div class="popup_btn_item" @click="buy">立即购买</div>
        </div>
      </div>
    </popup>
    <popup v-model="showPop1" position="bottom" :popup-style='{ "background-color": "white" }' :hide-on-blur="true" @touchmove.prevent>
      <h4 class="pop_title">
        <span>服务说明</span>
        <i class="iconfont icon-close" @click="showPop1 = false" style="font-weight: bolder"></i>
      </h4>
      <div class="popContent" style="margin-bottom:36%">
        <div class="dy_panel" style="align-items:start">
          <i class="iconfont icon-zhengpin icon_label"></i>
          <div class="dy_panel_item">
              <p class="name font-16 bloder">正品保障</p>
              <p class="price font-14">100%正品，杜绝假货，让您无忧购物</p>
          </div>
        </div>
        <router-link :to="{ name: 'SaleInstructions'}">
          <div class="dy_panel" style="align-items:start">
            <i class="iconfont icon-icon- icon_label"></i>
            <div class="dy_panel_item dy_link">
                <p class="name font-16 bloder">售后无忧</p>
                <p class="price font-14">专业的客服团队，为您提供优质的售后服务。<br>请点击查看《退换货规则》详情</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="pop_btn">确定</div>
    </popup>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Tab, TabItem, Popup, Group, XNumber, Sticky, Checker, CheckerItem } from 'vux'
const attr = [
  {
    attr_name: '颜色',
    attr_list: [
      { name: '粉色', price: 1 },
      { name: '黄色', price: 2 },
      { name: '蓝色', price: 3 },
      { name: '青色', price: 4 },
      { name: '紫色', price: 5 },
      { name: '绿色', price: 6 },
      { name: '白色', price: 7 },
      { name: '黑色', price: 8 },
      { name: '红色', price: 9 }
    ]
  },
  {
    attr_name: '规格',
    attr_list: [
      { name: '100ml', price: 10 },
      { name: '200ml', price: 20 },
      { name: '300ml', price: 30 },
      { name: '400ml', price: 40 }
    ]
  }
]
export default {
  components: {
    Swiper,
    SwiperItem,
    Tab,
    TabItem,
    Popup,
    Group,
    XNumber,
    Sticky,
    Checker,
    CheckerItem
  },
  data () {
    return {
      swiperArr: [{
        url: 'javascript:',
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1532366137,877126934&fm=27&gp=0.jpg',
        title: '送你一朵fua'
      },
      {
        url: 'javascript:',
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2636960156,238677135&fm=27&gp=0.jpg',
        title: '送你一辆车'
      },
      {
        url: 'javascript:',
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=787762008,1585257302&fm=27&gp=0.jpg',
        title: '送你一次旅行'
      }],
      tabContent: '<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=787762008,1585257302&fm=27&gp=0.jpg" />商品详情',
      showPop: false,
      showPop1: false,
      showNum: false,
      goodsNum: 1,
      goodsOfCart: 0,
      price: 50,
      minHeight: window.screen.availHeight,
      goodsAttr: attr,
      attrValue: [1, 10]
    }
  },
  methods: {
    changeTab (index) {
      console.log(index)
      switch (index) {
        case 0:
          this.tabContent = '<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=787762008,1585257302&fm=27&gp=0.jpg" />商品详情'
          break
        case 1:
          this.tabContent = '规则参数'
          break
        case 2:
          this.tabContent = '常见问题'
          break
        default:
      }
    },
    onChange (value) {
      // console.log(value)
      var sum = 0
      this.attrValue.forEach(function (item, index) {
        if (!item) {
          item = 0
        }
        sum += item
      })
      this.price = 50 + sum
    },
    addToCart () {
      this.$vux.toast.show({
        text: '加入成功',
        type: 'success',
        time: 300
      })
      this.showPop = false
      this.showNum = true
      this.goodsOfCart += 1
    },
    goBack () {
      this.$router.back()
    },
    buy () {
      this.$router.push({ name: 'OrderPay' })
    }
  },
  mounted () {
    this.onChange()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pop_title{
  text-align: center;
  padding: 1em 0;
  border-bottom: 1px solid #eee;
  position:relative;
}
.icon_label{
  color: #f23030;
  font-size: 1.25em;
  padding-top:0.1rem
}
.isFixed{
  position: fixed;
  top:0
}
.goods{
  padding-bottom: 5px
}
.good_header{
    margin-top: 5px;
    background-color: #fff;
    padding: 0.5em 1em;
}
.goods_price{
    font-size: 1.5em;
    font-weight: bolder;
    color: #f23030;
}
.goods_attr{
    position: relative;
    padding: 0.5em 1em;
    background-color: #fff;
    margin-top: 5px;
}
.icon-checked_circle{
    color:#f23030
}
.dy_panel .dy_link::after{
  right: 0em;
}
.dy_link::after{
  right: 1em;
}
#tabContent{
  padding: 0.5em 1em 65px 1em;
}
.popContent{
  padding-bottom: 55px;
}
.attr_item{
    border-top: 1px solid #eee;
    padding: 0.5em 15px;
}
.attr_title{
    font-weight: bolder;
    font-size: 0.875em;
    padding-bottom: 5px;
}
.attr_btns{
    display: flex;
    flex-wrap: wrap;
}
.attr_btn{
    border-radius: 2px;
    border:1px solid #eee;
    margin: 0.5em 0.5em 0 0;
    padding: 0.25em 0.5em;
    display: block;
    font-size: 0.875em;
}
.attr_btn_on{
    color: #f23030;
    border:1px solid #f23030 !important;
}
.popup_btn_group{
    display: flex;
    flex: 1;
    width: 100%;
    margin-top: 1em;
    border-top: 1px solid #e6e6e6;
    position: fixed;
    bottom: 0;
}
.popup_btn_group .popup_btn_item{
    color: #fff;
    background-color: #ff7e00;
    height: 54px;
    line-height: 54px;
    width: 50%;
    text-align: center;
}
.popup_btn_group .popup_btn_item:first-child{
    background-color: #fff;
    color:#252525;
    font-size: 12px;
    display: flex;
    padding: 0 1em;
    /*border-top: 1px solid #e6e6e6;*/
}
.popup_btn_group .popup_btn_item:first-child div{
    flex: 1;
}
.popup_btn_group .popup_btn_item:last-child{
    background-color: #ff3000;
}
.popup_btn_item .icon_btn{
    line-height: 18px;
    margin-top: 9px;
    color: #686868;
    position: relative;
}
.icon-close{
    position: absolute;
    right: 0.5em;
    top: 0.5em;
    font-size: 1.5em;
}
.bloder{
    font-weight: bolder;
    font-size: 0.875em;
}
.goods_num{
    display: flex;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 0.5em 15px;
}
.goods_num div{
    width: 50%;
}
.goods_num div:last-child{
    text-align: right;
}
.weui-navbar+.weui-tab__bd{
    padding-top: 0;
}
.top_btn{
    width: 2em;
    height: 2em;
    line-height: 2em;
    text-align: center;
    border-radius: 50%;
    background-color:  rgba(0,0,0,.2);;
    position: absolute;
    top:1em;
    z-index: 2;
    color: #fff;
}
.top_left{
    left: 1em;
}
.top_right{
    right: 1em;
}
.pop_btn{
    width: 95%;
    margin: 0 auto;
    line-height: 44px;
    border-radius: 2px;
    background-color: #f23030;
    text-align:center;
    color: #fff;
    margin-bottom: 1em;
}
.badge{
    background-color: #FF0000;
    color:#fff;
    width: 1em;
    height: 1em;
    line-height: 1em;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    top: -0.5em;
    left: 1em;
    font-size: 12px;
}
.dy_panel{
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  background-color: #fff;
  position: relative;
}
.dy_panel_item{
  position: relative;
}
.dy_panel .dy_panel_item{
  flex: 1;
  padding: 0.1rem 0;
  margin-left: 1em
}
.dy_panel .dy_panel_item:first-child{
  flex: initial;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0
}
.dy_panel_item .name{
  margin-bottom: .25em;
  width: 80%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.dy_panel_item img{
  width: 100%;
}
>>> div.vux-checker-box{
  display: flex;
  flex-wrap: wrap;
}
</style>
