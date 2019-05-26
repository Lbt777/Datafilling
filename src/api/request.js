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
let nanny = function (fn) {
  // 传入三个参数
  sendaxios('post', 'frnanny_Content.action?nanny_id=1').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
let parenting = function (fn) {
  // 传入三个参数
  sendaxios('post', 'reyuersao_Content.action?yuersao_id=2').then((res) => {
    // 请求成功后调用回调函数
    fn(res)
    console.log('已调用回调函数fn')
  })
}
// 导出postlist方法
export {postlist, nanny, parenting}
