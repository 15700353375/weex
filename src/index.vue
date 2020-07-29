<template>
  <div class="wrapper">
    <Home v-if='comp.home' @closeHome='closeHome' />
    <Login v-if='comp.login' @closeLogin='closeLogin' />
    <settleAccounts v-if='comp.settleAccounts' />
    <memberSettleAccounts v-if='comp.memberSettleAccounts' />

  </div>
</template>
<style>
.iconfont {
  font-family: iconfont5;
}
</style>
<script>
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home'
import Login from '@/view/login'
import settleAccounts from '@/view/settleAccounts'
import memberSettleAccounts from '@/view/memberSettleAccounts'
// var navigator = weex.requireModule('navigator')
// let utils = require('./appUtils')
export default {
  name: 'App',
  components: {
    Home,
    Login,
    HelloWorld,
    settleAccounts,
    memberSettleAccounts
  },
  data () {
    return {
      comp: {
        login: false,
        home: false,
        settleAccounts: false,
        memberSettleAccounts: true
      }
    }
  },
  created () {
    // 添加 字体图标
    const domModule = weex.requireModule('dom')
    let platform = weex.config.env.platform.toLowerCase()
    let url
    if (platform === 'android') {
      // 本地资源采用'local:// '的方式加载
      // 第三个斜杠是代表当前目录,对于android来说,如果加载的是字体,那么就是assets目录,同理`/iconfont.ttf'`就是加载`assets`目录下的iconfont.ttf文件
      url = "url('local:///iconfont.ttf')"// 注意我这里是将字体文件放在'assets/font/''目录下的,所以
    } else if (platform === 'ios') {
      // todo 理论上同android未测试
      url = "url('local:///iconfont.ttf')"
    } else {
      url = "url('http://at.alicdn.com/t/font_1961005_lgtkvrkjdm.ttf')"
    }
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont5',
      'src': url
    })
  },
  mounted: function () {

  },
  methods: {
    closeLogin () {
      for (let i in this.comp) {
        this.comp[i] = false
      }
      this.comp.home = true
    },
    closeHome () {
      for (let i in this.comp) {
        this.comp[i] = false
      }
      this.comp.settleAccounts = true
    }
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: flex-start;
  align-items: center;
}
</style>
