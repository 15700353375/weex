<!--
* @DateTime:    2020-07-26
* @Description: 会员卡结账
-->
<template>
  <div class="home">
    <div class="top-main">
      <div class="item">
        <text class="item-info">会员电话：15700353375</text>
      </div>
      <div class="item">
        <text class="item-info">余额：300元</text>
      </div>
    </div>
    <div class="scroller">
      <div class="total-box">
        <div class="total-item">
          <text class="total-left">会员卡余额：</text>
          <div class="total-cell-right">
            <text class="total-center">800</text>
            <text class="total-right">元</text>
          </div>
        </div>
        <div class="total-item">
          <text class="total-left">收款总计：</text>
          <div class="total-cell-right">
            <text class="total-center2">700</text>
            <text class="total-right">元</text>
          </div>
        </div>
        <div class="total-item">
          <text class="total-left">结账方式：</text>
          <!-- <div class="total-cell-right">
            <text class="total-center">800</text>
            <text class="total-right">元</text>
          </div> -->
        </div>
        <div class="settle">
          <div class="total-item-settle">
            <text class="settle-left">会员卡</text>
            <div class="total-cell-right">
              <text class="settle-center">100</text>
              <text class="settle-right">元</text>
            </div>
          </div>
          <div class="total-item-settle">
            <text class="settle-left">银行卡</text>
            <div class="total-cell-right">
              <text class="settle-center">100</text>
              <text class="settle-right">元</text>
            </div>
          </div>
          <div class="total-item-settle">
            <text class="settle-left">现金</text>
            <div class="total-cell-right">
              <text class="settle-center">100</text>
              <text class="settle-right">元</text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-box">

      <div class="btn-bottom">
        <div class="btn" @click="goPage">
          <text class="btn-text">取消</text>
        </div>
        <div class="btn2" @click="goPage">
          <text class="btn-text2">下一步</text>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
var navigator = weex.requireModule('navigator')
let utils = require('../appUtils')
export default {
  data () {
    return {
      phone: '',
      count: 1,
      baseURL: ''
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
      // this.$refs.aaaa.focus()
    },
    keyboard (e) {
      this.count++
    },
    inputPhone (event) {
      this.phone = event.value
    },
    goPage () {
      navigator.push({
        url: utils.getUrl('login'),
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
.iconfont {
  font-family: iconfont5;
}
.home {
  width: 750px;
  height: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.top-main {
  width: 750px;
  height: 80px;
  /* border-bottom: 1px; */
  border-bottom-width: 2px;
  border-bottom-color: #000000;
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
}
.item {
  flex: 1;
  height: 80px;
  text-align: center;
  /* justify-items: center; */
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;

  /* line-height: 100px; */
}
.item-info {
  font-size: 30px;
  color: #ffffff;
}
.iconfont {
  font-size: 60px;
  color: #fff;
  line-height: 80px;
}
.scroller {
  flex: 1;
  width: 750px;
}
.card-item{
  display: flex;
  flex-direction: row;
}

.btn-box{
  width: 750px;
  height: 130px;
  border-top-width: 2px;
  border-top-color: #000000;
  border-top-style: solid;
}

.total-box{
  width: 750px;
  height: 300px;
}
.total-item{
  width: 750px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* padding-left: 100px; */
  border-bottom-color: #909399;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.total-item3{
  height: 600px;
}
.total-left{
  width: 240px;
  text-align: right;
  font-size: 36px;
  color: #333;
  line-height: 100px;
  align-items: center;
}
.total-cell-right{
  height: 100px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 60px;
}
.total-center{
  font-size: 60px;
  color: #2d8cf0;
  line-height: 100px;
  align-items: center;
}
.total-right{
  font-size: 30px;
  color: #333;
  line-height: 100px;
  align-items: center;
}
.total-center2{
  font-size: 60px;
  color: #27D6AF;
  line-height: 100px;
  align-items: center;
}
.btn-bottom{
  height: 130px;
  display: flex;
  flex-direction: row;
}
.btn{
  flex: 1;
  height: 130px;
  background-color: #ddd;
  color: #f4f4f5;
  text-align: center;
  line-height: 130px;
  justify-content:center;
  flex-direction: row;
  align-items:center;
}
.btn-text{
  color: #909399;
  font-size: 40px;
}
.btn-text2{
  color: #fff;
  font-size: 40px;
}
.btn2{
  flex: 1;
  height: 130px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  line-height: 130px;
  justify-content:center;
  flex-direction: row;
  align-items:center;
}

.settle{
  width: 750px;
  height: auto;
  background-color: #f1f1f1;
}
.total-item-settle{
  width: 750px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.settle-left{
  width: 240px;
  text-align: right;
  font-size: 36px;
  color: #333;
  line-height: 100px;
  align-items: center;
  padding-right: 26px;
}

.settle-center{
  font-size: 50px;
  color: #2d8cf0;
  line-height: 100px;
  align-items: center;
}
.settle-right{
  font-size: 30px;
  color: #333;
  line-height: 100px;
  align-items: center;
}
</style>
