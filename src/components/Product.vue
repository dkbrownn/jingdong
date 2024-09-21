<template>
  <div class="product" v-for="item in items" :key="item.id">
    <img class="product_img" :src="item.url" @click="getState">
    <div class="product_content">
      <div class="product_content_name">{{item.name}}</div>
      <div class="product_content_scales">{{item.scales}}</div>
      <div class="product_content_price">
        <div class="doll">&yen;</div>
        <div class="now_price">
          {{item.now_price}}
        </div>
        <div class="old_price">33.6</div>
      </div>
    </div>
    <div class="product_content_cartQuantity">
      <div class="iconfont delete" @click="()=> {
        changeCartItemInfo(id,item.id,item, -1, shopName)
        }">&#xe612;</div>
      <div class="iconfont quantity">{{cartList?.[id]?.productList?.[item.id]?.count || 0}}</div>
      <div class="iconfont add" @click="()=> {
        changeCartItemInfo(id,item.id,item, 1,shopName)
        }">&#xe620;</div>
    </div>
  </div>
</template>

<script>
// import { onUpdated, onMounted } from 'vue'
import { useStore } from 'vuex'
import { toRefs } from 'vue'
import { Shop } from '../utils/productsData'
export const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changeItemFromCart = (id, productId, product, num) => {
    store.commit('changeItemFromCart', {
      id, productId, product, num
    })
  }
  const changeShopName = (id, shopName) => {
    store.commit('changeShopName', { id, shopName })
  }
  const changeCartItemInfo = (id, productId, product, num, shopName) => {
    changeItemFromCart(id, productId, product, num)
    changeShopName(id, shopName)
  }
  return { cartList, changeItemFromCart, changeCartItemInfo }
}
export default {
  name: 'Product',
  props: ['items', 'id'],
  setup (props) {
    const { cartList, changeItemFromCart, changeCartItemInfo } = useCartEffect()
    const shopName = Shop[props.id].contentTitle
    /* onMounted(() => {
      console.log(props.items)
    })
    onUpdated(() => {
      console.log(props.items)
    }) */return { cartList, changeItemFromCart, shopName, changeCartItemInfo }
  }
  /* updated () {
    console.log(this.items)
  } */
}
</script>

<style lang="scss" scoped>

@import  '../style/mixins.scss';

.product{
  display: flex;
  height: .8rem;
  font-family: "PingFang SC Regular";
  border-bottom: .01rem solid #F1F1F1;
  margin-bottom:.12rem;
  &_img{
    height:.68rem;
    width: .68rem;
  }
  &_content{
    margin-left: .16rem;
    height: .68rem;
    width:.83rem;
    display: flex;
    flex-direction: column;
    &_name{
      font-family: PingFangSC-Medium;
      font-weight:bolder;
      width:.83rem;
      line-height: .2rem;
      font-size: .14rem;
      color: #333333;
      margin-bottom: .06rem;
      @include ellipsis;
    }
    &_scales{
      font-family: PingFangSC-Regular;
      width:.83rem;
      font-size: .12rem;
      color: #333333;
      line-height: .16rem;
      margin-bottom: .06rem;
    }
    &_price{
      font-family: PingFangSC-Semibold;
      display: flex;
      width:.83rem;
      font-size: .14rem;
      color: #E93B3B;
      line-height: .16rem;
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
      justify-content: center;
      width:.7rem;
      height:.68rem;
      align-items: flex-end;
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
        line-height: .23rem;
        font-size:.21rem;
        color:#0091FF;
      }
    }
  }
}
</style>
