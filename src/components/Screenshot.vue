<template>
  <div class="screenshot">
    <el-button type="primary" @click="screenshot">截图并下载</el-button>
    <div ref="faultTree" class="faultTree">
      <img
        src="https://img0.baidu.com/it/u=4086653970,2392878139&fm=26&fmt=auto&gp=0.jpg"
        alt=""
      />
      我是图片
    </div>
  </div>
</template>

<script>
import convertToImage from '@/common/convertToImage.js'
// import html2canvas from "html2canvas";
export default {
  components: {
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    screenshot() {
      let convert = new convertToImage(this.$refs.faultTree,"image/png",'ME截图')
    },
  },
  created() {},
  mounted() {
     
    //   console.log('convertToImage',convertToImage);
  },
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
.faultTree {
  width: 200px;
  margin-top: 10px;
}
img {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}
</style>