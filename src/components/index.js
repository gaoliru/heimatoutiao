// 需要使用vue.js注册
// Vue.use会调用对象中的install方法
import LayoutHeader from './home/layout-header.vue'
import LayoutAside from './home/layout-aside.vue'
export default {
  install: function (Vue) {
    // 注册组件  全局 Vue.components("") 任意位置都可以用
    Vue.component('layout-aside', LayoutAside)
    Vue.component('layout-header', LayoutHeader)
  }
}
