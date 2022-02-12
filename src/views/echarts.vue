<template>
  <div class="">
    <div class="my_title">echarts</div>
    <div style="overflow: hidden">
      <div ref="nationwide" class="echarts"></div>
      <div ref="pie" class="echarts"></div>
    </div>
    <!-- <div class="my_title">饼图</div> -->
    <!-- <div class="pies"></div> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import geoJson from "./安徽省.json";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    init_nationwide() {
      var myChart = echarts.init(this.$refs.nationwide);
      echarts.registerMap("anhui", geoJson);
      myChart.setOption({
        animation: true,
        // 地图标题
        title: {
          text: "安徽省",
        },
        // hover悬浮框内容
        tooltip: {
          trigger: "item",
          formatter: "{b}",
        },
        // hover悬浮框样式
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        // 地图颜色(左下角)样式
        visualMap: {
          // min: 800,
          // max: 50000,
          text: ["高", "低"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["#3333ff", "#33cc66", "#ff3333"],
          },
          textStyle: {
            color: "white",
          },
        },
        // 数据处理
        series: [
          {
            name: "安徽省",
            type: "map",
            map: "anhui",
            label: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },

            // 区域样式
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
              // 地图选种样式
              emphasis: {
                borderWidth: 1,
                borderColor: "#6600ff",
                areaColor: "#ccccff",
                label: {
                  show: true,
                  textStyle: {
                    color: "#000",
                  },
                },
              },
            },
            data: [
              { name: "宿州市\n业绩：123000", value: 0 },
              { name: "淮北市", value: 190 },
              { name: "亳州市", value: 0 },
              { name: "蚌埠市", value: 0 },
              { name: "阜阳市", value: 90 },
              { name: "淮南市", value: 0 },
              { name: "滁州市", value: 0 },
              { name: "六安市", value: 90 },
              { name: "合肥市", value: 90 },
              { name: "马鞍山市", value: 0 },
              { name: "芜湖市", value: 0 },
              { name: "铜陵市", value: 0 },
              { name: "安庆市", value: 0 },
              { name: "池州市", value: 0 },
              { name: "宣城市", value: 190 },
              { name: "黄山市", value: 190 },
            ],
            // 名称映射=> 那么需要带着数据
            nameMap: {
              宿州市: "宿州市\n业绩：123000",
            },
          },
        ],
      });
    },
    init_pie() {
      var myChart = echarts.init(this.$refs.pie);
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: ["Direct", "Baidu"],
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            // selectedMode: 'single',
            // hoverAnimation:false,  // 去除饼图hover效果
            radius: ["20%", "30%"],
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1548, name: "1548" },
              { value: 200, name: "" },
            ],
          },
          {
            name: "Access From",
            type: "pie",

            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              position: "inner",
              fontSize: 14,
            },
            data: [
              { value: 1048, name: "1048" },
              { value: 200, name: "" },
            ],
          },
        ],
      });
    },
  },
  created() {},
  mounted() {
    this.init_nationwide();
    this.init_pie();
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
.echarts {
  width: 500px;
  height: 500px;
  background-color: #333366;
  float: left;
  margin-left: 20px;
}
</style>