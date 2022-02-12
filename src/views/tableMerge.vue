<template>
  <div class="">
    <!--      :span-method="spanMethod" -->
    <el-table :data="tableData" stripe style="width: 100%" border>
      <el-table-column prop="industry" label="用电分类" width="180">
      </el-table-column>
      <el-table-column prop="custname" label="电度电价" width="180">
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
            type:'用电分类', 
            price:'电度电价',
          }
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
</style>