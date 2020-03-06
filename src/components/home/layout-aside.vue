<template>
  <div class="layout-aside">
    <!-- 头部图标 -->
    <div class="title">
      <img src="../../assets/img/xin.jpg" alt />
        <img src="../../assets/img/tt.jpg" alt />
    </div>
    <!-- 导航菜单下拉菜单 -->
    <el-menu class="dh">
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu>
        <!-- 二级菜单用el-submenu -->
        <template slot="title">
          <i slot="title" class="el-icon-s-grid"></i>
          <span>内容管理</span>
        </template>

        <el-menu-item>发布说说</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论列表</el-menu-item>
        <el-menu-item>我的素材</el-menu-item>
      </el-submenu>
      <el-submenu>
        <!-- 二级菜单用el-submenu -->
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>嘉宾管理</span>
        </template>

        <el-menu-item>图文概况</el-menu-item>
        <el-menu-item>嘉宾概况</el-menu-item>
        <el-menu-item>嘉宾画像</el-menu-item>
        <el-menu-item>嘉宾列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-user-solid"></i>
        <span>账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-aside {
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#ec840c));
  height: 100vh;
  width: 200px;
  .dh{
     background: rgba(0,0,0,0);
  }
  .title {
    text-align: center;
    padding: 10px 0;
    img {
height: 40px;
      width: 90px;
    }
     .el-menu-item {
       background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#ec840c));
      }
   }

  el-menu {
    border-right: none;
  }
}
</style>
