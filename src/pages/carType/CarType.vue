<template>
    <div>
        <Header></Header>
        <header-search :cities="searchList"></header-search>
        <List :cities="carTypeList" :letter="letter"></List>
        <Alpha :cities="carTypeList"
               @change="handleClickChange" 
               @showLetter="handleShowLetter" ></Alpha>
        <div class="choose-letter" v-if="showLetters">
          <div class="letter-show">{{letter}}</div>
        </div>
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
      letter: '', // 用于传递值给list
      showLetters: false
    }
  },
  computed: {
    ...mapState(['searchList', 'carTypeList'])
  },
  methods: {
    ...mapActions(['getTypeInfo','getSearchList']),
    handleClickChange (data) { // 子组件传过来得值
      this.letter = data
    },
    handleShowLetter(){
      this.showLetters = !this.showLetters
    }
  },
  mounted () {
    this.getTypeInfo()
    this.getSearchList()
  }
}
</script>
<style lang="stylus" scoped>
.choose-letter
  position absolute
  top 0px
  bottom 0px
  left 0px
  right 30px
  display flex
  align-items center
  margin-left 44%
  .letter-show
    width 60px
    height 60px
    line-height 60px
    border-radius 50%
    color #fff
    font-size 25px
    font-weight bold
    background #ccc
    text-align center
</style>
