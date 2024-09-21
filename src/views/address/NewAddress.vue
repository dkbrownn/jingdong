<template>
  <div class="wrapper">
      <div class="top_bar">
        <div class="iconfont top_bar_back" @click="handleBack">&#xe697;</div>
        <div class="top_bar_text">新建收货地址</div>
        <div class="new_address">保存</div>
      </div>
    <div class="edit_address">
      <div class="edit_address_city">
        所在城市:<input/>
      </div>
      <div class="edit_address_school">小区/大厦/学校:<input/></div>
      <div class="edit_address_number">楼号-门牌号:<input/></div>
      <div class="edit_address_name">收货人:<input/></div>
      <div class="edit_address_phone">联系电话:<input/></div>
    </div>
  </div>

</template>
<script>
import { useRouter } from 'vue-router'
/* import { useStore } from 'vuex'
import { computed, ref } from 'vue' */
export default {
  name: 'NewAddress',
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
    }
  }
 }
 .edit_address{
    margin-top:.12rem;
    padding:0 .18rem;
    height:2.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    input{
        height:.33rem;
        margin-left:.15rem;
        outline: none;
        border:none;
      }
    &_city{
      display: flex;
      align-items: center;
      line-height:.44rem;
      border-bottom: .01rem solid #F1F1F1;
    }
    &_school{
      display: flex;
      line-height:.44rem;
      display: flex;
      align-items: center;
      border-bottom: .01rem solid #F1F1F1;
    }
    &_number{
      display: flex;
      line-height:.44rem;
      display: flex;
      align-items: center;
      border-bottom: .01rem solid #F1F1F1;
    }
    &_name{
      display: flex;
      line-height:.44rem;
      display: flex;
      align-items: center;
      border-bottom: .01rem solid #F1F1F1;
    }
    &_phone{
      display: flex;
      display: flex;
      align-items: center;
      line-height:.44rem;
    }
 }
.router-link{
  text-decoration: none;
  color: #999999;
}
</style>
