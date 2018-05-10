<template>
  <div class="body" v-title="'申请售后'">
    <dy-panel :src="'./../src/assets/images/logo_disable.jpg'" :title="'z-code 超滤饮水机超滤饮水机超滤饮水机超'"></dy-panel>
    <group>
      <p class="cell_title"><span color="red">*</span>售后数量</p>
      <x-number v-model="refundsNum" :min='1' align='left'></x-number>
      <p class="cell_title"><span color="red">*</span>售后类型</p>
      <checker radio-required v-model="refundsType" default-item-class="radio" selected-item-class="checker">
        <checker-item :value="item" v-for="(item, index) in refundsTypeList" :key="index">{{item.value}}</checker-item>
      </checker>
      <p class="cell_title"><span color="red">*</span>售后原因</p>
      <popup-picker :data="refundsCauseList" v-model="refundsCause" value-text-align="left"></popup-picker>
      <p class="cell_title"><span color="red">*</span>退款金额（最多￥ 1499.00）</p>
      <x-input v-model="refundsMoney" readonly></x-input>
      <p class="cell_title"><span color="red">&ensp;</span>退款说明（可不填）</p>
      <x-textarea @on-change="autoFoucs" placeholder="请输入退款说明" v-model="refundsDesc" :rows="1"></x-textarea>
    </group>
    <div class="weui-uploader">
      <p class="cell_title"><span color="red">&ensp;</span>上传图片</p>
      <div class="weui-uploader__bd background-white">
          <ul class="weui-uploader__files" id="uploaderFiles">
              <li class="weui-uploader__file" style="background-image:url(https://static.vux.li/uploader_bg.png)"></li>
              <li class="weui-uploader__file" style="background-image:url(https://static.vux.li/uploader_bg.png)"></li>
              <li class="weui-uploader__file" style="background-image:url(https://static.vux.li/uploader_bg.png)"></li>
              <li class="weui-uploader__file" style="background-image:url(https://static.vux.li/uploader_bg.png)"></li>
          </ul>
          <div class="weui-uploader__input-box">
              <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple />
          </div>
      </div>
    </div>
    <div class="fixed-btn">
      提交申请
    </div>
  </div>
</template>

<script>
import DyPanel from './common/DyPanel'
import { XNumber, Group, XInput, PopupPicker, XTextarea, Checker, CheckerItem } from 'vux'
export default {
  components: {
    DyPanel,
    Group,
    XNumber,
    XInput,
    PopupPicker,
    XTextarea,
    Checker,
    CheckerItem
  },
  data () {
    return {
      refundsNum: 1,
      refundsMoney: 1499,
      refundsDesc: '',
      refundsType: {
        key: '1',
        value: '退货'
      },
      refundsCause: ['不喜欢不想要了'],
      refundsCauseList: [[
        '不喜欢不想要了',
        '七天无理由退款'
      ]],
      refundsTypeList: [
        {
          key: '1',
          value: '退货'
        },
        {
          key: '2',
          value: '换货'
        }
      ]
    }
  },
  methods: {
    autoFoucs () {
      // alert(document.getElementsByTagName('textarea')[0])
      // document.getElementsByTagName('textarea').foucs()

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  margin-bottom:50%;
}
.order_goods:after{
  display: none;
}
div >>> div.weui-cell:before,.vux-cell-box:before{
  display: none;
}
div >>> .vux-cell-value{
  color:#000 !important;
}
.fixed-btn{
  width: 100%;
  line-height: 54px;
  text-align: center;
  color:#fff;
  background-color: #008bff;
  position: fixed;
  bottom:0;
}
.radio{
  position: relative;
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
  left: 0;
}
.checker::before{
  background-image: url('./../assets/images/circle_check.png') !important;
}
div >>> .vux-checker-item{
  padding-left: 2em;
  margin: 0.5em 1em;
}
.weui-uploader__bd {
    overflow: hidden;
    padding:1em;
}
.weui-uploader__file {
    float: left;
    margin-right: 9px;
    margin-bottom: 9px;
    width: 80px;
    height: 80px;
    background: no-repeat 50%;
    background-size: cover;
}
.weui-uploader__input-box {
    float: left;
    position: relative;
    margin-right: 9px;
    margin-bottom: 9px;
    width: 77px;
    height: 77px;
    border: 1px solid #d9d9d9;
}
.weui-uploader__input-box:after, .weui-uploader__input-box:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: #d9d9d9;
}
.weui-uploader__input-box:before {
    width: 2px;
    height: 39.5px;
}
.weui-uploader__input-box:after {
    width: 39.5px;
    height: 2px;
}
.weui-cells_form input, .weui-cells_form label[for], .weui-cells_form textarea {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.weui-uploader__input {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.weui-uploader__title {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.weui-uploader__info {
    color: #b2b2b2;
}
</style>
