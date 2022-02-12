<template>
  <div class="high_color">
    <el-input v-model="str" placeholder="" @input="highColor(this.text)"></el-input>
    <div v-html="highColor(this.text)"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text: "测试文本高亮测试文本高亮测试文本高亮",
      str: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    highColor(e) {
      // 第一种方案
      if (!this.str) return e;
      const result = e.replace(
        new RegExp(this.str, "g"),
        `<span style='color: red'>${this.str}</span>`
      );
      return result;
      // 第二种方案
      //     let reg = new RegExp(e, 'g');
      //    return render(h => {
      //         return h('span', {
      //             style: {
      //                 color: 'red'
      //             },

      //         }, [reg])
      //     })
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