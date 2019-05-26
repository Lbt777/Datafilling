<template>
  <div id="app">
    <navs/>
    <banner/>
    <router-view></router-view>
    <sidebar/>
    <foot/>
  </div>
</template>

<script>
// banner组件
import banner from 'com/publicstyle/banner'
// nav组件
import navs from 'com/publicstyle/nav'
// 侧边栏
import sidebar from 'com/publicstyle/sidebar'
// 底部
import foot from 'com/publicstyle/footer'
// 引入判断刷新是否登录
import {loging} from 'api/request'
export default {
  name: 'App',
  components: {
    navs,
    banner,
    sidebar,
    foot
  },
  mounted () {
    loging()
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
</style>
