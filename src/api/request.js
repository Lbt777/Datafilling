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
<<<<<<< HEAD
let nanny = function (fn) {
  // 传入三个参数
  sendaxios('post', 'frnanny_Content.action?nanny_id=1').then((res) => {
=======
let housekeep = function (fn) {
  // 传入三个参数
  sendaxios('post', 'House_query.action').then((res) => {
>>>>>>> 8845691bab96f11f7a47d1ce04b6cee143ba4d46
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
<<<<<<< HEAD
let parenting = function (fn) {
  // 传入三个参数
  sendaxios('post', 'reyuersao_Content.action?yuersao_id=2').then((res) => {
=======
let maternity = function (fn) {
  // 传入三个参数
  sendaxios('post', 'PI_yuesaoServe.action', {'yuesao_id': 1}).then((res) => {
>>>>>>> 8845691bab96f11f7a47d1ce04b6cee143ba4d46
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
<<<<<<< HEAD
let subtab = function (fn) {
  // 传入三个参数
  sendaxios('post', '/jsopnpic_queryImg.action').then((res) => {
=======
let maternityinfo = function (fn) {
  // 传入三个参数
  sendaxios('post', 'PI_yuesaoEmp.action', {'employee_gid': 3}).then((res) => {
>>>>>>> 8845691bab96f11f7a47d1ce04b6cee143ba4d46
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
<<<<<<< HEAD
let tab = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnpic_queryImg.action').then((res) => {
=======
let lactation = function (fn) {
  // 传入三个参数
  sendaxios('post', 'CUI_cuirushiServe.action', {'cuirushi_id': 1}).then((res) => {
>>>>>>> 8845691bab96f11f7a47d1ce04b6cee143ba4d46
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
<<<<<<< HEAD
let tabs = function (fn) {
  // 传入三个参数
  sendaxios('post', 'jsopnpic_queryImg.action').then((res) => {
=======
let lactationinfo = function (fn) {
  // 传入三个参数
  sendaxios('post', 'CUI_cuirushiEmp.action', {'employee_gid': 1}).then((res) => {
>>>>>>> 8845691bab96f11f7a47d1ce04b6cee143ba4d46
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
// 导出postlist方法
<<<<<<< HEAD
export {postlist, nanny, parenting, subtab, tab, tabs}
=======
export {postlist, housekeep, maternity, maternityinfo, lactation, lactationinfo}
>>>>>>> 8845691bab96f11f7a47d1ce04b6cee143ba4d46
