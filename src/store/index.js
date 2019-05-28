// vuex 数据
// 改变登录状态
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    // state里面会存一个token值
    token: '',
    telphone: ''
  },
  mutations: {
    userInfor: function (state, token, telphone) {
      state.token = token
      state.telphone = telphone
    }
  }
})
