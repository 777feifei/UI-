<template>
  <div class="Upload">
    <div class="my_title">
      文件流导出
      <el-popover
        placement="top-start"
        width="400"
        trigger="click"
        style="margin-left: 20px"
      >
        <el-button slot="reference" size="mini" type="primary"
          >查看步骤</el-button
        >
        <div>
          步骤1：npm install js-file-download --save <br /><br />
          步骤2：import fileDownload from "js-file-download"; <br /><br />
          步骤3：
          fileDownload(data,"安全责任制列表.xls","application/vnd.ms-excel;charset=utf-8");
          <br />
        </div>
      </el-popover>
    </div>
    <div
      class="my_title"
      title="博文：https://www.cnblogs.com/steamed-twisted-roll/p/11572859.html"
    >
      上传图片前大于4MB即压缩
    </div>
    <el-upload
      accept="bmg,.png,.jpg,.jpeg"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :before-upload="beforeAvatarUpload"
      :on-success="handleSuccess"
      :on-error="hanldeError"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
// let blob = new Blob([res.data], {
//   // type: `application/msword`, //word文档为msword,pdf文档为pdf
//   type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// });
// let objectUrl = URL.createObjectURL(blob);
// let link = document.createElement("a");
// let fname = `安全风险告知卡`; //下载文件的名字
// link.href = objectUrl;
// link.setAttribute("download", fname);
// document.body.appendChild(link);
// link.click();
import * as imageConversion from "image-conversion";
export default {
  components: {},
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    beforeAvatarUpload(file) {
      console.log("压缩之前", file.size);
      return new Promise((resolve, reject) => {
        let isLt2M = file.size / 1024 / 1024 < 4; // 判定图片大小是否小于4MB
        if (isLt2M) {
          resolve(file);
          return;
        }
        // 压缩到400KB,这里的400就是要压缩的大小,可自定义
        imageConversion.compressAccurately(file, 400).then(res => {
          console.log("压缩之后", res.size);
          resolve(res);
        });
      });
    },
    handleSuccess() {},
    hanldeError() {},
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
</style>