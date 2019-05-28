// 所有请求放到这个文件中导出
// 存放发送请求的方法
import sendaxios from './axios'
let postlist = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnctiy_queryAllcity.action').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
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
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}

let maternityinfo = function (fn) {
  // 传入三个参数{'employee_gid': 3}
  sendaxios('post', 'PI_yuesaoEmp.action?employee_gid=3', {'employee_gid': 3}).then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
let lactation = function (fn) {
  // 传入三个参数
  // {'cuirushi_id': 1}
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
// 导出postlist方法
export {postlist, housekeep, housekeepinfo, maternity, maternityinfo, lactation, lactationinfo}
