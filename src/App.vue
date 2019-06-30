<template>
  <div id="app">
    <!-- keep-alive用于缓存  exclude用于取消缓存-->
    <Loading />
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Loading from './common/Loading/loading'
export default {
  name:"Home",
  components:{
    Loading
  }
}
</script>
<style lang="stylus" scoped>
</style>
