<template>
  <v-sheet class="content d-flex flex-column h-100">
    <Header></Header>
    <v-main class="main">
      <l-map ref="myMap" :zoom.sync="zoom" :center.sync="center" class="w-100 h-100" :options="options">
        <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>
        <l-marker v-for="(item, index) in routeMarkers" :key="'route' + index" :lat-lng="item" :icon="routeIcon">
        </l-marker>
        <l-marker
          v-for="(item, index) in scenicspotMarkers"
          :key="'scenicspot' + index"
          :lat-lng="item.latlng"
          :icon="scenicspotIcon"
        >
          <l-popup>
            <div class="d-flex flex-column align-center">
              <div class="d-flex text-h6 pa-2 text-bold">
                <div>{{ item.Name }}</div>
              </div>
              <div class="d-flex text-body-1 pa-2">
                <div class="anchorIcon"></div>
                <div class="ml-2">{{ item.ZipCodeChinese }}</div>
              </div>
            </div>
          </l-popup>
        </l-marker>
        <l-geojson :geojson="geojson" :options="geooptions"></l-geojson>
      </l-map>
      <div class="floatBox pointer-events-none">
        <router-view :center="center" @info="view_info"></router-view>
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
import * as L from "leaflet";
import stationMarkerIconUrl from "@img/station-marker-icon.png";
import stationMarkerShadowUrl from "@img/station-marker-shadow.png";
import scenicspotMarkerIconUrl from "@img/scenicspot-marker-icon.png";
import scenicspotMarkerShadowUrl from "@img/scenicspot-marker-shadow.png";
import { o } from "odata";
export default {
  mixins: [mixins_funs],
  components: { Header, Footer },
  data() {
    const routeIcon = L.divIcon({
      html: `<div class="iconBox"></div>`,
      className: "routeIcon",
      iconSize: L.point(10, 10),
    });
    const scenicspotIcon = L.icon({
      className: "scenicspotIcon",
      iconUrl: scenicspotMarkerIconUrl,
      shadowUrl: scenicspotMarkerShadowUrl,
      iconSize: [25, 41],
      shadowSize: [41, 41],
      iconAnchor: [12.5, 41],
      shadowAnchor: [12.5, 41],
      popupAnchor: [0, -32],
    });
    return {
      routeIcon: routeIcon,
      scenicspotIcon: scenicspotIcon,
      zoom: 9,
      center: L.latLng(23.973875, 120.982024),
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
      geojson: null,
      geooptions: {
        style: {
          color: "#ff7800",
          weight: 8,
          opacity: 0.8,
          //dashArray: 15,
        },
      },
      routeMarkers: [],
      scenicspotMarkers: [],
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
        iconUrl: stationMarkerIconUrl,
        shadowUrl: stationMarkerShadowUrl,
        iconSize: [25, 41],
        shadowSize: [41, 41],
        iconAnchor: [12.5, 41],
        shadowAnchor: [12.5, 41],
        popupAnchor: [0, -32],
      });
      const markerList = this.locations.map((item) =>
        L.marker(L.latLng(item.latLng[0], item.latLng[1]), { icon: stationIcon }).bindPopup(getPopupText(item))
      );
      markers.addLayers(markerList);
    });
  },
  methods: {
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
        //console.log(src, type, data, data.coordinates[0][0]);
        this.geojson = data;
        const points = data.coordinates.flatMap((points) => points).map((el) => [el[1], el[0]]);
        this.routeMarkers = points;
        const a = [0, 0];
        points.forEach((el) => {
          a[0] += el[0];
          a[1] += el[1];
        });
        const len = points.length;
        a[0] /= len;
        a[1] /= len;
        this.map.setView(a, 15);
      } else if (type === "scenicspot") {
        console.log(data);
        this.map.setView(this.center, 14);

        this.scenicspotMarkers = data;
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
    z-index: 1 !important;
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
  .routeIcon {
    z-index: 0 !important;
    .iconBox {
      width: 10px;
      height: 10px;
      background-color: rgba(255, 119, 0, 0.25);
      border-radius: 10px;
      border: 2px solid #ff7800;
      box-sizing: border-box;
      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #ffffff;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
      }
      /*&.start {
        background-color: #ff2600;
      }
      &.end {
        background-color: #ffc400;
      }*/
    }
  }
  .scenicspotIcon {
    z-index: 2;
  }
}
.anchorIcon {
  background-image: url(~@img/anchor_icon.png);
  background-position: center;
  background-size: contain;
  width: 20px;
  height: 20px;
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
