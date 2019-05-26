// api地址(接口地址，保存一些公共的数据)
// 在config中设置好配置/api
import md5 from 'js-md5'
const api = '/api/EJZ/'
// eslint-disable-next-line no-redeclare
const calcumd5 = function (pwd) {
  pwd = md5(pwd)
  return pwd
}
export {api, calcumd5}
