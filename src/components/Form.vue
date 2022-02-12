<template>
  <div class="form">
    <el-form
      label-width="180px"
      :model="form"
      :rules="rules"
      style="width: 800px"
    >
      <el-form-item label="输入数字且整数" prop="value">
        <!--  @keyup.native="value = test(value) ? value : ''" -->
        <el-input v-model.trim="form.value" placeholder="请输入数字"></el-input>
      </el-form-item>
      <el-form-item label="输入数字加字母" prop="value1">
        <el-input v-model.trim="form.value1"></el-input>
      </el-form-item>
      <el-form-item label="输入数字或字母" prop="value4">
        <el-input v-model.trim="form.value4"></el-input>
      </el-form-item>
      <el-form-item label="输入数字加字母加字符" prop="value5">
        <el-input v-model.trim="form.value5"></el-input>
      </el-form-item>
      <el-form-item label="输入手机号码" prop="value2">
        <el-input v-model.trim="form.value2" ></el-input>
      </el-form-item>
      <el-form-item label="重复手机号码" prop="value3">
        <el-input v-model.trim="form.value3" @change ='phone_change'></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// <!--字符串去空-->
// str..replace(/\s/g, '')
// <!--手机号码校验-->
// var reg=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
// reg.text()

// 仅限输入纯数字
const checkInput = (rule, value, cb) => {
  value = value.toString();
  var reg = /^((?!0)\d{1,9})$/;
  if (value.match(reg)) {
    return cb();
  }
  cb(new Error("请输入纯数字"));
};
// 仅限输入纯数字和字母
const checkInput1 = (rule, value, cb) => {
  value = value.toString();
  var reg= /(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]/;
  if (value.match(reg)) {
    return cb();
  }
  cb(new Error("请输入纯数字和字母"));
};

// 仅限输入正确的手机号
const checkInput2 = (rule, value, cb) => {
  value = value.toString();
  var reg=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
  if (value.match(reg)) {
    return cb();
  }
  cb(new Error("请输入正确的手机号"));
};
// 重复手机号
let value2 = ''
const checkInput3 = (rule, value, cb) => {
  value = value.toString();
  if(value !== value2) {
   cb(new Error("两次密码输入不一致"));
  }  
}
// 请输入纯数字或字母
const checkInput4 = (rule, value, cb) => {
  value = value.toString();

}
// 输入数字加字母加字符
const checkInput5 = (rule, value, cb) => {
  value = value.toString();

}
export default {
  components: {},
  data() {
    return {
      form: {
        value: "",
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: "",
      },
      rules: {
        value: [
          { required: true, message: "请输入", trigger: "blur" },
          { validator: checkInput, trigger: "blur" },
        ],
        value1: [
          { required: true, message: "请输入", trigger: "blur" },
          { validator: checkInput1, trigger: "blur" },
        ],
        value2: [
          { required: true, message: "请输入", trigger: "blur" },
          { validator: checkInput2, trigger: "blur" },
        ],
        value3: [
          { required: true, message: "请输入", trigger: "blur" },
          { validator: checkInput3, trigger: "blur" },
        ],
        value4: [
          { required: true, message: "请输入", trigger: "blur" },
          { validator: checkInput4, trigger: "blur" },
        ],
        value5: [
          { required: true, message: "请输入", trigger: "blur" },
          { validator: checkInput5, trigger: "blur" },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
   phone_change(val){
     value2 = val
   }
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