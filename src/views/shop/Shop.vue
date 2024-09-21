<template>
  <div class="wrapper">
    <div class="top_bar">
      <div class="back iconfont" @click="handleBack">&#xe697;</div>
        <i class="iconfont search_icon">&#xe60b;</i>
        <input class="input" placeholder="请输入商品名称搜索"/>
    </div>
    <ShopInfo :item="item" :hiddenBoder="true"/>
    <div class="product_area">
      <div class="product_area_content">
        <Product  :items="productobj" :id="bussinessId" />
      </div>
    </div>

    <div class="info_sidebar">
      <div class="info_sidebar_msg info_sidebar_msg--active" @click="handleTab('all')">全部商品</div>
      <div class="info_sidebar_msg" @click="handleTab('seckills')">秒杀</div>
      <div class="info_sidebar_msg" @click="handleTab('fruits')">新鲜水果</div>
      <div class="info_sidebar_msg" @click="handleTab('foods')">休闲食品</div>
      <div class="info_sidebar_msg" @click="handleTab('vegetables')">时令蔬菜</div>
      <div class="info_sidebar_msg" @click="handleTab('eggs')">肉蛋家禽</div>
    </div>
     <div class="masking_cover" v-if="false"></div>
    <Cart ref="cartShow"/>
  </div>
</template>

<script>
import axios from 'axios'
import ShopInfo from '../../components/Shop.vue'
import Product from '../../components/Product.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { products, allProducts } from '../../utils/productsData.js'
import Cart from './Cart.vue'
const useDifferentTab = () => {
  const productobj = ref(products)
  const handleTab = (tab) => {
    if (tab === 'all') {
      productobj.value = products
    } else {
      productobj.value = allProducts[tab]
    }
  }
  return { handleTab, productobj }
}

const backToHome = () => {
  const router = useRouter()
  const handleBack = () => {
    /* router.push({ name: 'Home' }) */
    router.back()
  }
  return { handleBack }
}
const nearbyShop = async (nearByObj) => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/dkbrownn/demo/nearby')
    nearByObj.value = response.data
  } catch (err) {
    console.log(err)
  }
}
const shopEffect = async (bussinessId, item) => {
  const Shop = ref([])
  await nearbyShop(Shop)
  item.value = Shop.value[bussinessId - 1]
}
export default {
  name: 'Shop',
  components: { ShopInfo, Product, Cart },
  setup () {
    const route = useRoute()
    const bussinessId = route.params.id
    const item = ref({})
    shopEffect(bussinessId, item)

    const { handleTab, productobj } = useDifferentTab()
    /* const route = useRoute()
    console.log(route) */
    const { handleBack } = backToHome()
    return { item, handleBack, allProducts, handleTab, productobj, bussinessId }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  padding: 0 .18rem;
  position: absolute;
  top:0;
  left: 0;
  right:0;
  bottom:0;
  .top_bar{
    display:flex;
    align-items: center;
    padding:.16rem 0 .16rem 0;
    position:relative;
  }
  .back{
  line-height:.32rem;
  width:.12rem;
  font-size: .25rem;
  padding:0 .16rem 0 0;
  color:#B6B6B6;
  }
  .search_icon{
    z-index:1;
    padding:0 0 0 .16rem;
    line-height: .32rem;
    color:#B7B7B7;
  }
  .input{
    position:absolute;
    height:.32rem;
    left:.29rem;
    right:0;
    border:none;
    border-radius:.16rem;
    background-color:#f5f5f5;
    margin:0;
    &::placeholder{
      font-size: .14rem;
      color: #333333;
      line-height: .16rem;
      padding-left:.43rem;
    }
  }
  .product_area{
    position:absolute;
    left:.93rem;
    right:.18rem;
    top:1.75rem;
    bottom:.55rem;
    &_content{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    overflow-y:auto;
    &:-webkit-scrollbar {
      display: none;
    }
    .test{
      width: 50%;
      height: .5rem;
      margin-bottom: .1rem;
      background-color: #4FB0F9;
    }
    }
  }
  .info_sidebar{
    font-family: PingFangSC-Regular;
    position:absolute;
    top:1.75rem;
    left:0;
    bottom:0;
    width:.76rem;
    background-color: #F5F5F5;
    border-radius: .02rem;
    &_msg{
      line-height:.4rem;
      font-size: .14rem;
      color: #333333;
      text-align: center;
      &--active{
       background: #fff;
      }
    }
  }
  .masking_cover{
    position:absolute;
    top:0;
    left:0;
    right:0;
    background-color:rgba(0,0,0,.5);
    bottom:1rem;
  }
}

</style>
