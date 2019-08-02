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
  },
  created() {
    //在刷新页面时将vuex中的值保存起来
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('msg', JSON.stringify(this.$store.state))
    })

    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem('msg') && 
      this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem('msg'))))
  },
}
</script>
<style lang="stylus" scoped>
</style>
