// 封装请求工具request.js
//  对于axios 得二次封装
// 配置拦截器及其他
import axios from 'axios'
// 拦截器及其他的操作
// 配置axios的baseURL
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 配置公共的请求头地址
// --------axios得初步封装
// 请求拦截器的开发
axios.interceptors.request.use(function (config) {
  // 成功时执行第一个 config是所有请求的信息
  // 在第一个函数里需要将配置返回 返回的配置会作为请求参数进行请求
//   返回之前 就是注入token最佳时间
  const token = localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}` // Bearer后面加空格
  //  config是一个对象 里面的headers属性里Authorization 设置为取得的token
  return config
},
function (error) {
  // 失败执行第二个axios 是一个支持promise
//   如果失败了我们应该直接reject 会直接进入到axios得catch中
  return Promise.reject(error)
})
export default axios
