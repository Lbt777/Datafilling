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
// axios
import axios from 'axios'

export default {
  name: 'App',
  components: {
    navs,
    banner,
    sidebar,
    foot
  },
  mounted () {
    axios({
      method: 'post',
      url: '/api/EJZ/jsopnctiy_queryAllcity.action',
      data () {}

    }).then((res) => {
      console.log(res)
    })
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
</style>
