// 路由对象
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
// 安装vue插件
Vue.use(VueRouter)

//缓存原本的push方法
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

//指定新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  //如果指定了成功或者失败的回调
  //直接调用原本的push方法
  // originalPush(location,onResolve,onReject)//错误的：因为this不是router而是undifined
  if (onResolve || onReject) {
    return originalPush.call(this,location,onResolve,onReject)
  }
  //没有指定成功或者失败回调，必须用catch处理
  return originalPush.call(this, location).catch((err) => {
    //如果是重复导航产生的错误，不再向外传递错误
    if (VueRouter.isNavigationFailure(err)) {
      return err
    }
    //throw err
    return Promise.reject(err);
  })
}

VueRouter.prototype.replace = function (location, onResolve, onReject) {
   if (onResolve || onReject) {
    return originalReplace.call(this,location,onResolve,onReject)
  }
  return originalReplace.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      return err
    }
    return Promise.reject(err);
  })
}
// 向外暴露路由器对象
export default new VueRouter({
  mode: 'history',
  routes
})