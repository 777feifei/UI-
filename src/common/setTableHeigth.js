export default {
  data() {
    return {
      table_height: 0,
    }
  },
  methods: {
    watch_page_heigth(num) {
      // num 是顶部其他元素固定高度
      this.$nextTick(() => {
        this.table_height = document.body.clientHeight - num;
      });
      window.onresize = () => {
        return (() => {
          this.table_height = document.body.clientHeight - num;
        })();
      };
    }
  }
}
