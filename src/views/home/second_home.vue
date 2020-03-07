<template>
<!-- 走马灯模式 -->
 <div class="second-home">
      <el-carousel :interval="4000" type="card" height="280px">
 <el-carousel-item v-for="item in list" :key="item">
<img :src="item" alt="">
</el-carousel-item>
 </el-carousel></div>

</template>

<script>
export default {
  data () {
    return {
      list: ['http://img3.imgtn.bdimg.com/it/u=2069695231,4148438496&fm=26&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=221072744,455642096&fm=11&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1777700553,886428464&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=2802788297,520256575&fm=26&gp=0.jpg',

        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1474789004,1008955981&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style>
.second-home{
    /* // calc 计算 在css中计算数值 calc(四则运算) */
    height: calc(100vh - 60px);
    /* // 运算符左右要有空格 */
background-size: cover;
    background-image: url('../../assets/img/home-bj.jpg');

}
</style>
