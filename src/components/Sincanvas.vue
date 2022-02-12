<template>
  <div class="sincanvas">
    <!-- <el-dialog title="在线签名" :visible.sync="visible" :show-close="false"> -->
    <!-- <p class="my_title">在线签名</p> -->
    <sign-canvas
      class="sign-canvas"
      ref="SignCanvas"
      :options="options"
      v-model="value"
    />
    <div class="btnList">
      <el-button
        type="danger"
        size="small"
        icon="el-icon-delete"
        @click="canvasClear()"
        >清空</el-button
      >
      <el-button
        type="primary"
        size="small"
        icon="el-icon-check"
        @click="saveAsImg()"
        >保存</el-button
      >

      <el-button
        type="info"
        size="small"
        icon="el-icon-download"
        @click="downloadSignImg()"
        >下载</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: {
        lastWriteSpeed: 1, //书写速度 [Number] 可选
        lastWriteWidth: 2, //下笔的宽度 [Number] 可选
        lineCap: "round", //线条的边缘类型 [butt]平直的边缘 [round]圆形线帽 [square]	正方形线帽
        lineJoin: "round", //线条交汇时边角的类型  [bevel]创建斜角 [round]创建圆角 [miter]创建尖角。
        canvasWidth: 500, //canvas宽高 [Number] 可选
        canvasHeight: 100, //高度  [Number] 可选
        isShowBorder: false, //是否显示边框 [可选]
        bgColor: "#9999cc", //背景色 [String] 可选
        borderWidth: 1, // 网格线宽度  [Number] 可选
        borderColor: "#ff787f", //网格颜色  [String] 可选
        writeWidth: 2, //基础轨迹宽度  [Number] 可选
        maxWriteWidth: 30, // 写字模式最大线宽  [Number] 可选
        minWriteWidth: 5, // 写字模式最小线宽  [Number] 可选
        writeColor: "#101010", // 轨迹颜色  [String] 可选
        isSign: true, //签名模式 [Boolean] 默认为非签名模式,有线框, 当设置为true的时候没有任何线框
        imgType: "png", //下载的图片格式  [String] 可选为 jpeg  canvas本是透明背景的
      },
      value:''
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 清除画板
     */
    canvasClear() {
      this.$refs.SignCanvas.canvasClear();
    },

    /**
     * 保存图片
     */
    saveAsImg() {
      const img = this.$refs.SignCanvas.saveAsImg();
      this.$emit("update:visible", false);
    },

    /**
     * 下载图片
     */
    downloadSignImg() {
      this.$refs.SignCanvas.downloadSignImg();
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
</style>