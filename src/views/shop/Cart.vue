<!-- eslint-disable no-return-assign -->
<template>
  <div class="cart">
    <div class="msg_cart" v-if="false">请先选购商品</div>
    <!---->
    <div class="cart_products" v-if="show">
      <div class="cart_products_bar">
        <input type="checkbox" class="all_checkbox" v-model="check" @change="handleAllCheck">全选
        <div class="delete_cart" @click="deleteCartList">清除购物车</div>
      </div>
      <div class="cart_products_content"></div>
      <div class="product_area">
        <!---->
        <template  v-for="item in CartList" :key="item.id">
          <div v-if="(!item.count)==false" class="product">
          <input type="checkbox" class="product_checkbox" @click="()=>changeCheckFromCart(shopId,item.id)" v-model="item.check"/>
          <img class="product_img" :src="item.url">
          <div class="product_content">
            <div class="product_content_name">{{item.name}}</div>
            <div class="product_content_price">
              <div class="doll">&yen;</div>
              <div class="now_price">{{item.now_price}}
              </div>
              <div class="old_price">33.6</div>
            </div>
          </div>
          <div class="product_content_cartQuantity">
            <div class="iconfont delete" @click="()=>changeCartItemInfo(shopId,item.id,item,-1,)">&#xe612;</div>
            <div class="iconfont quantity">{{item.count}}</div>
            <div class="iconfont add" @click="()=>changeCartItemInfo(shopId,item.id,item,1,)">&#xe620;</div>
          </div>
          </div>
        </template>
        <!---->
      </div>
    </div>
      <div class="cart_icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png">
        <div class="msg_icon" @click="handleClick(total)"><div>{{total}}</div></div>
      </div>
      <div class="cart_msg" v-if="(total !== 0)">总计:<span>&yen;{{totalMoneny}}</span></div>
      <div class="cart_msg" v-if="(total === 0)">购物车是空的</div>
      <router-link :to="`/orderconfirmation/${shopId}`">
        <div class="cart_to_settle">
          去结算
        </div>
       </router-link>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, ref, watchEffect /* onUpdated */ } from 'vue'
