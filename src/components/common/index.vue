<template>
<!-- 用一个el-card组件作主页面 -->
<el-card>
    <!-- 放一个面包屑组件  slot="header" 表示面包屑会作为具名插槽给card组件得header部分 -->
<bread-crumb slot="header">
<!-- slot='title' 表示评论管理给面包屑得插槽 -->

<template slot="title">
评论管理
</template>
</bread-crumb>
<!-- 表格组件 -->

<el-table>
    <!-- 使用el-table-column作为列 -->
    <!-- prop 表示显示的字段 -->
    <el-table-column label="标识"></el-table-column>
     <el-table-column label="名称"></el-table-column>
      <el-table-column label="时间"></el-table-column>
</el-table>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [{ id: 1, name: '一', date: '2020年3月4日11:12:13' },
        { id: 2, name: '二', date: '2020年3月4日11:12:13' },
        { id: 3, name: '三', date: '2020年3月4日11:12:13' },
        { id: 4, name: '四', date: '2020年3月4日11:12:13' }
      ]
    }
  }
}
</script>

<style>

</style>
