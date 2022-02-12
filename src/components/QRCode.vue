<template>
  <div>
    <el-button type="primary" @click="btn_click() ">生成二维码</el-button>
    <img id="qrcode" :src="imgURL"  v-if="imgURL"/>
  </div>
</template>

<script>
import QRCode from "qrcode"; 
export default {
  components: {},
  data() {
    return {
      imgURL: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    btn_click() {
      QRCode.toDataURL("https://cn.vuejs.org/")
        .then(url => {
            this.imgURL = url
          console.log(url);
        })
        .catch(err => {
          console.error(err);
        });
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
#qrcode {
  width: 100px;
  height: 100px;
  display: block;
  margin-top: 10px;
}
</style>