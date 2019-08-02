<template>
    <div>
        <div class="top">
            <img src="../../../static/img/group4@3x.png" alt="" class="logo" />
            <div class="search" v-if="this.$route.path !== '/result'">
                <input v-model="keyword" class="search-input" type="text" placeholder="请输入想搜索的车型" />
                <div class="iconfont search-icon">&#xe643;</div>
            </div>
        </div>
        <div class="search-content" v-show="keyword">
            <div ref="serresult" class="search-result">
              <div style="padding: .2rem">搜索结果如下</div>
              <ul class="carpice" ref="searchContent">
                <li class="pice" v-for="(item,index) in searchList" :key="index">
                  <div >
                    <img src="../../pages/images/car1.jpg" alt="" />
                    <p class="name">{{item.modelName}}</p>
                    <p class="price">{{item.minGuidePrice}}-{{item.maxGuidePrice}}万</p>
                    <router-link to="/compare" class="compares" v-if="toggle(item)" @click.native="updateCar(item)">+对比</router-link>
                    <div v-if="!toggle(item)" class="hasChecked">已加入</div>
                  </div>
                </li>
                <li class="search-item border-bottom" v-show="hasData" >没有找到匹配数据</li>
              </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CarSearch',
  data () {
    return {
      keyword: '',
      timer: null, // 用于提高效率
      value1: false,
      contentHeight: 0
    }
  },
  methods: {
    ...mapActions(['changePushCar', 'getSearchList']),
    handleClick (city) {
      this.keyword = ''
    },
    toggle (item) {
      let res = true
      this.pushCar.forEach(obj => {
        if (!res) return
        if (obj.modelName === item.modelName) res = false
      })
      return res
    },
    updateCar (item) {
      let newCar = this.pushCar
      if (this.pushCar.length === 2) newCar.pop()
      newCar.push(item)
      this.changePushCar(newCar)
      this.keyword = ''
    },
    _scroll () {
      this.scroll = new BScroll('.search-content', {click: true})
    },
    _getHeight () {
      this.$refs.serresult.style.height = this.contentHeight + 'px'
    }
  },
  computed: {
    ...mapState(['pushCar', 'searchList']),
    hasData () {
      return !this.searchList.length
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.$store.state.searchList = []
      } else {
        this.$store.state.keywords = this.keyword
        this.getSearchList(this.keyword)
      }
    }
  },
  mounted () {
  },
  updated () {
    // 38  为搜索结果所占的高度
    
    console.log('Height', this.$refs.searchContent.offsetHeight)
    let heightStyle = this.$refs.searchContent.offsetHeight + 38
    console.log('heightStyle', heightStyle)
    this.contentHeight = heightStyle
    if (this.searchList) {
      this.$nextTick(() => {
        this._getHeight()
        this._scroll()
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .logo
        margin 15px 10px 0 10px
        float left
        height .5rem
    .search
        float left
        margin-top .18rem
        padding : 0 .1rem
        border:1px solid #ccc
        border-radius : 10px
        box-shadow #ccc 0 .02rem .02rem
        background rgba(142 ,142, 147, 0.12)
        width 73%
        .search-icon
            float left
            width 10%
            font-size .42rem
            text-align center
            color rgb(142, 142, 147)
            box-sizing : border-box
        .search-input
            width : 80%
            height : .62rem
            line-height : .62rem
            color :#666
            padding : .2rem .2rem .2rem 0
            box-sizing : border-box
            background rgba(239 ,239, 251, 0.12)
            font-size 14px
    .search-content
        overflow :hidden
        position :absolute
        top: 1.88rem
        left :0
        right: 0
        bottom :0
        z-index: 9
        background :#eee
        .search-item
            color :#666
            background :#fff
            overflow hidden
            .carList
                margin 5px 0 5px 31px
                .carImg
                    width 114px
                    height 76px
                .compares
                    display block
                    width 55px
                    height 20px
                    line-height 20px
                    border-radius .5rem
                    background #c5020a
                    color #fff
                    text-align center
                    margin-left 30px
                    margin-top 19px

      .carpice
        width 100%
        margin-top .2rem
        display flex
        flex-wrap wrap
        justify-content left
        overflow hidden
        .pice
          width 32%
          background #fff
          margin-bottom 10px
          margin-left  4px
          text-align center
          overflow hidden
          p
            line-height 20px
          img
            width 100%
          .name
            font-size 12px
          .price
            font-size 10px
            color rgb(208 ,2 ,27)
          a
            display block
            width 55px
            height 20px
            line-height 20px
            background rgb(208 ,2 ,27)
            border-radius 10px
            font-size 11px
            text-align center
            color #ffffff
            margin 10px auto 10px auto
          .hasChecked
            width 55px
            height 20px
            line-height 20px
            border-radius 10px
            font-size 11px
            text-align center
            color #ffffff
            margin 10px auto 10px auto
            background rgb(155 ,155 ,155)
</style>
