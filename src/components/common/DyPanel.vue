<template v-if=" type === '1'">
  <div class="order_goods">
    <div class="order_goods_item goods_image">
      <img :src="src" />
    </div>
    <div class="order_goods_item">
      <p class="order_goods_name">
        <span class="goods_name">{{title}}</span>
        <span class="goods_price">{{price}}</span>
      </p>
      <p class="order_goods_attr">
        <span class="goods_attr">{{desc}}</span>
        <span class="goods_number">{{num}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dy-panel',
  props: {
    type: {
      type: String,
      default: '1'
    },
    src: {
      type: String,
      default: './../src/assets/images/logo_disable.jpg'
    },
    title: {
      type: String,
      default: '标题'
    },
    price: {
      type: String,
      default: '￥ 1699'
    },
    desc: {
      type: String,
      default: ''
    },
    num: {
      type: String,
      default: 'x 1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .order_goods{
    display: flex;
    align-items: start;
    padding: 1em;
    position: relative;
    background-color: #fff;
  }
  .order_goods::after{
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 1em);
    border-top: 1px solid #eee;
  }
  .order_goods:last-child::after{
    display: none;
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
    position: relative;
  }
  .order_goods_attr .goods_number{
    position: absolute;
    right: 0;
    font-size:1.25em;
    top:0
  }
  .order_goods_attr .goods_attr{
    color: #888;
    margin-right: 2em;
    display: block;
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
</style>
