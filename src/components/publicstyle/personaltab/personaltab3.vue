<template>
  <div class="personal-b-r-t">
    <p class="personal-p">订单列表</p>
    <p class="personal-p-s">查看你的列表</p>
    <span class="font-12">找到{{lists.length}}个订单</span>
    <ul class="personal-border">
      <li>订单号</li>
      <li>订单状态</li>
      <li>预约时间</li>
      <li>操作</li>
    </ul>
    <ul class="personal-borders font-12" v-for="(item , index) in lists" :key="index">
      <li class="li-list">
        <p>{{item.onumber}}</p>
        <p>{{item.ostate}}</p>
        <p>{{item.oorderdate}}</p>
      </li>
      <li class="ck-list" >
        <router-link to="/personaltab4">
        <span class="span-hover">查看</span>
        </router-link>
        <span class="personal-cancel"  @click="aaa(index)">取消订单</span>
      </li>
    </ul>
  </div>
</template>
<script>
import {cxlist, sclist} from 'api/request'
export default {
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    cxlist({
      uid: 1
    }, (res) => {
      console.log(res)
      this.lists = res.data
      console.log(this.lists)
    })
  },
  methods: {
    aaa (index) {
      let data = {oid: index + 1}
      sclist(data, (res) => {
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~@/static/css/common.less';
  .personal-b-r-t {
    padding: 30px 50px;
    background: @whiteColor;
    padding-bottom: 380px;
    .personal-p{
      padding-bottom: 10px;
      border-bottom: 1px solid #cccccc;
    }
    .personal-p-s{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .personal-border{
      margin-top: 20px;
      border: 1px solid @lightgrey;
      line-height: 30px;
      text-align: center;
    }
    .personal-border li{
      width: 25%;
    }
    .personal-borders .li-list p{
      display: inline-block;
      width: 165px;
    }
    .ck-list{
      margin-left: 40px;
    }
    .personal-borders{
      margin-top: 20px;
      border: 1px solid @lightgrey;
      line-height: 30px;
      text-align: center;
      margin-top: 0;
      border-top: none;
      .span-hover:hover{
        color: @orangeColor;
      }

    }
    .span-hover{
      padding-left: 10px;
      margin-right: 10px;
    }
    .personal-cancel:hover{
      color: @orangeColor;
    }
  }
</style>
