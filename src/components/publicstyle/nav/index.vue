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
                <li v-for="(item,j) in item_nav" :key="j">
                    <router-link :to="item.url">{{item.nav}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// 导入postlist方法
import {postlist} from 'api/request'
export default {
  data () {
    return {
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
      //   console.log(city2)
      city2.innerHTML = city1
    }
  },
  mounted () {
    // 获取城市数据
    postlist((data) => {
      // 保存到空数组中
//       console.log(data)
      this.item_city = data[0].data
      console.log('优化后的数据', this.item_city)
    })
  }
}
</script>
<style lang="less" scoped>
@import "~./nav.less";
@import '~@/static/css/common.less';
</style>
