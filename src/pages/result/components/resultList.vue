<template>
    <ul class="recommon">
        <li class="listItem">
          <p class="title">口碑评分</p>
          <div class="context" v-if="count">
            <span class="left">{{contrastCarData[0].praiseGrade}}</span>
            <span class="right">{{contrastCarData[1].praiseGrade}}</span>
            <progress-bar :percentNum="countBar('praiseGrade')" orientation="left" marginTop="24px"/>
          </div>
        </li>
        <li class="listItem">
            <p class="title">外观评分</p>
            <div class="context" v-if="count">
                <span class="left">{{contrastCarData[0].appearanceGrade}}</span>
                <span class="right">{{contrastCarData[1].appearanceGrade}}</span>
                <progress-bar :percentNum="countBar('appearanceGrade')" orientation="left" marginTop="24px"/>
            </div>
        </li>
        <li class="listItem-more">
            <p class="title-more">车型优势</p>
            <div class="context-more" v-if="count">
                <div class="left-more">
                  <div v-for="(carData, index) in contrastCarData[0].carModelAdvantage" :key="index">
                    <p>{{carData.advName}}</p>
                    <div style="display: flex;line-height: 25px;">
                      <span style="display: block;width: 30px">{{carData.advdegree}}</span>
                      <div style="flex: 1;padding-left: 10px"><progress-bar :percentNum="25" orientation="right"/></div>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
                <div class="right-more">
                  <div v-for="(carData, index) in contrastCarData[0].carModelAdvantage"  :key="index">
                    <p>{{carData.advName}}</p>
                    <div style="display: flex;line-height: 25px;">
                      <div style="flex: 1;padding-right: 10px"><progress-bar :percentNum="25" orientation="left"/></div>
                      <span style="display: block;width: 30px">{{carData.advdegree}}</span>
                    </div>
                  </div>
                </div>
            </div>
        </li>
      <li class="listItem-more">
        <p class="title-more">车型形象</p>
        <div class="context-more" v-if="count">
          <div class="left-more">
            <div v-for="(carData, index) in contrastCarData[0].carModelVisualize"  :key="index">
              <p>{{carData.advName}}</p>
              <div style="display: flex;line-height: 25px;">
                <span style="display: block;width: 30px">{{carData.advdegree}}</span>
                <div style="flex: 1;padding-left: 10px"><progress-bar :percentNum="25" orientation="right"/></div>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="right-more">
            <div v-for="(carData, index) in contrastCarData[0].carModelAdvantage" :key="index">
              <p>{{carData.advName}}</p>
              <div style="display: flex;line-height: 25px;">
                <div style="flex: 1;padding-right: 10px"><progress-bar :percentNum="25" orientation="left"/></div>
                <span style="display: block;width: 30px">{{carData.advdegree}}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
        <li class="listItem">
          <p class="title">销量</p>
          <div class="context" v-if="count">
            <span class="left">{{contrastCarData[0].sales}}</span>
            <span class="right">{{contrastCarData[1].sales}}</span>
            <progress-bar :percentNum="countBar('sales')" orientation="left" marginTop="24px"/>
          </div>
        </li>
        <li class="listItem">
          <p class="title">油耗评分</p>
          <div class="context" v-if="count">
            <span class="left">{{contrastCarData[0].oilWearGrade}}</span>
            <span class="right">{{contrastCarData[1].oilWearGrade}}</span>
            <progress-bar :percentNum="countBar('oilWearGrade')" orientation="left" marginTop="24px"/>
          </div>
        </li>
        <li class="listItem">
          <p class="title">动力评分</p>
          <div class="context" v-if="count">
            <span class="left">{{contrastCarData[0].powerGrade}}</span>
            <span class="right">{{contrastCarData[1].powerGrade}}</span>
            <progress-bar :percentNum="countBar('powerGrade')" orientation="left" marginTop="24px"/>
          </div>
        </li>
    </ul>
</template>
<script>
import ProgressBar from './ProgressBar'
export default {
  name: 'ResultList',
  components: {
    ProgressBar
  },
  props: {
    contrastCarData: Array
  },
  data () {
    return {
      data: {
        contrastDataLength: false
      }
    }
  },
  computed: {
    count () {
      return this.contrastCarData.length === 2
    },
    countBar (e) {
      return function (e) {
        // e 获取数据的相应属性
        const cData = this.contrastCarData
        // cData[0][e] 获取对应车的相应属性
        let percentNumber = Number(cData[0][e]) * 100 / (Number(cData[0][e]) + Number(cData[1][e]))
        return Math.round(percentNumber * 100) / 100
      }
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
    .recommon
        position absolute
        top 280px
        width 100%
        border-top 1px solid #ccc
        .listItem
            margin-top .2rem
            border 1px solid #ccc
            background #f7f7f7
            .title
                line-height 28px
                padding-left 9px
                font-size 14px
                font-weight bold
            .context
                background #fff
                overflow hidden
                padding .3rem .5rem
                p
                    text-align center
                .left
                    float left
                    width 3rem
                .right
                    float right
                    text-align right
                    width 3rem
        .listItem-more
            margin-top .2rem
            border 1px solid #ccc
            background #f7f7f7
            .title-more
                line-height 28px
                padding-left 9px
                font-size 14px
                font-weight bold
            .context-more
                background #fff
                overflow hidden
                padding .3rem .5rem
                p
                    text-align center
                .left-more
                    float left
                    width 3rem
                .line
                    width .04rem
                    height 2.5rem
                    float left
                    margin 0 .2rem
                    background #ebebec
                .right-more
                    float left
                    width 3rem
</style>
