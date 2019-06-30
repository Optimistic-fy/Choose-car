<template>
    <div class="header">
        <span class="iconfont back" @click="$router.back(-1)">&#xe63b;</span>
        <div class="header-title">慧选车</div>
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';

    .header
        background #f7f7f7
        height :$header-height
        line-height :$header-height
    .back
        float left
        font-weight bold
        color #000
        padding-left .2rem
    .header-title
        position :relative
        overflow :hidden
        text-align :center
        color :#000
        font-size :.32rem
</style>
