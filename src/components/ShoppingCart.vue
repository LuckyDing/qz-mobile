<template>
  <div class="body" v-title="'购物车'">
    <div class="goods_list">
      <div class="order_item" v-for="(item, index) in goods" :key='index' :value="item.value">
        <div class="order_goods">
          <div class="radio" :class="{'checker': item.selected == 1}"  @click="selected(item)"></div>
          <div class="order_goods_item goods_image ">
            <img :src="item.img" />
          </div>
          <div class="order_goods_item">
            <p class="order_goods_name">
              <span class="goods_name">{{item.name}}</span>
              <span class="goods_right"><i class="iconfont icon-close"></i></span>
            </p>
            <p class="order_goods_attr">
              <span class="goods_attr">{{item.attrs}}</span>
            </p>
            <div>
              <span color="red">￥{{item.price}}</span>
              <inline-x-number width="50px" v-model="item.num" :min="1" style="float:right"></inline-x-number>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="activity_desc">满99包邮，满1000减100</p>
    <div class="fixed">
      <div class="fixed_item selectAll" :class="{'selectedAll': selectedAllStatus === 1}" @click="selectedAll">全选</div>
      <div class="fixed_item">
        <span>合计：<b color="red">￥ {{amount}}</b></span>
      </div>
      <div class="fixed_item">
        <x-button mini action-type="button" @click.native="pay">去结算（{{goodsNum}}）</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Checker, CheckerItem, InlineXNumber, XButton } from 'vux'
export default {
  components: {
    Checker,
    CheckerItem,
    InlineXNumber,
    XButton
  },
  data () {
    return {
      amount: 0,
      goodsNum: 0,
      selectedAllStatus: 0,
      goodsSelected: [{}],
      goods: [
        {
          img: './../src/assets/images/logo_disable.jpg',
          name: 'z-code 超滤饮水机超滤饮水机超滤饮水机超滤饮水机超滤饮水机',
          attrs: '属性；属性2',
          price: '1499.9',
          num: 1,
          value: 1,
          selected: 0
        },
        {
          img: './../src/assets/images/logo_disable.jpg',
          name: 'z-cfdf 真空保鲜盒',
          attrs: '属性；属性2',
          price: '499',
          num: 1,
          value: 2,
          selected: 0
        }
      ]
    }
  },
  methods: {
    selected (item) {
      if (item.selected === 1) {
        item.selected = 0
        this.amount -= Number(item.price)
        this.goodsNum -= 1
      } else {
        item.selected = 1
        this.amount += Number(item.price)
        this.goodsNum += 1
      }
      if (this.goodsNum === this.goods.length) {
        this.selectedAllStatus = 1
      } else {
        this.selectedAllStatus = 0
      }
    },
    selectedAll () {
      var goodsArr = this.goods
      var itemSum = 0
      var itemNum = 0
      if (this.selectedAllStatus === 1) {
        this.selectedAllStatus = 0
        goodsArr.forEach(function (item, index) {
          item.selected = 0
          itemSum = 0
          itemNum = 0
        })
      } else {
        this.selectedAllStatus = 1
        goodsArr.forEach(function (item, index) {
          item.selected = 1
          itemSum += Number(item.price)
          itemNum += 1
        })
      }
      this.amount = itemSum
      this.goodsNum = itemNum
    },
    pay () {
      console.log(this.$store)
      this.$store.state.count ++
      // this.$store.state.selectedGoods = this.goods
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div >>> .vux-checker-item{
  display: block;
}
.order_info{
  margin-top: 1em;
  background-color: #fff;
}
.order_item{
  background-color: #fff;
  position: relative;
}
.order_goods{
  display: flex;
  align-items: start;
  padding: 1em;
  position: relative;
}
.order_item::after{
  content: '';
  position: absolute;
  bottom: 0;
  width: calc(100% - 1em);
  border-top: 1px solid #eee;
  left:1em;
}
body div.order_item:last-of-type::after{
  display: none;
}
.order_goods_item{
  flex: 1;
  margin-left: 1em
}
.goods_image{
  flex: initial;
  width: 1.6rem;
  height: 1.6rem;
  /* margin-left: 2em; */
}
.goods_image img{
  width: 100%
}
.order_goods_name{
  position: relative;
}
.order_goods_name .goods_name{
  margin-bottom: 5px;
  width: 88%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  height: 3em;
}
.order_goods_name .goods_right{
  position: absolute;
  right: 0;
  top: 0
}
.order_goods_attr{
  font-size: 12px;
  margin-bottom: 3px;
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
.radio{
  position: relative;
  height: 1.6rem;
  width: 1.5em;
}
.radio::before{
  content: '';
  background-image: url('./../assets/images/circle.png');
  width: 1.5em;
  height: 1.5em;
  background-size: 100%;
  background-repeat: no-repeat;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.checker::before{
  background-image: url('./../assets/images/circle_check.png') !important;
}
.activity_desc{
  border-top: 1px solid #eee;
  background-color: #fff;
  padding: 0.5em 1.25em;
  font-size: 0.875em;
  color:#888
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
.fixed_item:not(:first-child){
  flex: 1;
  text-align: right;
}
>>> button.weui-btn_mini{
  line-height:3;
  background-color: #f23030;
  color:#fff;
  padding: 0 2em;
}
.selectAll{
  position: relative;
  width: 1.5em;
  padding-left: 2em;
  width: 5em
}
.selectAll::before{
  content: '';
  background-image: url('./../assets/images/circle.png');
  width: 1.5em;
  height: 1.5em;
  background-size: 100%;
  background-repeat: no-repeat;
  display: block;
  position: absolute;
  left:0;
  top: 50%;
  transform: translate(0,-50%);
}
.selectedAll::before{
  background-image: url('./../assets/images/circle_check.png') !important;
}
</style>
