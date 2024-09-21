<template>
  <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <router-link :to="`/shop/${item.id}`" v-for="(item) in nearByObj" :key="item.id">
        <ShopInfo :item="item" :hiddenBoder="false" />
        </router-link>
  </div>
</template>

<script>
import ShopInfo from '../../components/Shop.vue'
/* import { business } from '../../utils/productsData' */
import axios from 'axios'
import { ref } from 'vue'
const nearbyShop = async (nearByObj) => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/dkbrownn/demo/nearby')
    nearByObj.value = response.data
  } catch (err) {
    console.log(err)
  }
}
export default {
  name: 'NearBy',
  components: { ShopInfo },
  setup () {
    const nearByObj = ref([])
    nearbyShop(nearByObj)
    return { nearByObj }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.nearby{
    &__title{
      margin:.16rem 0 .04rem 0;
      font-size: .18rem;
      font-weight: normal;
      color:$content-font-color;
      }
      &__item{
        display:flex;
        padding:.12rem 0;
        &__img{
          margin-right:.16rem;
          width: .56rem;
          height: .56rem;
        }
      }
      &__content{
        flex:1;
        border-bottom:.01rem solid $content-bgColor;
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
      a {
        text-decoration-line: none;
      }
  }
</style>
