<template>
  <div class="">
    <div class="my_title">实现QQ聊天</div>

    <p>连接websocket</p>

    <!-- <a href="javascript:void(0)" id="onlineService">在线客服</a>
    <br />
    <a
      target="_blank"
      href="http://wpa.qq.com/msgrd?v=3&uin=708873725&site=qq&menu=yes"
      ><img
        border="0"
        src="http://wpa.qq.com/pa?p=2:708873725:41"
        alt="QQ客服"
        title="QQ客服"
    /></a> -->
  </div>
</template>

<script>
import { websocketUrl } from "@/api/api";
// import {WS} from '@/utils/socket'
export default {
  components: {},
  data() {
    // BizQQWPA.addCustom({
    //   aty: "0", //指定工号类型,0-自动分流，1-指定工号，2-指定分组
    //   nameAccount: 418789119, //指定的聊天 QQ 号码
    //   selector: "onlineService", //触发聊天的标签id
    // });
    return {
      dialogVisible: false,
      socket: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    link_socket() {
      // console.log());
      // if (typeof WebSocket == "undefined") {
      //   alert("遗憾：您的浏览器不支持WebSocket");
      // } else {
      //   // wss://wg.fxgkpt.com/hdPush?uuid=c147d6f5-fcc2-4ec1-095e-9fe2f12874e8&areaCode=3401&enterpriseId=3693
      //   this.socket = new WebSocket(
      //     websocketUrl +
      //       "c147d6f5-fcc2-4ec1-095e-9fe2f12874e8" +
      //       "&areaCode=3401" +
      //       "&enterpriseId=3693"
      //   );
      //   this.socket.onopen = function () {
      //     // console.log("Socket 连接成功！")
      //     // document.write("Socket 连接成功！");
      //     // socket.send("消息发送测试(From Client)");
      //   };
      //   //收到消息事件
      //   this.socket.onmessage = function (msg) {
      //     console.log("this.socket", msg);
      //   };
      //   //连接关闭事件
      //   this.socket.onclose = function () {
      //     // document.write("Socket已关闭");
      //   };
      //   //发生了错误事件
      //   this.socket.onerror = function () {
      //     // document.write("Socket发生了错误");
      //   };
      //   //窗口关闭时，关闭连接
      //   window.unload = function () {
      //     this.socket.close();
      //   };
      // }
    },
  },
  created() {
    // console.log(websocketUrl);
  },
  mounted() {
    // this.link_socket();
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
<style lang='less'>
// .el-dialog__wrapper {
//   transition-duration: 0.3s;
// }
// .dialog-fade-enter-active {
//   animation: none !important;
// }
// .dialog-fade-leave-active {
//   transition-duration: 0.15s !important;
//   animation: none !important;
// }

// .dialog-fade-enter-active .el-dialog,
// .dialog-fade-leave-active .el-dialog {
//   animation-fill-mode: forwards;
// }

// .dialog-fade-enter-active .el-dialog {
//   animation-duration: 0.3s;
//   animation-name: anim-open;
//   animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
// }

// .dialog-fade-leave-active .el-dialog {
//   animation-duration: 0.3s;
//   animation-name: anim-close;
// }
.dialog-fade-enter-active .el-dialog {
  animation-duration: 0.3s;
  animation-name: anim-open;
}

.dialog-fade-leave-active .el-dialog {
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

// @keyframes anim-open {
//   0% {
//     opacity: 0;
//     transform: scale3d(0, 0, 1);
//   }
//   100% {
//     opacity: 1;
//     transform: scale3d(1, 1, 1);
//   }
// }
// @keyframes anim-close {
//   0% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//     transform: scale3d(1, 0.5, 1);
//   }
// }
</style>