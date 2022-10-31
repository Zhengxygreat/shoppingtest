/*
axios二次封装
1，配置通用的基础路径和超时
2，显示请求进度条
3，成功返回的数据不再是response，而直接是响应体数据response
4，统一处理请求错误，具体请求也可以选择处理或者不处理
*/
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 1，配置通用的基础路径和超时
const service = axios.create({
  baseURL: 'http://39.99.186.36/api',
  timeout:20000,
})

// 添加请求拦截器
service.interceptors.request.use((config)=>{
  
  //2，显示请求进度条
  //显示请求进度条：在请求拦截器中
  NProgress.start()


  //必须返回config
  return config //后面会根据返回的config,使用xhr对象发送axios请求
})
// 添加响应拦截器
service.interceptors.response.use(
  response => {//请求成功返回的回调
  //2，显示请求进度条
  //隐藏请求进度条：在响应拦截器中
    NProgress.done();

    // 3，成功返回的数据不再是response，而直接是响应体数据response
  return response.data
  },
  error => {//请求失败返回的回调
    //2，显示请求进度条
  //隐藏请求进度条：在响应拦截器中
    NProgress.done();

    // 4，统一处理请求错误，具体请求也可以选择处理或者不处理
    alert(error.message||'出现未知错误')
    //return error  千万不能这样写
  // throw error
  return Promise.reject(error)
  })
// service.get('/xxx').then(result => {
//   const result = response.data
// }).catch(error => {
//   //做提示之外的特定工作
// })
