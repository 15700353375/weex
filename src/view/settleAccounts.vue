<!--
* @DateTime:    2020-07-26
* @Description: 结账
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
    <scroller class="scroller">
      <div class="content-main">
        <div class="content-item" v-for="(ele) in list" :key="ele.id">
            <div class="item-th">
              <text class="item-th-text1">商品名称</text>
              <text class="item-th-text">技师</text>
              <text class="item-th-text">点排</text>
              <text class="item-th-text">数量</text>
              <text class="item-th-text">单价</text>
              <text class="item-th-text">折扣</text>
              <text class="item-th-text">金额</text>
            </div>
            <div class="item-td" v-for="(item,index) in ele.children" :key="index">
              <text class="item-td-text1">{{item.content}}</text>
              <text class="item-td-text">{{item.tit}}</text>
              <text class="item-td-text">{{item.tit}}</text>
              <text class="item-td-text">{{item.tit}}</text>
              <text class="item-td-text">{{item.tit}}</text>
              <text class="item-td-text">{{item.tit}}</text>
              <text class="item-td-text">{{item.tit}}</text>
            </div>
        </div>
      </div>
    </scroller>
    <div class="btn-box">
      <div class="total-box">
        <div class="total-item">
          <text class="total-left">标价总计：</text>
          <text class="total-center">800</text>
          <text class="total-right">元</text>
        </div>
        <div class="total-item">
          <text class="total-left">收款总计：</text>
          <text class="total-center2">700</text>
          <text class="total-right">元</text>
        </div>
      </div>
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
          id: 1,
          room: '房间一',
          children: [
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
            }
          ]
        },
        {
          id: 2,
          room: '房间二',
          children: [
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
            }
          ]
        },
        {
          id: 3,
          room: '房间三',
          children: [
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
      ]
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
  width: 750px;
  /* height: 300px; */
  border-width: 1px;
  border-color: #409eff;
  border-style: solid;
  box-sizing: border-box;
  margin-bottom: 50px;
  background-color: #ecf5ff;
  /* flex: 1; */
}
.item-th{
  height: 80px;
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #409eff;
  border-bottom-style: solid;
  /* justify-content: center; */
  align-items: center;
}
.item-th-text1{
  width: 150px;
  font-size: 34px;
  color: #409eff;
}
.item-th-text{
 flex: 1;
 font-size: 34px;
 color: #409eff;
}

.item-td{
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
}
.item-td-text1{
 width: 150px;
 font-size: 30px;
 color: #999;
}
.item-td-text{
 flex: 1;
 font-size: 30px;
 color: #999;
}
.btn-box{
  width: 750px;
  height: 230px;
  border-top-width: 2px;
  border-top-color: #000000;
  border-top-style: solid;
}

.total-box{
  width: 750px;
  height: 100px;
  display: flex;
  flex-direction: row;
}
.total-item{
  flex: 1;
  display: flex;
  flex-direction: row;
}
.total-left{
  font-size: 30px;
  color: #333;
  line-height: 100px;
  align-items: center;
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
</style>
