<template>
   <div class="position">
      <span class="iconfont position_icon">&#xe631;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position_notice">&#xe7c4;</span>
    </div>
    <div class="search">
      <router-link to="/search">
        <i class="iconfont">&#xe60b;</i>
        <input class="search_input" type="text" placeholder="山姆会员商店优惠商品">
      </router-link>
    </div>
    <div class="banner">
      <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg" class="banner_img">
    </div>
    <div class="icons">
      <div class="icons_item" v-for="(item) in chosenList" :key=item.id>
        <img class="icons_item_img" :src="item.src">
        <p class="icons_item_desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const chosenList = [
      {
        id: 1,
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        id: 3,
        src: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        desc: '菜市场'
      },
      {
        id: 5,
        src: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        desc: '水果店'
      },
      {
        id: 7,
        src: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        desc: '鲜花绿植'
      },
      {
        id: 9,
        src: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        desc: '医药健康'
      },
      {
        id: 11,
        src: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        desc: '时尚家居'
      },
      {
        id: 13,
        src: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        desc: '烘焙蛋糕'
      },
      {
        id: 15,
        src: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        desc: '签到'
      },
      {
        id: 17,
        src: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        desc: '大牌免运'
      },
      {
        id: 19,
        src: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        desc: '红包套餐'
      }
    ]
    return { chosenList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .position{
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height:.22rem;
    font-size:.16rem;
    @include ellipsis;
    .position_icon{
      position:relative;
      top:.01rem;
      font-size:.2rem;
    }
     .position_notice{
      position:absolute;
      right:0;
      top:.17rem;
      font-size:.2rem;
     }
     color:$content-font-color;
  }
  .search{
    a{
      text-decoration: none;
    }
    margin-bottom:.12rem;
    position:relative;
    height:.32rem;
    &_input{
      position:absolute;
      top:0;
      left:0;
      right:0;
      height: .32rem;
      padding:0 .15rem 0 .5rem;
      border:none;
      background-color:#f5f5f5;
      color: $content-icColor;
      border-radius:.16rem;
      font-size:.14rem;
    }
    .iconfont{
      color: $content-icColor;
      font-size:.19rem;
      position:relative;
      top:.06rem;
      padding:0 0 0 .17rem;
      z-index:1
    }
  }
  .banner{
    height:0;
    overflow:hidden;
    padding-bottom:25.4%;
    &_img{
      width:100%;
    }
  }
  .icons{
    display:flex;
    flex-wrap:wrap;
    margin-top:.16rem;
    &_item{
      width:20%;
      text-align: center;
      &_img{
        width:.4rem;
        height:.4rem;
      }
      &_desc{
        margin:.09rem auto;
        font-size:.12rem;
        color:$content-font-color;
        width:.48rem;
        line-height:.17rem;
      }
    }
  }
  .gap{
    position:relative;
    height:.1rem;
    margin:0 -.18rem;
    background-color:$content-bgColor
  }
</style>
