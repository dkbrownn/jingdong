<template>
    <div class="nearby__item">
      {{}}<img
        :src="item?.img_url"
        class="nearby__item__img"
      >
      <div :class="{'nearby__content': true,'nearby__content--bordered': hiddenBoder? false: true}">
        <div class="nearby__content__title">{{item.name}}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售{{item.scales}}</span>
          <span class="nearby__content__tag">起送{{item.expressLimit}}</span>
          <span class="nearby__content__tag">基础运费{{item.expressPrice}}</span>
        </div>
        <p class="nearby__content__highlight">{{item.slogan}}</p>
      </div>
    </div>
</template>

<script>

export default {
  name: 'ShopInfo',
  props: ['item', 'hiddenBoder', 'id']
}
</script>
<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/viriables.scss';

.nearby__item{
  display:flex;
  padding:.12rem 0;
  &__img{
    margin-right:.16rem;
    width: .56rem;
    height: .56rem;
  }
}
.nearby__content{
  flex:1;
  &--bordered{
    border-bottom:.01rem solid $content-bgColor;
  }
  &__title{
    line-height: .22rem;
    font-size:.16rem;
    color:$content-font-color;
  }
  &__tags{
    margin-top:.08rem;
    line-height: .18rem;
    font-size:.13rem;
    color:$content-font-color;
  }
  &__tag{
      margin-right:.16rem;
    }
    &__highlight{
      color:#E93B3B;
      line-height: .18rem;
      font-size:.13rem;
      margin:.08rem 0 0 0;
    }
}
</style>
