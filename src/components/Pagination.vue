<template>
  <div class="">
    <div class="my_title">分页组件二次封装</div>
    <!-- @click="btn_click" -->
    <div class="pagination" >
      <el-pagination
        background
        :layout="page.layout"
        :total="page.total"
        :page-size="page.pageSize"
        :page-count="page.pageCount"
        @size-change='(val) => page.pageSize = val'
        @current-change='(val) => page.pageCount = val'
      >
      <span>首页</span>
      <span>尾页</span>
      </el-pagination>
    </div>
  

    <!-- <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img :src="item.imgurl" alt="产品图片" />
        <p class="ellipsis_two myp">{{ item.text }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
// 添加元素
// function add_element(newEle, targetEle) {
//   var parent = targetEle.parentNode;
//   if (parent.lastChild == targetEle) {
//     parent.appdendChild(newEle);
//   } else {
//     parent.insertBefore(newEle, targetEle.nextSibling);
//   }
// }
export default {
  props: {
    page: {
      type: Object,
      default: () => {
        return {
          total: 1000,
          layout: "total, sizes,slot, prev, pager, next, slot,jumper",
          pageSize: 10,
          pageCount: 1,
        };
      },
    },

  },
  components: {},
  data() {
    return {
      list: [
        {
          imgurl: require("@/assets/img/common/2.jpg"),
          text: "我要显示省略号我要显示省略号我要显示省略号我要显",
        },
        {
          imgurl: require("@/assets/img/common/2.jpg"),
          text: "我要显示省略号我要显示省略号我要显示省略号我要显",
        },
        {
          imgurl: require("@/assets/img/common/2.jpg"),
          text: "我要显示省略号我要显示省略号我要显示省略号我要显",
        },
        {
          imgurl: require("@/assets/img/common/2.jpg"),
          text: "我要显示省略号我要显示省略号我要显示省略号我要显",
        },
        {
          imgurl: require("@/assets/img/common/2.jpg"),
          text: "我要显示省略号我要显示省略号我要显示省略号我要显",
        },
        {
          imgurl: require("@/assets/img/common/2.jpg"),
          text: "我要显示省略号我要显示省略号我要显示省略号我要显",
        },
        {
          imgurl: require("@/assets/img/common/2.jpg"),
          text: "我要显示省略号我要显示省略号我要显示省略号我要显",
        },
        {
          imgurl: require("@/assets/img/common/2.jpg"),
          text: "我要显示省略号我要显示省略号我要显示省略号我要显",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // btn_click(e) {
    //   if (e.target.innerHTML == "首页") {
    //     console.log(111);
    //   } else if (e.target.innerHTML == "尾页") {
    //     console.log(222);
    //   }
    // },
    sizeChange(val){
      this.page.pageSize = val
    },
    currentChange(val){
      this.page.pageCount = val
    },
  },
  created() {},
  mounted() {
    // this.$nextTick(() => {
    //   // Before
    //   //    let newel = `<button style="cursor: pointer;">首页</button> `
    //   let newel = document.createElement("button");
    //   let text = document.createTextNode("首页");
    //   newel.appendChild(text);
    //   let mochu = document.getElementsByClassName("btn-prev")[0];
    //   mochu.parentNode.insertBefore(newel, mochu);
    //   // After
    //   let newel1 = document.createElement("button");
    //   let text1 = document.createTextNode("尾页");
    //   let mochu1 = document.getElementsByClassName("btn-next")[0];
    //   newel1.appendChild(text1);
    //   add_element(newel1, mochu1);
    // });
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
#p {
  width: 100px;
  background-color: pink;
  line-height: 30px;
  // padding: 28px 85px;
  box-sizing: border-box;
}
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    height: 400px;
    width: 32%;
    margin-top: 10px;
    border: 1px solid #ccc;

    img {
      display: block;
      width: 100%;
      height: 300px;
    }
    .myp {
      width: 100px;
      margin: 0 auto;
      line-height: 30px;
    }
  }
}
</style>