<template>
  <div class="body" v-title="'选择城市'">
    <p>已开通商户代理的城市</p>
    <div class="city_list">
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦门</span></router-link>
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦门</span></router-link>
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦门</span></router-link>
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦门</span></router-link>
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦门</span></router-link>
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦门</span></router-link>
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦门</span></router-link>
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦门</span></router-link>
        <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span>厦厦门厦门厦门门</span></router-link>
    </div>
    <router-link :to="{ name: 'MerchantApplyDetail', params: {} }"><span class="more_city" href="applyCity.html">其他城市>></span></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'My Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
    padding:2em 1em 2em 2em;
    position: relative;
}
.city_list{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
}
.city_list a{
    box-sizing: border-box;
    border:1px solid #000;
    padding: 0.25em 0.5em;
    margin:1em 1em 1em 0em;
    width: calc((100% - 3em) /3);
    text-align: center;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.more_city{
    position: absolute;
    bottom: 0;
    right: 2em;
    font-size: 0.875em;
    color: #888;
    text-decoration: underline;
}
</style>
