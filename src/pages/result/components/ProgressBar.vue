<template>
  <div class="barContainer" :style="{marginTop:marginTop}">
    <div class="bar" :style="{width:percentNum + '%', float:orientation}">
      <div class="innerBar" :style="{float:orientation}"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    percentNum: Number,
    orientation: String,
    marginTop: String
  },
  data: function () {
    return {

    }
  },
  computed: {
    // console.log(percentNum)  计算
  }

  // 25,142,240,1      127,190,245,1
}
</script>
<style lang="stylus" scoped>
  .barContainer
    width 100%
    height 6px
    margin-top: 10px
    background  #f3f3f3
    .bar
      height  6px
      border-radius  4px
      background  #ffffff
      margin  0
      .innerBar
        height  6px
        border-radius  4px
        background  rgba(255,87,34,1);
        animation barMove 2s ease 1
        -moz-animation barMove 2s ease 1
        -webkit-animation barMove 2s ease 1
        animation-fill-mode  forwards
        -webkit-animation-fill-mode  forwards
      @keyframes barMove
        from {width:0%;}
        to {width:100%;}
      @-webkit-keyframes barMove
        from {width:0%;}
        to {width:100%;}

</style>
