<template>
  <div class="nacmenu">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      router
    >
    
      <Nav></Nav>
      <!-- <el-menu-item index="/date">
        <span slot="title">日期组件</span>
      </el-menu-item>
      <el-menu-item index="/fullScreen">
        <span slot="title">全屏功能</span>
      </el-menu-item>
      <el-menu-item index="/screenshot">
        <span slot="title">截图并下载</span>
      </el-menu-item>
      <el-menu-item index="/copy">
        <span slot="title">复制</span>
      </el-menu-item>
      <el-menu-item index="/upload">
        <span slot="title">Upload文件上传&文件下载</span>
      </el-menu-item>
      <el-menu-item index="1">
        <span slot="title">面包屑</span>
      </el-menu-item>
      <el-menu-item index="/form">
        <span slot="title">Form表单</span>
      </el-menu-item>
      <el-menu-item index="/map">
        <span slot="title">Map地图</span>
      </el-menu-item>
      <el-menu-item index="/moment">
        <span slot="title">Moment日期</span>
      </el-menu-item>
      <el-menu-item index="/pagination">
        <span slot="title">Pagination分页</span>
      </el-menu-item>
      <el-menu-item index="1">
        <span slot="title">Tree树组件</span>
      </el-menu-item>
      <el-menu-item index="/selcet">
        <span slot="title">Select下拉框</span>
      </el-menu-item>
      <el-menu-item index="1">
        <span slot="title">搜索关键字高亮</span>
      </el-menu-item>
      <el-menu-item index="1">
        <span slot="title">图片放大</span>
      </el-menu-item>
      <el-menu-item index="/qrcode">
        <span slot="title">生成二维码</span>
      </el-menu-item>
      <el-menu-item index="/sincanvas">
        <span slot="title">签字</span>
      </el-menu-item>
      <el-menu-item index="/qrcode">
        <span slot="title">生成二维码</span>
      </el-menu-item>

      <el-menu-item index="1">
        <span slot="title">跑马灯</span>
      </el-menu-item>
      <el-menu-item index="1">
        <span slot="title">登录校验</span>
      </el-menu-item>
      <el-menu-item index="1">
        <span slot="title">图片懒加载</span>
      </el-menu-item>
      <el-menu-item index="/css">
        <span slot="title">css集合</span>
      </el-menu-item>
      <el-menu-item index="1">
        <span slot="title">js原生方法</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import Nav from "@/views/recursionMenu.vue";
export default {
  props: {
    // 组件背景色
    backgroundColor: {
      type: String,
      default: "#708090",
    },
    // 文字颜色
    textColor: {
      type: String,
      default: "#EDEDED",
    },
    // 文字选中颜色
    activeTextColor: {
      type: String,
      default: "#cc00cc",
    },
    // 默认打开菜单
    defaultActive: {
      type: String,
      default: "",
    },
    // 数据列表
    list: {
      type: Array,
      default: () => [
        {
          label: "日期组件",
          path: "",
        },
      ],
    },
  },
  components: { Nav },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    // console.log('Nav',Nav);
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
.nacmenu {
  height: 100%;
  overflow: auto;
}
.el-menu-vertical-demo {
  width: 200px;
  height: 100%;
}
</style>