import { useStore } from 'vuex'
import { products } from '../../utils/productsData.js'
import { useCartEffect } from '../../components/Product.vue'
import { setLocalSotrage } from '../../store/index.js'
export default {
  name: 'Cart',
  setup () {
    const check = ref(true)
    const route = useRoute()
    const store = useStore()
    const shopId = route.params.id
    const total = computed(() => {
      const shopCartList = store.state.cartList[shopId]?.productList
      let count = 0
      if (shopCartList) {
        for (const i in shopCartList) {
          const product = shopCartList[i]
          count += product.count
        }
      }
      return count
    })
    const isAllCheck = () => {
      const shopCartList = store.state.cartList[shopId]?.productList
      if (shopCartList) {
        // eslint-disable-next-line no-return-assign
        if (Object.keys(shopCartList).length === 0) { return check.value = false }
        for (const i in shopCartList) {
          const product = shopCartList[i]
          if (!(product.check)) {
            check.value = false
            return
          }
        }
        check.value = true
      } else check.value = false
    }
    watchEffect(() => { isAllCheck() })
    const totalMoneny = computed(() => {
      const shopCartList = store.state.cartList[shopId]?.productList
      let totalMoneny = 0
      if (shopCartList) {
        for (const i in shopCartList) {
          const product = shopCartList[i]
          if (product.check) { totalMoneny += (product.count * product.now_price) }
        }
      }
      totalMoneny = totalMoneny.toFixed(2)
      return totalMoneny
    })
    const CartList = computed(() => {
      const cartList = store.state.cartList[shopId]?.productList
      const unEmptyList = {}
      for (const item in cartList) {
        const product = cartList[item]
        if (product.count > 0 && product.check === true) {
          unEmptyList[item] = product
        }
      }
      return cartList
    })
    const handleAllCheck = () => {
      const shopCartList = store.state.cartList[shopId]?.productList
      if (check.value) {
        for (const i in shopCartList) {
          const product = shopCartList[i]
          product.check = true
        }
      } else {
        for (const i in shopCartList) {
          const product = shopCartList[i]
          product.check = false
        }
      }
    }
    const show = ref(false)
    const handleClick = (total) => {
      /* show.value = true */
      if (total > 0) { show.value ? show.value = false : show.value = true }
    }
    const obj = useCartEffect()
    const changeCartItemInfo = obj.changeCartItemInfo
    const deleteCartList = () => {
      store.state.cartList[shopId].productList = {}
      setLocalSotrage(store.state)
      show.value = false
    }
    const changeCheckFromCart = (shopId, productId) => {
      store.commit('changeCheckFromCart', { shopId, productId })
    }
    return { total, totalMoneny, products, show, handleClick, CartList, changeCartItemInfo, shopId, deleteCartList, check, changeCheckFromCart, handleAllCheck, isAllCheck }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
.cart{
    display:flex;
    position:absolute;
    left: 0;
    bottom:0;
    right:0;
    background: #f1f1f1;
    height: .5rem;
    box-shadow: 0 -1px 1px 0 #F1F1F1;
    .msg_cart{
      position:absolute;
      top:-.36rem;
      left:50%;
      transform: translateX(-50%);
      line-height: .31rem;
      text-decoration: none;
      color:#333333;
    }
    &_products{
      position:absolute;
      left:0;
      right:0;
      bottom:.5rem;
      background: #FFFFFF;
      font-size: 14px;
      color: #333333;
      &_bar{
        display:flex;
        height:.52rem;
        align-items: center;
        border-bottom: .01rem solid #F1F1F1;
        .all_checkbox{
          margin-right:.08rem;
          margin-left:.18rem;
          background: #FFFFFF;
          height:.2rem;
          width:.2rem;
          border-radius: .1rem;
        }
        .delete_cart{
          position:absolute;
          right:.18rem;
          font-size: 14px;
          color: #333333;
          line-height: 16px;
        }
      }
      .product_area{
        max-height: 2.75rem;
        overflow-y: auto;
        /* .product_checkbox{
          background: #FFFFFF;
          height:.2rem;
          width:.2rem;
          border-radius: .1rem;
        } */
        .product{
          display: flex;
          height:.55rem;
          font-family: "PingFang SC Regular";
          padding:.16rem 0 0 .18rem;
          align-items: center;
          &_checkbox{
          height:.2rem;
          width:.2rem;
          transform: scale(1.1);
        }
          &_img{
            height:.45rem;
            width: .45rem;
            padding-left: .16rem;
          }
          &_content{
            flex:1;
            margin-left: .16rem;
            height: .68rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            &_name{
              font-weight:bolder;
              width:.83rem;
              line-height: .2rem;
              font-size: 14px;
              color: #333333;
              margin-bottom: .06rem;
              @include ellipsis;
            }
            &_price{
              font-family: PingFangSC-Semibold;
              display: flex;
              width:.83rem;
              font-size: .14rem;
              color: #E93B3B;
              line-height: 16px;
              .doll{
                font-size:.12rem;
                transform: scale(.9);
                transform-origin: bottom;
              }
              .old_price{
                margin-left: .06rem;
                color:#333333;
                font-size:.12rem;
                text-decoration-line: line-through;
                transform: scale(.9);
              }
            }
            &_cartQuantity{
              display: flex;
              align-items: center;
              width:1rem;
              height:.68rem;
              .delete{
                flex:1;
                line-height: .23rem;
                font-size:.23rem;
              }
              .quantity{
                flex:1;
                margin-left:.03rem;
                font-size:.12rem;
                line-height: .23rem;
                text-align: center;
                color:#333333;
              }
              .add{
                flex:1;
                margin-left:.03rem;
                padding-right: 0.18rem;
                line-height: .23rem;
                font-size:.21rem;
                color:#0091FF;
              }
            }
          }
        }
      }
    }
    &_icon{
      color:rgba(13, 99, 191, 0.833);
      height:.5rem;
      width:.76rem;
      position:relative;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width:.28rem;
        height:.26rem;
      }
      .msg_icon{
        min-width:.1rem;
        min-height:.1rem;
        border-radius:50%;
        position: absolute;
        right:.21rem;
        top:.07rem;
        font-size:.08rem;
        background-color:#E93B3B;
        div{
          font-family: PingFangSC-Medium;
          font-size: .08rem;
          color: #FFFFFF;
          min-width:.09rem;
          line-height: .09rem;
          margin:0 auto;
          text-align: center;
        }
      }
    }
    &_msg{
      padding-left:.05rem;
      line-height:.5rem;
      width: 1.97rem;
      font-size: .12rem;
      color: #333333;
      font-size:.12rem;
      span{
        margin-left:.15rem;
        font-size: .18rem;
        color: #E93B3B;
      }
    }
    &_to_settle{
      position:absolute;
      right:0;
      bottom:0;
      width:1rem;
      line-height: .5rem;
      font-size:.14rem;
      background: #4FB0F9;
      text-align: center;
      color:#ffffff;
    }
  }
</style>
