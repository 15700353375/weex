<!--
* @DateTime:    2020-07-26
* @Description: 登录页
-->
<template>
<div class="login">
  <div class="title">
    <text class="title-text">用户登录</text>
  </div>

  <div class="form-item">
    <text class="item-label">门店ID：</text>
    <input class="login-phone" type="number" placeholder="请输入门店ID" maxlength="11" :value="shopId" @input="inputPhone" ref="shopId">
  </div>
  <div class="form-item">
    <text class="item-label">安全码：</text>
    <input class="login-phone" type="number" placeholder="请输入安全码" maxlength="11" :value="shopCode" @input="inputCode" ref="code">
  </div>
  <div class="tips">
    <text class="tips-text">*以上信息在收银电脑P1.门店信息查询</text>
  </div>
 <div class="btn-box">
   <text class="btn" @click="goPage">立即登录</text>
 </div>
</div>
</template>

<script>
var navigator = weex.requireModule('navigator')
let utils = require('./appUtils')
export default {
  data () {
    return {
      shopId: '',
      shopCode: ''
    }
  },
  created () {
  },
  mounted () {
    // 自动获取焦点
    this.focus()
  },
  methods: {
    focus () {
      this.$refs.shopId.focus()
    },
    // keyboard (e) {
    //   this.count++
    // },
    inputPhone (event) {
      this.phone = event.value
    },
    inputCode (event) {
      this.shopCode = event.value
    },

    goPage () {
      console.log('登录了')
      navigator.push({
        url: utils.getUrl('index'),
        // url: this.urls,
        animated: 'true'
      }, event => {
        console.log('callback: ', event)
      })
    }
  }
}

</script>
<style>
.login{
  width: 750px;
  height: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title{
  height: 300px;
  justify-content: center;
  align-items: center;
}
.title-text{
  color: #333;
  font-size: 50px;
}

.form-item{
  height: 100px;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  /* background-color: pink; */
}
.item-label{
  display: inline-block;
  width: 150px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 36px;
  justify-content: center;
  align-items: center;
  color: #333;
}

.login-phone{
  margin-top:10px;
  width: 500px;
  height: 80px;
  background-color: #f1f1f1;
  border-width: 2px;
  border-color: #aaa;
  border-style: solid;
  font-size: 30px;
  border-radius: 10px;
  padding: 6px;
}

.tips-text{
  color: #FFAB3C;
}
.btn-box{
  text-align: center;
  justify-content:center;
  flex-direction: row;
  margin-top: 40px;
}
.btn{
  width: 650px;
  height: 90px;
  background-color: #409eff;
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  line-height: 90px;
  border-radius: 10px;
  justify-content:center;
  flex-direction: row;
  align-items:center;
}
</style>
