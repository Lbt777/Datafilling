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
    fn(res)
  })
}

let housekeep = function (fn) {
  // 传入三个参数
  sendaxios('post', 'House_query.action').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
let housekeepinfo = function (fn) {
  // 传入三个参数

  sendaxios('post', 'jsopnemp_queryID.action', {'gen_id': 1}).then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
let maternity = function (fn) {
  // 传入三个参数

  sendaxios('post', 'PI_yuesaoServe.action', {'yuesao_id': 1}).then((res) => {

    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
let maternityinfo = function (fn) {
  // 传入三个参数
  sendaxios('post', 'PI_yuesaoEmp.action', {'employee_gid': 3}).then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
let lactation = function (fn) {
  // 传入三个参数
  sendaxios('post', 'CUI_cuirushiServe.action', {'cuirushi_id': 1}).then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
let lactationinfo = function (fn) {
  // 传入三个参数
  sendaxios('post', 'CUI_cuirushiEmp.action', {'employee_gid': 4}).then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
// 首页家政服务类型
let service = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnhouse_query.action').then((res) => { // 请求成功后调用回调函数
    fn(res)
  })
}
// 首页特色服务类型
let characteristic = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnhouse_query.action').then((res) => {

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
// 保姆
let nanny = function (data, fn) {
  // 传入三个参数

  sendaxios('post', 'frnanny_Content.action', data).then((res) => {

  // {'cuirushi_id': 1}
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
// 育儿嫂
let parenting = function (data, fn) {
  // 传入三个参数

  sendaxios('post', 'reyuersao_Content.action', data).then((res) => {







    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
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
// 查询订单列表
let cxlist = function (data, fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnord_queryOrder', data).then((res) => {
    fn(res)
  })
}
// 删除订单
let sclist = function (data, fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnord_deleteOrder', data).then((res) => {
    fn(res)
  })
}
// 刷新判断是否登录
function loging () {
  // 1.请求后台判断是否登录
  // 2.已登录 后台返回登录信息和token
  // 3.将返回的信息存储到localstorage中
  var telphone = window.localStorage.getItem('user')
  telphone = JSON.parse(telphone)
  console.log(telphone)
  var token = window.localStorage.getItem('token')
  store.commit('userInfor', token, telphone)
  console.log(store.state)
}
// 导出postlist方法








export {nav, postlist, information, loging,housekeep,
  housekeepinfo, service, characteristic,
  maternity, maternityinfo, adv, sendphone, register, denglu, nanny, parenting, cxlist}
