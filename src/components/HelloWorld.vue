<template>
<div class="hello">
  <div class="tips"><text>键盘行为：{{count/2==1?'键盘弹起':'键盘收起'}}</text></div>
  <div class="tips"><text>输入的内容：{{phone}}</text></div>

 <input class="login-phone" type="number" placeholder="请输入手机号码" maxlength="11" :value="phone" @keyboard='keyboard' @input="inputPhone" ref="aaaa">
 <div class="btn-box">
   <div class="btn" @click="goPage">点击我</div>
 </div>
</div>
</template>
<style>
.hello{
  margin-top: 100px;
}
.tips{
  font-size: 30px;
  margin-bottom: 30px;
}
.login-phone{
  width: 600px;
  height: 80px;
  background-color: #f1f1f1;
  border-width: 2px;
  border-color: #000000;
  border-style: solid;
  font-size: 30px;
  border-radius: 10px;
  padding: 6px;
}
.btn-box{
  text-align: center;
  justify-content:center;
  flex-direction: row;
}
.btn{
  width: 300px;
  height: 80px;
  background-color: #409eff;
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  line-height: 80px;
  border-radius: 10px;
  margin-top: 50px;
  justify-content:center;
  flex-direction: row;
  align-items:center;
}
</style>
<script>
var navigator = weex.requireModule('navigator')
// var modal = weex.requireModule('modal')
export default {
  data () {
    return {
      phone: '',
      count: 1
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
      this.$refs.aaaa.focus()
    },
    keyboard (e) {
      this.count++
    },
    inputPhone (event) {
      // event.target= event.value.replace(/\D/g, '') // 不可行
      // this.phone = event.value.replace(/\D/g, '') // 不可行
      /** this.$refs.aaaa.setTextFormatter({
        formatRule: "/(\d)(\D)/g",
        formatReplace: "$1",
        recoverRule: "/\D/g",
        recoverReplace: ""
      }) */ // 没有反应
      this.phone = event.value
    },

    goPage () {
      console.log('will jump')
      navigator.push({
        url: 'http://g.tbcdn.cn/amte-fe/amte-resource/0.0.8/fast/show_2.js',
        animated: 'true'
      })
    }
  }
}

</script>
