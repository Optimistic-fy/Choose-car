<template>
    <div class="all">
        <div v-if="this.$route.path === '/result'">
            <img class="jian" src="../../../static/img/推荐.png" alt="" />
        </div>
        <div class="resultWord" v-if="this.$route.path === '/result'">对比结果</div>
        <div class="posite">
            <div class="left">
                <div v-if="count(1)" >
                  <img src="../../../src/pages/images/car1.jpg" alt="" />
                  <p class="name">{{pushCar[0].modelName}}</p>
                  <p class="price">{{pushCar[0].minGuidePrice}}-{{pushCar[0].maxGuidePrice}}万</p>
                  <span class="iconfont delete" @click="judgeDelete(1)">&#xe646;</span>
                </div>
                <div v-if="!count(1)">
                  <img @click="$router.back(-1)" class="addCar" src="../../../static/img/加对比.png" alt="" />
                  <div class="choose">选择车型</div>
                </div>
            </div>
            <div class="vs">
                vs
            </div>
            <div class="right">
                <div v-if="!count(2)">
                  <img @click="$router.back(-1)" class="addCar" src="../../../static/img/加对比.png" alt="" />
                  <div class="choose">选择车型</div>
                </div>
                <div  v-if="count(2)">
                  <img src="../../../src/pages/images/car1.jpg" alt="">
                  <p class="name">{{pushCar[1].modelName}}</p>
                  <p class="price">{{pushCar[1].minGuidePrice}}-{{pushCar[1].maxGuidePrice}}万</p>
                  <span class="iconfont delete" @click="judgeDelete(0)">&#xe646;</span>
                </div>
            </div>
        </div>
        <div class="begin-compare">
            <div class="btn" v-if="!count(2)">
                开始对比
            </div>
            <router-link to="/result" v-if="count(2)">
                开始对比
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'VS',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['checkCarName', 'pushCar', 'chooseCar', 'deleteCheck']),
    count (index) {
      return function (index) {
        if (index === 1) return this.pushCar.length > 0
        if (index === 2) return this.pushCar.length === 2
      }
    }
  },
  methods: {
    ...mapActions(['getCheckCar', 'changePushCar']),
    show (index) {
      let result = this.$store.state.chooseCar || this.$route.path === '/result'
      return result && index === 1
    },
    judgeDelete (index) {
      if (index === 1) {
        if (this.pushCar.length === 2) {
          this.changePushCar([this.pushCar[index]])
        } else {
          this.changePushCar([])
        }
      }
      if (index === 0) this.changePushCar([this.pushCar[index]])
    },
    makeData () {
      this.$store.state.chooseCar = true
    },
    judgeApper () {
      let apper = !this.$store.state.chooseCar && this.$route.path === '/compare'
      return apper
    },
    notDelete (index) {
      let notdele = !this.$store.state.deleteCheck && index === 0
      return notdele
    },
    clickDeleteCheck () {
      this.$store.state.deleteCheck = false
    },
    judgeClickDelete () {
      let dele = this.$store.state.deleteCheck
      return dele
    }
  },
  updated: function () {
    // console.log(this.pushCar, 'pushCar')
    if(this.pushCar.length > 0){
      this.$store.state.modelId1 = this.pushCar[0].modelID
      if(this.pushCar.length > 1){
        this.$store.state.modelId2 = this.pushCar[1].modelID
      }
    }
  },
  mounted () {
    this.getCheckCar()
  }
}
</script>
<style lang="stylus" scoped>
    .all
        position absolute
        top 2rem
        width 100%
        border-top 1px solid #ccc
        padding 0 .2rem
        .jian
            position absolute
            width 25px
            margin-top 26px
            margin-left 29px
            z-index 2
        .resultWord
            position absolute
            top 15px
            margin-left 187px
            font-size 14px
            font-weight bold
        .posite
            display flex
            justify-content space-between
            align-items center
            overflow hidden
            .left
                float left
                width 117px
                text-align center
                margin-top 50px
                margin-left 25px
                overflow hidden
                img
                    width 100%
                    height 78px
                .name
                    font-size 12px
                    color #000
                .price
                    color rgb( 208, 2 ,27)
                    font-size 10px
                .delete
                    display block
                    color rgb( 208, 2 ,27)
                    font-size .5rem
                    margin-top 10px
                .addCar
                    height 113.42px
                    width 87px
                .choose
                    display block
                    height 25px
                    padding  10px 0 27.5px 0
                    color #000
            .vs
                float left
                font-size 32px
                color rgb( 4 ,13 ,90)
                margin 39px 23px 0 23px
            .right
                float left
                width 117px
                text-align center
                overflow hidden
                margin-top 50px
                margin-right 25px
                img
                    width 100%
                    height 78px
                .name
                    font-size 12px
                    color #000
                .price
                    color rgb( 208, 2 ,27)
                    font-size 10px
                .addCar
                    height 113.42px
                    width 87px
                .choose
                    display block
                    height 25px
                    padding  10px 0 27.5px 0
                    color #000
                .delete
                    display block
                    color rgb( 208, 2 ,27)
                    font-size .5rem
                    margin-top 10px
        .begin-compare
            position relative
            top 30px
            left 50%
            margin-left -175px
            height 30px
            line-height 30px
            width 350px
            text-align center
            background rgb(155 ,155 ,155)
            border-radius 15px
            .btn
                color #fff
            a
                display block
                border-radius 15px
                color #fff
                background rgb(208 ,2 ,27)
</style>
