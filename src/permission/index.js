// 专门处理权限模块
import router from '@/router'
// 注册全局前置守卫
// 回调函数会在路由发生改变之前执行
// next()有三种场景
router.beforeEach(function (to, from, next) {
  //   next() // 表示放过
  // 首先应该判断需要拦截哪些页面 如果页面的地址以
  //  home 为开头，就需要进行token的判断
  //   判断你要去的页面是不是以/home 为开头
  if (to.path.startsWith('/home')) {
    //  表示你要去主页相关的页面，我要看看你有没有钥匙 你没有
    // 你没有钥匙我把你踹回登录页
    const token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
      // 回登录页拿钥匙
    }
  } else {
    next()
  }
})
