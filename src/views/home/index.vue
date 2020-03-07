<template>
<!--  -->
    <el-container>
        <el-aside style="width:200px">
<!-- 左侧导航组件 -->
         <layout-aside></layout-aside>
        </el-aside>

        <el-container>
            <el-header>
                <!-- 顶部组件 -->
                <layout-header></layout-header>
            </el-header>

            <el-main style="padding:0">
                <!-- 核心区域 -->
                <!--这里需要一个二级路由容器 -->
                <router-view></router-view>
            </el-main>
        </el-container>

    </el-container>
</template>
<script>
// 引入左侧导航组件   注册 并使用
// import LayoutAside from '@/components/home/layout-aside'
// 优化 在index.js里注册
// import LayoutHeader from '@/components/home/layout-header'
export default {
//   components: {
  // index.js里全局注册了
//     'layout-aside': LayoutAside,
//     'layout-header': LayoutHeader
//   }
}
</script>
<style>

</style>
