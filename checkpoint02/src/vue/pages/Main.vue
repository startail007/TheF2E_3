<template>
  <v-sheet class="content d-flex flex-column h-100">
    <Header></Header>
    <v-main class="main">
      <v-map ref="myMap" :zoom.sync="zoom" :center.sync="center" class="w-100 h-100" :options="options">
        <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
        <!-- <v-marker-cluster :options="clusterOptions" @clusterclick="click()" @ready="ready">
          <v-marker v-for="l in locations" :key="l.id" :lat-lng="l.latLng" :icon="icon">
            <v-popup :content="l.name"></v-popup>
          </v-marker>
        </v-marker-cluster> -->
        <v-geojson :geojson="geojson"></v-geojson>
      </v-map>
      <div class="floatBox pointer-events-none">
        <router-view @info="view_info"></router-view>
      </div>
      <div class="floatBox pointer-events-none pa-2 d-flex justify-start justify-md-center align-end">
        <v-btn class="pointer-events-auto" @click="currentPosition_click">目前位置</v-btn>
      </div>
    </v-main>
    <Footer></Footer>
  </v-sheet>
</template>
<script>
import Header from "@vue/pages/components/Header";
import Footer from "@vue/pages/components/Footer";
import mixins_funs from "@vue/mixins/funs";
import { latLng, Icon, icon } from "leaflet";
import markerIconUrl from "@img/marker-icon.png";
import markerShadowUrl from "@img/marker-shadow.png";
import { o } from "odata";

export default {
  mixins: [mixins_funs],
  components: { Header, Footer },
  data() {
    return {
      geojson: null,
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
      mapPopupText: {
        StationName: "名稱",
        latLng: "經緯度",
        BikesCapacity: "可容納自行車總數",
        ServiceType: "服務類型",
      },
    };
  },
  mounted() {
    const markers = L.markerClusterGroup({
      iconCreateFunction(cluster) {
        const markers = cluster.getAllChildMarkers();
        return L.divIcon({
          html: `<div class="text">${markers.length}</div>`,
          className: "mycluster",
          iconSize: L.point(40, 40),
        });
      },
    });
    this.map.addLayer(markers);

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
      const parameter = { $format: "JSON" };
      p.push(
        o(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/`, {
          headers: { ...authorizationHeader },
        })
          .get(city)
          .query(parameter)
          .then((jsonData) => jsonData)
      );
    });
    const getPopupText = (info) => {
      let s = "";
      if (info) {
        for (let key in this.mapPopupText) {
          s += `<tr><td class="pa-1">${this.mapPopupText[key]}</td><td class="pa-1">${info[key] ?? ""}</td></tr>`;
        }
        s = `<table><tbody>${s}</tbody></table>`;
      }
      return s;
    };
    Promise.all(p).then((data) => {
      this.locations = data.flat().map((el) => {
        return {
          id: el.StationUID,
          latLng: [el.StationPosition.PositionLat, el.StationPosition.PositionLon],
          StationName: el.StationName.Zh_tw.split("_")[1],
          BikesCapacity: el.BikesCapacity,
          ServiceType: el.ServiceType === 1 ? "YouBike1.0" : "YouBike2.0",
        };
      });
      const stationIcon = L.icon({
        iconUrl: markerIconUrl,
        shadowUrl: markerShadowUrl,
        iconSize: [25, 41],
        shadowSize: [41, 41],
        iconAnchor: [12.5, 41],
        shadowAnchor: [12.5, 41],
        popupAnchor: [0, -32],
      });
      const markerList = this.locations.map((item) =>
        L.marker(new L.LatLng(item.latLng[0], item.latLng[1]), { icon: stationIcon }).bindPopup(getPopupText(item))
      );
      markers.addLayers(markerList);
    });
  },
  methods: {
    click(e) {
      console.log("clusterclick", e);
    },
    ready(e) {
      console.log("ready", e);
    },
    do_something(lat, lng) {
      this.map.setView([lat, lng], 16);
    },
    currentPosition_click() {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = pos.coords;
          this.do_something(coords.latitude, coords.longitude);
        },
        (err) => {
          //console.log(err);
        }
      );
    },
    view_info(src, type, data) {
      if (type === "geometry") {
        //console.log(src, data);
        this.geojson = data;
      }
    },
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
::v-deep {
  .mycluster {
    // background-color: brown;
    background-color: #056969;
    background-image: url("~@img/marker-cluster-icon.png");
    border-radius: 40px;
    .text {
      position: absolute;
      color: #fff;
      left: 50%;
      transform: translateX(-50%);
      bottom: 3px;
    }
  }
  .leaflet-popup-content {
    white-space: nowrap;
  }
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
