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
import "leaflet.markercluster/dist/leaflet.markercluster";
// import Vue2LeafletMarkercluster from "@vue/components/Vue2LeafletMarkercluster";
// import Vue2LeafletMarkercluster from "vue2-leaflet-markercluster";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";

Vue.component("l-map", Vue2Leaflet.LMap);
Vue.component("l-tilelayer", Vue2Leaflet.LTileLayer);
Vue.component("l-icondefault", Vue2Leaflet.LIconDefault);
Vue.component("l-marker", Vue2Leaflet.LMarker);
Vue.component("l-popup", Vue2Leaflet.LPopup);
Vue.component("l-geojson", Vue2Leaflet.LGeoJson);
Vue.component("l-icon", Vue2Leaflet.LIcon);
Vue.component("l-layergroup", Vue2Leaflet.LLayerGroup);
console.log(Vue2Leaflet);
// Vue.component("v-marker-cluster", Vue2LeafletMarkercluster);
/*Vue.component("LTooltip", LTooltip);
Vue.component("LIcon", LIcon);
Vue.component("LCircle", LCircle);
Vue.component("LRectangle", LRectangle);
Vue.component("LPolygon", LPolygon);
Vue.component("LPolyline", LPolyline);*/

import { Icon, tileLayer } from "leaflet";

const AppExtensionPlugin = {};
AppExtensionPlugin.install = function (Vue, options) {
  Vue.mixin({
    computed: {
      $app() {
        return this.$root.$children[0];
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
