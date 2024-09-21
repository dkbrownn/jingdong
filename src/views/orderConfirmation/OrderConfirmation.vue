<template>
  <div class="wrapper">
    <div class="top">
      <div class="top_bar">
        <div class="iconfont top_bar_back" @click="handleBack">&#xe697;</div>
        <div class="top_bar_text">确认订单</div>
      </div>
      <div class="order_address">
        收货地址
        <div class="order_address_area">北京理工大学国防科技园2号楼10层</div>
        <div class="order_address_revise iconfont">
          <router-link to="/address" class="router-link">&#xe601;</router-link>
          </div>
        <div class="order_address_msg">
          <div class="order_address_name">瑶妹  (先生)  </div>
          <div class="order_address_phone">1111111111</div>
        </div>
      </div>
    </div>
    <div class="product_area">
      沃尔玛
      <div class="product_msg" >
        <template v-for="item in CartList" :key="item.id">
        <div class="product" v-if="item.count!==0">
          <img class="product_img" :src="item.url">
          <div class="product_content">
            <div class="product_content_name">{{item.name}}</div>
            <div class="product_content_price">
              <div class="doll">&yen;</div>
              <div class="now_price">
                {{item.now_price}}
              </div>
              <div class="quantity">x{{item.count}}</div>
            </div>
          </div>
          <div class="total_moneny">
            <span>&yen;</span>
            {{shopTotalMoneny(item.now_price,item.count)}}
            </div>
        </div>
        </template>
      </div>
      <div class="open_msg">展开</div>
    </div>
    <div class="bottom_msg">
      <div class="msg_moneny">实付金额
        <div class="money_icon iconfont">&yen;</div>
        <div class="moneny">{{totalMoneny}}</div>
      </div>
      <div class="push_order" @click="handlePushOrder">提交订单</div>
    </div>
  </div>
  <div class="mask" v-if="show">
    <div class="mask_content" v-if="!paySucess">
      <h3 class="mask_content_title">确认要离开收银台</h3>
      <p class="mask_content_desc">请尽快完成支付</p>
      <div class="mask_content_btns">
        <div class="mask_content_btn mask_content_btn--first" @click="handleCancel(), addOrderList(false)">取消订单</div>
        <div class="mask_content_btn mask_content_btn--second" @click="confirmTheOrder(), addOrderList(true)">确认订单</div>
      </div>
    </div>
    <div class="mask_content" v-if="paySucess">
      <div class="fork_off" @click="handleCancel">X</div>
      <div class="bingo iconfont"><div>&#xe602;</div></div>
      <div class="mask_content_text">支付成功</div>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { Shop } from '../../utils/productsData.js'
