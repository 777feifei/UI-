<template>
  <div class="css">
    <div class="line"></div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="插入光标（caret）的颜色" name="1">
        <input placeholder="" />
      </el-collapse-item>
      <el-collapse-item title=" 裁剪元素" name="2">
        <div class="item">
          圆形:
          <img src="	https://www.w3school.com.cn/i/eg_tulip.jpg" alt="" />
        </div>
        <div class="item">
          椭圆裁剪:
          <img
            class="img1"
            src="	https://www.w3school.com.cn/i/eg_tulip.jpg"
            alt=""
          />
        </div>
        <div class="item">
          多边形裁剪:
          <img
            class="img2"
            src="https://www.w3school.com.cn/i/eg_tulip.jpg"
            alt=""
          />
        </div>
      </el-collapse-item>
      <el-collapse-item title="渐变" name="3">
        <!-- https://zhuanlan.zhihu.com/p/146737631 -->
        <div class="gradual">
          线形渐变：
          <p></p>
        </div>
        <div class="gradual">
          坠形渐变：
          <p class="p1"></p>
        </div>
        <div class="gradual">
          圆形渐变：
          <p class="p2"></p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="grid 布局 " name="4">
        <div class="grid">
          <p>1</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="设置placeholder的字体样式" name="5">
        input::-webkit-input-placeholder { /* Chrome/Opera/Safari */ color:
        red;} <br />
        input::-moz-placeholder { /* Firefox 19+ */ color: red; } <br />
        input:-ms-input-placeholder { /* IE 10+ */ color: red; } <br />
        input:-moz-placeholder { /* Firefox 18- */ color: red; }
      </el-collapse-item>
      <el-collapse-item title="设置滚动条样式" name="6">
        <div class="scroll">
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
          <p>滚动吧</p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="css 选取第 n 个标签元素" name="7">
        first-child 表示选择列表中的第一个标签。 <br />
        last-child 表示选择列表中的最后一个标签 <br />
        nth-child(3) 表示选择列表中的第 3 个标签 <br />
        nth-child(2n) 这个表示选择列表中的偶数标签 <br />
        nth-child(2n-1) 这个表示选择列表中的奇数标签 <br />
        nth-child(n+3) 这个表示选择列表中的标签从第 3 个开始到最后。 <br />
        nth-child(-n+3) 这个表示选择列表中的标签从 0 到 3，即小于 3 的标签。
        <br />
        nth-last-child(3) 这个表示选择列表中的倒数第 3 个标签。
      </el-collapse-item>
      <el-collapse-item title="文字之间的间距" name="8">
        单词text-indent抬头距离，letter-spacing字与字间距 <br />
        p{ <br />
        text-indent：10px；//单词抬头距离 <br />
        letter-spacing：10px；//间距 <br />
        }
      </el-collapse-item>
      <el-collapse-item title="CSS实现文本两端对齐" name="9">
        .wrap { <br />
        text-align: justify;<br />
        text-justify: distribute-all-lines; //ie6-8<br />
        text-align-last: justify; //一个块或行的最后一行对齐方式<br />
        -moz-text-align-last: justify;<br />
        -webkit-text-align-last: justify;<br />
        }
      </el-collapse-item>
      <el-collapse-item title="字母大小写转换" name="10">
        p {text-transform: uppercase} // 将所有字母变成大写字母<br />
        p {text-transform: lowercase} // 将所有字母变成小写字母<br />
        p {text-transform: capitalize} // 首字母大写<br />
        p {font-variant: small-caps} // 将字体变成小型的大写字母<br />
      </el-collapse-item>
      <el-collapse-item title="文字渐变效果实现+ 北京渐变" name="11">
        <div class="text_signature">文字渐变效果实现</div>
        <div class="text_gradient"></div>
      </el-collapse-item>
      <el-collapse-item title="边框阴影 " name="12">
        <div class="text_shadow"></div>
      </el-collapse-item>
      <el-collapse-item title="更改弹框样式" name="13">
        <el-button type="primary" @click="dialogVisible = true"
          >更改弹框样式</el-button
        >
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </el-collapse-item>
      <el-collapse-item title="" name=""> </el-collapse-item>
      <el-collapse-item title="" name=""> </el-collapse-item>
      <el-collapse-item title="" name=""> </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { activeNames: ["1"], dialogVisible: false, activeName: "first" };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    console.log(id);
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
.css {
  background-color: #000;
}
/deep/ .el-tabs__active-bar {
  background-color: #00d0ff !important;
  // background: linear-gradient(
  //   to left,
  //   #66b1ff 0%,
  //   #00d0ff 20%,
  //   #ffffff 54%,
  //   #01cefe 74%,
  //   #66b1ff 10%
  // );
  box-shadow: 0px 0px 5px rgba(255, 255, 255);
  background: transparent;
  &::after {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    left: 0;
    top: -1px;
   background: linear-gradient(to left, transparent 0%, transparent 25%, #ffffff 50%, transparent 67%, transparent 100%)
  }
}

/deep/ .el-tabs__item.is-active {
  color: #14ffe8;
}
input {
  caret-color: red;
}
.item {
  img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    margin-left: 10px;
    clip-path: circle(40%);
  }
  .img1 {
    clip-path: ellipse(25px 25px at 10% 20%) !important;
  }
  .img2 {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
}
.gradual {
  p {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    background: linear-gradient(red, orange 50%, #fff 90%);
  }
  .p1 {
    background: conic-gradient(red, orange, black, green, blue);
  }
  .p1 {
    background: radial-gradient(red, orange, black, green, blue);
  }
}
.grid {
  width: 200px;
  height: 100px;
  background-color: pink;
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
.text_signature {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #ec2239, #40a4e2, #ea96f5);
  width: 320px;
}
.text_shadow {
  width: 500px;
  height: 100px;
  box-shadow: 0px 0px 13px 1px rgba(51, 51, 51, 0.1);
}
.text_gradient {
  width: 500px;
  height: 100px;
  background: linear-gradient(
      25deg,
      rgb(79, 107, 208),
      rgb(98, 141, 185),
      rgb(102, 175, 161),
      rgb(92, 210, 133)
    )
    rgb(182, 228, 253);
}
.scroll {
  width: 100px;
  height: 100px;
  background-color: pink;
  overflow: auto;
}
.scroll::-webkit-scrollbar  {
  width: 7px;
  height: 7px;
}
.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #c9c9c9;
}
.scroll::-webkit-scrollbar-thumb:hover  {
  background: #747474;
}
// .scroll::-webkit-scrollbar-corner  {
//   background: #179a16;
// }

/deep/ .el-dialog {
  height: 70%;
  .el-dialog__body {
    height: 70%;
  }
}
/deep/ .dialog-fade-enter-active .el-dialog {
  animation-duration: 0.3s;
  animation-name: anim-open;
}

/deep/ .dialog-fade-leave-active .el-dialog {
  animation-duration: 0.3s;
  animation-name: anim-close;
}

@keyframes anim-open {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
@keyframes anim-close {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scaleY(0.2);
  }
}
</style>