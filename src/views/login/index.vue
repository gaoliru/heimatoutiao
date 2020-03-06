<template>
    <div class="login">
        <!-- 表单 -->
        <el-card class="login-card">
            <!-- 表单内容 -->
            <!-- 头部login图片文字部分 -->
            <div class="title"><img src="../../assets/img/xin.jpg" alt="">
            <img src="../../assets/img/tt.jpg" alt=""></div>
      <!-- 表单用el-form  绑定model属性  绑定rules属性（表单验证规则）-->
       <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
           <!-- 表单内容用<el-form-item> 校验字段prop="mobile" prop表示要绑定的字段名-->
           <el-form-item prop="mobile">
               <!-- 表单域 -->
               <el-input v-model="loginForm.mobile"  placeholder="请输入手机号"></el-input>
           </el-form-item>
           <el-form-item prop="code">
                <!-- 验证码输入 -->
               <el-input style="width:60%" plain v-model="loginForm.code" placeholder="请输入验证码"></el-input>
             <!-- 放一个按钮 -->
              <el-button style="float:rigth" >发送验证码</el-button>
           <!-- 阅读协议 -->
           </el-form-item>
           <el-form-item prop="checked">
               <el-checkbox v-model="loginForm.checked">我已阅读同意用户协议和隐私条款</el-checkbox>
           </el-form-item>
           <el-form-item><!-- 按钮登录 -->
               <el-button @click="login" style="width:100%" type="primary">登录</el-button>
           </el-form-item>
       </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // model属性
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 是否同意用户协议
      },
      // 定义表单验证规则 required不校验true或false
      // pattern校验是否符合格式
      loginRules: {
        mobile: [{ required: true, message: '您的手机号不能为空' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式不正确'
            //   以1开头 以3-9为第二位后面九个数字
          }], // 手机号 规则配置
        code: [{ required: true, message: '您的验证码不能为空' },
          {
            pattern: /^\d{6}$/,
            message: '验证码应该是6位'
          }
        ], // 验证码规则
        checked: [{ // 是否勾选的规则
          validator: function (rule, value, callback) {
            // rule是当前的校验规则
            // value是当前要校验的字段值
            // callback是一个回调函数  不论成功失败都会执行
            // 成功指向callback      失败执行callback(new Error("错误信息"))
            // new Error(错误信息) 就是我们提示的错误信息
            value ? callback() : callback(new Error('不同意进不去'))
          }
        }]
      }
    }
  },
  methods: { // promise方式
    login () {
      this.$refs.loginForm.validate().then(() => {
        this.$axios({
          url: '/authorizations', // 请求地址
          // params: {}, // 地址参数 指的是url参数会拼接到url地址上面 常常说的get参数
          // 上面定义的变量名和这里的参数名相同可以直接使用 多传了一个参数不影响
          data: this.loginForm, // body请求体参数   常用post   put  patch
          method: 'post'// 请求类型post/get/delete/put/patch默认值是get
        // 可以全大写或者全小写 等同于this.$axios.post
        }).then(result => {
          // 成功执行的函数 data里保存成功与否的数据
          //  把钥匙保存 token存于 本地缓存中
          window.localStorage.setItem('user-token', result.data.data.token)
          // this.$router 可以获取到路由实例对象
          // 跳转到主页
          this.$router.push('/home')
        }).catch(() => {
          this.$message({ message: '用户名或者密码错误', type: 'error' })
          // this.$message.error('用户名或密码错误')
          // 来自框架的提示消息直接用没有提示消息
          // 需要加上消息类型 两种方法都可以
        })
      })
    // 回调函数方式
    //   this.$refs.loginForm.validate(function (isOK) {
    //     if (isOK) {
    //       console.log('表单校验成功')
    //     } else {
    //       console.log('校验未成功')
    //     }
    //   })
    }
  }

}
</script>
<style lang = "less" scoped>
// 加了scoped只对当前组件起作用
// 如果需要写less需要在style标签里写lang="less"
.login {
    height : 100vh;
    display:flex;
    justify-content: center;
    &:before {
      background-image: url('../../assets/img/shou.jpg');
        content: '123';
        width: 100%;
        height: 700px;
        position: absolute;

 filter: blur(2px);//毛玻璃效果
background-size: cover;//自适应
 }
.login-card{
    background: rgba(0,0,0,0.2);
    z-index: 2;
     height: 340px;
    width: 440px;
    margin-top: 150px;
     .title{
    text-align: center;
   img{
       height: 40px;
    }
   }
  }
}
</style>
