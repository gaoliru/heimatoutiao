<template>
<!-- 谁用这个面包屑组件谁填坑 -->
  <!-- 使用element面包屑组件 -->
  <el-breadcrumb separator="">
      <!--separator选项分隔符  -->
  <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
  <!-- 第二个选项需要传值方式传值 props传值  slot插槽 -->
   <el-breadcrumb-item>
       <!-- 动态内容   需要定义一个具名插槽 -->
       <slot name = "title">

       </slot>
   </el-breadcrumb-item>
   </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
