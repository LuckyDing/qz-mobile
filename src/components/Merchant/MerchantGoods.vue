<template>
  <div v-title="'我的商品码'">
    <p class="desc">
      <span>共2种商品可售卖</span>
      <span class="more">我想卖其他的>></span>
    </p>
    <div class="dy_panel" v-for='item in goods' :key='item.id'>
      <div class="dy_panel_item">
          <img :src="item.imgurl" />
      </div>
      <div class="dy_panel_item">
          <p class="name">{{item.code}} {{item.name}}</p>
          <p class="price">{{item.price}}</p>
      </div>
      <div class="dy_panel_item" @click='showQrcode( item.code, item.name, item.price, item.imgurl, item.qrcodeURL)'>
        <img src="./../../assets/images/qrcode.png" />
      </div>
    </div>
    <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
      <div class="popupInfo">
        <div style="font-size:1.29em">打开微信扫一扫购买商品</div>
        <qrcode :value="popQrcodeURL" type="img" class="qrcode" ref='qrbox'></qrcode>
        <p>{{popCode}} {{popName}}</p>
        <p>{{popPrice}}</p>
      </div>
        <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>
    </x-dialog>
  </div>
</template>

<script>
import { XDialog, Qrcode } from 'vux'

export default {
  name: 'MerchantGoods',
  components: {
    XDialog,
    Qrcode
  },
  data () {
    return {
      showHideOnBlur: false,
      popCode: 'ZQHZ-1',
      popName: 'ZQHZ-1',
      popPrice: 'ZQHZ-1',
      popImgurl: './../src/assets/images/qz_qrcode.jpg',
      popQrcodeURL: '',
      goods: [
        {
          code: 'ZQHZ-1',
          name: '超滤饮水机',
          price: '￥1499~￥1699',
          imgurl: './../src/assets/images/logo_disable.jpg',
          qrcodeURL: 'https://www.baidu.com',
          id: '1'
        },
        {
          code: 'ZQHZ-2',
          name: '超滤饮水机超滤饮水机超滤饮水机超滤饮水机水机超滤饮水机',
          price: '￥1499~￥1699',
          imgurl: './../src/assets/images/logo_disable.jpg',
          qrcodeURL: 'https://www.google.com',
          id: '2'
        }
      ]
    }
  },
  methods: {
    showQrcode: function (code, name, price, imgurl, QrcodeURL) {
      this.showHideOnBlur = true
      this.popCode = code
      this.popName = name
      this.popPrice = price
      this.popImgurl = imgurl
      this.popQrcodeURL = QrcodeURL
      this.$refs.qrbox.$el.children[1].style.cssText = 'width:100%;height:100%'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dy_panel{
    display: flex;
    align-items: center;
    padding: 1em;
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
  .dy_panel .dy_panel_item:last-child{
    flex: initial;
    width: 0.6rem;
    height: 0.6rem;
  }
  .dy_panel_item .name{
    margin-bottom: .75em;
    width: 80%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .dy_panel::after{
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 1em);
    left: 1em;
    border-bottom: 1px solid #eee;
  }
  .dy_panel_item img{
    width: 100%;
  }
  .desc{
    padding: 1em;
    font-size: 14px;
  }
  .more{
    border-bottom: 1px solid #888;
    color: #888;
    float: right;
  }
  .vux-popup-dialog{
    background: rgba(0,0,0,0);
  }
  .popupInfo{
    text-align: left;
    padding: 1em 2em;
  }
  .popupInfo .qrcode{
    width: 100%;
    margin: 1em auto;
  }
  .popupInfo p{
    width: 90%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 0.5em;
    line-height: 1.5em;
  }
</style>
