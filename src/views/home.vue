<template>
    <div class="home">
       <Menu class="menu"></Menu>
       <router-view class="main"></router-view>
    </div>
</template>

<script>
import Menu from '@/components/NavMenu.vue'
export default {
    components: {
         Menu
    },
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    }
</script>
<style lang='less' scoped>
.home {
    height: 100vh;
    width: 100vw;
    padding-left: 200px;
    position: relative;
    overflow: hidden;
    .menu {
        position: absolute;
        left: 0;
        top: 0;
    }
    .main {
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        overflow-y: auto;
    }
}
</style>