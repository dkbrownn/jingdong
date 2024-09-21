<template>
  <div class="wrapper">
    <img class="wrapper_img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="请输入用户名" v-model="username"/>
    </div>
    <div class="wrapper_input" >
      <input class="wrapper_input_content" placeholder="请输入密码" type="password" v-model="password"/>
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="确认密码" type="password" v-model="ensurement"/>
    </div>
    <div class="wrapper_register-button" @click="handleRegister">注册</div>
    <div class="wrapper_login-button" @click="handleHadRegister">已有帐号去登陆</div>
    <Toast v-show="show" :message="toastMsg"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { toRefs, reactive } from 'vue'
// import { post } from '../../utils/request.js'
import Toast, { useToastEffect } from '../../components/Toast.vue'
import axios from 'axios'

// 数据与数据清空
const useRegisterDataEffect = () => {
  const userRegisterData = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const { username, password, ensurement } = toRefs(userRegisterData)
  const clearData = () => {
    password.value = ''
    ensurement.value = ''
  }
  return { username, password, ensurement, clearData }
}
// 跳转登录页面
const useToLoginEffect = () => {
  const router = useRouter()
  const handleHadRegister = () => {
    router.push({ name: 'Login' })
  }
  return { handleHadRegister }
}

// 处理注册逻辑和两次密码校验
const useRegisterEffect = (username, password, ensurement, showToast, clearData) => {
  const router = useRouter()
  /* const handleRegister = async () => {
    if (password.value === ensurement.value) {
      try {
        const result = await post('/api/user/register', {
          username: username,
          password: password
        })
        if (result?.errno === 0) {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        } else {
          showToast('注册失败')
        }
      } catch (e) {
        showToast('请求失败')
      }
    } else {
      clearData()
      showToast('两次密码输入不同')
    }
  } */
  const handleRegister = () => {
    if (password.value === ensurement.value) {
      axios.post('https://my-json-server.typicode.com/dkbrownn/demo/register', {
        username: username,
        password: password
      }).then(() => {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      }).catch(() => {
        showToast('请求失败')
      })
    } else {
      clearData()
      showToast('两次密码输入不同')
    }
  }
  return { handleRegister }
}
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { username, password, ensurement, clearData } = useRegisterDataEffect()
    const { handleHadRegister } = useToLoginEffect()
    const { show, toastMsg, showToast } = useToastEffect()
    const { handleRegister } = useRegisterEffect(username, password, ensurement, showToast, clearData)
    return { handleHadRegister, handleRegister, username, password, ensurement, show, toastMsg }
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
        color: $content-loginColor;
      }
    }
  }
  &_register-button{
    background: #0091FF;
    margin:.32rem .4rem .16rem .4rem;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    line-height:.48rem;
    font-size:.16rem;
    text-align: center;
  }
  &_login-button{
    display: block;
    font-size:.14rem;
    color:$content-loginColor;
    width:.98rem;
    margin:0 auto;
  }
}
</style>
