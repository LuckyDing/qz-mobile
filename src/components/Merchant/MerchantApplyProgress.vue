<template>
  <div class="body" v-title="'信息申请进度'">
    <p class="toptip">您的资料已经提交，请耐心等待工作人员审核结果</p>
    <div class="content">
        <div class="apply">
          <ul>
            <!--失败-->
            <li>
              <div class="item" color="red"><i class="iconfont icon-default_cirle"></i></div>
              <div class="item">
                <p class="status_desc">【商户开通失败】商户账号开通失败。原因：商户主动取消。</p>
                <p color="gray">
                  <span>2017-10-11 10:28</span>
                  <a href="javascript:;" class="btn_min">重新申请</a>
                </p>
              </div>
            </li>
            <!--成功-->
            <li>
              <div class="item" color="blue"><i class="iconfont icon-default_cirle"></i></div>
              <div class="item">
                <p class="status_desc">【信息审核成功】工作人员已与您联系，上门拜访。</p>
                <p color="gray">
                  <span>2017-10-11 10:28</span>
                </p>
              </div>
            </li>
            <!--失败-->
            <li>
              <div class="item" color="red"><i class="iconfont icon-default_cirle"></i></div>
              <div class="item">
                <p class="status_desc">【信息审核失败】您的信息审核失败。原因：电话无法接通。</p>
                <p color="gray">
                  <span>2017-10-11 10:28</span>
                  <a href="javascript:;" class="btn_min">重新申请</a>
                </p>
              </div>
            </li>
            <!--审核中-->
            <li>
              <div class="item" color="gray"><i class="iconfont icon-default_cirle"></i></div>
              <div class="item">
                <p class="status_desc">【商户信息提交】您的信息已提交，请等待工作人员审核信息。</p>
                <p color="gray">
                  <span>2017-10-11 10:28</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
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
li{
  list-style: none;
  display: flex;
}
li .item{
  padding: 0 0 2em 0;
  position: relative;
  text-align: justify;
}
ul li:last-child span {
  padding: 0 0 2em 0;
}
li .item:first-child{
  width: 10%;
  border-left: 1px solid #888;
  margin-left: 1em;
}
li:last-child .item:first-child{
  border-left: 0;
}
ul li:last-child span:first-child{
  border-left:0 solid #000;
}
li .item i{
  position: absolute;
  left: -13px;
  top:-7px;
}
li .item:last-child::after{
  content: '';
  position: absolute;
  bottom: 1em;
  border-bottom: 1px solid #eee;
  width: 100%;
}
li:last-child .item:after{
  display: none;
}
.content{
  padding: 16px;
  padding-bottom: 0;
  margin-top:0.5em;
  background-color: #fff;
}
[color=gray]{
  color:#888;
}
[color=blue]{
  color:#00b8ff;
}
[color=red]{
  color: red;
}
.iconfont::before{
  background: #fff;
}
.iconfont{
  font-size:24px;
}
.toptip{
  background-color: #8DD92E;
  color: #fff;
  padding: 1em 0.5em;
  text-align: center;
}
@media only screen and (max-width: 320px)  {
  body{
    font-size: 13px;
  }
}
.btn_min{
  color: #fff;
  background-color: #00b8ff;
  padding: 2px 1em;
  font-size: 12px;
  border-radius: 2px;
  float: right;
}
.status_desc{
  line-height: 1.5em;
}
</style>
