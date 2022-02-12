<template>
  <div class="">
    <el-button type="primary" v-if="tableData.length == 0" @click="exprot"
      >导出Excel
    </el-button>
    <download-excel
      v-else
      class="download"
      :data="tableData"
      :fields="json_fields"
      name="前端导出excel"
    >
      导出Excel
    </download-excel>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      border
      :span-method="spanMethod"
    >
      <el-table-column type="index" label="序号" width="60"> </el-table-column>
      <el-table-column prop="industry" label="产业" width="180">
      </el-table-column>

      <el-table-column prop="custname" label="法人" width="180">
      </el-table-column>
      <el-table-column prop="draftTypeName" label="票据类型"> </el-table-column>
      <el-table-column prop="lastBal" label="上月余额"> </el-table-column>
      <el-table-column prop="curIncreased" label="本月新增"> </el-table-column>
      <el-table-column prop="address" label="本月减少">
        <el-table-column prop="address" label="质押"> </el-table-column>
        <el-table-column prop="address" label="到期托收"> </el-table-column>
        <el-table-column prop="address" label="背书"> </el-table-column>
        <el-table-column prop="address" label="贴现"> </el-table-column>
        <el-table-column prop="address" label="合计"> </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          rowNum: null,
          industry: "SCBC",
          custCode: "001421",
          custname: "深圳软件科技有限公司",
          draftType: "1",
          draftTypeName: "银票-电票",
          lastBal: "0.00",
          curIncreased: "5,200,000.00",
          saEndorseLessen: "0.00",
          collectionLessen: "0.00",
          endorseLessen: "5,200,000.00",
          discountLessen: "0.00",
          curLessen: "5,200,000.00",
          curBal: "0.00",
        },
        {
          rowNum: null,
          industry: "SCBC",
          custCode: "001421",
          custname: "深圳软件科技有限公司",
          draftType: "4",
          draftTypeName: "合计",
          lastBal: "0.00",
          curIncreased: "5,200,000.00",
          saEndorseLessen: "0.00",
          collectionLessen: "0.00",
          endorseLessen: "5,200,000.00",
          discountLessen: "0.00",
          curLessen: "5,200,000.00",
          curBal: "0.00",
        },
        {
          rowNum: null,
          industry: "SCBC",
          custCode: "001560",
          custname: "海外电子有限公司",
          draftType: "1",
          draftTypeName: "银票-电票",
          lastBal: "0.00",
          curIncreased: "4,053,269.00",
          saEndorseLessen: "0.00",
          collectionLessen: "5,926,320.41",
          endorseLessen: "1,586,395.00",
          discountLessen: "0.00",
          curLessen: "7,512,715.41",
          curBal: "5,849,311.00",
        },
        {
          rowNum: null,
          industry: "SCBC",
          custCode: "001560",
          custname: "海外电子有限公司",
          draftType: "4",
          draftTypeName: "合计",
          lastBal: "0.00",
          curIncreased: "4,053,269.00",
          saEndorseLessen: "0.00",
          collectionLessen: "5,926,320.41",
          endorseLessen: "1,586,395.00",
          discountLessen: "0.00",
          curLessen: "7,512,715.41",
          curBal: "5,849,311.00",
        },
        {
          rowNum: null,
          industry: "白电",
          custCode: "001353",
          custname: "家用电器有限公司",
          draftType: "1",
          draftTypeName: "银票-电票",
          lastBal: "0.00",
          curIncreased: "45,964,536.65",
          saEndorseLessen: "0.00",
          collectionLessen: "0.00",
          endorseLessen: "169,679,484.78",
          discountLessen: "0.00",
          curLessen: "169,679,484.78",
          curBal: "42,964,536.65",
        },
        {
          rowNum: null,
          industry: "白电",
          custCode: "001353",
          custname: "家用电器有限公司",
          draftType: "3",
          draftTypeName: "商票-T票通",
          lastBal: "0.00",
          curIncreased: "13,073,200.00",
          saEndorseLessen: "0.00",
          collectionLessen: "3,650,400.00",
          endorseLessen: "0.00",
          discountLessen: "0.00",
          curLessen: "3,650,400.00",
          curBal: "49,875,680.00",
        },
        {
          rowNum: null,
          industry: "白电",
          custCode: "001353",
          custname: "家用电器有限公司",
          draftType: "4",
          draftTypeName: "合计",
          lastBal: "0.00",
          curIncreased: "59,037,736.65",
          saEndorseLessen: "0.00",
          collectionLessen: "3,650,400.00",
          endorseLessen: "169,679,484.78",
          discountLessen: "0.00",
          curLessen: "173,329,884.78",
          curBal: "92,840,216.65",
        },
        {
          rowNum: null,
          industry: "白电",
          custCode: "001354",
          custname: "家用电器（合肥）有限公司",
          draftType: "1",
          draftTypeName: "银票-电票",
          lastBal: "0.00",
          curIncreased: "180,141,055.87",
          saEndorseLessen: "0.00",
          collectionLessen: "115,337.61",
          endorseLessen: "16,001,969.83",
          discountLessen: "113,258,142.22",
          curLessen: "129,375,449.66",
          curBal: "81,004,027.13",
        },
        {
          rowNum: null,
          industry: "白电",
          custCode: "001354",
          custname: "家用电器（合肥）有限公司",
          draftType: "2",
          draftTypeName: "商票-外部商票",
          lastBal: "0.00",
          curIncreased: "0.00",
          saEndorseLessen: "0.00",
          collectionLessen: "0.00",
          endorseLessen: "0.00",
          discountLessen: "0.00",
          curLessen: "0.00",
          curBal: "602,728.00",
        },
        {
          rowNum: null,
          industry: "白电",
          custCode: "001354",
          custname: "家用电器（合肥）有限公司",
          draftType: "3",
          draftTypeName: "商票-T票通",
          lastBal: "0.00",
          curIncreased: "20,271,290.98",
          saEndorseLessen: "0.00",
          collectionLessen: "15,453,326.83",
          endorseLessen: "1,364,560.00",
          discountLessen: "0.00",
          curLessen: "16,817,886.83",
          curBal: "113,413,717.06",
        },
        {
          rowNum: null,
          industry: "白电",
          custCode: "001354",
          custname: "家用电器（合肥）有限公司",
          draftType: "4",
          draftTypeName: "合计",
          lastBal: "0.00",
          curIncreased: "200,412,346.85",
          saEndorseLessen: "0.00",
          collectionLessen: "15,568,664.44",
          endorseLessen: "17,366,529.83",
          discountLessen: "113,258,142.22",
          curLessen: "146,193,336.49",
          curBal: "195,020,472.19",
        },
      ],
      json_fields: {
        产业: "industry",
        法人: "custname",
        票据类型: "draftTypeName",
        上月余额: "lastBal",
        本月新增: "curIncreased",
      },
      tableData: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        let _row = this.merge(this.tableData, "industry").one[rowIndex]; //one[rowIndex] 渲染时取合并数组的每一项出来控制列的显示隐藏
        return {
          rowspan: _row,
          colspan: _row > 0 ? 1 : 0,
        };
      }
      if (columnIndex === 1) {
        let _row = this.merge(this.tableData, "custname").one[rowIndex];
        return {
          rowspan: _row,
          colspan: _row > 0 ? 1 : 0,
        };
      }

      if (rowIndex === 5) {
        console.log("rowIndex", rowIndex);
        // if (columnIndex === 6) {
        //   return [1, 2];
        // } else {
        //   return [0, 0];
        // }
      }
    },
    merge(list = [], fieldName) {
      let spanOneArr = [], // 每行
        concatOne = 0; // 下标

      list.forEach((item, index) => {
        // 第一行 直接展示
        if (index == 0) {
          spanOneArr.push(1);
        } else {
          // 列相同 永远给第一条加数量，其余push 0 代表隐藏
          if (item[fieldName] === list[index - 1][fieldName]) {
            spanOneArr[concatOne] += 1;
            spanOneArr.push(0);
          } else {
            // 列不相同  push 1 显示，下标更换
            spanOneArr.push(1);
            concatOne = index;
          }
        }
      });
      return {
        one: spanOneArr,
      };
    },
    exprot() {
      this.$message({
        type: "error",
        message: "暂无需要导出数据！",
        duration: 1000,
      });
    },
  },
  created() {},
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
.download {
  width: 105px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #66b1ff;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>