// 需要使用vue.js注册
// Vue.use会调用对象中的install方法
import LayoutHeader from './home/layout-header.vue'
import LayoutAside from './home/layout-aside.vue'
import BreadCrumb from './common/bread-crumb.vue'
export default {
  install: function (Vue) {
    // 注册组件  全局 Vue.components("") 任意位置都可以用
    Vue.component('layout-aside', LayoutAside) // 注册头部组件
    Vue.component('layout-header', LayoutHeader) // 注册左侧导航栏组件
    Vue.component('bread-crumb', BreadCrumb) // 注册一个面包屑组件
  }
}
