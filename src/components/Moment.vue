<template>
  <div class="Moment">
    <div class="fast">
      <h2>JS获取时间方法</h2>
      <p>年月日：{{ date }}</p>

      <h2>日期快捷方式</h2>
      <el-button
        type="text"
        @click="showTime(item)"
        v-for="item in btn_list"
        :key="item"
      >
        {{ item }}</el-button
      >
      <p style="margin-bottom: 10px; color: red">Time：{{ time }}</p>
      <p style="margin-bottom: 10px; color: red">本月起止：{{ time2 }}</p>
      <el-button type="primary" @click="current_Months">当前整月</el-button>
      <el-button type="primary" @click="current_Year">当前整年</el-button>
      <p style="margin-bottom: 10px; color: red">Time：{{ time1 }}</p>
    </div>

    <div>
      <h2>日历插件</h2>
      <p class="my_title">vue-event-calendar 插件</p>
      <vue-event-calendar
        :events="demoEvents"
        @@month-changed="monthChange"
        @day-changed="dayChange"
      >
      </vue-event-calendar>
      <p class="my_title">full-calendar 插件</p>
      <FullCalendar
        :events="monthData"
        :options="calendarOptions"
        class="test-fc"
        first-day="1"
        locale="fr"
        @changeMonth="changeMonth"
        @eventClick="eventClick"
        @dayClick="dayClick"
        @moreClick="moreClick"
        lang="zh"
      >
      </FullCalendar>
    </div>
  </div>
</template>

<script>
import moment from "moment";

import FullCalendar from "vue-fullcalendar";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      date: "",
      btn_list: ["7日内", "30日内", "3个月内", "今年",'本月'],
      time: "",
      time1: "",
      time2: "",
      demoEvents: [
        {
          date: "2021/9/15",
          title: "笔记",
          desc: "随心记住",
        },
      ],
      monthData: [
        {
          start: "2021/9/3",
          end: "2021/9/5",
          title: "随心飞呀",
        },
      ],
      calendarOptions: {},
    };
  },
  computed: {},
  watch: {},
  created() {
    this.JS_date()
  },
  methods: {
    JS_date() {
      this.date = new Date().getTime(); // 当前时间戳
      let year = new Date().getFullYear(); // 当前年
      let month = new Date().getMonth() + 1; // 当前月
      let day = new Date().getDate(); // 当前日
      let hours = new Date().getHours(); // 当前时
      let minutes = new Date().getMinutes(); // 当前分
      let seconds = new Date().getSeconds(); // 当前秒
      this.date =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    },
    changeMonth() {},
    dayClick() {},
    moreClick() {},
    monthChange(month) {
      console.log(month);
    },
    dayChange(day) {
      console.log(day);
    },
    eventClick() {},

    showTime(item) {
      // 时间
      let day = "";
      // 单位
      let unit = "";
      if (item.includes("7日内")) {
        day = 7;
        unit = "day";
      } else if (item.includes("30日内")) {
        day = 30;
        unit = "day";
      } else if (item.includes("3个月内")) {
        day = 3;
        unit = "months";
      } else if (item.includes("今年")) {
        unit = "year";
      }else if (item.includes("本月")) {
       this.time2 =  moment().startOf("month").format("YYYY-MM-DD HH:mm:ss")+","+ moment().endOf("month").format("YYYY-MM-DD HH:mm:ss");
      }
      this.time = this.timeScope(day, unit, "YYYY-MM-DD HH:mm:ss").join(",");
    },
    // 时间方法
    timeScope(day, unit, formats) {
      // 存储时间的list
      let Time = [];
      // 获取当前时间
      //   let current = moment(new Date().getTime()).format(formats);

      if (unit.includes("year")) {
        //  startOf  设置为今年一月1日上午 12:00
        Time[0] = moment().startOf(unit).format(formats);
      } else {
        //   subtract 减法的方式获取时间
        Time[0] = moment(new Date().getTime())
          .subtract(day, unit)
          .format(formats);
      }

      Time[1] = moment(new Date().getTime()).format(formats);
      return Time;
    },
    current_Months() {},
    current_Year() {},

    // 本月开始时间至 本月结束时间
    thisMonth() {
      let startTime = moment().startOf("month").format("YYYY-MM-DD");
      let endTime = moment().endOf("month").format("YYYY-MM-DD");
    },

    /*起止时间校验： 结束时间不得大于开始时间，开始时间和结束时间间隔不得大于半年*/
    checkStartTime() {
      if (!this.formInline.startTime) {
        this.formInline.endTime = "";
      }
      let start = new Date(this.formInline.startTime);
      let end = new Date(this.formInline.endTime);
      if (
        start.valueOf() - end.valueOf() > 0 &&
        this.formInline.endTime &&
        this.formInline.startTime
      ) {
        this.$alert("开始时间不得大于结束时间", "注意", {
          confirmButtonText: "确定",
          callback: action => {},
        });
        this.formInline.startTime = "";
        this.formInline.endTime = "";
        return;
      }
      let sixMonths = moment(end.valueOf()).subtract(6, "months").valueOf();
      if (this.formInline.endTime && start.valueOf() < sixMonths) {
        this.$alert("开始时间和结束时间间隔不得大于半年", "注意", {
          confirmButtonText: "确定",
          callback: action => {},
        });
        this.formInline.startTime = "";
        this.formInline.endTime = "";
        return;
      }
    },
    checkedTime() {
      if (!this.formInline.endTime) {
        this.formInline.startTime = "";
      }
      if (this.formInline.endTime) {
        if (!this.formInline.startTime) {
          this.$alert("请选择开始时间", "注意", {
            confirmButtonText: "确定",
            callback: action => {},
          });
          this.formInline.endTime = "";
          return;
        }
      }
      let start = new Date(this.formInline.startTime);
      let end = new Date(this.formInline.endTime);
      if (
        start.valueOf() - end.valueOf() > 0 &&
        this.formInline.endTime &&
        this.formInline.startTime
      ) {
        this.$alert("开始时间不得大于结束时间", "注意", {
          confirmButtonText: "确定",
          callback: action => {},
        });
        this.formInline.startTime = "";
        this.formInline.endTime = "";
        return;
      }
      let sixMonths = moment(start.valueOf()).add(6, "months").valueOf();
      // let sixMonths = moment(start.valueOf()).add(6, "months").format("YYYY-MM-DD");
      // console.log(end.valueOf() , sixMonths);
      if (this.formInline.startTime && end.valueOf() > sixMonths) {
        this.$alert("开始时间和结束时间间隔不得大于半年2", "注意", {
          confirmButtonText: "确定",
          callback: action => {},
        });
        this.formInline.startTime = "";
        this.formInline.endTime = "";
        return;
      }
    },
  },

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
.fast {
  margin-top: 10px;
}
.__vev_calendar-wrapper {
  margin: 0 !important;
}
.__vev_calendar-wrapper .events-wrapper {
  width: 30%;
}
</style>