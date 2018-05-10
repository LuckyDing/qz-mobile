<template>
  <div>
    <div class="dy-search-bar" ref="dySearch">
      <form action="." class="dy-search-bar__form">
        <div class="dy-search-bar__box">
          <i class="iconfont icon-search"></i>
          <input type="search" v-model="inputValue" :placeholder="placeholder" id="search_input" class="dy-search-bar__input">
        </div>
      </form>
      <span class="dy-search-bar__btn" @click="search">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DySearch',
  data () {
    return {
      inputValue: ''
    }
  },
  props: {
    placeholder: {
      default: '请输入'
    }
  },
  methods: {
    search: function () {
      this.$emit('getValue', this.inputValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dy-search-bar {
      position: relative;
      padding: 8px 0.5em;
      display: flex;
      box-sizing: border-box;
      background-color: #EFEFF4;
  }
  .dy-search-bar__form {
    position: relative;
    flex: 1;
    flex: auto;
    background-color: #EFEFF4;
  }
  .dy-search-bar__box {
      position: relative;
      padding-left: 30px;
      padding-right: 1em;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      z-index: 1;
      background-color: #fff;
      border-radius: 3px
  }
  .dy-search-bar__box .dy-search-bar__input {
    width: 100%;
    height: 28px;
    border: 0;
    font-size: 14px;
    line-height: 28px;
    box-sizing: content-box;
    background: transparent;
  }
  .dy-search-bar__btn{
    margin-left: 0.5em;
    background-color: rgb(155,155,155);
    border-radius: 2px;
    text-align: center;
    padding: 8px;
    color: #fff;
    line-height: 12px;
    height: 12px;
    font-size: 14px
  }
  .icon-search{
    position: absolute;
    left: 10px;
    top: 0;
    line-height: 28px;
  }
</style>
