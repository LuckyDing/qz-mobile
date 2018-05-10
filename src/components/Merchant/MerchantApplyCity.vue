<template>
  <div class="body" v-title="'选择城市'">
    <p class="desc">选择您所在的省份城市</p>
    <group label-width="5em">
     <selector title="省份" placeholder='请选择省份' direction="rtl" ref="pro" v-model="province" :value-map="['value','name']" :options="provinceList"></selector>
     <selector title="城市" placeholder="请选择城市"  direction="rtl" v-model="city" :value-map="['id','citysName']" :options="cityList"></selector>
    </group>
    <div class="btn" @click="submit">提交申请</div>
  </div>
</template>

<script>
import { Group, Selector } from 'vux'
export default {
  components: {
    Group,
    Selector
  },
  data () {
    return {
      province: '',
      city: '',
      cityList: [],
      provinceList: [{
        value: 'key11',
        name: '福建',
        citys: [
          {
            id: 'key11',
            citysName: '厦门'
          },
          {
            id: 'key12',
            citysName: '泉州'
          }
        ]
      }, {
        value: 'key02',
        name: '广东',
        citys: [
          {
            id: 'key21',
            citysName: '深圳'
          },
          {
            id: 'key22',
            citysName: '汕头'
          }
        ]
      }]
    }
  },
  watch: {
    province (val, oldval) {
      let obj = this.provinceList.filter((item) => {
        if (item.value === val) {
          return item
        }
      })
      this.cityList = obj[0].citys
    }
  },
  methods: {
    submit: function () {
      this.$router.push({'name': 'MerchantApplyCitySuccess'})
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
    width: 95%;
    text-align: center;
    margin: 1em auto;
    margin-top: 2em;
}
.desc{
    padding:1em;
    background-color: #eee;
    color: #888;
    font-size: 0.875em;
}
</style>
