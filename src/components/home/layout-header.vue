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

          <img src="../../assets/img/tt.jpg" alt="">
           <!--放一个下拉菜单 -->
           <el-dropdown trigger="click">
               <span>新头条管理员</span>
               <!-- 下拉菜单需要一个具名插槽dropdown  el-dropdown-menu专门做下拉的组件-->
           <el-dropdown-menu slot="dropdown">
           <!-- el-dropdown-item -->
               <el-dropdown-item>
                   <i class="el-icon-user"></i>
                   <span>管理员信息</span>
                   </el-dropdown-item>
               <el-dropdown-item>
                 <i class="el-icon-phone"></i>
                 <span>管理员联系方式</span>
               </el-dropdown-item>
           <el-dropdown-item>
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
