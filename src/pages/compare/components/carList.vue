<template>
    <div class="carlist">
        <p class="title" >竞品车推荐</p>
        <ul class="carpice">
            <li class="pice" v-for="(item,index) in recommondCarList" :key="index">
                <div v-if="index < 3">
                    <img src="../../images/car1.jpg" alt="" />
                    <p class="name">{{item.modelName}}</p>
                    <p class="price">{{item.minGuidePrice}}-{{item.maxGuidePrice}}万</p>
                    <router-link to="" class="allow-compare" v-if="toggle(item)" @click.native="updateCar(item)">+对比</router-link>
                    <div v-if="!toggle(item)" class="hasChecked">已加入</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CarList',
  data () {
    return {
      inList: '',
      isShow: []
    }
  },
  props: ['recommondCarList'],
  computed: {
    ...mapState(['pushCar'])
  },
  methods: {
    ...mapActions(['getCheckCar', 'changePushCar']),
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
    },
    mounted() {
      this.getCheckCar()
    },
  }
}
</script>
<style lang="stylus" scoped>
    .carlist
        position relative
        top 338px
        width 100%
        overflow hidden
        .title
            margin-left 14px
            font-size 12px
        .carpice
            width 100%
            margin-top .2rem
            display flex
            justify-content space-between
            .pice
                float left
                line-height 1rem
                text-align center
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
                    color #fff
                    margin 19px auto 10px auto
                .hasChecked
                    width 55px
                    height 20px
                    line-height 20px
                    border-radius 10px
                    font-size 11px
                    text-align center
                    color #fff
                    margin 19px auto 10px auto
                    background rgb(155 ,155 ,155)
</style>
