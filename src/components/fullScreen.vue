<template>
  <div class="screen">
    
    <el-button @click="screen">{{isEnabled ? '全屏':'退出全屏'}}</el-button>
  </div>
</template>

<script>
// screenfull 全屏插件
import screenfull from "screenfull";
export default {
  components: {},
  data() {
    return {
      isEnabled:true
    };
  },
  computed: {

  },
  watch: {},
  methods: {
    screen() {
      // 如果不允许进入全屏，发出不允许提示
      if (!screenfull.isEnabled) {
        this.$message("您的浏览器不能全屏");

        return false;
      }
      this.isEnabled = !this.isEnabled
      screenfull.toggle();
    },

    // fullScreenFun() {
    //   var iFullscreen = false; //当前是否全屏状态
    //   var fullscreenEnabled =
    //     document.fullscreenEnabled ||
    //     document.mozFullScreenEnabled ||
    //     document.webkitFullscreenEnabled ||
    //     document.msFullscreenEnabled;
    //   if (fullscreenEnabled) {
    //     let de = document.documentElement;
    //     if (iFullscreen) {
    //       //关闭全屏
    //       if (document.exitFullscreen) {
    //         document.exitFullscreen();
    //       } else if (document.mozCancelFullScreen) {
    //         document.mozCancelFullScreen();
    //       } else if (document.webkitCancelFullScreen) {
    //         document.webkitCancelFullScreen();
    //       }
    //     } else {
    //       //打开全屏
    //       if (de.requestFullscreen) {
    //         de.requestFullscreen();
    //       } else if (de.mozRequestFullScreen) {
    //         de.mozRequestFullScreen();
    //       } else if (de.webkitRequestFullScreen) {
    //         de.webkitRequestFullScreen();
    //       }
    //     }
    //   } else {
    //     alert("浏览器当前不能全屏");
    //   }
    // },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang='less' scoped>

</style>