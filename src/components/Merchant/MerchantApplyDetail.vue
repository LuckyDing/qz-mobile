<template>
  <div class="body" v-title="'商户信息提交'">
    <group label-width="5em">
     <selector title="行政区" v-model="area" :value-map="['idValue', 'idLabel']" :options="valueMapList"></selector>
     <x-input title="门店名称" v-model="name" placeholder="请输入店名" novalidate  :show-clear="false"></x-input>
     <x-textarea title="门店地址" v-model="address" placeholder="请输入详细地址" autosize :rows="1"></x-textarea>
     <x-input title="联系人" v-model="linkman" placeholder="请输入姓名" novalidate  :show-clear="false"></x-input>
     <x-input title="联系电话" mask="999 9999 9999" placeholder="请输入手机号" v-model="mobile" :max="13" is-type="china-mobile"></x-input>
   </group>
   <router-link :to="{ name: 'MerchantApplySuccess', params: {} }"><div class="btn">提交申请</div></router-link>
  </div>
</template>

<script>
import { Group, Selector, XInput, XTextarea } from 'vux'

export default {
  components: {
    Group,
    Selector,
    XInput,
    XTextarea
  },
  data () {
    return {
      area: '01',
      name: '',
      address: '',
      mobile: '',
      linkman: '',
      valueMapList: [{
        idValue: '01',
        idLabel: '思明区',
        otherProp: 'prop01'
      }, {
        idValue: '02',
        idLabel: '湖里区',
        otherProp: 'prop02'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
    background-color: #00b7ee;
    color: #fff;
    border-radius: 5px;
    height: 44px;
    line-height: 44px;
    width: calc( 100% - 3em);
    text-align: center;
    margin: 1em auto;
    margin-top: 2em;
}
</style>