export default {
  name: 'OrderConfirmation',
  setup () {
    const route = useRoute()
    const store = useStore()
    const shopId = route.params.id
    const show = ref(false)
    const paySucess = ref(false)
    const router = useRouter()
    const shopName = Shop[shopId].contentTitle
    const CartList = computed(() => {
      let cartList = store.state.cartList[shopId]?.productList
      const unEmptyList = {}
      for (const item in cartList) {
        const product = cartList[item]
        if (product.count > 0 && product.check === true) {
          unEmptyList[item] = product
        }
      }
      cartList = unEmptyList
      return cartList
    })
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
    const shopTotalMoneny = (price, count) => {
      return (price * count).toFixed(2)
    }
    const handleCancel = () => {
      show.value = false
      router.back()
    }
    const handlePushOrder = () => {
      show.value = true
    }
    const handleBack = () => {
      router.back()
    }
    const confirmTheOrder = () => {
      paySucess.value = true
    }
    const addOrderList = (pay) => {
      store.commit('addOrderList', { shopName, pay, CartList })
      // store.state.cartList[shopId].productList = {}
    }
    return { CartList, totalMoneny, shopTotalMoneny, show, handleCancel, handlePushOrder, handleBack, paySucess, addOrderList, confirmTheOrder }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
.wrapper{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  padding:0 .18rem;
  background: #F5F5F5;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
}
.top{
  height:1.96rem;
  &_bar{
    padding-top:.2rem;
    &_back{
      position:absolute;
      color: #FFFFFF;
      height: .21rem;
      width:.13rem;
    }
    &_text{
      font-family: PingFangSC-Regular;
      font-size: .16rem;
      color: #FFFFFF;
      width: .66rem;
      margin:0 auto;
    }
  }
  .order_address{
    margin-top:.22rem;
    height:.79rem;
    padding: .16rem;
    background: #FFFFFF;
    border-radius: .04rem;
    border-radius: .04rem;
    font-family: PingFangSC-Medium;
    font-size: .16rem;
    color: #333333;
    position:relative;
    &_area{
      padding:.14rem 0 .06rem 0;
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      line-height: .2rem;
      color: #333333;
    }
    &_revise{
      height: .16rem;
      width:.08rem;
      position:absolute;
      right:.15rem;
      top:50%;
      transform: translateY(-50%);
    }
    &_msg{
      display: flex;
    }
    &_name{
      font-family: PingFangSC-Regular;
      font-size: .12rem;
      color: #666666;
      padding:.06rem .06rem 0 0;
    }
    &_phone{
      font-family: PingFangSC-Regular;
      font-size: .12rem;
      color: #666666;
      padding:.06rem 0 0 .06rem;
    }
  }
}
.product_area{
  height:1.9rem;
  background: #FFFFFF;
  border-radius: .04rem;
  border-radius: .04rem;
  position:relative;
  padding:.16rem;
  font-size: .16rem;
  color: #333333;
  font-weight: bolder;
  .product_msg{
    height:1.36rem;
    overflow-y:auto;
  }
  .product{
    display:flex;
    align-items: center;
    position:relative;
    &_img{
      height:.45rem;
      width: .45rem;
    }
    &_content{
      flex:1;
      margin-left: .16rem;
      height: .68rem;
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
  .open_msg{
    position: absolute;
    bottom: .2rem;
    left:.16rem;
    right:.16rem;
    background: #F5F5F5;
    line-height: .29rem;
    text-align: center;
    font-weight:500;
  }
}
.bottom_msg{
  display:flex;
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  height:.5rem;
  .msg_moneny{
    display:flex;
    flex:1;
    line-height:.5rem;
    font-size: .14rem;
    color: #333333;
    margin-left:.25rem;
    font-family: PingFangSC-Regular;
    .money_icon{
      margin-left:.05rem;
      font-size:.12rem;
      font-weight: bold;
    }
    .moneny{
      font-weight: bold;
    }
  }
  .push_order{
    line-height:.5rem;
    font-size:.14rem;
    width: .99rem;
    background-color:#0091FF;
    text-align: center;
    font-size: .14rem;
    color: #FFFFFF;
  }
}
.mask{
  z-index:1;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background:rgba(0,0,0,.5);
  &_content {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: #FFFFFF;
    height:1.56rem;
    width:3rem;
    border-radius: .04rem;
    text-align: center;
    .fork_off{
      text-align: right;
      color:#666666;
      line-height:.13rem;
      padding:.12rem .12rem 0 0;
      font-size:.17rem;
    }
    .bingo{
      padding: .16rem 0 .25rem 0;
      color: #000000;
      line-height:.33rem;
      width:.5rem;
      margin:0 auto;
      div{
        transform: scale(2.7);
      }
    }
    &_text{
      text-align: center;
      line-height:.25rem;
      font-family: PingFangSC-Medium;
      font-size: .18rem;
      color: #333333;
    }
    &_title{
      margin:.24rem 0 0 0;
      line-height: .26rem;
      font-size:.18rem;
      color:#333;
    }
    &_{
      margin:.08rem 0 0 0;
      font-size:.14rem;
      color:#666666;
    }
    &_btns{
      margin:.24rem .58rem;
      display: flex;
    }
    &_btn{
      line-height:.32rem;
      width: .8rem;
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      color: #0091FF;
      border:.01rem solid #4fb0f9;
      border-radius:.16rem ;
      &--first{
        margin-right:.24rem;
      }
      &--second{
        background-color:#4fb0f9;
        font-size: .14rem;
        color: #FFFFFF;
      }
    }
  }
}
.router-link{
  text-decoration: none;
  color: #999999;
}
</style>
