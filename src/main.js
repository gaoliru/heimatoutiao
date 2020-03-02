import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入模块
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less' // 引入样式
Vue.use(ElementUI) // 全局注册element-ui框架 一旦注册所有位置都可以使用组件
// Vue.use实际上会调用ElementUI对象里的方法 install方法并传入Vue对象
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
