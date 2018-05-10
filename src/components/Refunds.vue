<template>
  <div class="body" v-title="'退款详情'">
    <div class="refunds_header">
      {{refundsInfo.desc}}
    </div>
    <div>
      <div v-show="refundsInfo.status === 3">
        <div class="item_header">
          <span>退款金额</span>
          <span class="float-right">￥{{refundsMoney}}</span>
        </div>
        <div class="item_money">
          <p>退回到原支付卡：￥{{refundsToCard}}</p>
          <p>退回到钱包：￥{{refundsToAccount}}</p>
        </div>
      </div>
      <div class="item_money" v-show="refundsInfo.status === 1">
        <p>订单号：{{refundsInfo.info.orderSn}}</p>
        <p>退款数量：{{refundsInfo.info.goodsNum}}</p>
        <p>退款金额：￥{{refundsInfo.info.money}}</p>
        <p>退款类型：{{refundsInfo.info.type}}</p>
        <p>退款原因：{{refundsInfo.info.case}}</p>
        <p>退款说明：{{refundsInfo.info.desc}}</p>
      </div>
      <group title="退款进度">
        <cell-box v-for="(item, index) in refundsStauts" :key="index" v-if="item.status <= refundsInfo.status">
          <div class="refunds_item">
            <p class="refunds_info" :class="{'step_now': item.status === refundsInfo.status}">{{item.desc}}</p>
            <p class="desc">{{item.time}}</p>
          </div>
        </cell-box>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, CellBox } from 'vux'
export default {
  components: {
    Group,
    CellBox
  },
  data () {
    return {
      refundsMoney: '1499.00',
      refundsToCard: '1099.00',
      refundsToAccount: '400.00',
      refundsInfo: {
        status: 3,
        desc: '审核成功，财务正在打款',
        info: {
          orderSn: '100493908423',
          goodsNum: 1,
          money: '1499',
          type: '还未发货要退款',
          case: '不喜欢不想要了',
          desc: '无'
        }
      },
      refundsStauts: [
        {
          desc: '退款成功，7个工作日内到账',
          status: 3,
          time: '2017.12.20 10:01'
        },
        {
          desc: '审核成功，财务正在打款',
          status: 2,
          time: '2017.12.20 9:01'
        },
        {
          desc: '客服已受理，审核中',
          status: 1,
          time: '2017.12.20 8:25'
        },
        {
          desc: '我发起了退款，等待客服受理',
          status: 0,
          time: '2017.12.20 8:00'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.refunds_header{
  padding: 2em;
  background-color: #008bff;
  text-align: center;
  color:#fff;
  font-size: 1.25em;
}
.refunds_item:not(:last-child)::after{
  content: '';
  position: absolute;
  bottom: 0;
  left:15px;
  border-bottom: 1px solid #eee;
}
.refunds_info{
  padding-bottom: 0.5em;
  color:#d0d0d0;
}
.step_now{
  color:#000 !important
}
.item_header{
  padding: 1em;
  background-color: #fff;
  position: relative;
  color:#008bff;
}
.item_header:after{
  content: '';
  position: absolute;
  bottom: 0;
  left:15px;
  border-bottom: 1px solid #eee;
  width: calc(100% - 15px)
}
.item_money{
  background-color: #fff;
  line-height: 2em;
  padding: 0.5em 1em;
}
div>>> .weui-cells{
  font-size: 1em;
}
</style>
