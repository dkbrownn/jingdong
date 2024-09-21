<template>
  <div class="wrapper">
      <div class="top_bar">
        <div class="iconfont top_bar_back" @click="handleBack">&#xe697;</div>
        <div class="top_bar_text">管理收货地址</div>
         <router-link to="/newaddress" class="router-link">
        <div class="new_address">新建</div>
        </router-link>
      </div>

      <div class="address_area">
        <span>我的地址</span>
      <div class="order_address">
        <div class="order_address_msg">
          <div class="order_address_name">瑶妹</div>
          <div class="order_address_phone">1111111111</div>
        </div>
        <div class="order_address_area">北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层</div>
        <div class="order_address_revise iconfont">
          <router-link to="/writeaddress" class="router-link">&#xe601;</router-link>
          </div>
      </div>
      </div>
  </div>

</template>
<script>
import { useRouter } from 'vue-router'
/* import { useStore } from 'vuex'
import { computed, ref } from 'vue' */
export default {
  name: 'OrderConfirmation',
  setup () {
    const router = useRouter()
    const handleBack = () => {
      router.back()
    }
    return { handleBack }
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
  background: #F1F1F1;
}
 .top{
  &_bar{
    background: #FFFFFF;
    display: flex;
    padding:.2rem .18rem .11rem .18rem;
    align-items: center;
    &_back{
      position:absolute;
      color: #333333;
      line-height: .21rem;
      width:.13rem;
    }
    &_text{
      font-family: PingFangSC-Regular;
      font-size: .16rem;
      color: #333333;
      width:.96rem;
      line-height: .22rem;
      margin:0 auto;
    }
    .new_address{
      font-size: .14rem;
      color: #333333;
      text-align: right;
      text-decoration: none;
    }
  }
 }
  .address_area{
    position:absolute;
    top:.5rem;
    left:0;
    right:0;
    bottom:0;
    background-color: #F5F5F5;
    padding:0 .18rem;
    span{
      display: flex;
      align-items: center;
      height:.5rem;
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      color: #333333;
    }
  }
  .order_address{
    height:.79rem;
    padding: .18rem .16rem;
    background: #FFFFFF;
    border-radius: .04rem;
    border-radius: .04rem;
    font-family: PingFangSC-Medium;
    font-size: .16rem;
    color: #333333;
    position:relative;
    &_area{
      padding:.08rem 0 0 0;
      line-height: .2rem;
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      height: .4rem;
      width:2.6rem;
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
      font-size: .14rem;
      color: #999999
    }
    &_phone{
      font-family: PingFangSC-Regular;
      margin-left:.66rem;
      font-size: .14rem;
      color: #999999;
    }
  }
.router-link{
  text-decoration: none;
  color: #999999;
}
</style>
