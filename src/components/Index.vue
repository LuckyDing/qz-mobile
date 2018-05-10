<template>
  <div class="body" v-title="'我的生活'">
    <div class="category">
      <swiper>
        <swiper-item  v-for="(item, index) in swiperArr" :key="index">
          <img :src="item.img" style="width:100%">
        </swiper-item>
      </swiper>
        <h3 class="cat_title"></h3>
        <div class="goods_list">
            <div class="goods_item" @click="goGoods(0)">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1422626168,3648040865&fm=27&gp=0.jpg">
                <p class="goods_name">核桃粉一年四级都可用呵呵呵呵呵哈哈哈</p>
                <span class="price">￥45</span>
                <span class="or_price">￥59</span>
            </div>
            <div class="goods_item">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1422626168,3648040865&fm=27&gp=0.jpg">
                <p class="goods_name">核桃粉一年四级都可用呵呵呵呵呵哈哈哈</p>
                <span class="price">￥45</span>
                <span class="or_price">￥59</span>
            </div>
            <a class="goods_item">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1422626168,3648040865&fm=27&gp=0.jpg">
                <p class="goods_name">核桃粉一年四级都可用呵呵呵呵呵哈哈哈</p>
                <span class="price">￥45</span>
                <span class="or_price">￥59</span>
            </a>
            <a class="goods_item">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1422626168,3648040865&fm=27&gp=0.jpg">
                <p class="goods_name">核桃粉一年四级都可用呵呵呵呵呵哈哈哈</p>
                <span class="price">￥45</span>
                <span class="or_price">￥59</span>
            </a>
            <a class="goods_item">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1422626168,3648040865&fm=27&gp=0.jpg">
                <p class="goods_name">核桃粉一年四级都可用呵呵呵呵呵哈哈哈</p>
                <span class="price">￥45</span>
                <span class="or_price">￥59</span>
            </a>
        </div>
        <div href="goods_list.html" class="more">查看更多 <i class="iconfont icon-more_circle"></i></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      swiperArr: [{
        url: 'javascript:',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵fua'
      },
      {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '送你一辆车'
      },
      {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/3.jpg',
        title: '送你一次旅行'
      }]
    }
  },
  methods: {
    goGoods () {
      this.$router.push({ name: 'Goods' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods_list{
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.5em;
}
.goods_item{
    width: calc((100% - 0.5em) / 2);
    margin-right: 0.5em;
    margin-bottom: 1em;
}
.goods_item img{
  position: relative;
  width: 100%;
}
.goods_item:nth-child(2n){
  margin-right: 0;
}
.goods_name{
    height: 3em;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: bolder;
}
.goods_desc{
    color: #a9a9a9;
    font-size: 0.75em;
    min-height: 2.5em;
}
.price{
    color: #f23030;
    font-weight: bolder;
    margin-right: 0.5em;
}
.or_price{
    text-decoration: line-through;
    color: #a9a9a9;
    font-size: 0.875em;
}
.cat_title{
    text-align: center;
    padding: 0.5em 0;
    font-weight: normal;
}
.category{
    background-color: #fff;
    padding-bottom: 1em;
}
.more{
    text-align: center;
    color:#f23030;
    display: block;
    width: 5.5em;
    margin: 0 auto;
}
</style>
