import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/permission' // 引入token权限模块
import ElementUI from 'element-ui' // 引入模块
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less' // 引入样式
import axios from '@/utils/request' // 引入封装过的request.js
// 引入自定义index.js文件 可以简写不加index.js
import Components from '@/components'
Vue.use(ElementUI) // 全局注册element-ui框架 一旦注册所有位置都可以使用组件
// Vue.use实际上会调用ElementUI对象里的方法 install方法并传入Vue对象
Vue.config.productionTip = false
Vue.use(Components)
// 组测开发自定义组件
Vue.use(ElementUI) // 全局注册element-ui框架 一旦注册所有的位置都可以使用组件
// Vue.use实际上会调用ElementUI对象里的一个install方法并传入当前的vue对象

Vue.prototype.$axios = axios
// 将axios赋值给Vue对象的原型属性
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
