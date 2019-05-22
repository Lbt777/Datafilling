// 所有请求放到这个文件中导出
// 存放发送请求的方法
import axios from 'axios'
import {api} from './index'
let postlist = function (fn) {
  axios({
    methods: 'post',
    url: api,
    data: {}
  }).then((res) => {
    // 请求成功
    // eslint-disable-next-line eqeqeq
    if (res.status == 200) {
      // 请求成功后调用回调函数
      fn(res.data)
      console.log('已调用回调函数fn')
    }
    console.log('返回的待处理数据,', res)
  })
}
// 导出postlist方法
export {postlist}
