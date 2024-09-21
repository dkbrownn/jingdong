<template>
<div class="wrapper">
  <div class="top_bar">我的全部购物车</div>
  <template v-for="item in CartList" :key="item.shopName">
    <div class="product_area">
      <div class="product_shop_name">{{item?.shopName}}</div>
        <div class="product" v-for="value in item.productList" :key="value.id">
          <img class="product_img" :src="value.url">
          <div class="product_content">
            <div class="product_content_name">{{value.name}}</div>
            <div class="product_content_price">
              <div class="doll">&yen;</div>
              <div class="now_price">
                {{value.now_price}}
              </div>
              <div class="quantity">X{{value.count}}</div>
            </div>
          </div>
          <div class="total_moneny">
            <span>&yen;{{(value.now_price*value.count).toFixed(1)}}</span>
            </div>
        </div>
      <!-- <div class="open_msg">111111111</div> -->
    </div>
    </template>
</div>
<Docker/>
</template>
<script>
import Docker from '../home/Docker.vue'
/* import { useRoute } from 'vue-router' */
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'MyOrder',
  components: { Docker },
  setup () {
    const store = useStore()
    const cartList = store.state.cartList
    const unEmptyList = {}
    let shopCount = 0
    const CartList = computed(() => {
      for (const item in cartList) {
        const productList = cartList[item].productList
        const shopName = cartList[item].shopName
        const list = {}
        for (const value in productList) {
          if (productList[value].count > 0) {
            list[value] = productList[value]
            shopCount++
          }
        }
        // eslint-disable-next-line no-unused-expressions, vue/no-side-effects-in-computed-properties
        Object.keys(list).length > 0 ? unEmptyList[item] = { shopName, productList: list, shopCount } : 1
        shopCount = 0
      }
      return unEmptyList
    })
    return { CartList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
.wrapper{
  position:absolute;
  top:.11rem;
  left:0;
  right:0;
  bottom:.49rem;
  background: #F5F5F5;
  padding:0 .18rem;
  overflow-y: auto;
  .top_bar{
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: .16rem;
    color: #333333;
    padding:.11rem 0;
    margin-bottom:.16rem;
    background-color:#ffffff;
    position:fixed;
    left:0;
    right: 0;
    z-index: 1;
  }
  .product_area{
  max-height:1.9rem;
  background: #FFFFFF;
  border-radius: .04rem;
  border-radius: .04rem;
  position:relative;
  padding:.16rem;
  font-size: .16rem;
  color: #333333;
  font-weight: bolder;
  margin-top:.6rem;
  overflow-y: auto;
  .product_shop_name{
    padding: 0 0 .16rem .0;
  }
  .product{
    display:flex;
    align-items: center;
    position:relative;
    height:.45rem;
    margin-bottom: .05rem;
    &_img{
      height:.45rem;
      width: .45rem;
    }
    &_content{
      flex:1;
      margin-left: .16rem;
      height: .45rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight:500;
      &_name{
        font-weight:bolder;
        width:1rem;
        line-height: .2rem;
        font-size: .14rem;
        color: #333333;
        margin-bottom: .06rem;
        @include ellipsis;
      }
      &_price{
        display: flex;
      }
    }
    .now_price,.quantity{
      font-size: .14rem;
      color: #E93B3B;
    }
    .total_moneny{
      position:absolute;
      bottom: .1rem;
      right:.16rem;
      font-size: .14rem;
      color: #000000;
      line-height:.14rem;
    }
  }
  /* .open_msg{
    position: absolute;
    bottom: .2rem;
    left:.16rem;
    right:.16rem;
    background: #F5F5F5;
    line-height: .29rem;
    text-align: center;
    font-weight:500;
  } */
}
}
</style>
