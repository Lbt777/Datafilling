// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SlideVerify from 'vue-monoplasty-slide-verify'
// import axios from 'axios'
Vue.use(SlideVerify)
Vue.use(Element)
// Vue.prototype.$axios = axios
// Vue.defaults.baseUrl = 'http://88ja9g.natappfree.cc'

// 修改标题 路由导航守卫
// to将要进入的路由
// from 从哪个路由来
// next 方法 （定义进入哪一个路由 不传参 进入默认进入的路由）中间键
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 判断是否需要登录 通过元信息user判断 存在就要登录
  if (to.meta.user) {
    // 判断登录状态 登录时会请求后台 后台返回登录信息token/userid token在localstorage中
    let token = window.localStorage.getItem('token')
    console.log(token)
    if (token) {
      // 存在已登录
      next()
    } else {
      // 没有登录
      alert('请先登录')
      next('/logon')
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
