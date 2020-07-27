<!--
* @DateTime:    2020-07-26
* @Description: 首页
-->
<template>
  <div class="home">
    <div class="top-main">
      <div class="item">
        <text class="icon-shezhi iconfont">&#xe7e8;</text>
        <text class="item-info">办卡</text>
      </div>
      <div class="item">
        <text class="icon-shezhi iconfont">&#xe600;</text>
        <text class="item-info">充值/查询</text>
      </div>
      <div class="item">
        <text class="icon-shezhi iconfont">&#xe60f;</text>
        <text class="item-info">设置</text>
      </div>
    </div>
    <scroller class="scroller">
      <!-- <div>11111111111111{{baseURL}}</div> -->
      <div class="content-main">

        <div class="content-item" v-for="(item,index) in list" :key="index">
          <div class="item-top" :style="{'background-color':`${dataColors[item.id]}`}">
            <text class="item-title">{{item.tit}}</text>
          </div>
          <div class="item-content">
            <text class="item-content-text">{{item.content}}</text>
          </div>
        </div>
      </div>
    </scroller>
    <div class="btn-box">
      <div class="btn" @click="goPage">
        <text class="btn-text" @click="goPage">刷新一下</text>
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
      baseURL: '',
      // 颜色库
      dataColors: ['#59b7ff', '#aae6aa', '#e5ed9a', '#ffa88c', '#f2b2fe', '#a4b8ff', '#59fffd', '#ffca59', '#ff5959',
        '#a8b5c8'
      ],
      list: [
        {
          id: 3,
          tit: 'A01',
          content: '项目一'
        },
        {
          id: 2,
          tit: 'A02',
          content: '项目一'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目二'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 3,
          tit: 'A01',
          content: '项目一'
        },
        {
          id: 2,
          tit: 'A02',
          content: '项目一'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目二'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 5,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 3,
          tit: 'A01',
          content: '项目一'
        },
        {
          id: 2,
          tit: 'A02',
          content: '项目一'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目二'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 3,
          tit: 'A01',
          content: '项目一'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目一'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目二'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 5,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 1,
          tit: 'A01',
          content: '项目一'
        },
        {
          id: 2,
          tit: 'A02',
          content: '项目一'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目二'
        },
        {
          id: 4,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 5,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 1,
          tit: 'A01',
          content: '项目一'
        },
        {
          id: 2,
          tit: 'A02',
          content: '项目一'
        },
        {
          id: 3,
          tit: 'A02',
          content: '项目二'
        },
        {
          id: 4,
          tit: 'A02',
          content: '项目三'
        },
        {
          id: 5,
          tit: 'A02',
          content: '项目三'
        }
      ]
    }
  },
  created () {
    // var bundleUrl = this.$getConfig().bundleUrl

    // bundleUrl = new String(bundleUrl)
    // var nativeBase
    // var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0

    // var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0
    // if (isAndroidAssets) {
    //   nativeBase = 'file://assets/dist/'
    // } else if (isiOSAssets) {
    //   nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
    // } else {
    //   var host = 'localhost:8080'
    //   var matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
    //   if (matches && matches.length >= 2) {
    //     host = matches[1]
    //   }
    //   nativeBase = 'http://' + host + '/index.html?page=./dist/'
    // }
    // this.baseURL = nativeBase
    // debugger
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
      // this.baseURL = utils.getUrl('login')
      navigator.push({
        url: utils.getUrl('login'),
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
.btn-box{
  width: 750px;
  height: 100px;
  text-align: center;
  justify-content:center;
  flex-direction: row;
  border-top-width: 2px;
  border-top-color: #000000;
  border-top-style: solid;
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
  margin-top: 10px;
  justify-content:center;
  flex-direction: row;
  align-items:center;
}
.btn-text{
  color: #fff;
}
.top-main {
  width: 750px;
  height: 200px;
  /* border-bottom: 1px; */
  border-bottom-width: 2px;
  border-bottom-color: #000000;
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
}
.item {
  flex: 1;
  height: 200px;
  border-right-width: 1px;
  border-right-color: #ddd;
  border-right-style: solid;

  text-align: center;
  /* justify-items: center; */
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;

  /* line-height: 100px; */
}
.item-info {
  font-size: 40px;
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
.content-main {
  /* overflow: auto; */
  overflow: visible;
  width: 750px;
  /* height: 00px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-content: flex-start;
}
.content-item {
  width: 250px;
  height: 300px;
  border-width: 1px;
  border-color: #ddd;
  border-style: solid;
  box-sizing: border-box;
  /* flex: 1; */
}
.content-tit {
  width: 250px;
  height: 150px;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 26px;
}
.item-top {
  width: 248px;
  height: 50px;
  background-color: #ef957a;
  /* align-items: center; */
  justify-content: center;
  padding: 0 20px;
}
.item-title {
  font-size: 26px;
}
.item-content {
  height: 250px;
  align-items: center;
  justify-content: center;
}
.item-content-text {
  color: #333;
  font-size: 26px;
}
</style>
