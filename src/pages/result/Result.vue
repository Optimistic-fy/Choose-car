<template>
    <div>
        <Header></Header>
        <header-search></header-search>
        <VS class="result-posit"></VS>
        <result-list class="resultList" :contrastCarData="contrastCarData"></result-list>
        <result-recommond></result-recommond>
    </div>
</template>
<script>
// import Bscroll from 'better-scroll';
import Header from '../../common/header/Header'
import HeaderSearch from '../../common/header/Search'
import VS from '../../common/vs/vs'
import ResultList from './components/resultList'
import ResultRecommond from './components/resultRecommond'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Result',
  components: {
    Header,
    HeaderSearch,
    VS,
    ResultList,
    ResultRecommond
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['contrastCarData'])
  },
  methods: {
    ...mapActions(['getContrastCarModel'])
  },
  mounted () {
    this.getContrastCarModel()
  }
}
</script>
<style lang="stylus" scoped>
    .result-posit
        position absolute
        top 97px !important
        border-bottom 1px solid #ccc
    .resultList
        background #fff
</style>
