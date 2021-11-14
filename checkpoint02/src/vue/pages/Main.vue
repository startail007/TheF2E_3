<template>
  <v-sheet class="content d-flex flex-column h-100">
    <Header></Header>
    <v-main class="main">
      <v-map ref="myMap" :zoom.sync="zoom" :center.sync="center" class="w-100 h-100" :options="options">
        <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
        <v-marker-cluster :options="clusterOptions" @clusterclick="click()" @ready="ready">
          <v-marker v-for="l in locations" :key="l.id" :lat-lng="l.latLng" :icon="icon">
            <v-popup :content="l.name"></v-popup>
          </v-marker>
        </v-marker-cluster>
      </v-map>
      <div class="floatBox pointer-events-none">
        <div class="d-flex justify-end pa-2 pointer-events-none">
          <v-btn class="mr-2 pointer-events-auto">搜尋這個區域的YouBike</v-btn>
          <v-btn class="pointer-events-auto">目前位置</v-btn>
        </div>
        <router-view class="pointer-events-auto"></router-view>
      </div>
    </v-main>
    <Footer></Footer>
  </v-sheet>
</template>
<script>
import Header from "@vue/pages/components/Header";
import Footer from "@vue/pages/components/Footer";
import mixins_funs from "@vue/mixins/funs";
import cityList from "@src/res/cityList";
import { Float } from "@js/float";
import axios from "axios";
import * as PIXI from "pixi.js";
import "leaflet-pixi-overlay";
import L from "leaflet";
import BezierEasing from "bezier-easing";
import { uid } from "uid";
import img_station from "@img/station.png";

import { latLng, Icon, icon } from "leaflet";
import iconUrl from "@img/marker-icon.png";
import shadowUrl from "@img/marker-shadow.png";

function rand(n) {
  let max = n + 0.1;
  let min = n - 0.1;
  return Math.random() * (max - min) + min;
}
export default {
  mixins: [mixins_funs],
  components: { Header, Footer },
  data() {
    /*let locations = [];
    for (let i = 0; i < 100; i++) {
      locations.push({
        id: i,
        latlng: latLng(rand(22.9), rand(120.65)),
        text: "Hola " + i,
      });
    }*/
    let customicon = icon(Object.assign({}, Icon.Default.prototype.options, { iconUrl, shadowUrl }));
    return {
      locations: [],
      icon: customicon,
      clusterOptions: {},
      zoom: 9,
      center: [22.9, 120.65],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      options: {
        minZoom: 8,
        maxZoom: 18,
        /*bounds: L.latLngBounds([
          [22.0, 119.55],
          [23.8, 121.75],
        ]),
        maxBounds: L.latLngBounds([
          [22.0, 119.55],
          [23.8, 121.75],
        ]),*/
        zoomControl: false,
        animate: true,
        //attributionControl: false,
      },
    };
  },
  mounted() {
    const authorizationHeader = this.getAuthorizationHeader();
    const p = [];
    const citys = [
      "Taichung",
      "Hsinchu",
      "MiaoliCounty",
      "NewTaipei",
      "PingtungCounty",
      "KinmenCounty",
      "Taoyuan",
      "Taipei",
      "Kaohsiung",
      "Tainan",
      "Chiayi",
    ];
    citys.forEach((el) => {
      let city = el;
      const parameter = { format: "JSON" };
      p.push(
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/${city}?${this.parameterToStr(parameter)}`, {
          headers: { ...authorizationHeader },
        })
          .then((response) => response.json())
          .then((jsonData) => jsonData)
      );
    });
    Promise.all(p).then((data) => {
      this.locations = data.flat().map((el) => {
        return {
          id: el.StationUID,
          latLng: [el.StationPosition.PositionLat, el.StationPosition.PositionLon],
          name: el.StationName.Zh_tw,
        };
      });
      console.log(this.locations);
    });
  },
  methods: {
    click: (e) => console.log("clusterclick", e),
    ready: (e) => console.log("ready", e),
  },
  computed: {
    map() {
      return this.$refs.myMap.mapObject;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.content {
  //min-height: 100vh;
}
.playBox {
  position: absolute;
  height: 20px;
  //background-color: #f00;
  bottom: 20px;
  left: 10px;
  right: 10px;
  z-index: 9999;
}
::v-deep {
  .leaflet-pane {
    z-index: 0;
  }
  .leaflet-bottom,
  .leaflet-top {
    z-index: 0;
  }
}
.floatBox {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.content::v-deep .leaflet-layer {
  //filter: brightness(1) invert(1) contrast(0.7) hue-rotate(200deg) saturate(0.1);
  //filter: contrast(0.9) brightness(1.2) saturate(0);
  //filter: contrast(1.1) saturate(0.75);
}
@media (min-width: get-breakpoints("sm")) {
}
@media (min-width: get-breakpoints("md")) {
}
@media (min-width: get-breakpoints("lg")) {
}
@media (min-width: get-breakpoints("xl")) {
}
</style>
