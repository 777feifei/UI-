<template>
  <div class="">
    <div class="my_title">全屏功能</div>
    <FullScreen></FullScreen>
    <div class="my_title">生成二维码</div>
    <Qrcode></Qrcode>
    <div class="my_title">截图并下载</div>
    <Screenshot></Screenshot>
    <div class="my_title">复制</div>
    <Copy></Copy>
    <div class="my_title">搜索关键字高亮</div>
    <HighColor></HighColor>
    <div class="my_title">签字</div>
    <Sincanvas></Sincanvas>
    <div class="my_title">图片放大</div>
    <viewer :images="[url]">
      <img :src="url" alt="" width="50" />
    </viewer>
    <div class="my_title">video 标签</div>
    <video controls="controls">
      <source
        src="../assets/video.mp4"
        type="video/mp4"
      />
    </video>
    <div
      type="primary"
      class="drag_ele floatball"
      id="floatball"
      @mousedown="down"
      @touchstart.stop="down"
      @mousemove="move"
      @touchmove.stop="move"
      @mouseup="end"
      @touchend.stop="end"
      :style="{ top: position.y + 'px', left: position.x + 'px' }"
    >
      拖拽
    </div>
  </div>
</template>

<script>
var dx, dy;
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
import FullScreen from "@/components/fullScreen.vue";
import Qrcode from "@/components/QRCode.vue";
import Screenshot from "@/components/Screenshot.vue";
import Copy from "@/components/Copy.vue";
import HighColor from "@/components/highColor.vue";
import Sincanvas from "@/components/Sincanvas.vue";
export default {
  components: {
    FullScreen,
    Qrcode,
    Screenshot,
    Copy,
    HighColor,
    Sincanvas,
  },
  data() {
    return {
      url: require("@/assets/img/common/2.jpg"),
      flags: false,
      position: {
        x: 320,
        y: 60,
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    down(event) {
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      console.log("鼠标点所在位置", touch.clientX, touch.clientY);
      console.log(
        "div左上角位置",
        event.target.offsetTop,
        event.target.offsetLeft
      );
      dx = touch.clientX - event.target.offsetLeft;
      dy = touch.clientY - event.target.offsetTop;
    },
    move() {
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        // 定位滑块的位置
        this.position.x = touch.clientX - dx;
        this.position.y = touch.clientY - dy;
        // 限制滑块超出页面
        // console.log('屏幕大小', screenWidth, screenHeight )
        if (this.position.x < 0) {
          this.position.x = 0;
        } else if (this.position.x > screenWidth - touch.target.clientWidth) {
          this.position.x = screenWidth - touch.target.clientWidth;
        }
        if (this.position.y < 0) {
          this.position.y = 0;
        } else if (this.position.y > screenHeight - touch.target.clientHeight) {
          this.position.y = screenHeight - touch.target.clientHeight;
        }
        //阻止页面的滑动默认事件
        document.addEventListener(
          "touchmove",
          function () {
            event.preventDefault();
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      console.log("end");
      this.flags = false;
    },
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
.floatball {
  color: white;
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 50px;
  padding: 5px;
  z-index: 990;
  position: fixed;
  top: 60px;
  right: 320px;
  border-radius: 50%;
  background-color: rgba(29, 157, 237, 0.8);
}
.my_title {
  // background-color: #ccc;
  font-weight: 700;
  font-size: 18px;
  color: #0066cc;
  margin-top: 40px;
}
.my_title:first-child {
  margin-top: 0;
}
</style>