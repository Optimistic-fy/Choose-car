<template>
    <div class="header">
        <div class="header-title">慧选车</div>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';

    .header
        background #f7f7f7
        height :$header-height
        line-height :$header-height
    .header-title
        position :relative
        overflow :hidden
        text-align :center
        color :#000
        font-size :.32rem
</style>
