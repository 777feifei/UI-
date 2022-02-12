<template>
  <div class="copy">
    <el-button type="primary" @click="CJ_copy()" class="copy_btn">插件复制</el-button>
    <p id="copytext">插件-需要复制的文本</p>
    <el-button type="primary" @click="YS_copy()" >原生复制</el-button>
    <p>原生-需要复制的文本</p>
  </div>
</template>

<script>
import Clipboard from "clipboard";
// import MY_Copy from '@/common/copy.js'
export default {
  components: {},
  data() {
    return {
    };
  },
  directives: {
   debounce: {
    inserted: function (el, binding) {
     let timer
     el.addEventListener('keyup', () => {
      if (timer) {
       clearTimeout(timer)
      }
      timer = setTimeout(() => {
       binding.value()
      }, 300)
     })
    }
   }
  },

  methods: {
    CJ_copy() {
      let clipboard = new Clipboard(".copy_btn", {
        target: function (trigger) {
          return document.getElementById("copytext");
        },
      });
      clipboard.on("success", e => {
        this.$message.success("复制成功");
        e.clearSelection() // 被复制文本是否显示背景色
        clipboard.destroy(); // 释放内存
      });
      clipboard.on("error", e => {
        this.$message.error("不支持复制");
        clipboard.destroy(); // 释放内存
      });
    },
    YS_copy(){}
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
.copy_btn {
    margin-top: 10px;
}
</style>