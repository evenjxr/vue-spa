<template>
    <div class='app'>
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
            console.log(33333)
        }
    }
</script>

<style lang="sass" scoped>
    .app {
        width: 800px;
        margin: 100px auto;
    }
</style>