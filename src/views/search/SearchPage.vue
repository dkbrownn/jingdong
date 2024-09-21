<!-- eslint-disable no-unused-expressions -->
<template>
<div class="wrapper">
  <span class="back_to_home">
        <router-link to="/">取消</router-link>
   </span>
  <div class="search">
      <i class="iconfont">&#xe60b;</i>
      <input class="search_input" type="text" placeholder="尖椒" @keydown="inputSearch" v-model="searchProduct">
  </div>
  <div class="search_history">
    <div class="search_history_top">
      <div class="history">搜索历史</div>
      <div class="clear" @click="deleteAllSearch">清除搜索历史</div>
    </div>
    <div class="search_list" v-for="item in searchList" :key="item">{{item}}</div>
  </div>
  <div class="search_hot">
    <div class="search_hot_top">
      <div class="hot_search">热门历史</div>
    </div>
    <div class="search_list">尖椒肉丝</div>
  </div>
  </div>
</template>
<script>
import { ref } from 'vue'
const setLocalStorage = (list) => {
  localStorage.searchList = JSON.stringify(list)
}
const getLocalStorage = () => {
  return localStorage.searchList ? JSON.parse(localStorage.searchList) : []
}
export default {
  setup () {
    const searchList = ref(getLocalStorage())
    const searchProduct = ref('')
    const pushToList = (value) => {
      searchList.value.push(value)
      setLocalStorage(searchList.value)
      searchProduct.value = ''
    }
    const inputSearch = (e) => {
      // eslint-disable-next-line no-unused-expressions
      e.key === 'Enter' ? pushToList(searchProduct.value) : 0
    }
    const deleteAllSearch = () => {
      searchList.value = []
      setLocalStorage(searchList.value)
    }
    return { searchList, searchProduct, pushToList, inputSearch, deleteAllSearch }
  }
  /* methods: {
    inputSearch (e) {
      console.log(e)
      // eslint-disable-next-line no-unused-expressions
      e.key === 'Enter' ? this.searchList.push(this.searchProduct) : 0
    }
  } */
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  padding:.18rem;
  .back_to_home{
      position:absolute;
      top:.31rem;
      right:.11rem;
      font-family: PingFangSC-Regular;
      font-size: .16rem;
      color: #333333;
      line-height: .16rem;
      a{
        text-decoration: none;
        font-size: .16rem;
        color: #333333;
        line-height: .16rem;
      }

    }
}
.search{
    margin-bottom:.12rem;
    position:relative;
    height:.32rem;
    width:2.95rem;
    &_input{
      position:absolute;
      top:.06rem;
      left:0;
      right:0;
      height: .32rem;
      padding:0 .15rem 0 .5rem;
      border:none;
      background-color:#f5f5f5;
      color: #333333;
      border-radius:.16rem;
      font-size:.14rem;
    }
    .iconfont{
      color: $content-icColor;
      font-size:.19rem;
      position:relative;
      top:.12rem;
      padding:0 0 0 .17rem;
      z-index:1
    }
}
.search_history{
  &_top{
    height:.25rem;
    margin-top:.25rem;
    display: flex;
    align-items: center;
    .history{
      flex:1;
      font-family: PingFangSC-Medium;
      font-size: .16rem;
      color: #333333;
    }
    .clear{
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      color: #333333;
      padding-top:.03rem;
    }
  }
  .search_list{
    font-family: PingFangSC-Regular;
    display: inline-block;
    margin:.12rem .1rem 0 0;
    font-size: .14rem;
    padding:.08rem .1rem;
    color: #666666;
    line-height: .16rem;
    background: #F5F5F5;
    border-radius: .02rem;
    border-radius: .02rem;
  }
}
.search_hot{
  &_top{
    height:.25rem;
    margin-top:.25rem;
    display: flex;
    align-items: center;
    .hot_search{
      flex:1;
      font-family: PingFangSC-Medium;
      font-size: .16rem;
      color: #333333;
    }
  }
  .search_list{
    font-family: PingFangSC-Regular;
    display: inline-block;
    margin:.12rem .1rem 0 0;
    font-size: .14rem;
    padding:.08rem .1rem;
    color: #666666;
    line-height: .16rem;
    background: #F5F5F5;
    border-radius: .02rem;
    border-radius: .02rem;
  }
}
</style>
