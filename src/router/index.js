import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// 简写模式替代
// @符合代表一个别名 /src得别名
import Home from '@/views/home'
import Login from '../views/login'
import SecondHome from '@/views/home/second_home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'// 强制跳转到home页
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // 在一级路由表children配置二级路由表
    children: [{
      path: '',
      // 二级路由的path什么也不写表示二级路由的默认组件
      component: SecondHome
    }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
  // ,
  // {
  //   // 按需加载
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
