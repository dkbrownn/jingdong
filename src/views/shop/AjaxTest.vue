<!-- eslint-disable no-return-assign -->
<template>
  <button class="get" @click="getData">获取数据</button>
  <button class="post" @click="postData">添加数据</button>
  <button class="get"  @click="getProducts">获取商品</button>
  <div v-for="item in result" :key="item.id">
    <div><img :src="item.img_url"></div>
    <div>{{item.contentTitle}}</div>
    <div>{{item.contentHighLight}}</div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { post } from '../../utils/request.js'
export default {
  setup () {
    const result = ref([])
    const getData = () => {
      const resppp = post('api/auth/login', {
        username: '1',
        password: '1'/* ,
        email: '1' */
      })/* .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      }) */
      console.log(resppp)
    }
    const getProducts = () => {
      axios.get('http://localhost:3000/api/nearby').then((res) => {
        console.log(res.data)
        result.value = res.data
      }).catch((err) => {
        console.log(err)
      })
    }
    const postData = () => {
      axios.post('http://localhost:3000/api/auth/login', {
        username: '1',
        password: '3'
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err.response.data)
      })
    }
    return { getData, postData, result, getProducts }
  }
}
</script>
<style lang="scss" scoped>
.get, .post{
  height: .5rem;
  width:.5rem;
  margin-bottom: .27rem;
}
img{
   height: .5rem;
  width:.5rem;
}
</style>
