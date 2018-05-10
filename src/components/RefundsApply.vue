<template>
  <div class="body" v-title="'申请退款'">
    <dy-panel :src="'./../src/assets/images/logo_disable.jpg'" :title="'z-code 超滤饮水机超滤饮水机超滤饮水机超'"></dy-panel>
    <group>
      <p class="cell_title"><span color="red">*</span>退款数量</p>
      <x-number v-model="refundsNum" :min='1' align='left'></x-number>
      <p class="cell_title"><span color="red">*</span>退款金额（最多￥ 1499.00）</p>
      <x-input v-model="refundsMoney" readonly></x-input>
      <p class="cell_title"><span color="red">*</span>退款类型</p>
      <x-input v-model="refundsType" readonly></x-input>
      <p class="cell_title"><span color="red">*</span>退款类型</p>
      <popup-picker :data="refundsCauseList" v-model="refundsCause" value-text-align="left"></popup-picker>
      <p class="cell_title"><span color="red">&ensp;</span>退款说明</p>
      <x-textarea @on-change="autoFoucs" placeholder="请输入退款说明" v-model="refundsDesc" :rows="3"></x-textarea>
    </group>
    <div class="fixed-btn">
      提交申请
    </div>
  </div>
</template>

<script>
import DyPanel from './common/DyPanel'
import { XNumber, Group, XInput, PopupPicker, XTextarea } from 'vux'
export default {
  components: {
    DyPanel,
    Group,
    XNumber,
    XInput,
    PopupPicker,
    XTextarea
  },
  data () {
    return {
      refundsNum: 1,
      refundsMoney: 1499,
      refundsType: '还未发货,要退款',
      refundsCause: ['不喜欢不想要了'],
      refundsCauseList: [[
        '不喜欢不想要了',
        '七天无理由退款'
      ]],
      refundsDesc: ''
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
</style>
