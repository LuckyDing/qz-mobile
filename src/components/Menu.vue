<template>
  <div class="body">
    <router-view style="margin-bottom:54px"></router-view>
    <tabbar style="position:fixed">
      <tabbar-item selected :link='{name: "Index"}'>
        <img slot="icon" src="./../assets/images/home.png">
        <img slot="icon-active" src="./../assets/images/home_hover.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="./../assets/images/gouwuche.png">
        <img slot="icon-active" src="./../assets/images/gouwuche_hover.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="./../assets/images/shouchang.png">
        <img slot="icon-active" src="./../assets/images/shouchang_hover.png">
        <span slot="label">收藏</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="./../assets/images/my.png">
        <img slot="icon-active" src="./../assets/images/my_hover.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      blue: 'blue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
