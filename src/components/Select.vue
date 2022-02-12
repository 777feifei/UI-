<template>
  <div class="selcet">
    <div class="my_title">treeselect 插件</div>
    <!-- 
    treeselect 属性解说： https://www.vue-treeselect.cn/
     multiple 是否多选
     clearable 是否可以清空
     options options的list
     v-model/value  双向绑定的值
     autoLoadRootOptions 自动加载 
     :load-options="loadOptions"  loadOptions({ action, callback, instanceId }){}  数据懒加载 ??? 不会用
     :async="true" 异步搜索
     :normalizer="normalizer" 自定义键名   normalizer(node) {
                                              return {
                                                id: node.key,
                                                label: node.name,
                                                children: node.subOptions,
                                              }
                                            },
     -->
    <treeselect
      :multiple="true"
      clearable
      :options="treeselect_options"
      isNew
      placeholder="请选择"
      class="treeselect"
      v-model="treeselect_value"
      :limit="3"
      :limitText="count => `...`"
    />
    <!-- <treeselect-value :value="" /> -->
    <div class="my_title">下拉</div>
    <el-cascader
      v-model="name"
      :options="city"
      :props='{
        value: "id",
        label: "name",
        children: "child"
      }'
    ></el-cascader>
    <!--  @change="handleChange" -->
    <!-- <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in city"
      :key="item.id"
      :chilren='item.child'
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select> -->
  </div>
</template>

<script>
import city from "@/components/city";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  components: { Treeselect },
  data() {
    return {
      treeselect_value: null,
      // define options
      treeselect_options: [
        {
          id: "a",
          label: "a",
          children: [
            {
              id: "aa",
              label: "aa",
            },
            {
              id: "ab",
              label: "ab",
            },
          ],
        },
        {
          id: "b",
          label: "b",
        },
        {
          id: "c",
          label: "c",
        },
        {
          id: "d",
          label: "d",
        },
        {
          id: "e",
          label: "e",
        },
      ],
      city: city,
    };
  },
  computed: {},
  watch: {},
  methods: {
    loadOptions({ action, searchQuery, callback }) {
      if (action === "ASYNC_SEARCH") {
        console.log(searchQuery);
        callback(null, this.treeselect_options);
      }
    },
  },
  created() {
    console.log(city);
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
.treeselect {
  width: 200px;
}
</style>