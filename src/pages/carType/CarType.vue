<template>
    <div>
        <Header></Header>
        <header-search :cities="searchList"></header-search>
        <List :cities="carTypeList" :letter="letter"></List>
        <Alpha :cities="carTypeList" @change="handleClickChange"></Alpha>
    </div>
</template>
<script>
import Header from './components/Header'
import HeaderSearch from '../../common/header/Search'
import List from './components/List'
import Alpha from './components/Alphabet'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CarType',
  components: {
    Header,
    HeaderSearch,
    List,
    Alpha
  },
  data () {
    return {
      cities: [],
      letter: '' // 用于传递值给list
    }
  },
  computed: {
    ...mapState(['searchList', 'carTypeList'])
  },
  methods: {
    ...mapActions(['getTypeInfo','getSearchList']),
    handleClickChange (data) { // 子组件传过来得值
      this.letter = data
    }
  },
  mounted () {
    this.getTypeInfo()
    this.getSearchList()
  }
}
</script>
<style lang="stylus" scoped>
</style>
