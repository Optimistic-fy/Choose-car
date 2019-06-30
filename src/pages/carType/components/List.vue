<template>
    <div class="all">
        <div class="list" ref="wrapper">
            <div>
                <div class="area"
                    v-for="(item , key) of cities"
                    :key="key"
                    :ref="key">
                    <div class="title  border-topbottom">{{key}}</div>
                    <div class="item-list"
                         v-for="innerItem of item"
                         :key="innerItem.id"
                         @click="handleClick($event, innerItem.mainBrandID)"
                         ref="event"
                        >
                        <img class="carLogo" src="../../../../static/img/m92100@3x.png" alt="" @click="handleClick" />
                        <div class="item border-bottom" >
                            {{innerItem.mainBrandName}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Drawer :closable="false" v-model="value1" width="65%" :scrollable="true" class="slide">
            <h2 class="slidetitle" v-if="Modelname">{{Modelname}}</h2>
            <h2 class="slidetitle" v-else>{{this.clickName}}</h2>
            <ul class="allPice">
                <li class="pice" v-for="(item,index) in Modellist" :key="index">
                    <div>
                        <div class="left">
                            <img src="../../images/car1.jpg" alt="" />
                        </div>
                        <div class="content">
                            <p class="name">{{item.modelName}}</p>
                            <p class="price">{{item.minGuidePrice}}-{{item.maxGuidePrice}}万</p>
                        </div>
                        <router-link to="/compare" class="right" v-if="toggle(item)" @click.native="getCarName(index)">
                            +对比
                        </router-link>
                        <div class="alreadyAdd" v-if="!toggle(item)">已加入</div>
                    </div>
                </li>
                <li>
                    <div v-if="hasData">暂无数据</div>
                </li>
            </ul>
        </Drawer>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations, mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'CarList',
  props: {
    cities: Object,
    letter: String
  },
  data () {
    return {
      value1: false,
      clickName: ''
    }
  },
  computed: {
    hasData () {
      return !this.Modellist.length
    },
    ...mapState(['Modellist', 'Modelname', 'pushCar'])
  },
  watch: { // 监听字母点击发生变化
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element) // scrollToElement一个滚动到指定元素的函数
    }
  },
  methods: {
    ...mapActions(['getModelList', 'changePushCar']),
    handleClick (e, mainBrandID) {
      this.value1 = true
      this.clickName = e.target.innerHTML
      this.$store.state.Modellist = [] // 清空state数据
      this.$store.state.Modelname = ''
      this.$store.state.mainBrandID = mainBrandID
      this.$store.dispatch('getModelList', this.clickName)
      this.getModelList()
    },
    toggle (item) {
      let res = true
      this.pushCar.forEach(obj => {
        if (!res) return
        if (obj.modelName === item.modelName) res = false
      })
      return res
    },
    getCarName (e) {
      this.value1 = false
      let newCar = this.pushCar
      if (this.pushCar.length === 2) newCar.pop()
      newCar.push(this.Modellist[e])
      this.changePushCar(newCar)
    }
  },
  mounted () { // 设置了Bscroll后默认点击事件为false   所以需要对事件进行打开click
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';

    .border-topbottom
        &:before
            border-color :#ccc
        &:after
            border-color :#ccc
    .border-bottom
        &:before
            border-color :#ccc
    .all
        .list
            position :absolute
            top: 2rem
            left :0
            right :0
            bottom :0
            overflow :hidden
            .area
                background #fff
                padding 0 .2rem
                background #ecebeb
            .title
                line-height :.54rem
                background #f7f7f7
                padding: .1rem
                color :#666
                font-size :.26rem
            .button-list
                overflow :hidden
                padding :.1rem .6rem .1rem .1rem
                .button-wrapper
                    float :left
                    width :33.33%
                    .button
                        margin : .1rem
                        padding : .1rem 0
                        text-align :center
                        border: .02rem solid #ccc
                        border-radius : .06rem
            .item-list
                height 63px
                line-height 63px
                .carLogo
                    position relative
                    top 9px
                    left 21px
                    height 45px
                    width 45px
                    float left
                    z-index: 1
                .item
                    line-height : 63px
                    padding-left :86px
                    background #fff
                    font-size 14px
    .slide
        .slidetitle
            position absolute
            top 0
            left 0
            right 0
            font-size 14px
            font-weight bold
            padding 5px 0 5px 9px
            background rgb(229 ,229 ,229)
        .allPice
            position absolute
            top 39px
            left .2rem
            right .5rem
            .pice
                overflow hidden
                .left
                    float left
                    width 80px
                    height 44.7px
                    img
                        width 100%
                        height 100%
                .content
                    width 70px
                    float left
                    padding 10px 0
                    .name
                        font-size 12px
                    .price
                        font-size 10px
                        color rgb(208 ,2 ,27)
                .right
                    display block
                    margin-top .3rem
                    float right
                    width 55px
                    height 20px
                    line-height 20px
                    border-radius .5rem
                    color #fff
                    background #c5020a
                    text-align center
                    font-size 11px
                .alreadyAdd
                    float left
                    margin-top 22px
                    margin-left 15px
</style>
