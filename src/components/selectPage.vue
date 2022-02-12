<template>
<!--  <Myselect :select="add_data.enterName" :selectValue.sync='add_data.enterName' :enterlist.sync='parent_enterlist'></Myselect> -->
  <div class="select">
    <el-select
      filterable
      clearable
      :multiple="multiple"
      v-model.trim="selectValue"
      placeholder="请选择"
      :remote-method="remoteSearch"
      remote
      :loading="loading"
      @change="handleChange"
    >
      <!--   -->
      <div class="option">
        <el-option
          v-for="i in enterlist"
          :key="i.id"
          :label="i.enterpriseName"
          :value="i.enterpriseName"
        ></el-option>
      </div>
      <div class="pagin">
        <el-pagination
          small
          background
          v-if="enterlist.length > 0"
          layout="prev, pager, next, total"
          :page-size="selectpage.pageSize"
          :total="selectpage.total"
          :current-page="selectpage.page"
          @size-change="handleSizeChange"
          :pager-count="5"
          @current-change="handleCurrentChange"
          
        >
        </el-pagination>
      </div>
    </el-select>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
    select: {
      type: [String, Array, Number],
      default: "",
    },
  },
  data() {
    return {
      selectValue: "",
      enterlist: [],
      selectpage: {
        pageSize: 10,
        total: 0,
        page: 1,
      },
      // searchName: "",
      loading: false,
    };
  },
  computed: {},
  watch: {
    // // 监听值发生的变化
    selectValue(val) {
      if (val == "") {
        this.selectValue = val;
        // this.searchName = val;
        this.$emit("update:selectValue", val);
        this.query_qryEnterpriseAll();
      }
    },
    // 弹框显示 下拉框始终保持未选择状态
    select(val) {
      this.selectValue = val;
    },
  },
  methods: {
    //  获取下拉框数据
    query_qryEnterpriseAll() {
      this.loading = true;
      this.$http
        .post(
          "enterpriseData/findEnterpriseInfo",
          {
            pageSize: this.selectpage.pageSize,
            page: this.selectpage.page,
            // enterpriseName: this.searchName,
            enterpriseName: this.selectValue,
          },
          {
            headers: {
              token: this.$store.state.tokenn.token,
            },
          }
        )
        .then((res) => {
          this.loading = false;
          this.enterlist = res.body.object.list;
          this.$emit("update:enterlist", this.enterlist);
          this.selectpage.total = res.body.object.total;
        });
    },

    //  远程请求数据
    remoteSearch(val) {
      this.selectpage.page = 1;
      this.selectValue = val;
      this.query_qryEnterpriseAll();
    },
    handleChange(val) {
      this.selectValue = val;
      this.$emit("update:selectValue", val);
      // this.query_qryEnterpriseAll();
    },
    // 下拉框显示隐藏时触发
    // visibleChange(val) {
    //   if (val) {
    //     this.query_qryEnterpriseAll();
    //   }
    // },
    // 分页改变当前页码回调
    handleSizeChange(val) {
      this.selectpage.pageSize = val;
      this.query_qryEnterpriseAll();
    },
    // 分页改变当前每页条数
    handleCurrentChange(val) {
      this.selectpage.page = val;
      this.query_qryEnterpriseAll();
    },
  },
  created() {
    this.query_qryEnterpriseAll();
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
.option {
  min-height: 50px;
  height: auto;
  max-height: 150px;
  overflow-y: auto;
}
.pagin {
  background: #fff;
}
::-webkit-scrollbar {
  width: 2px;
}
</style>