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
                <li v-if="token" @click="outlogin">
                    <router-link to="" class="sign_out">退出登录</router-link>
                </li>
                <li>
                    <router-link to="/personal" v-if="token" class="sign_out">个人中心</router-link>
                    <router-link to="/logon" v-if="!token">请登录</router-link>
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
      show: true,
      // 创建空数组保存data
      item_city: [],
      //   item_city: [{citys: '北京市'},
      //     {citys: '上海市'},
      //     {citys: '深圳市'},
      //     {citys: '南京市'},
      //     {citys: '杭州市'},
      //     {citys: '长沙市'},
      //     {citys: '沈阳市'},
      //     {citys: '合肥市'},
      //     {citys: '哈尔滨市'},
      //     {citys: '苏州市'},
      //     {citys: '无锡市'},
      //     {citys: '常州市'},
      //     {citys: '青岛市'}],
      item_nav: [{url: '/', nav: '首页'},
        {url: '/housekeeping', nav: '家政'},
        {url: '/maternity', nav: '月嫂'},
        {url: '/lactation', nav: '催乳师'},
        {url: '/parenting', nav: '育儿嫂'},
        {url: '/nanny', nav: '保姆'},
        {url: '/cooperation', nav: '城市合作'},
        {url: '/personal', nav: '个人中心'},
        {url: '/logon', nav: '请登录'}]
    }
  },
  methods: {
    city (e) {
      let city1 = e.target.innerHTML
      let city2 = this.$refs.citys
      city2.innerHTML = city1
    },
    outlogin () {
      localStorage.clear()
      this.$router.go(0)
    }
  },
  mounted () {
    // 获取城市数据
    postlist((data) => {
      // 保存到空数组中
      console.log(data)
      this.$router.push({path: '/'})
      this.item_city = data[0].data
      console.log('优化后的数据', this.item_city)
      //console.log(data)    })
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
      console.log(this.item_nav)
    })
    // 改变登录状态
    // var token = window.localStorage.getItem('token')
  },
  computed: {
    token: function () {
      return this.$store.state.token
    }
  }
}
</script>
<style lang="less" scoped>
@import "~./nav.less";
@import '~@/static/css/common.less';
</style>
