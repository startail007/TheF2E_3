import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
Vue.config.productionTip = false;

import store from "@src/plugins/vuex"; //狀態
import router from "@src/plugins/vueRouter"; //路由
import vuetify from "@src/plugins/vuetify"; //ui

//滾動特效
import VueScrollmagic from "vue-scrollmagic";
Vue.use(VueScrollmagic);

import App from "@vue/App";

const app = new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: (h) => h(App),
});
