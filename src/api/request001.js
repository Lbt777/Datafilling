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
<<<<<<< HEAD:src/api/request001.js
let housekeepinfo = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnemp_queryID.action?gen_id=1').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
let maternity = function (fn) {
  // 传入三个参数
  //, {'yuesao_id': 1}
  sendaxios('post', 'PI_yuesaoServe.action', {'yuesao_id': 1}).then((res) => {
=======
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
>>>>>>> 79422d2595ccc63a065a706197ded0a9d610dcbb:src/api/request.js
    // 请求成功后调用回调函数
    fn(res)
  })
}
<<<<<<< HEAD:src/api/request001.js

let maternityinfo = function (fn) {
  // 传入三个参数{'employee_gid': 3}
  sendaxios('post', 'PI_yuesaoEmp.action?employee_gid=3', {'employee_gid': 3}).then((res) => {
=======
// 首页我们的优势
let adv = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnadv_query.action').then((res) => {
>>>>>>> 79422d2595ccc63a065a706197ded0a9d610dcbb:src/api/request.js
    // 请求成功后调用回调函数
    fn(res)
  })
}
// 保姆
let nanny = function (fn) {
  // 传入三个参数
<<<<<<< HEAD:src/api/request001.js
  // {'cuirushi_id': 1}
  sendaxios('post', 'CUI_cuirushiServe.action', {'cuirushi_id': 1}).then((res) => {
=======
  sendaxios('post', 'frnanny_Content.action?nanny_id=1').then((res) => {
>>>>>>> 79422d2595ccc63a065a706197ded0a9d610dcbb:src/api/request.js
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
// 育儿嫂
let parenting = function (fn) {
  // 传入三个参数
<<<<<<< HEAD:src/api/request001.js
  sendaxios('post', 'CUI_cuirushiEmp.action', {'employee_gid': 4}).then((res) => {
=======
  sendaxios('post', 'reyuersao_Content.action?yuersao_id=2').then((res) => {
>>>>>>> 79422d2595ccc63a065a706197ded0a9d610dcbb:src/api/request.js
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
<<<<<<< HEAD:src/api/request001.js
export {postlist, housekeep, housekeepinfo, maternity, maternityinfo, lactation, lactationinfo}
=======
export {nav, postlist, information, service, characteristic, adv, sendphone, register, denglu, nanny, parenting, loging}
>>>>>>> 79422d2595ccc63a065a706197ded0a9d610dcbb:src/api/request.js
