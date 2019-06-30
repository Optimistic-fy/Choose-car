<template>
    <ul class="recommon">
        <li class="listItem">
            <p class="title">车型优势</p>
            <div class="context">
                <Tooltip content="3 done / 3 in progress / 4 to do" style="width: 100%">
                    <Progress :percent="100" :success-percent="50" />
                </Tooltip>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .recommon
        position absolute
        top 4.5rem
        width 100%
        .listItem
            margin-top .2rem
            border 1px solid #ccc
            background #fff
            .title
                border-bottom 1px solid #eee
                line-height .8rem
                padding-left .2rem
                font-size .25rem
                font-weight bold
                border-bottom 2px solid #d6d5d5
            .context 
                background #fff
                overflow hidden
                padding .3rem .5rem
                .left
                    float left
                .right
                    float right
</style>
