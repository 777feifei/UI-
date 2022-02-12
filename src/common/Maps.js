//  获取全国地图
export const allmap = (e) => {
  let my_Map = null;
  my_Map = new BMap.Map(document.getElementById(e));
  my_Map.centerAndZoom(
    new BMap.Point(103.61511664290036, 35.179195230559664),
    5
  );
  my_Map.enableScrollWheelZoom(true);
  return my_Map;
}
//  打点
export const tapper = (params) => {
  let my_Map = null;
  my_Map = new BMap.Map("map"); // 创建Map实例  
  my_Map.centerAndZoom(
    new BMap.Point("117.36081735578051", "31.786304704827742"),
    6
  ); // 初始化地图,设置中心点坐标和地图级别
  my_Map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
  my_Map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  if (params.length) {
    params.forEach(item => {
      if (item.longitude && item.latitude) {
        var imged = require("@/assets/img/map/blue.png");
        if (item.id == 571) {
          imged = require("@/assets/img/map/compony (3).png");
        }

        var pted = new BMap.Point(item.longitude, item.latitude); // 重新定义中心点
        var myIcon1ed = new BMap.Icon(imged, new BMap.Size(30, 39)); // 加图片(icon)
        // 给中心点加icon
        var marker1 = new BMap.Marker(pted, {
          icon: myIcon1ed,
          // title:item.enterprise_name
        }); // 创建标注
        // marker1.disableMassClear()  //设置标注不可清除
        // marker1.setZIndex(99)
        my_Map.addOverlay(marker1);
        //  点击中心点做弹框
        var opts = {
          width: 200, // 信息窗口宽度
          height: 100, // 信息窗口高度
          title: item.enterprise_name, // 信息窗口标题
          enableMessage: true, //设置允许信息窗发送短息
          // offset:{width:-1}
          // message:"11"
        };
        var infoWindow = new BMap.InfoWindow(
          `【风险点总数：${item.risk_num}条】，【巡检率：${item.task_num}】，【整改率：${item.hidden_num}】`,
          opts
        ); // 创建信息窗口对象
        marker1.addEventListener("mouseover", function () {
          my_Map.openInfoWindow(infoWindow, pted); //开启信息窗口
        });
        marker1.addEventListener("mouseout", function () {
          my_Map.closeInfoWindow(infoWindow, pted);
        });
      }
    });
  }
}

//  划线
export const inking = (params) => {

}

//  加图层
export const coverage = (element, enter_list, area_list, value, areaName) => {

  let my_Map = new BMap.Map(document.getElementById(element));
  my_Map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放功能。仅对PC上有效

  // 模拟后台返回数据进行打点 设置图片
  if (enter_list.length) {
    // 打点图片
    var imged;
    // var imged = require("@/assets/img/map/blue.png");
    enter_list.forEach(item => {
      if (item.longitude && item.latitude) {
        if (item.riskLevel == "Ⅰ") {
          imged = require("@/assets/img/map/red.png");
        } else if (item.riskLevel == "Ⅱ") {
          imged = require("@/assets/img/map/orange.png");
        } else if (item.riskLevel == "Ⅲ") {
          imged = require("@/assets/img/map/yellow.png");
        } else if (item.riskLevel == "Ⅳ") {
          imged = require("@/assets/img/map/blue.png");
        }
      }
      var pted = new BMap.Point(item.longitude, item.latitude);// 中心点

      var myIcon1ed = new BMap.Icon(imged, new BMap.Size(40, 40)); // 自定义打点图片
      if (item.noRectifyNum > 0) {
        var marker1 = new BMap.Marker(pted, {
          icon: myIcon1ed,
          title: item.enterprise_name + "(跳动原因:有隐患未整改)",
        }); // 创建标注
        marker1.disableMassClear(); //设置标注不可清除
        marker1.setZIndex(99); // 覆盖层次优先级
        my_Map.addOverlay(marker1);
        marker1.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      } else {
        var marker1 = new BMap.Marker(pted, {
          icon: myIcon1ed,
          title: item.enterprise_name,
        }); // 创建标注
        marker1.disableMassClear(); //设置标注不可清除
        marker1.setZIndex(99);
        my_Map.addOverlay(marker1);
      }
    });
  }

  // 根据地区
  if (area_list.length) {
    var starimg = require("@/assets/img/map/one.png");
    area_list.forEach(item => {
      if (item.longitude && item.latitude) {
        var starpte = new BMap.Point(item.longitude, item.latitude);
        var mystar = new BMap.Icon(starimg, new BMap.Size(40, 40));
        var markerstar = new BMap.Marker(starpte, {
          icon: mystar,
          title: item.areaName + "应急管理局", // 鼠标hover上去显示的文字
        }); // 创建标注
        markerstar.disableMassClear(); //设置标注不可清除
        markerstar.setZIndex(98);
        my_Map.addOverlay(markerstar);
      }
    });
  }

  //   my_Map.addEventListener("click", e => {
  //     // 地图点击事件，获取经纬度
  //     this.JD = e.point.lng; // 经度
  //     this.WD = e.point.lat; // 纬度
  //   });
  //   var local = new BMap.LocalSearch(this.my_Map, {
  //     // 一定范围的地图
  //     renderOptions: {
  //       map: this.my_Map,
  //     },
  //   });
  //   local.search(value);
  getBoundary(areaName, my_Map);
  return my_Map;
  /*获取行政区域 添加覆盖物*/

}

export function getBoundary(areaName, my_Map) {
  var bdary = new BMap.Boundary();
  bdary.get(areaName, rs => {
    // rs.boundaries  获取选中行政区划边框点的集合
    //获取行政区域
    my_Map.clearOverlays(); //清除地图覆盖物
    // var count = rs.boundaries.length; //行政区域的点有多少个
    if (rs.boundaries.length === 0) {
      alert("未能获取当前输入行政区域");
      return;
    }
    var pointArray = [];
    for (var i = 0; i < rs.boundaries.length; i++) {
      /*
         new BMap.Polygon 表示地图上的多边形 覆盖物
         strokeWeight: 多边形边框宽度
         strokeOpacity: 多边形填充透明度
         fillColor: 多边形中间填充颜色
         strokeColor: 多边形边线颜色
      */
      var ply = new BMap.Polygon(rs.boundaries[i], {
        strokeWeight: 4,
        fillColor: "#003399",
        strokeColor: "#333399",
      }); //建立多边形覆盖物
      my_Map.addOverlay(ply); //添加覆盖物
      //  ply.getPath() 获取多边形所有点的经纬度
      pointArray = pointArray.concat(ply.getPath());
    }
    //  重新设置中心点视野 会将 this.my_Map.centerAndZoom 覆盖掉
    my_Map.setViewport(pointArray); //调整视野
  });
  //   深色背景色设置
  //   setInterval(() => {
  //     my_Map.setMapStyleV2({
  //       styleId: "9c423e5c27a79bf4c50bc26b98d67a9e",
  //     });
  //   }, 300);
}
