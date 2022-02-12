<template>
  <div class="DateTimePicker">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { show: true, copy_value: "我被复制啦" };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    console.log(new Date("day"));
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>