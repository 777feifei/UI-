/*
 * @Description:
 * @Autor: Zhongyu
 * @Date: 2021-08-30 09:14:34
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-30 21:12:08
 */
import Vue from "vue";
import VueRouter from "vue-router";
// import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:'home',
    component: () => import('@/views/home.vue'),
    children:[
      {
        path:'date',
        name:'date',
        component: () => import('@/components/DateTimePicker.vue'),
      },
      {
        path:'fullScreen',
        name:'fullScreen',
        component: () => import('@/components/fullScreen.vue'),
      },
      {
        path:'screenshot',
        name:'screenshot',
        component: () => import('@/components/Screenshot.vue'),
      },
      {
        path:'copy',
        name:'copy',
        component: () => import('@/components/Copy.vue'),
      },
      {
        path:'moment',
        name:'moment',
        component: () => import('@/components/Moment.vue'),
      },
      {
        path:'form',
        name:'form',
        component: () => import('@/components/Form.vue'),
      },
      {
        path:'upload',
        name:'upload',
        component: () => import('@/components/Upload.vue'),
      },
      {
        path:'map',
        name:'map',
        component: () => import('@/components/Map.vue'),
      },
      {
        path:'selcet',
        name:'selcet',
        component: () => import('@/components/Select.vue'),
      },
      {
        path:'pagination',
        name:'pagination',
        component: () => import('@/components/Pagination.vue'),
      },
      {
        path:'qrcode',
        name:'qrcode',
        component: () => import('@/components/QRCode.vue'),
      },
      {
        path:'sincanvas',
        name:'sincanvas',
        component: () => import('@/components/Sincanvas.vue'),
      },
      {
        path:'css',
        name:'css',
        component: () => import('@/views/css.vue'),
      },
      {
        path:'recursionMenu',
        name:'recursionMenu',
        component: () => import('@/views/recursionMenu.vue'),
      },
      {
        path:'highColor',
        name:'highColor',
        component: () => import('@/components/highColor.vue'),
      },
      {
        path:'allfunction',
        name:'allfunction',
        component: () => import('@/views/allfunction.vue'),
      },
      {
        path:'echarts',
        name:'echarts',
        component: () => import('@/views/echarts.vue'),
      },
      {
        path:'table',
        name:'table',
        component: () => import('@/views/Table.vue'),
      },
      {
        path:'tableMerge',
        name:'tableMerge',
        component: () => import('@/views/tableMerge.vue'),
      },
      {
        path:'qq',
        name:'qq',
        component: () => import('@/components/QQ.vue'),
      },
    ]
  },
  {
    path:'/largescreen',
    name:'largescreen',
    component: () => import('@/views/DP/index.vue'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
