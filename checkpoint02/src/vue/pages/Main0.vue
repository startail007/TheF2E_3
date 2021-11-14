<template>
  <v-sheet class="content d-flex flex-column h-100">
    <Header></Header>
    <v-main class="main">
      <LMap ref="myMap" :zoom.sync="zoom" :center.sync="center" class="w-100 h-100" :options="options">
        <LTileLayer :url="url" :attribution="attribution" />
      </LMap>
      <div class="floatBox pointer-events-none">
        <div class="d-flex justify-end pa-2 pointer-events-none">
          <v-btn class="mr-2 pointer-events-auto" @click="searchNearby_click">搜尋這個區域的YouBike</v-btn>
          <v-btn class="pointer-events-auto" @click="currentPosition_click">目前位置</v-btn>
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
export default {
  mixins: [mixins_funs],
  components: { Header, Footer },
  data() {
    return {
      zoom: 13,
      center: [22.9, 120.65],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      options: {
        minZoom: 12,
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
      siteList: {},
      mapPopup: L.popup({ autoPan: false, pane: "popupPane" }),
      mapPopupInfo: null,
      markers: {},
      map_text: {
        latLng: "經緯度",
      },

      pixiContainer: new PIXI.Container(),
      markersContainer: new PIXI.Container(),
      stationList: {},
      zoomChangeTs: null,
      currentPosition: null,
    };
  },
  mounted() {
    this.pixiContainer.addChild(this.markersContainer);
    for (let i = 0; i < 1; i++) {
      const key = uid(32);
      this.siteList[key] = {
        latLng: [22.72033, 120.3384331],
      };
    }
    this.mapInit();

    /*setInterval(() => {
      console.log(this.center);
    }, 100);*/
    /*setTimeout(() => {
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
        //parameter["spatialFilter"] = `nearby(${25.047675}, ${121.517055}, 1000)`;
        // fetch(`https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${city}?${this.parameterToStr(parameter)}`, {
        //   headers: { ...authorizationHeader },
        // })
        p.push(
          fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/${city}?${this.parameterToStr(parameter)}`, {
            headers: { ...authorizationHeader },
          })
            .then((response) => response.json())
            .then((jsonData) => jsonData)
        );
      });
      Promise.all(p).then((data) => {
        //console.log();
        this.aaa(data.flat());
      });
    }, 1000);*/
    /*let id = 0;
    this.map.on("moveend", (e) => {
      clearTimeout(id);
      id = setTimeout(() => {
        const center = e.target.getCenter();
        //console.log();
        this.searchNearby([center.lat, center.lng]);
      }, 1000);
    });*/
    let watchID = navigator.geolocation.watchPosition(
      (pos) => {
        console.log("aaa");
        const coords = pos.coords;
        this.currentPosition = [coords.latitude, coords.longitude];
        //this.do_something(coords.latitude, coords.longitude);
      },
      () => {
        alert("抱歉，沒有可用的。");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  },
  methods: {
    aaa(data) {
      this.stationList = {};
      for (let key in this.markers) {
        const el = this.markers[key];
        this.markersContainer.removeChild(el.marker);
      }
      this.markers = {};
      data.forEach((el) => {
        this.stationList[el.StationUID] = el;
      });
      this.map.fire("addMarkers", { zoom: 16 });
      this.map.setZoom(16);
    },
    do_something(lat, lng) {
      this.map.setView([lat, lng]);
    },
    currentPosition_click() {
      if (this.currentPosition) {
        this.do_something(...this.currentPosition);
      }
      /*navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("bbb");
          const coords = pos.coords;
          //this.map.setView([coords.latitude, coords.longitude]);
          this.do_something(coords.latitude, coords.longitude);
        },
        (err) => {
          //console.log(err);
        }
      );*/
    },
    searchNearby(center) {
      const authorizationHeader = this.getAuthorizationHeader();
      const parameter = { format: "JSON" };
      parameter["spatialFilter"] = `nearby(${center[0]}, ${center[1]}, 1000)`;
      fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?${this.parameterToStr(parameter)}`, {
        headers: { ...authorizationHeader },
      })
        .then((response) => response.json())
        .then((jsonData) => {
          this.stationList = {};
          for (let key in this.markers) {
            const el = this.markers[key];
            this.markersContainer.removeChild(el.marker);
          }
          this.markers = {};
          jsonData.forEach((el) => {
            this.stationList[el.StationUID] = el;
          });
          this.map.fire("addMarkers", { zoom: 16 });
          this.map.setZoom(16);
        });
    },
    searchNearby_click() {
      this.searchNearby([this.center[0] ?? this.center.lat, this.center[1] ?? this.center.lng]);
      /*const authorizationHeader = this.getAuthorizationHeader();
      const parameter = { format: "JSON" };
      parameter["spatialFilter"] = `nearby(${this.center[0] ?? this.center.lat}, ${
        this.center[1] ?? this.center.lng
      }, 1000)`;
      fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?${this.parameterToStr(parameter)}`, {
        headers: { ...authorizationHeader },
      })
        .then((response) => response.json())
        .then((jsonData) => {
          console.log(jsonData);
          this.stationList = {};
          for (let key in this.markers) {
            const el = this.markers[key];
            this.markersContainer.removeChild(el.marker);
          }
          this.markers = {};
          jsonData.forEach((el) => {
            this.stationList[el.StationUID] = el;
          });
          this.map.fire("addMarkers");
          this.map.setZoom(15.5);
        });*/
    },
    drawIcon(icon, color) {
      icon.clear();
      icon.lineStyle(0);
      icon.beginFill(color, 0.25);
      icon.drawCircle(0, 0, 15);
      icon.endFill();
      icon.lineStyle(0);
      icon.beginFill(color, 1);
      icon.drawCircle(0, 0, 5);
      icon.endFill();
    },
    createMarker(key, info, resources) {
      //console.log(resources);
      const marker = new PIXI.Container();
      //console.log();
      const icon = new PIXI.Sprite(resources["img_station"].texture);
      icon.anchor.set(0.5, 1);
      //const icon = new PIXI.Graphics();
      icon.interactive = true;
      icon.buttonMode = true;
      icon.infoKey = key;
      marker.addChild(icon);
      const textStr = info.StationName.Zh_tw.split("_");
      const text = new PIXI.Text(textStr[1], {
        fontSize: 16,
        fontWeight: "bold",
        fill: "#078080",
        align: "center",
        stroke: "#ffffff",
        strokeThickness: 3,
        /*dropShadow: true,
        dropShadowAlpha: 0.25,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: 0.5 * Math.PI,
        dropShadowDistance: 4,*/
      });
      text.anchor.set(0.5);
      text.y = -65;

      marker.addChild(text);
      //marker.visible = false;
      //this.drawIcon(icon, 0xff0000);
      return { marker, icon, text };
    },
    updatePopup(stid) {
      const info = this.siteList[stid];
      if (info) {
        this.mapPopupInfo = info;
        let s = "";
        for (let key in this.map_text) {
          s += `<tr><td class="pa-1">${this.map_text[key]}</td><td class="pa-1">${info[key] ?? ""}</td></tr>`;
        }
        s = `<table><tbody>${s}</tbody></table>`;
        this.mapPopup.setContent(s);
      }
    },
    mapInit() {
      const easing = BezierEasing(0, 0, 1, 0.5);
      const loader = new PIXI.Loader();
      loader.add("img_station", img_station);
      loader.load((_loader, resources) => {
        /*for (let key in this.siteList) {
          this.markers[key] = { latLng: this.siteList[key].latLng, ...this.createMarker(key) };
          this.drawIcon(this.markers[key].icon, 0xff0000);
          markersContainer.addChild(this.markers[key].marker);
        }*/
        const pixiOverlay = L.pixiOverlay(
          (utils, event) => {
            const container = utils.getContainer();
            const renderer = utils.getRenderer();
            const project = utils.latLngToLayerPoint;
            //console.log(event.type);
            if (event.type === "addMarkers") {
              const invScale = 1 / Math.max(utils.getScale(event.zoom), 1.2);
              for (let key in this.stationList) {
                const el = this.stationList[key];
                const latLng = [el.StationPosition.PositionLat, el.StationPosition.PositionLon];
                this.markers[key] = { latLng: latLng, ...this.createMarker(key, el, resources) };
                //this.drawIcon(this.markers[key].icon, 0xff0000);
                this.markersContainer.addChild(this.markers[key].marker);
                const marker = this.markers[key].marker;
                const markerCoords = project(latLng);
                marker.x = markerCoords.x;
                marker.y = markerCoords.y;
                marker.scale.set(invScale);
                //console.log(el);
              }
            } else if (event.type === "add") {
              const interaction = new PIXI.InteractionManager(renderer);
              this.map.on("click", (e) => {
                const pointerEvent = e.originalEvent;
                const pixiPoint = new PIXI.Point();
                interaction.mapPositionToPoint(pixiPoint, pointerEvent.clientX, pointerEvent.clientY);
                const target = interaction.hitTest(pixiPoint, container);
                if (target) {
                  this.updatePopup(target.infoKey);
                  const info = this.stationList[target.infoKey];
                  this.mapPopup.setLatLng([info.StationPosition.PositionLat, info.StationPosition.PositionLon]);
                  this.map.openPopup(this.mapPopup);
                }
              });
              /*for (let key in this.markers) {
                const el = this.markers[key];
                const marker = el.marker;
                const markerCoords = project(el.latLng);
                marker.x = markerCoords.x;
                marker.y = markerCoords.y;
                marker.scale.set(invScale);
              }*/
            } else if (event.type === "zoomanim") {
              const invScale = 1 / Math.max(utils.getScale(event.zoom), 1.2);
              this.zoomChangeTs = 0;
              for (let key in this.markers) {
                const marker = this.markers[key].marker;
                marker.currentScale = marker.scale.x;
                marker.targetScale = invScale;
              }
            } else if (event.type === "redraw") {
              const delta = event.delta;
              // markers.forEach((marker) => {
              //   marker.rotation -= 0.03 * delta;
              // });

              if (this.zoomChangeTs !== null) {
                const duration = 17;
                this.zoomChangeTs += delta;
                let lambda = this.zoomChangeTs / duration;
                if (lambda > 1) {
                  lambda = 1;
                  this.zoomChangeTs = null;
                }
                lambda = easing(lambda);
                for (let key in this.markers) {
                  const el = this.markers[key];
                  const marker = el.marker;
                  marker.scale.set(marker.currentScale + lambda * (marker.targetScale - marker.currentScale));
                }
              }
            }

            renderer.render(container);
          },
          this.pixiContainer,
          {
            destroyInteractionManager: true,
          }
        );
        pixiOverlay.addTo(this.map);
        const ticker = new PIXI.Ticker();
        ticker.add((delta) => {
          pixiOverlay.redraw({ type: "redraw", delta: delta });
        });
        ticker.start();
        this.map.on("zoomanim", pixiOverlay.redraw, pixiOverlay);
        this.map.on("addMarkers", pixiOverlay.redraw, pixiOverlay);
      });
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
  filter: contrast(1.1) saturate(0.75);
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
