<template>
  <div class="wrapper">
    <img class="wrapper_img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="请输入用户名" v-model="username"/>
    </div>
    <div class="wrapper_input" >
      <input class="wrapper_input_content" placeholder="请输入密码" type="password" v-model="password"/>
    </div>
    <div class="wrapper_login-button" @click="handleLogin">登录</div>
    <div class="wrapper_login-link">
      <div class="login-link_left" @click="handleRegister">立即注册</div>
      <div class="login-link_middle"></div>
      <div class="login-link_right">忘记密码</div>
    </div>
    <Toast v-if="show" :message="toastMsg"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
/* import { post } from '../../utils/request' */
import Toast, { useToastEffect } from '../../components/Toast.vue'
import axios from 'axios'
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const { username, password } = toRefs(data)
  /* const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: username,
        password: password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  } */
  const handleLogin = () => {
    axios.post('https://my-json-server.typicode.com/dkbrownn/demo/register', {
      username: username,
      password: password
    }).then(() => {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }).catch(() => {
      showToast('请求失败')
    })
  }
  return { username, password, handleLogin }
}
const useRouterEffect = () => {
  const router = useRouter()
  const handleRegister = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegister }
}
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { show, toastMsg, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    // eslint-disable-next-line no-undef
    /* localStorage.isLogin = true
      router.push({ name: 'Home' }) */
    const { handleRegister } = useRouterEffect()
    return { handleLogin, handleRegister, username, password, showToast, show, toastMsg }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
  position:absolute;
  top:50%;
  left:0;
  right:0;
  transform:translateY(-50%);
  &_img{
    display:block;
    margin:0 auto .4rem auto;
    height:.66rem;
    width:.66rem;
  }
  &_input{
    height:.48rem;
    margin:0 .4rem .16rem  .4rem;
    background-color: #f9f9f9;
    padding:0 .16rem;
    border: .01rem solid rgba(0,0,0,.1);
    border-radius: .06rem;
    border-radius: .06rem;
    &_content{
      border:none;
      width:100%;
      height:.45rem;
      outline: none;
      background-color: #f9f9f9;
      &::placeholder{
        font-size:.16rem;
        line-height: .24rem;
        color: $content-loginColor
      }
    }
  }
  &_login-button{
    background: #0091FF;
    margin:.32rem .4rem .16rem .4rem;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    line-height:.48rem;
    font-size:.16rem;
    text-align: center;
  }
  &_login-link{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .14rem;
    color: $content-loginColor;
    .login-link_left{
      line-height: .2rem;
      padding:0 .135rem 0 0;
    }
    .login-link_middle{
      height: .13rem;
      width: .015rem;
      font-size:.12rem;
      background-color:$content-loginColor;
      transform:scale(0.9);
    }
    .login-link_right{
      padding:0 0 0 .135rem;
      line-height: .2rem;
    }
  }
}
</style>
