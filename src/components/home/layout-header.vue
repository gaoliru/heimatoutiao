<template>
  <el-row align="middle" type="flex" class="layout-header">
      <el-col class="left" :span="12">
          <i class="el-icon-s-fold"></i>
          <span>
              新头条.珍世缘股份有限公司
          </span>
      </el-col>
      <el-col class="rigth" :span="12" >
          <!-- end 让这个标签靠边 -->
         <el-row type='flex' justify="end" align="middle">

          <img :src="userInfo.photo" alt="">
           <!--放一个下拉菜单 -->
           <el-dropdown trigger="click" @command="clickMenu">
               <span>{{userInfo.name}}</span>
               <!-- 下拉菜单需要一个具名插槽dropdown  el-dropdown-menu专门做下拉的组件-->
           <el-dropdown-menu slot="dropdown">
           <!-- el-dropdown-item -->
               <el-dropdown-item command="info">
                   <i class="el-icon-user"></i>
                   <span>我的信息</span>
                   </el-dropdown-item>
               <el-dropdown-item command="number">
                 <i class="el-icon-phone"></i>
                 <span >我的其他联系方式</span>
               </el-dropdown-item>
           <el-dropdown-item command="lgout">
                  <i class="el-icon-turn-off"></i>
                  <span>退出</span>
          </el-dropdown-item>
               </el-dropdown-menu>
            </el-dropdown>
        </el-row>
     </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    // 用户个人信息
    }
  },
  methods: {
    clickMenu (command) {
      if (command === 'info') {

      } else if (command === 'number') {
        window.location.href = 'https://github.com/gaoliru'
      } else {
        window.localStorage.removeItem('user-token')
        // 删除本地缓存中的token
        this.$router.push('/login')
      }
    }
  },
  //   data数据结束
  created () {
    // //   从本地缓存中取得token 在拦截器中设置
    // const token = localStorage.getItem('user-token')
    // 获取用户信息
    this.$axios({
      url: '/user/profile'
      //   请求地址
      // 设置请求头参数 headers
    }).then(result => {
      // result里有个data 且里面包含一个data
      this.userInfo = result.data
    //   取得数据 动态添加
    })
  }
}
</script>

<style lang="less" scoped>
.layout-header{
    height: 60px;
    .left{
        i{
            font-size: 20px;
        }
    }
    .rigth{
        img{
            height: 35px;
            width: 35px;
            border-radius:50%;
        }
    }
}
</style>
