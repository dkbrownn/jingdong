<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMsg: ''
  })
  const showToast = (msg) => {
    toastData.show = true
    toastData.toastMsg = msg
    setTimeout(() => {
      toastData.show = false
      toastData.toastMsg = ''
    }, 3000)
  }
  const { show, toastMsg } = toRefs(toastData)
  return { showToast, show, toastMsg }
}
export default {
  name: 'Toast',
  props: ['message']
}
</script>

<style lang="scss" scoped>
.toast{
  position:fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  padding:.1rem;
  background-color:rgba(0,0,0,.35);
  border-radius:.05rem;
  color:#fff;
}
</style>
