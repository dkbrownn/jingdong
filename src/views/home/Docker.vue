<template>
  <div class="docker">
    <span :class="{docker_item:true , 'docker_item--active': value.path===pageId}" v-for="(value,key) in listObj" :key="key">
      <router-link :to="value.to" class="link_to">
      <div class="iconfont" v-html="value.iconfont"></div>
        <div class="docker_title">{{value.dockerTitle}}</div>
      </router-link>
      </span>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'Docker',
  setup () {
    const route = useRoute()
    const pageId = route.path
    const listObj = ({
      first: {
        iconfont: '&#xe613;',
        dockerTitle: '首页',
        path: '/',
        to: { name: 'Home' }
      },
      second: {
        iconfont: '&#xe660;',
        dockerTitle: '购物车',
        path: '/cart',
        to: { name: 'Cart' }
      },
      third: {
        iconfont: '&#xe713;',
        dockerTitle: '订单',
        path: '/myorder',
        to: { name: 'MyOrder' }
      },
      fourth: {
        iconfont: '&#xe630;',
        dockerTitle: '我的',
        path: '/my',
        to: { name: 'My' }
      }
    })
    return { listObj, pageId }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
  .docker{
    display:flex;
    position:absolute;
    padding:0 .18rem;
    box-sizing:border-box;
    left:0;
    bottom:0;
    width:100%;
    height:0.49rem;
    border-top:.01rem solid $content-bgColor;
    &_item{
    flex:1;
    text-align:center;
    color:$content-font-color;
    .iconfont{
      margin:.07rem 0 .02rem 0;
      font-size:.2rem;
    }
    a{
      color:$content-font-color;
       text-decoration: none;
    }
    &--active{
    color:#1FA4FC;
    a{
       color:#1FA4FC;
       text-decoration: none;
    }
  }
  }
  &_title{
    font-size:.2rem;
    transform:scale(.5);
    transform-origin:center top;
  }
  }
</style>
