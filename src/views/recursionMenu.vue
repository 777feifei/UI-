

<script>
let nav_List = [
  {
    path: "/date",
    name: "日期组件集合",
    children: [
      {
        path: "/date",
        name: "日期组件",
      },
    ],
  },
  {
    path: "/echarts",
    name: "echarts图表",
  },
  {
    path: "/upload",
    name: "Upload文件上传&文件下载",
  },
  {
    path: "/table",
    name: "表格合并",
      children: [
      {
        path: "/table",
        name: "相同列合并",
      },
      {
        path: "/tableMerge",
        name: "复杂合并",
      },
    ],
  },
  {
    path: "/form",
    name: "Form表单",
  },
  {
    path: "/map",
    name: "Map地图",
  },
  {
    path: "/moment",
    name: "Moment日期",
  },
  {
    path: "/pagination",
    name: "Pagination分页",
  },
  {
    path: "/selcet",
    name: "Select下拉框",
  },
  {
    path: "/qq",
    name: "在线聊天",
  },
  // {
  //   path: "/highColor",
  //   name: "搜索关键字高亮",
  // },
  // {
  //   path: "/sincanvas",
  //   name: "图片放大",
  // },
  // {
  //   path: "/sincanvas",
  //   name: "签字",
  // },
  {
    path: "/allfunction",
    name: "开发功能",
  },
  {
    path: "/css",
    name: "css集合",
  },
  
];

export default {
  name: "Menu",
  functional: true,
  render(createElement) {
    const getMenus = data => {
      return data.map(item => {
        if (item.children) {
          return createElement("el-submenu", { attrs: { index: item.path } }, [
            createElement(
              "template",
              {
                slot: "title",
              },
              [
                createElement(
                  "span",
                  {
                    attrs: { slot: "title" },
                  },
                  [item.name]
                ),
              ]
            ),
            getMenus(item.children)
          ]);
        } else {
          return createElement(
            "el-menu-item",
            {
              attrs: { index: item.path },
            },
            [
              createElement(
                "span",
                {
                  attrs: { slot: "title" },
                },
                [item.name]
              ),
            ]
          );
        }
      });
    };
    const vNode = getMenus(nav_List);
    return vNode;
  },
};
</script>
