<template>
  <div class="wrapper">
    <StaticPart1/>
    <NearBy/>
  </div>
  <Docker/>
</template>
<script>
import StaticPart1 from './StaticPart.vue'
import NearBy from './NearBy.vue'
import Docker from './Docker.vue'
export default {
  name: 'Home',
  components: { StaticPart1, NearBy, Docker }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .wrapper{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:.5rem;
    padding:0 .18rem .1rem .18rem;
    overflow-y:auto;
  }
</style>
