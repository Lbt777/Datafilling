<template>
    <div class="nav">
        <div class="logo">
            <img src="@/static/img/index-logo.png">
            <div class="address">
                <div class="add">
                    <img src="@/static/img/address.png">
                    <div class=""></div>
                </div>
                <span ref="citys">南京市</span>
                <span class="clear"></span>
                <div class="city">
                    <p>选择城市</p>
                    <ul>
                        <el-col :span="6" v-for="(item,j) in item_city" :key='j'><li @click="city($event)">{{item.cname}}</li></el-col>
                    </ul>
                </div>
            </div>
        </div>
        <div class="item">
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/housekeeping">家政</router-link>
                </li>
                <li>
                    <router-link to="/maternity">月嫂</router-link>
                </li>
                <li>
                    <router-link to="/lactation">催乳师</router-link>
                </li>
                <li>
                    <router-link to="/parenting">育儿嫂</router-link>
                </li>
                <li>
                    <router-link to="/nanny">保姆</router-link>
                </li>
                <li>
                    <router-link to="/cooperation">城市合作</router-link>
                </li>
                <li>
                    <router-link to="/personal">个人中心</router-link>
                </li>
                <li>
                    <router-link to="/logon">请登录</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// 导入postlist方法
import {postlist, nav} from 'api/request'
export default {
  data () {
    return {
      // 创建空数组保存data
      item_city: [],
      item_nav: []
      // item_nav: [{url: '/', nav: '首页'},
      //   {url: '/housekeeping', nav: '家政'},
      //   {url: '/maternity', nav: '月嫂'},
      //   {url: '/lactation', nav: '催乳师'},
      //   {url: '/parenting', nav: '育儿嫂'},
      //   {url: '/nanny', nav: '保姆'},
      //   {url: '/cooperation', nav: '城市合作'},
      //   {url: '/personal', nav: '个人中心'},
      //   {url: '/logon', nav: '请登录'}]
    }
  },
  methods: {
    city (e) {
      let city1 = e.target.innerHTML
      let city2 = this.$refs.citys
      city2.innerHTML = city1
    }
  },
  mounted () {
    // 获取城市数据
    postlist((data) => {
      // 保存到空数组中
      console.log(data)
      this.item_city = data[0].data
      // console.log('优化后的数据', this.item_city)
    })
    nav((data) => {
      // let navlink = [{url: '/'},
      //   {url: '/housekeeping'},
      //   {url: '/maternity'},
      //   {url: '/lactation'},
      //   {url: '/parenting'},
      //   {url: '/nanny'},
      //   {url: '/cooperation'},
      //   {url: '/personal'},
      //   {url: '/logon'}]
      // console.log(data)
      let login = [{gname: '个人中心'},
        {gname: '请登录'}]
      this.item_nav = data[0].data
      for (let i = 0; i < login.length; i++) {
        this.item_nav.push(login[i])
      }
      // console.log(this.item_nav)
    })
  }
}
</script>
<style lang="less" scoped>
@import "~./nav.less";
@import '~@/static/css/common.less';
</style>
