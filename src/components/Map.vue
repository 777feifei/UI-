<template>
  <div class="map">
    <div class="circle_Map" id="circle_Map"></div>
    <el-input v-model="JD" placeholder=""></el-input>
    <el-input v-model="WD" placeholder=""></el-input>
    <div style="margin-top: 10px">
      <el-input v-model="value" placeholder="请输入地址"></el-input>
      <el-button type="primary" @click="getMap">获取公司当前位置</el-button>
    </div>
    <!-- class="map_screen" -->
    <div class="map_content" :class="{ map_screen: map_screen }">
      <div class="content">
        <div id="map"></div>
        <i
          @click="change_map_screen()"
          title="全屏"
          class="el-icon-full-screen full_screen"
        ></i>
      </div>
    </div>
  </div>
</template>
 
<script>
import { allmap, tapper, coverage } from "@/common/Maps";
export default {
  components: {},
  data() {
    return {
      map_screen: false,

      // 获取四色图图层
      enterlist: [
        {
          hidden_num: "99%",
          risk_num: 126,
          latitude: "31.860240259379054",
          id: 571,
          enterprise_name: "安徽鸿延传感有限公司",
          task_num: "8%",
          longitude: "117.21712512504884",
        },
        {
          hidden_num: "100%",
          risk_num: 140,
          latitude: "31.787717282348627",
          id: 907,
          enterprise_name: "安徽鸿延合肥分公司",
          task_num: "0%",
          longitude: "117.35090859685268",
        },
      ],
      // ----------------------------------------------------------
      JD: "",
      WD: "",
      value: "",
      jwd_list: [
        [117.221922, 31.814798],
        [117.227599, 31.808845],
      ],
      TC: {
        baidumapPath:
          "https://tinysafetyapp.oss-cn-beijing.aliyuncs.com/sst/571/L1/",
        id: 1,
        mapNo: "60ad76aee29f42ce8fe69af9671f241f",
      },
      // 地图
      my_Map: "",
      circleMapBox: "",
      // 模拟接口获取 全部企业
      enter_list: [
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "4b25774eb75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "31.143251",
          acceptNum: 0,
          enterprise_name: "繁昌县长安石料有限公司",
          longitude: "118.096106",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "4b2579aeb75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "30.066133",
          acceptNum: 0,
          enterprise_name: "安徽省信瑞鑫钢管有限公司",
          longitude: "118.575881",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "4b257d13b75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "30.060765",
          acceptNum: 0,
          enterprise_name: "安徽应升钢管制造有限公司",
          longitude: "118.571398",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "125374fd251c48c18173268e353da5b3",
          riskLevel: "Ⅳ",
          latitude: "",
          acceptNum: 0,
          enterprise_name: "测试隐患到期发送",
          longitude: "",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "0525d0fc9070412e8f51eeb0f7d7a45c",
          riskLevel: "Ⅳ",
          latitude: "31.86551843952174",
          acceptNum: 0,
          enterprise_name: "测试单位",
          longitude: "117.2137853149933",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "9d34e5eeb4a845d7be8dd575b09f6264",
          riskLevel: "Ⅳ",
          latitude: "",
          acceptNum: 0,
          enterprise_name: "测试隐患到期发送按钮",
          longitude: "",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "4b3cf370b75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "31.78065762597439",
          acceptNum: 0,
          enterprise_name: "微安全抖音",
          longitude: "117.32411133501509",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "ce179741b91f11eaa7fe00163e138d66",
          riskLevel: "Ⅳ",
          latitude: "31.786304704827742",
          acceptNum: 0,
          enterprise_name: "安徽鸿延传感有限公司1",
          longitude: "117.36081735578051",
        },
        {
          noRectifyNum: 1,
          RectifyNum: 1,
          enter_no: "ce179741b91f11eaa7fe00163e138d65",
          riskLevel: "Ⅰ",
          latitude: "31.786304704827742",
          acceptNum: 0,
          enterprise_name: "安徽鸿延传感有限公司",
          longitude: "117.36081735578051",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "4b2b34ccb75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "31.833554",
          acceptNum: 0,
          enterprise_name: "安徽丰乐农化有限责任公司",
          longitude: "117.486482",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "4b2cbd4fb75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "31.129435",
          acceptNum: 0,
          enterprise_name: "安徽省庐江龙桥矿业有限公司",
          longitude: "117.479222",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "4b2ce7aab75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "31.283372",
          acceptNum: 0,
          enterprise_name: "安徽大江股份有限公司",
          longitude: "117.348928",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 1,
          enter_no: "4b2dc7e9b75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "31.166383",
          acceptNum: 0,
          enterprise_name: "安徽铜冠（庐江）矿业有限公司",
          longitude: "117.307589",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "4b2d19f3b75b11eaa7fe00163e138d65",
          riskLevel: "Ⅳ",
          latitude: "31.646735",
          acceptNum: 0,
          enterprise_name: "安徽皖维高新材料股份有限公司",
          longitude: "117.876956",
        },
      ],
      // 模拟接口获取 行政区域
      mock_list: [
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "39776c883d59426093f34b13a3f6ae75",
          riskLevel: "Ⅳ",
          latitude: "31.741578711032425",
          acceptNum: 0,
          enterprise_name: "安徽拜亚注册安全工程师事务所有限公司",
          longitude: "117.25626658679762",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "df4e30b9d63c45b1a0d5a5285f0d12a1",
          riskLevel: "Ⅲ",
          latitude: "31.874192973225117",
          acceptNum: 7,
          enterprise_name: "安徽金生丽水新材料有限公司",
          longitude: "117.38497822569214",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "eabd5fe782eb46b5b184fc505baa82b6",
          riskLevel: "Ⅱ",
          latitude: "31.848985293684308",
          acceptNum: 1,
          enterprise_name: "中安华力建设集团有限公司",
          longitude: "117.25870952719364",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "bf526e85de1744b891981e1c57874827",
          riskLevel: "Ⅲ",
          latitude: "31.93394707204754",
          acceptNum: 1,
          enterprise_name: "中盐安徽银华工贸有限公司",
          longitude: "117.28815369257003",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 1,
          enter_no: "5838b1c55cef403f961a6c4b451e642b",
          riskLevel: "Ⅲ",
          latitude: "31.869924681646832",
          acceptNum: 1,
          enterprise_name: "安徽宾肯电气股份有限公司",
          longitude: "117.15040523499098",
        },
        {
          noRectifyNum: 70,
          RectifyNum: 7,
          enter_no: "01ff7014b92411ea8488506b4b47338c",
          riskLevel: "Ⅰ",
          latitude: "31.860240259379054",
          acceptNum: 105,
          enterprise_name: "安徽鸿延传感有限公司",
          longitude: "117.21712512504884",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "01ff958eb92411ea8488506b4b47338c",
          riskLevel: "Ⅱ",
          latitude: "31.787717282348627",
          acceptNum: 0,
          enterprise_name: "安徽鸿延合肥分公司",
          longitude: "117.35090859685268",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 2,
          enter_no: "e0776273cc6a4e4dbc908a574b5eb5d0",
          riskLevel: "Ⅱ",
          latitude: "31.788668234232347",
          acceptNum: 7,
          enterprise_name: "安徽江淮客车有限公司",
          longitude: "117.36171965874999",
        },
        {
          noRectifyNum: 3,
          RectifyNum: 29,
          enter_no: "6ad16ea4753043978de508524b9cac09",
          riskLevel: "Ⅱ",
          latitude: "32.162673890233116",
          acceptNum: 54,
          enterprise_name: "安徽广银铝业有限公司",
          longitude: "117.24304029579092",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 11,
          enter_no: "4a1ac43551e44c42b6ca5aa38d046226",
          riskLevel: "Ⅰ",
          latitude: "32.485037060111395",
          acceptNum: 286,
          enterprise_name: "安徽金正大生态工程有限公司",
          longitude: "117.14145654007694",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 1,
          enter_no: "582221194c81494abd86f258b1109edb",
          riskLevel: "Ⅰ",
          latitude: "31.97051126270375",
          acceptNum: 21,
          enterprise_name: "合肥市天马塑胶有限公司",
          longitude: "117.1769624695963",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "dc7a82451cb5442c811d2d1f31bfa9c3",
          riskLevel: "Ⅰ",
          latitude: "31.98534951133286",
          acceptNum: 0,
          enterprise_name: "安徽君青安全技术咨询有限公司",
          longitude: "117.25817871990617",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "2772167986834a70b9bd2a5c7138e58d",
          riskLevel: "Ⅲ",
          latitude: "31.960864416009862",
          acceptNum: 2,
          enterprise_name: "肥东温氏畜牧有限公司",
          longitude: "117.53179292146119",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 1,
          enter_no: "97f06cfab831456cab999198f94686e3",
          riskLevel: "Ⅲ",
          latitude: "31.773891197751087",
          acceptNum: 37,
          enterprise_name: "合肥艾普拉斯环保科技有限公司",
          longitude: "117.51216880878191",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 2,
          enter_no: "000ad79f1c7b4899bac0fe511f5c4fa4",
          riskLevel: "Ⅲ",
          latitude: "31.78382574814706",
          acceptNum: 2,
          enterprise_name: "安徽好运机械有限公司",
          longitude: "117.13241424172878",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "67c599be6a174fea8012bb8c0f875429",
          riskLevel: "Ⅲ",
          latitude: "31.79077248741559",
          acceptNum: 0,
          enterprise_name: "安徽安利材料科技股份有限公司",
          longitude: "117.13718671432692",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "8723c14cb4064595b9949eea421940fe",
          riskLevel: "Ⅲ",
          latitude: "31.758122698421687",
          acceptNum: 5,
          enterprise_name: "合肥东凌铸件工业有限公司",
          longitude: "117.14062129561377",
        },
        {
          noRectifyNum: 1,
          RectifyNum: 0,
          enter_no: "ec4e674e8e8344b09a510d02fd2c45df",
          riskLevel: "Ⅰ",
          latitude: "31.771417971802112",
          acceptNum: 39,
          enterprise_name: "安徽青松冷链有限公司",
          longitude: "117.21165156991545",
        },
        {
          noRectifyNum: 1,
          RectifyNum: 0,
          enter_no: "fa771441ef1c4bac8b3581d9348c7472",
          riskLevel: "Ⅰ",
          latitude: "31.700028109686432",
          acceptNum: 2,
          enterprise_name: "合肥南方汽车零部件有限公司",
          longitude: "117.15983744284574",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "071da8f48517497b9327c50d923ada11",
          riskLevel: "Ⅰ",
          latitude: "31.7825261083889",
          acceptNum: 0,
          enterprise_name: "合肥恒泰工程机械有限公司",
          longitude: "117.17821632442714",
        },
        {
          noRectifyNum: 25,
          RectifyNum: 33,
          enter_no: "02000923b92411ea8488506b4b47338c",
          riskLevel: "Ⅰ",
          latitude: "31.129435",
          acceptNum: 4391,
          enterprise_name: "安徽省庐江龙桥矿业有限公司",
          longitude: "117.479222",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "37bd96c863d446cab384b9faa562ef6c",
          riskLevel: "Ⅱ",
          latitude: "31.27713050725423",
          acceptNum: 24,
          enterprise_name: "安徽天石源新型建材有限公司",
          longitude: "117.18663969027898",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "020020e8b92411ea8488506b4b47338c",
          riskLevel: "Ⅲ",
          latitude: "31.283372",
          acceptNum: 4,
          enterprise_name: "合肥南方水泥有限公司",
          longitude: "117.348928",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "1e62e318731b47b49aa60c080f922245",
          riskLevel: "Ⅱ",
          latitude: "31.28638032986132",
          acceptNum: 2,
          enterprise_name: "合肥南方水泥有限公司石灰岩矿",
          longitude: "117.33928025660241",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "40ef71613ff24665b288cad3eb40a976",
          riskLevel: "Ⅲ",
          latitude: "31.122386639439608",
          acceptNum: 3,
          enterprise_name: "安徽省金鼎矿业股份有限公司",
          longitude: "117.5081905730004",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 1,
          enter_no: "02009483b92411ea8488506b4b47338c",
          riskLevel: "Ⅱ",
          latitude: "31.166383",
          acceptNum: 76,
          enterprise_name: "安徽铜冠（庐江）矿业有限公司",
          longitude: "117.307589",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 28,
          enter_no: "0205894fb92411ea8488506b4b47338c",
          riskLevel: "Ⅱ",
          latitude: "31.018370107767484",
          acceptNum: 70,
          enterprise_name: "安徽金牛矿业有限公司",
          longitude: "117.36124328733807",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 15,
          enter_no: "8c5f6d9d31124d77a57c3284c401013c",
          riskLevel: "Ⅱ",
          latitude: "31.31723289332357",
          acceptNum: 4,
          enterprise_name: "安徽大地熊新材料股份有限公司",
          longitude: "117.21252103981855",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "347d7f4e865f486a9913ef8a2a177737",
          riskLevel: "Ⅳ",
          latitude: "31.271663",
          acceptNum: 0,
          enterprise_name: "庐江县友尊矿业有限公司",
          longitude: "117.200392",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 1,
          enter_no: "b3e9457adac24b6182054280b1796371",
          riskLevel: "Ⅲ",
          latitude: "31.79900042550939",
          acceptNum: 1,
          enterprise_name: "合肥美的暖通设备有限公司",
          longitude: "117.1409044864258",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "9a5bcca8e9e74ddc8b77c79dae917b7b",
          riskLevel: "Ⅳ",
          latitude: "31.812258137063477",
          acceptNum: 5,
          enterprise_name: "格力电器（合肥）有限公司",
          longitude: "117.18221279581049",
        },
        {
          noRectifyNum: 18,
          RectifyNum: 20,
          enter_no: "68517017db864fee8c8ff2df9b7eff70",
          riskLevel: "Ⅲ",
          latitude: "31.731841902942847",
          acceptNum: 973,
          enterprise_name: "安徽合力股份有限公司",
          longitude: "117.2213742448568",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 6,
          enter_no: "3eb968f1c038462ebaaad077ad0899f0",
          riskLevel: "Ⅲ",
          latitude: "31.746870314660214",
          acceptNum: 240,
          enterprise_name: "合肥康盛管业有限责任公司",
          longitude: "117.21930266252032",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 4,
          enter_no: "35f4d46a89ce4808ae72fc2a8c510503",
          riskLevel: "Ⅱ",
          latitude: "31.736514211547505",
          acceptNum: 8,
          enterprise_name: "合肥永升机械有限公司",
          longitude: "117.2232449211661",
        },
        {
          noRectifyNum: 25,
          RectifyNum: 1,
          enter_no: "c3f4d5cedf9e4d998588ca64ba5f838c",
          riskLevel: "Ⅲ",
          latitude: "31.97372885902856",
          acceptNum: 599,
          enterprise_name: "安徽元琛环保科技股份有限公司",
          longitude: "117.32730925771534",
        },
        {
          noRectifyNum: 9,
          RectifyNum: 6,
          enter_no: "bb589cd39f88456fad71fa9c8c6dc8ea",
          riskLevel: "Ⅲ",
          latitude: "31.902380336040835",
          acceptNum: 3,
          enterprise_name: "恒安（合肥）生活用品有限公司",
          longitude: "117.36749553860278",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "c8da949188fd4d549a84bc2305c68a3d",
          riskLevel: "Ⅱ",
          latitude: "31.533891165704205",
          acceptNum: 18,
          enterprise_name: "中材安徽水泥有限公司",
          longitude: "117.75109841897391",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "de50499aacb84d1a95f50a306c10a7d9",
          riskLevel: "Ⅱ",
          latitude: "31.884211834392694",
          acceptNum: 10,
          enterprise_name: "巢湖全强矿山资源开发有限公司",
          longitude: "117.70743877748832",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 2,
          enter_no: "413f3a4a20764c93b124be17f5a1981c",
          riskLevel: "Ⅲ",
          latitude: "31.671845214666995",
          acceptNum: 1,
          enterprise_name: "巢湖市金鼎盛电子灯饰有限公司",
          longitude: "117.77378268177495",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 7,
          enter_no: "02003625b92411ea8488506b4b47338c",
          riskLevel: "Ⅱ",
          latitude: "31.646735",
          acceptNum: 54,
          enterprise_name: "安徽皖维高新材料股份有限公司",
          longitude: "117.876956",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 0,
          enter_no: "5e05f15928b14edea95748401df21caa",
          riskLevel: "Ⅱ",
          latitude: "31.672791401396122",
          acceptNum: 42,
          enterprise_name: "巢湖云海镁业青苔山镁矿",
          longitude: "117.85071801226173",
        },
        {
          noRectifyNum: 0,
          RectifyNum: 7,
          enter_no: "4ca260996eb44106bf2ada8fe1fca612",
          riskLevel: "Ⅱ",
          latitude: "31.654096443539462",
          acceptNum: 0,
          enterprise_name: "安徽金美达机械有限公司",
          longitude: "117.95494593024436",
        },
      ],
      area_list: [
        {
          id: 192,
          dealType: null,
          areaCode: "340111",
          areaName: "包河区",
          longitude: "117.316576258567",
          latitude: "31.799293467782279",
          parentCode: "3401",
        },
        {
          id: 284,
          dealType: null,
          areaCode: "3401",
          areaName: "合肥市",
          longitude: "117.23344266497664",
          latitude: "31.826577833686888",
          parentCode: "34",
        },
        {
          id: 493,
          dealType: null,
          areaCode: "340181",
          areaName: "巢湖市",
          longitude: "117.89557620044565",
          latitude: "31.629002428816319",
          parentCode: "3401",
        },
        {
          id: 528,
          dealType: null,
          areaCode: "340124",
          areaName: "庐江县",
          longitude: "117.29357730191721",
          latitude: "31.261327637478027",
          parentCode: "3401",
        },
        {
          id: 529,
          dealType: null,
          areaCode: "340103",
          areaName: "庐阳区",
          longitude: "117.27145913381999",
          latitude: "31.884886695554333",
          parentCode: "3401",
        },
        {
          id: 916,
          dealType: null,
          areaCode: "340102",
          areaName: "瑶海区",
          longitude: "117.3155870445394",
          latitude: "31.86378694165692",
          parentCode: "3401",
        },
        {
          id: 1006,
          dealType: null,
          areaCode: "340122",
          areaName: "肥东县",
          longitude: "117.47540062527533",
          latitude: "31.89389035448661",
          parentCode: "3401",
        },
        {
          id: 1007,
          dealType: null,
          areaCode: "340123",
          areaName: "肥西县",
          longitude: "117.16455781372443",
          latitude: "31.712962132716887",
          parentCode: "3401",
        },
        {
          id: 1058,
          dealType: null,
          areaCode: "340104",
          areaName: "蜀山区",
          longitude: "117.26646078230138",
          latitude: "31.857378217104249",
          parentCode: "3401",
        },
        {
          id: 1185,
          dealType: null,
          areaCode: "340121",
          areaName: "长丰县",
          longitude: "117.17356009256213",
          latitude: "32.483722623763167",
          parentCode: "3401",
        },
      ],
      areaName: "安徽省",
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 地图画圆
    circle_Map() {
      var map = new BMap.Map(document.getElementById("circle_Map")); // 创建Map实例
      var point = new BMap.Point("118.575881", "30.066133");
      map.enableScrollWheelZoom();
      map.centerAndZoom(point, 17);
      var center = new BMap.Point(117.21712512504884, 31.860240259379054); //创建圆的中心点
      var radius = 700; //圆的半径
      var imged = require("@/assets/img/map/spework.png");
      // var imged = require("@/assets/img/map/blue.png");
      var circle = new BMap.Circle(center, radius, {
        fillColor: "#19fcf0", // 填充透明度，取值范围0-1
        strokeWeight: 1, // 边线宽度，以像素为单位
        fillOpacity: 0.1, // 填充颜色。当参数为空时，圆形没有填充颜色
        strokeColor: "#19fcf0", // 边线颜色
        strokeOpacity: 0.1, // 边线透明度，取值范围0-1
      });
      var myIcon1ed = new BMap.Icon(imged, new BMap.Size(132, 106)); // 加图片(icon)
      var marker = new BMap.Marker(center,{
        icon:myIcon1ed
      }); // 创建
      map.addOverlay(marker);
      map.addOverlay(circle);
      map.setCenter(center); //重新设置地图的中心
      map.setMapStyleV2({
        styleId: "482abb7ddaf225a50410272b0e48d654",
      });
    },
    // -----加图层-------------------------------------------------------
    show() {
      this.my_Map = coverage(
        "map",
        this.enter_list,
        this.area_list,
        this.value,
        this.areaName
      );
      // this.my_Map = new BMap.Map(document.getElementById("map"));

      // // new BMap.Point 设置地图中心点
      // // this.my_Map.centerAndZoom(new BMap.Point("118.426441", "30.694851"), 5); //地图初始化，，设置中心点坐标和地图级别(1-21),15展示街道级别
      // this.my_Map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放功能。仅对PC上有效
      // // 模拟后台返回数据进行打点 设置图片
      // if (this.enter_list.length) {
      //   // 打点图片
      //   var imged;
      //   // var imged = require("@/assets/img/map/blue.png");
      //   this.enter_list.forEach(item => {
      //     if (item.longitude && item.latitude) {
      //       if (item.riskLevel == "Ⅰ") {
      //         imged = require("@/assets/img/map/red.png");
      //       } else if (item.riskLevel == "Ⅱ") {
      //         imged = require("@/assets/img/map/orange.png");
      //       } else if (item.riskLevel == "Ⅲ") {
      //         imged = require("@/assets/img/map/yellow.png");
      //       } else if (item.riskLevel == "Ⅳ") {
      //         imged = require("@/assets/img/map/blue.png");
      //       }
      //     }
      //     var pted = new BMap.Point(item.longitude, item.latitude);
      //     var myIcon1ed = new BMap.Icon(imged, new BMap.Size(40, 40)); // 自定义打点图片
      //     if (item.noRectifyNum > 0) {
      //       var marker1 = new BMap.Marker(pted, {
      //         icon: myIcon1ed,
      //         title: item.enterprise_name + "(跳动原因:有隐患未整改)",
      //       }); // 创建标注
      //       marker1.disableMassClear(); //设置标注不可清除
      //       marker1.setZIndex(99); // 覆盖层次优先级
      //       this.my_Map.addOverlay(marker1);
      //       marker1.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      //     } else {
      //       var marker1 = new BMap.Marker(pted, {
      //         icon: myIcon1ed,
      //         title: item.enterprise_name,
      //       }); // 创建标注
      //       marker1.disableMassClear(); //设置标注不可清除
      //       marker1.setZIndex(99);
      //       this.my_Map.addOverlay(marker1);
      //     }
      //     // this.addClickHandler(marker1, item.enter_no);
      //   });
      // }
      // // 根据地区
      // if (this.area_list.length) {
      //   var starimg = require("@/assets/img/map/one.png");
      //   this.area_list.forEach(item => {
      //     if (item.longitude && item.latitude) {
      //       var starpte = new BMap.Point(item.longitude, item.latitude);
      //       var mystar = new BMap.Icon(starimg, new BMap.Size(40, 40));
      //       var markerstar = new BMap.Marker(starpte, {
      //         icon: mystar,
      //         title: item.areaName + "应急管理局", // 鼠标hover上去显示的文字
      //       }); // 创建标注
      //       markerstar.disableMassClear(); //设置标注不可清除
      //       markerstar.setZIndex(98);
      //       this.my_Map.addOverlay(markerstar);
      //     }
      //   });
      // }
      // this.my_Map.addEventListener("click", e => {
      //   // 地图点击事件，获取经纬度
      //   this.JD = e.point.lng; // 经度
      //   this.WD = e.point.lat; // 纬度
      // });
      // var local = new BMap.LocalSearch(this.my_Map, {
      //   // 一定范围的地图
      //   renderOptions: {
      //     map: this.my_Map,
      //   },
      // });
      // local.search(this.value); // 搜索
      // this.getBoundary();
    },
    // -----加图层-------------------------------------------------------
    /*获取行政区域 添加覆盖物*/
    getBoundary() {
      var bdary = new BMap.Boundary();
      bdary.get(this.areaName, rs => {
        // rs.boundaries  获取选中行政区划边框点的集合
        //获取行政区域
        this.my_Map.clearOverlays(); //清除地图覆盖物
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
          this.my_Map.addOverlay(ply); //添加覆盖物
          //  ply.getPath() 获取多边形所有点的经纬度
          pointArray = pointArray.concat(ply.getPath());
        }
        //  重新设置中心点视野 会将 this.my_Map.centerAndZoom 覆盖掉
        this.my_Map.setViewport(pointArray); //调整视野
      });
      setInterval(() => {
        this.my_Map.setMapStyleV2({
          styleId: "9c423e5c27a79bf4c50bc26b98d67a9e",
        });
      }, 300);
    },
    // -----普通打点-------------------------------------------------------
    // 一开始显示全国
    show_mapDemo() {
      this.my_Map = allmap("map");
      // this.my_Map = new BMap.Map(document.getElementById("map"));
      // this.my_Map.centerAndZoom(
      //   new BMap.Point(103.61511664290036, 35.179195230559664),
      //   5
      // );
      // this.my_Map.enableScrollWheelZoom(true);

      // this.my_Map.addEventListener("click", e => {
      //   // 地图点击事件，获取经纬度
      //   this.JD = e.point.lng; // 经度
      //   this.WD = e.point.lat; // 纬度
      // });
    },
    // 模拟点击公司获取该公司位置
    getMap() {
      this.my_Map = tapper(this.enterlist);
      // var map = new BMap.Map("map"); // 创建Map实例
      // map.centerAndZoom(
      //   new BMap.Point("117.36081735578051", "31.786304704827742"),
      //   6
      // ); // 初始化地图,设置中心点坐标和地图级别
      // this.my_Map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      // if (this.enterlist.length) {
      //   this.enterlist.forEach(item => {
      //     if (item.longitude && item.latitude) {
      //       var imged = require("@/assets/img/map/blue.png");
      //       if (item.id == 571) {
      //         imged = require("@/assets/img/map/compony (3).png");
      //       }

      //       var pted = new BMap.Point(item.longitude, item.latitude); // 重新定义中心点
      //       var myIcon1ed = new BMap.Icon(imged, new BMap.Size(30, 39)); // 加图片(icon)
      //       // 给中心点加icon
      //       var marker1 = new BMap.Marker(pted, {
      //         icon: myIcon1ed,
      //         // title:item.enterprise_name
      //       }); // 创建标注
      //       // marker1.disableMassClear()  //设置标注不可清除
      //       // marker1.setZIndex(99)
      //       map.addOverlay(marker1);
      //       //  点击中心点做弹框
      //       var opts = {
      //         width: 200, // 信息窗口宽度
      //         height: 100, // 信息窗口高度
      //         title: item.enterprise_name, // 信息窗口标题
      //         enableMessage: true, //设置允许信息窗发送短息
      //         // offset:{width:-1}
      //         // message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
      //       };
      //       var infoWindow = new BMap.InfoWindow(
      //         `【风险点总数：${item.risk_num}条】，【巡检率：${item.task_num}】，【整改率：${item.hidden_num}】`,
      //         opts
      //       ); // 创建信息窗口对象
      //       marker1.addEventListener("mouseover", function () {
      //         map.openInfoWindow(infoWindow, pted); //开启信息窗口
      //       });
      //       marker1.addEventListener("mouseout", function () {
      //         map.closeInfoWindow(infoWindow, pted);
      //       });
      //       // this.addClickHandler(marker1, item.id);
      //     }
      //   });
      // }
    },
    change_map_screen() {
      this.map_screen = !this.map_screen;
      this.$nextTick(() => {
        this.getMap();
      });
    },
  },
  created() {},
  mounted() {
    this.show();
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
.circle_Map {
  width: 100vw !important;
  height: 100vh !important;
  background-color: pink;
}
.el-input {
  width: 200px;
  .el-input_inner {
    width: 200px;
  }
}

.map_content {
  height: 750px;
  width: 50vw;
  .content {
    position: relative;
    height: 100%;
    width: 100%;
    .full_screen {
      position: absolute;
      /*color: white;*/
      font-weight: 900;
      font-size: 22px;
      /*top: 10px;*/
      right: 10px;
      top: 20px;
      line-height: 0.2rem;
      cursor: pointer;
      z-index: 999;
      color: black;
    }
    #map {
      /* 
   vh 是指可视窗口的高度
   vm 是指可视窗口的宽度
  */

      height: 100%;
      width: 100%;
      // height: 85vh;
      // width: 90vw;
    }
  }
}
.map_screen {
  position: fixed !important;
  width: 100vw !important;
  height: 100% !important;
  left: 0;
  top: 0px;
}
// 去掉百度地图标识
/deep/.anchorBL {
  display: none !important;
}
</style>