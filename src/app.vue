<template>
    <div class='app'>
        <h1>演示</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'hello word'
            }
        },
        created() {
            console.log('初始化')
        }
    }
</script>

<style lang="scss" scoped>
    @import "./static/css/common/function.scss";
    .app {
        width: px2rem(750);
        background: url('./static/images/bg.png') no-repeat left center;
        background-size: 100% auto;
        height: 100%;
        h1 {
            font-size: px2rem(15);
        }
    }
</style>