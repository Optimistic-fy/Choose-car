<template>
    <div>
        <Header></Header>
        <header-search :cities="searchList"></header-search>
        <VS></VS>
        <car-list :recommondCarList="recommondCar"></car-list>
    </div>
</template>
<script>
// import Bscroll from 'better-scroll';
import Header from '../../common/header/Header'
import HeaderSearch from '../../common/header/Search'
import VS from '../../common/vs/vs'
import CarList from './components/carList'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Compare',
  components: {
    Header,
    HeaderSearch,
    VS,
    CarList
  },
  data () {
    return {
      cities: {},
      recommondCarList: {}
    }
  },
  computed: {
    ...mapState(['searchList', 'recommondCar'])
  },
  methods: {
    ...mapActions(['getSearchList', 'getRecommondCar']),
    handleClickChange (data) { // 子组件传过来得值
      console.log(data)
      this.letter = data
    }
  },
  mounted () {
    this.getSearchList()
    this.getRecommondCar()
  }
}
</script>
<style lang="stylus" scoped>

</style>
