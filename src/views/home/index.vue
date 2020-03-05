<template>
<!--  -->
    <el-container>
        <el-aside>
            <!-- 左侧导航 -->
            <h1>左侧</h1>
        </el-aside>

        <el-container>
            <el-header>
                <h1>顶部</h1>
                <!-- 顶部 -->
            </el-header>

            <el-main>
                <h1>核心</h1>
                <!-- 核心区域 -->
                <!--这里需要一个二级路由容器 -->
                <router-view></router-view>
            </el-main>
        </el-container>

    </el-container>
</template>
<script>
export default {

}
</script>
<style>

</style>
