<template>
  <v-sheet class="content d-flex flex-column w-100 h-100">
    <Header></Header>
    <v-main class="main w-100 h-100 pb-8">
      <div class="d-flex flex-column flex-md-row w-100 h-100">
        <l-map ref="myMap" :zoom.sync="zoom" :center.sync="center" class="w-100 h-100" :options="options">
          <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>
          <template v-if="state === 'nearbyStation'">
            <l-marker
              v-for="(item, index) in stationList"
              :key="'station' + index"
              :lat-lng="item.latlng"
              :icon="stationIcon"
            >
              <l-popup>
                <div class="d-flex flex-column align-center">
                  <div class="d-flex text-body-1 pa-2 text-bold">
                    <div>{{ item.name }}</div>
                  </div>
                </div>
              </l-popup>
            </l-marker>
          </template>
          <template v-else-if="state === 'route'">
            <l-marker v-for="(item, index) in stopList" :key="'route' + index" :lat-lng="changePos(item.StopPosition)">
              <l-icon :iconSize="[0, 0]" :iconAnchor="[0, 0]" class-name="stopIcon">
                <div class="iconBox"></div>
                <div class="brand">
                  <div class="brandTitle">{{ item.StopName.Zh_tw }}</div>
                  <div class="arrow"></div>
                </div>
              </l-icon>
            </l-marker>
          </template>
          <l-marker key="center" :lat-lng="center" :icon="centerIcon"> </l-marker>
          <l-geojson :geojson="geojson" :options="geooptions"></l-geojson>
          <div class="floatBox">
            <v-btn @click="currentPosition_click" depressed class="ma-2">目前位置</v-btn>
          </div>
        </l-map>
        <div class="search">
          <div class="d-flex justify-center mb-6 px-4 pt-4">
            <v-btn @click="search_click" depressed color="primary" class="w-100">搜尋附近站牌</v-btn>
          </div>
          <div v-if="state">
            <template v-if="state === 'nearbyStation'">
              <div class="px-4 listContent">
                <div v-for="(item, key) in stationList" :key="key">
                  <Card01 :item="item" @route="card01_route"></Card01>
                </div>
              </div>
            </template>
            <template v-else-if="state === 'route'">
              <div class="d-flex align-center px-4 mb-4">
                <v-btn @click="routeBack_click" depressed color="transparent" x-small fab class="mr-2 text-body-1">
                  <v-icon>mdi-arrow-left-thick</v-icon>
                </v-btn>
                <div class="text-h6">{{ currentRoute.name }}</div>
                <v-spacer></v-spacer>
                <v-btn @click="refresh_click" depressed color="transparent" small class="mr-2 text-body-2">
                  <v-icon>mdi-refresh</v-icon>
                  <span>立即更新</span>
                </v-btn>
              </div>
              <div v-if="stopList.length">
                <v-item-group mandatory v-model="routeIndex" class="d-flex w-100" @change="route_change">
                  <v-item
                    class="routeItem flex-1 text-center py-2 text-bold text-body-2"
                    v-slot="{ toggle }"
                    v-if="destinationStopName"
                  >
                    <div @click="toggle">
                      往 <span class="stopName">{{ destinationStopName }}</span>
                    </div>
                  </v-item>
                  <v-item
                    class="routeItem flex-1 text-center py-2 text-bold text-body-2"
                    v-slot="{ toggle }"
                    v-if="departureStopName"
                  >
                    <div @click="toggle">
                      往 <span class="stopName">{{ departureStopName }}</span>
                    </div>
                  </v-item>
                </v-item-group>
                <div class="px-4 listContent">
                  <div v-for="(item, key) in stopList" :key="key">
                    <Card02 :item="item" :dynamic="stopDynamicList[key]"></Card02>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
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
import centerMarkerIconUrl from "@img/center-marker-icon.png";
import stationMarkerIconUrl from "@img/station-marker-icon.png";
import stationMarkerShadowUrl from "@img/station-marker-shadow.png";
import { o } from "odata";
import cityList_iso3166 from "@src/res/cityList_iso3166";
import Card01 from "./components/Card01.vue";
import Card02 from "./components/Card02.vue";
export default {
  mixins: [mixins_funs],
  components: { Header, Footer, Card01, Card02 },
  data() {
    const centerIcon = L.icon({
      className: "centerIcon",
      iconUrl: centerMarkerIconUrl,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, 0],
    });
    const stationIcon = L.icon({
      className: "stationIcon",
      iconUrl: stationMarkerIconUrl,
      shadowUrl: stationMarkerShadowUrl,
      iconSize: [25, 41],
      shadowSize: [41, 41],
      iconAnchor: [12.5, 41],
      shadowAnchor: [12.5, 41],
      popupAnchor: [0, -32],
    });
    return {
      centerIcon: centerIcon,
      stationIcon: stationIcon,
      zoom: 9,
      center: L.latLng(23.673875, 120.982024),
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
      geojson: [],
      geooptions: {
        style: {
          color: "#355f8b",
          weight: 8,
          opacity: 0.8,
          //dashArray: 15,
        },
      },
      stationList: [],
      route: [],
      routeDynamic: [],
      stopList: [],
      stopDynamicList: [],
      destinationStopName: "",
      departureStopName: "",
      routeIndex: 0,
      state: "",
      dynamicID: null,
      currentRoute: null,
    };
  },
  mounted() {},
  methods: {
    setState(state) {
      if (this.state !== state) {
        const oldState = this.state;
        this.state = state;
        if (oldState === "nearbyStation" && state === "") {
          this.stationList = [];
        }
        if (oldState === "route" && state === "nearbyStation") {
          this.routeIndex = 0;
          this.stopList = [];
          this.stopDynamicList = [];
          this.route = [];
          this.routeDynamic = [];
          this.geojson = [];
          this.destinationStopName = "";
          this.departureStopName = "";
          this.currentRoute = null;
          this.updateDynamicOff();
        }
      }
    },
    changePos(data) {
      return [data.PositionLat, data.PositionLon];
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
    search_click() {
      const authorizationHeader = this.getAuthorizationHeader();
      const parameter = {
        $format: "JSON",
        $spatialFilter: `nearby(${this.center.lat}, ${this.center.lng},500)`,
      };
      const p = [];
      p.push(
        o(`https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy/`, {
          headers: { ...authorizationHeader },
        })
          .get()
          .query(parameter)
      );
      p.push(
        o(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/NearBy/`, {
          headers: { ...authorizationHeader },
        })
          .get()
          .query(parameter)
      );

      const sList = [];

      Promise.all(p).then((data) => {
        data[0].forEach((el) => {
          const LocationCityCode = el.LocationCityCode;
          const StationName = el.StationName.Zh_tw;
          const obj = sList.find((el) => el.name === StationName);
          if (!obj) {
            const Routes = new Set();
            el.Stops.forEach((el) => Routes.add(el.RouteName.Zh_tw));
            sList.push({
              name: StationName,
              latlng: this.changePos(el.StationPosition),
              Routes: Routes,
              city: cityList_iso3166.find((el) => el.code === LocationCityCode).value,
              cityCode: el.LocationCityCode,
            });
          } else {
            el.Stops.forEach((el) => obj.Routes.add(el.RouteName.Zh_tw));
          }
        });
        sList.forEach((el) => {
          el.Routes = [...el.Routes];
          el.Routes = el.Routes.map((name) => {
            const obj = data[1].find((el) => el.RouteName.Zh_tw === name);
            return {
              name: obj.RouteName.Zh_tw,
              id: obj.RouteID,
              uid: obj.RouteUID,
              city: obj.City ?? el.city,
              departureStopName: obj.DepartureStopNameZh,
              destinationStopName: obj.DestinationStopNameZh,
            };
          });
        });

        this.stationList = sList;
        this.map.setView(this.center, 16);

        this.setState("nearbyStation");
      });
    },
    card01_route(data) {
      const authorizationHeader = this.getAuthorizationHeader();
      const parameter = {
        $format: "JSON",
        $filter: `RouteUID eq '${data.uid}'`,
      };
      o(`https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/`, {
        headers: { ...authorizationHeader },
      })
        .get(`${data.city}/${data.name}`)
        .query(parameter)
        .then((jsonData) => {
          this.currentRoute = data;
          this.routeIndex = 0;
          if (jsonData.length) {
            this.route = jsonData;
            this.route_change(this.routeIndex);
          } else {
            this.route = [];
            this.stopList = [];
            this.geojson = [];
          }
          this.setState("route");
          this.destinationStopName = data.destinationStopName;
          this.departureStopName = data.departureStopName;
          this.routeStateData(data);
          this.updateDynamicOn();
        });
    },
    routeStateData(data) {
      this.routeDynamic = [];
      if (!this.route.length) return;
      const authorizationHeader = this.getAuthorizationHeader();
      const parameter = {
        $format: "JSON",
        $filter: `RouteUID eq '${data.uid}'`,
      };
      o(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/`, {
        headers: { ...authorizationHeader },
      })
        .get(`${data.city}/${data.name}`)
        .query(parameter)
        .then((jsonData) => {
          this.routeDynamic = this.route.map((d) => {
            const s = jsonData.filter((el) => el.Direction === d.Direction);
            return d.Stops.map((stop) => {
              const obj = s.find((el) => el.StopUID === stop.StopUID);
              return obj;
            });
          });
          this.stopDynamicList = this.routeDynamic[this.routeIndex];
        });
    },
    route_change(index) {
      index = Math.min(index, this.route.length - 1);
      this.stopList = this.route[index].Stops;
      if (this.routeDynamic.length) {
        this.stopDynamicList = this.routeDynamic[index];
      }
      this.geojson = [
        {
          type: "LineString",
          coordinates: this.stopList.map((el) => this.changePos(el.StopPosition).reverse()),
        },
      ];
    },
    updateDynamicOn(t = 15000) {
      clearInterval(this.dynamicID);
      this.dynamicID = setInterval(() => {
        this.routeStateData(this.currentRoute);
      }, t);
    },
    updateDynamicOff() {
      clearInterval(this.dynamicID);
    },
    routeBack_click() {
      this.setState("nearbyStation");
    },
    refresh_click() {
      this.updateDynamicOn(1000);
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
  // filter: brightness(1) invert(1) contrast(0.8) hue-rotate(200deg) saturate(0.1);
  //filter: contrast(0.9) brightness(1.2) saturate(0);
  //filter: contrast(1.1) saturate(0.75);
}
::v-deep {
  .leaflet-popup-content {
    white-space: nowrap;
  }
  .stopIcon {
    z-index: 0 !important;
    .iconBox {
      width: 20px;
      height: 20px;
      background-color: rgba(53, 95, 141, 0.25);
      border-radius: 20px;
      border: 2px solid #355f8b;
      box-sizing: border-box;
      transform: translate(-50%, -50%);
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
    }
    .brand {
      width: 120px;
      height: 50px;
      transform: translate(-50%, -100%);
      border-radius: 5px;
      background-color: #355f8b;
      padding: 5px;
      bottom: 40px;
      position: relative;
      border: 2px px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      .brandTitle {
        text-align: center;
        color: #fff;
      }
      .arrow {
        width: 0;
        height: 0;
        border-color: #fff transparent transparent;
        border-style: solid;
        top: 100%;
        border-width: 14px 12px 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        &::before {
          content: "";
          width: 0;
          height: 0;
          border-color: #355f8b transparent transparent;
          border-style: solid;
          border-width: 10px 10px 0;
          left: 0;
          position: absolute;
          left: -10px;
          top: -14px;
        }
      }
    }
    /*.iconBox {
      & + .brand {
        display: none;
      }
      &:hover + .brand {
        display: block;
      }
    }*/
    &:hover {
      z-index: 999 !important;
    }
  }
  .stationIcon {
    z-index: 1 !important;
  }
  .centerIcon {
    z-index: 2 !important;
  }
}
.listContent {
  background-color: #fff;
}
.anchorIcon {
  background-image: url(~@img/anchor_icon.png);
  background-position: center;
  background-size: contain;
  width: 20px;
  height: 20px;
}
.search {
  /*position: absolute;
  left: 0px;
  top: 0px;*/
  background-color: #f7fcfd;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.routeItem {
  position: relative;
  .stopName {
    color: #3ec3a4;
  }
  &:not(.v-item--active) {
    cursor: pointer;
  }
  &.v-item--active {
    &::after {
      content: "";
      width: 100%;
      height: 3px;
      background-color: #3ec3a4;
      left: 0px;
      bottom: 0px;
      position: absolute;
    }
  }
}
@media (min-width: get-breakpoints("sm")) {
}
@media (min-width: get-breakpoints("md")) {
}
@media (min-width: get-breakpoints("lg")) {
  .search {
    max-width: 500px;
  }
}
@media (min-width: get-breakpoints("xl")) {
}
</style>
