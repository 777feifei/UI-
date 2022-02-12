<template>
  <div class="largescreen">
    <div id="map"></div>
    <Header />
    
  </div>
</template>

<script>
import Header from './C_modules/header.vue'
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    // 地图画圆
    circle_Map() {
      var map = new BMap.Map(document.getElementById("map")); // 创建Map实例
      var point = new BMap.Point("118.575881", "30.066133");
      map.enableScrollWheelZoom();
      map.centerAndZoom(point, 17);
      var center = new BMap.Point(117.21712512504884, 31.860240259379054); //创建圆的中心点
      var radius = 700; //圆的半径
      var imged = require("./imag/spework.png");
      var circle = new BMap.Circle(center, radius, {
        fillColor: "#19fcf0", // 填充透明度，取值范围0-1
        strokeWeight: 1, // 边线宽度，以像素为单位
        fillOpacity: 0.1, // 填充颜色。当参数为空时，圆形没有填充颜色
        strokeColor: "#19fcf0", // 边线颜色
        strokeOpacity: 0.1, // 边线透明度，取值范围0-1
      });
      var myIcon1ed = new BMap.Icon(imged, new BMap.Size(132, 106)); // 加图片(icon)
      var marker = new BMap.Marker(center, {
        icon: myIcon1ed,
      }); // 创建
      map.addOverlay(marker);
      map.addOverlay(circle);
      map.setCenter(center); //重新设置地图的中心
      map.setMapStyleV2({
        styleId: "482abb7ddaf225a50410272b0e48d654",
      });
    },
  },
  created() {},
  mounted() {
    this.circle_Map();
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
.largescreen {
  width: 100vw;
  height: 100vh;
  position: relative;
}
#map {
  width: 100%;
  height: 100%;
  background-color: #cccccc;
}

</style>