<template>
  <div id="app" class="content">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
const FastClick = require('fastclick')
FastClick.attach(document.body)
export default {
  name: 'app',
  mounted: function () {
    var deviceWidth = document.documentElement.clientWidth
    // if (deviceWidth > 750) deviceWidth = 750
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
</style>
