<template>
    <div class="recommond">
        <p class="car">推荐车款</p>
        <div class="description border-bottom" v-for="(item ,index) in recommondStyle" :key="index">
            <p class="name">{{item.styleName}}</p>
            <span class="price">{{item.price}}万</span>
            <p class="year">{{item.horsepower}}马力 &nbsp; {{item.speedBox}}</p>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['recommondStyle'])
  },
  methods: {
    ...mapActions(['getRecommondStyle'])
  },
  mounted () {
    this.getRecommondStyle()
  }
}
</script>
<style lang="stylus" scoped>
    .recommond
        position absolute
        top 1180px
        width 100%
        border 1px solid #ccc
        background #fff
        margin-top 10px
        .car
            width 100%
            height 28px
            line-height 28px
            padding-left 9px
            font-size 14px
            font-weight bold
            background #f7f7f7
        .description
            overflow hidden
            margin 0 10px
            .name
                margin-top 19px
                margin-bottom 12px
                font-size 14px
            .year
                font-size 11px
                color rgb(155 ,155 ,155)
                margin-bottom 16px
            .price
                /*position absolute*/
                /*top 25px*/
                right 0
                font-size 14px;
                font-weight bold
                color rgb(208 ,2 ,27)
</style>
