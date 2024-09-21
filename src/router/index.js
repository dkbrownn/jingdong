import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'
import Shop from '../views/shop/Shop.vue'
import OrderConfirmation from '../views/orderConfirmation/OrderConfirmation.vue'
import MyOrder from '../views/my/MyOrder.vue'
import Address from '../views/address/Address.vue'
import WriteAddress from '../views/address/WriteAddress.vue'
import NewAddress from '../views/address/NewAddress.vue'
import My from '../views/my/My.vue'
import SearchPage from '../views/search/SearchPage.vue'
import MyCart from '../views/my/MyCart.vue'
import Test from '../views/shop/AjaxTest.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'Cart',
    component: MyCart
  },
  {
    path: '/myorder',
    name: 'MyOrder',
    component: MyOrder
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '/writeaddress',
    name: 'WriteAddress',
    component: WriteAddress
  },
  {
    path: '/newaddress',
    name: 'NewAddress',
    component: NewAddress
  },
  {
    path: '/orderconfirmation/:id',
    name: 'OrderConfirmation',
    component: OrderConfirmation
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
    // 仅访问login时才执行此函数to值跳转路由，from来自那个，next（）调用后才可以执行
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // 仅访问login时才执行此函数to值跳转路由，from来自那个，next（）调用后才可以执行
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 所有路由切换时都要执行该函数 const isRegister = localStorage.isRegister || false

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
