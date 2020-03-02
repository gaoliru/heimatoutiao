<template>
    <div class="login">
        <el-card class="login-card">
            <div class="title"><img src="../../assets/img/logo_index.png" alt=""></div>
        </el-card>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="less" scoped>//  如果需要写less需要在style标签中写上lang="less"
//scoped 表示只对当前自己的组件起作用
.login{

    background-image: url('../../assets/img/timg.jpg');
height: 100vh; // 当前屏幕可视区域分成100份 占到100份

background-size:cover;
// flex布局
display: flex;
// 水平居中
justify-content: center;
align-items: center;
// 垂直居中
.login-card{
    height: 340px;
    width: 440px;
.title{
    text-align: center;
}
}
}
</style>
