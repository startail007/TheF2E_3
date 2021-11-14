import "core-js/stable";
import "regenerator-runtime/runtime";
import "isomorphic-fetch";

import Vue from "vue";
Vue.config.productionTip = false;

import store from "@src/plugins/vuex"; //狀態
import router from "@src/plugins/vueRouter"; //路由
import vuetify from "@src/plugins/vuetify"; //ui

import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
Vue.use(CoolLightBox);

import * as Vue2Leaflet from "vue2-leaflet";
import Vue2LeafletMarkercluster from "@vue/components/Vue2LeafletMarkercluster";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

Vue.component("v-map", Vue2Leaflet.LMap);
Vue.component("v-tilelayer", Vue2Leaflet.LTileLayer);
Vue.component("v-icondefault", Vue2Leaflet.LIconDefault);
Vue.component("v-marker", Vue2Leaflet.LMarker);
Vue.component("v-popup", Vue2Leaflet.LPopup);
Vue.component("v-marker-cluster", Vue2LeafletMarkercluster);
/*Vue.component("LTooltip", LTooltip);
Vue.component("LIcon", LIcon);
Vue.component("LCircle", LCircle);
Vue.component("LRectangle", LRectangle);
Vue.component("LPolygon", LPolygon);
Vue.component("LPolyline", LPolyline);
Vue.component("LGeoJson", LGeoJson);*/

import { Icon, tileLayer } from "leaflet";

const AppExtensionPlugin = {};
AppExtensionPlugin.install = function (Vue, options) {
  Vue.mixin({
    computed: {
      $app() {
        return this.$root.$children[0];
      },
      $app_imageViewer() {
        return this.$app.$refs.imageViewer;
      },
      $app_confirm() {
        return this.$app.$refs.confirm;
      },
      $app_overlay() {
        return this.$app.$refs.overlay;
      },
      $app_contextmenu() {
        return this.$app.$refs.contextmenu;
      },
    },
  });
};
Vue.use(AppExtensionPlugin);

import App from "@vue/App";

const app = new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: (h) => h(App),
});
