<template>
<div class="wrapper">
  <div class="top_bar">我的订单</div>
  <template v-for="item in orderList" :key="item">
  <div class="product"  v-if="Object.keys(item.CartList).length!=0">
    <div class="product_msg">
      {{item.shopName}}
      <span v-if="item.pay">已支付</span>
      <span v-if="!(item.pay)">已取消</span>
    </div>
    <div class="product_picture">
      <img class="product_picture_left" v-for="value in item.CartList" :key="value.id" :src="value.url">
      <div class="product_picture_right">
        <div class="total_moneny">&yen;66.69</div>
        <div class="total_quantity">共6件</div>
      </div>
    </div>
  </div>
  </template>
</div>
<Docker/>
</template>
<script>
import Docker from '../home/Docker.vue'
/* import { useRoute } from 'vue-router' */
import { useStore } from 'vuex'
/* import { computed } from 'vue' */
export default {
  name: 'MyOrder',
  components: { Docker },
  setup () {
    /* const route = useRoute() */
    const store = useStore()
    /* const shopId = route.params.id */
    const orderList = store.state.orderList
    /*  const myOrderList = computed(() => {
      const unEmptyList = {}
      console.log('item1')
      for (const value in orderList) {
        const list = orderList[value].CartList
        for (const item in list) {
          const product = list[item]
          if (product.count > 0) {
            unEmptyList[item] = product
          }
        }
        orderList[value].CartList = unEmptyList
      }
      return orderList
    }) */
    /* const unEmptyList = () => {
      const unEmptyList = {}
      for (const value in orderList) {
        const list = orderList[value].CartList
        console.log(list, 'list')
        for (const item in list) {
          console.log(item, 'id')
          if (item.count > 0) {
            unEmptyList[item] = item
          }
        }
        orderList[value] = {}
      }
    }
    unEmptyList() */
    /* const CartList = computed(() => {
      const cartList = store.state.cartList[shopId]?.productList
      return cartList
    }) */
    return { /* CartList, */ orderList }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  position:absolute;
  top:.11rem;
  left:0;
  right:0;
  bottom:.49rem;
  background: #F5F5F5;
  .top_bar{
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: .16rem;
    color: #333333;
    padding:.11rem 0;
    margin-bottom:.16rem;
    background-color:#ffffff;
  }
  .product{
    height:1.1rem;
    background-color:#ffffff;
    margin:0 .16rem .1rem .16rem;
    &_msg{
      line-height: .22rem;
      font-family: PingFangSC-Medium;
      font-size: .16rem;
      color: #333333;
      position:relative;
      padding:.16rem;
      span{
        font-size:.14rem;
        color: #999999;
        position:absolute;
        right:.16rem;
      }
    }
    &_picture{
      height:.4rem;

      padding:0 .16rem;
      display:flex;
      align-items: center;
      position:relative;
      &_left{
        height:.4rem;
        width:.4rem;
        padding-right:.12rem;
      }
      &_right{
        position:absolute;
        right:.16rem;
      }
      .total_moneny{
        font-family: PingFangSC-Regular;
        font-size: .14rem;
        color: #E93B3B;
        text-align: right;
      }
      .total_quantity{
        padding-top:.04rem;
        font-size: .12rem;
        color: #333333;
        text-align: right;
        line-height: .14rem;
      }
    }
  }
}
</style>
