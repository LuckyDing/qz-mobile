<template>
  <div class="content" v-title="'提现'">
      <Flexbox class="merchantMoney">
        <FlexboxItem class="spart">
          <p class="title">可提现</p>
          <p><span class="font-12">￥</span><span class="font-24" color="price_merchant">{{cash}}</span></p>
        </FlexboxItem>
        <FlexboxItem>
          <p class="title">不可提现</p>
          <p><span class="font-12">￥</span><span class="font-24" color="price_merchant">{{frozenCash}}</span></p>
        </FlexboxItem>
      </Flexbox>
      <p class="desc font-14">
        返佣金额需在客户订单完成支付之日起14天之后才可提现。期间的返佣金额不可提现或使用，如若订单产生退款退货，我们将主动扣除您在该订单的返佣金额。
      </p>
      <div id="user_action" class="background-white">
        <p>请输入提现金额，每次提现限额1~500元</p>
        <input class="my_input" value="" type="tel" v-model="withdrawMoney" placeholder="">
        <p class="desc font-14" style="padding:0">
            本公众号将以发送红包的方式将提现金额给您，请您在
            提现成功后退回公众号首页，接收红包信息。
        <p/>
       <div class="btn" @click="withdraw">确定</div>
      </div>
      <span class="font-14 withdraw_list">查看提现记录>></span>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      cash: '2500.00',
      frozenCash: '500.00',
      withdrawMoney: 0
    }
  },
  methods: {
    withdraw: function () {
      console.log(this.withdrawMoney)
      this.$router.push({name: 'WithdrawSuccess'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .merchantMoney{
    background-color: #49556b;
    padding: 1.5em 0;
    color: #fff;
    text-align: center;
    /*font-size: 12px;*/
  }
  .merchantMoney .title{
    padding-bottom: 1em
  }
  .vux-flexbox .vux-flexbox-item{
    position: relative;
  }
  .spart::after{
    height: 100%;
    top: 0;
    border-right: 1px solid #717c94
  }
  #user_action{
    padding: 1em;
    margin-top: 2em;
  }
  .desc{
    padding: 1em;
    color: #888;
    text-align: justify;
    line-height: 1.875em;
  }
  .my_input{
      -moz-appearance: none;
      -webkit-appearance: none;
      width: calc(100% - 20px);
      height:44px;
      font-size: 1.5em;
      background-color: #eee;
      border: 1px solid #aaa;
      padding: 0 10px;
      border-radius: 5px;
      margin: 0.5em 0;
  }
  .withDrawInfo{
      background-color: #fff;
      padding: 1em 1.5em;
  }
  .btn{
      background-color: #dabb84;
      color: #fff;
      border-radius: 5px;
      height: 44px;
      line-height: 44px;
      width: 100%;
      text-align: center;
      margin: 1em auto;
      margin-top: 2em;
  }
  .withdraw_list{
    margin: 1em auto;
    display: block;
    width: 7.5em;
    color: #49556b;
    border-bottom: 1px solid #49556b;
  }
</style>
