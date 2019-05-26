// 所有请求放到这个文件中导出
// 存放发送请求的方法
import sendaxios from './axios'
import store from '../store'
// 顶部导航与banner
let nav = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopngen_querySy.action', {'general_id': 1}).then((res) => {
    // 请求成功后调用回调函数
    fn(res)
  })
}
// nav 城市
let postlist = function (fn) {
  sendaxios('post', 'jsopnctiy_queryAllcity.action').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
// 首页行业资讯类型与描述字段
let information = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnart_query.action').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
  })
}
// 首页家政服务类型
let service = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnhouse_query.action').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
  })
}
// 首页特色服务类型
let characteristic = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopngen_queryTs.action').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
  })
}
// 首页我们的优势
let adv = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnadv_query.action').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
  })
}
// 注册
let register = function (data, fn) {
  // 传入三个参数
  sendaxios('post', 'user_userRegister.action', data).then((res) => {
    fn(res)
  })
}
// 发送手机验证码
let sendphone = function (data, fn) {
  // 传入三个参数
  // console.log(data)
  sendaxios('post', 'user_phonyzaction.action', data).then((res) => {
    fn(res)
  })
}
// 登录
let denglu = function (data, fn) {
  // 传入三个参数
  sendaxios('post', 'user_userLogin.action', data).then((res) => {
    fn(res)
  })
}
console.log(store)
// 刷新判断是否登录
function loging () {
  // 1.发送请求判断是否登录
  // 2.若登录 后台返回登录信息和token
  // 3.将返回的信息存储到localstorage中
  var telphone = window.localStorage.getItem('user')
  telphone = JSON.parse(telphone)
  console.log(telphone)
  var token = window.localStorage.getItem('token')
  // 存入
  store.commit('userInfor', token, telphone)
  console.log(store.state)
}
// 导出postlist方法
export {nav, postlist, information, service, characteristic, adv, sendphone, register, denglu, loging}
