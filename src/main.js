/*
 * @Description:
 * @Autor: Zhongyu
 * @Date: 2021-08-30 09:14:34
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-30 20:46:48
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import element from "./utils/element";
import "element-ui/lib/theme-chalk/index.css";
import api from "./api/api";

import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
import SignCanvas from "sign-canvas";
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import '@/assets/iconfont/iconfont.css'
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
Vue.use(SignCanvas);
Vue.use(vueEventCalendar, {
  locale: 'zh',
  color: '#4fc08d'
}) //可以设置语言，支持中文和英文

Vue.prototype.$api = api;

Vue.config.productionTip = false;
Vue.use(element);

// 点击事件节流
const on = Vue.prototype.$on
Vue.prototype.$on  = function (event, func) {

  let previous = 0
  let newFunc = func // 需要执行回调函数
  if (event === 'click') { // 确认为点击事件
    //  延迟执行 func
    newFunc = function () {
      const now = new Date().getTime() // 当前时间
      console.log(now);
      if (previous + 1000 <= now) {
        func.apply(this, arguments)
        previous = now
      }
    }
  }
  on.call(this, event, newFunc)
}
Vue.$emi
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
