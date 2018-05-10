<template>
  <div v-bodyColor="'white'" v-title="'商户中心'">
    <div id="apply" v-bind:style="styleObject" ref='content'>
      <img src="./../../assets/images/shop.jpg" />
      <p>您还不是我们商户</p>
      <router-link :to="{ name: 'MerchantArea', params: {} }"><div class="btn">客户合作申请</div></router-link>
    </div>
    <a class="my_link footer" href="#">有门店想多赚点？零库存享高额返！详情>></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      styleObject: {
        marginTop: '0px'
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      const height = (window.screen.availHeight - document.getElementById('apply').offsetHeight) / 4
      this.$refs.content.style.marginTop = height + 'px'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width:36%;
    margin:1em auto;
    display: block;
}
p{
    font-size: 18px;
    color: #eee;
    text-align: center;
    margin: 1em 0;
}
.btn{
    background-color: #00b7ee;
    color: #fff;
    border-radius: 5px;
    height: 44px;
    line-height: 44px;
    width: 36%;
    text-align: center;
    margin: 1em auto;
    margin-top: 20%;
}
.my_link{
    text-decoration: underline;
    color: #FF8C00;
    text-align: center;
    font-size: 0.875em;
    margin: 0 auto;
}
.footer{
    position: absolute;
    bottom:0;
    width: 100%;
    text-align: center;
    font-size: 0.875em;
    padding-bottom: 2em;
}
</style>
