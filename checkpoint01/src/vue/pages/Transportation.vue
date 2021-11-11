<template>
  <v-sheet class="content">
    <Header> </Header>
    <v-main class="main min-h-800">
      <v-sheet class="section d-flex justify-center align-center pa-2 pa-md-4 pb-0 pb-md-0" id="section01">
        <v-container class="pb-0">
          <div class="d-flex justify-center align-center flex-column">
            <div class="d-flex max-w-500 mb-8">
              <v-select
                :items="cityInfo.items"
                v-model="cityInfo.value"
                class="flex-1 mr-2"
                label="選擇縣市"
                solo
                dense
                hide-details
                @change="cityInfo_change"
                color="primary"
                item-color="primary"
              ></v-select>
              <v-select
                :items="routeInfo.items"
                v-model="routeInfo.value"
                label="選擇路線"
                class="flex-1"
                solo
                dense
                hide-details
                no-data-text="無資料"
                @change="routeInfo_change"
                color="primary"
                item-color="primary"
              ></v-select>
            </div>
            <v-item-group v-if="routeInfo.value !== ''" mandatory v-model="routeIndex" class="d-flex w-100 max-w-500">
              <v-item class="routeItem flex-1 text-center py-2 text-bold" v-slot="{ active, toggle }">
                <div @click="toggle">
                  往 <span class="stopName">{{ destinationStopName }}</span>
                </div>
              </v-item>
              <v-item class="routeItem flex-1 text-center py-2 text-bold" v-slot="{ active, toggle }">
                <div @click="toggle">
                  往 <span class="stopName">{{ departureStopName }}</span>
                </div>
              </v-item>
            </v-item-group>
          </div>
        </v-container>
      </v-sheet>
      <v-sheet class="section d-flex justify-center align-center flex-column pb-8 flex-1" id="section02">
        <v-container>
          <div class="d-flex justify-end mb-2 updataRemind text-bold">*每隔 15 秒自動更新</div>
          <div class="d-flex box min-h-600">
            <template v-if="routeInfo.value === ''">
              <div class="pa-8 text-h6">請選擇公車路線</div>
            </template>
            <template v-else-if="routeIndex == 0">
              <div class="row" v-if="stopOfRoute.p.length >= 10">
                <div class="col-n2">
                  <StopItem01
                    :item="item"
                    v-for="item in stopOfRoute.p.slice(0, Math.round(stopOfRoute.p.length / 2))"
                    :key="item.StopID"
                  ></StopItem01>
                </div>
                <div class="col-n2">
                  <StopItem01
                    :item="item"
                    v-for="item in stopOfRoute.p.slice(Math.round(stopOfRoute.p.length / 2), stopOfRoute.p.length)"
                    :key="item.StopID"
                  ></StopItem01>
                </div>
              </div>
              <div v-else>
                <StopItem01 :item="item" v-for="item in stopOfRoute.p" :key="item.StopID"></StopItem01>
              </div>
            </template>
            <template v-else-if="routeIndex == 1">
              <div class="row" v-if="stopOfRoute.n.length >= 10">
                <div class="col-n2">
                  <StopItem01
                    :item="item"
                    v-for="item in stopOfRoute.n.slice(0, Math.round(stopOfRoute.n.length / 2))"
                    :key="item.StopID"
                  ></StopItem01>
                </div>
                <div class="col-n2">
                  <StopItem01
                    :item="item"
                    v-for="item in stopOfRoute.n.slice(Math.round(stopOfRoute.n.length / 2), stopOfRoute.n.length)"
                    :key="item.StopID"
                  ></StopItem01>
                </div>
              </div>
              <div v-else>
                <StopItem01 :item="item" v-for="item in stopOfRoute.n" :key="item.StopID"></StopItem01>
              </div>
            </template>
          </div>
        </v-container>
      </v-sheet>
    </v-main>
    <Footer></Footer>
  </v-sheet>
</template>
<script>
import Header from "@vue/pages/components/Header";
import Footer from "@vue/pages/components/Footer";
import LoadComponents from "@vue/pages/components/LoadComponents";
import StopItem01 from "@vue/pages/components/StopItem01";
import cityList from "@src/res/cityList";
import mixins_funs from "@vue/mixins/funs";
export default {
  mixins: [mixins_funs],
  components: { Header, Footer, LoadComponents, StopItem01 },
  data() {
    return {
      cityInfo: {
        value: "",
        items: cityList,
      },
      routeInfo: {
        value: "",
        items: [],
      },
      routeList: [],
      stopOfRoute: { p: [], n: [] },
      routeIndex: 0,
      departureStopName: "",
      destinationStopName: "",
      dynamicID: 0,
    };
  },
  mounted() {
    this.updateRoute();
  },
  methods: {
    updateRoute() {
      const authorizationHeader = this.getAuthorizationHeader();
      let city = this.cityInfo.value;
      const parameter = { format: "JSON" };
      if (city != "") {
        parameter["filter"] = `City eq '${city}'`;
      }
      fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?${this.parameterToStr(parameter)}`, {
        headers: { ...authorizationHeader },
      })
        .then((response) => response.json())
        .then((jsonData) => {
          //console.log(jsonData);
          this.routeList = jsonData;
          this.routeInfo.items = this.routeList.map((el, index) => {
            return { text: el.TaiwanTripName.Zh_tw, value: index };
          });
        });
    },
    updateStopOfRoute() {
      const routeInfo = this.routeList[this.routeInfo.value];
      //console.log(routeInfo);
      this.departureStopName = routeInfo.DepartureStopNameZh;
      this.destinationStopName = routeInfo.DestinationStopNameZh;
      const authorizationHeader = this.getAuthorizationHeader();
      const route = this.itemsFindValue(this.routeInfo.items, this.routeInfo.value).text;
      const parameter = { format: "JSON" };
      //console.log(route);
      fetch(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/StopOfRoute/TaiwanTrip/${route}?${this.parameterToStr(
          parameter
        )}`,
        {
          headers: { ...authorizationHeader },
        }
      )
        .then((response) => response.json())
        .then((jsonData) => {
          if (jsonData[0]) {
            this.stopOfRoute.p = jsonData[0].Stops.map((el) => ({ ...el, EstimateTime: "", A2EventType: "" }));
          }
          if (jsonData[1]) {
            this.stopOfRoute.n = jsonData[1].Stops.map((el) => ({ ...el, EstimateTime: "", A2EventType: "" }));
          }
          this.updateDynamic();
          this.updateDynamicOn();
        });
    },
    updateDynamicOn() {
      clearInterval(this.dynamicID);
      this.dynamicID = setInterval(() => {
        this.updateDynamic();
      }, 15000);
    },
    updateDynamicOff() {
      clearInterval(this.dynamicID);
    },
    updateDynamic() {
      const authorizationHeader = this.getAuthorizationHeader();
      const route = this.itemsFindValue(this.routeInfo.items, this.routeInfo.value).text;
      const parameter = { format: "JSON" };
      fetch(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/RealTimeNearStop/TaiwanTrip/${route}?${this.parameterToStr(
          parameter
        )}`,
        {
          headers: { ...authorizationHeader },
        }
      )
        .then((response) => response.json())
        .then((jsonData) => {
          this.stopOfRoute.p.forEach((stopData) => {
            stopData.A2EventType = "";
          });
          this.stopOfRoute.n.forEach((stopData) => {
            stopData.A2EventType = "";
          });
          jsonData.forEach((data) => {
            this.stopOfRoute[data.Direction ? "n" : "p"].forEach((stopData) => {
              if (stopData.StopID == data.StopID) {
                stopData.A2EventType = data.A2EventType;
              }
            });
          });
        });

      fetch(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip/${route}?${this.parameterToStr(
          parameter
        )}`,
        {
          headers: { ...authorizationHeader },
        }
      )
        .then((response) => response.json())
        .then((jsonData) => {
          const now = Date.now();

          this.stopOfRoute.p.forEach((stopData) => {
            stopData.EstimateTime = "";
          });
          this.stopOfRoute.n.forEach((stopData) => {
            stopData.EstimateTime = "";
          });

          jsonData.forEach((data) => {
            this.stopOfRoute[data.Direction ? "n" : "p"].forEach((stopData) => {
              if (stopData.StopID == data.StopID) {
                if (data.EstimateTime) {
                  const EstimateTime = new Date(now + data.EstimateTime * 1000);
                  stopData.EstimateTime = EstimateTime.toTimeString().substr(0, 5);
                } else {
                  stopData.EstimateTime = "";
                }
              }
            });
          });
        });
    },
    cityInfo_change(val) {
      this.updateRoute();
      this.routeInfo.value = "";
      this.stopOfRoute.p = [];
      this.stopOfRoute.n = [];
      this.departureStopName = "";
      this.destinationStopName = "";
      this.updateDynamicOff();
    },
    routeInfo_change(val) {
      this.stopOfRoute.p = [];
      this.stopOfRoute.n = [];
      this.departureStopName = "";
      this.destinationStopName = "";
      //console.log(val);
      this.updateStopOfRoute();
    },
    getStateClass(item) {
      if (item.A2EventType === 0) {
        return "outDeparture";
      } else if (item.A2EventType === 1) {
        return "inDeparture";
      } else if (!item.EstimateTime) {
        return "noDeparture";
      } else {
        return "";
      }
    },
  },
  computed: {},
  beforeDestroy() {
    this.updateDynamicOff();
  },
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.section#section01 {
}
.section#section02 {
  background-color: #f6f7fb;
  padding-top: 60px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    left: 0;
    top: 0%;
    background-image: url(~@img/card_shadow01.png);
    background-position: center;
    background-size: 100% 100%;
  }
  .box {
    position: relative;
    background-color: #fff;
    //overflow: auto;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 20px;
      left: 0;
      top: 100%;
      background-image: url(~@img/card_shadow04.png);
      background-position: center;
      background-size: 100% 100%;
    }
  }
}
.routeItem {
  position: relative;
  .stopName {
    color: #ff1d6c;
  }
  &:not(.v-item--active) {
    cursor: pointer;
  }
  &.v-item--active {
    &::after {
      content: "";
      width: 100%;
      height: 3px;
      background-color: #ff1d6c;
      left: 0px;
      bottom: 0px;
      position: absolute;
    }
  }
}
.updataRemind {
  color: #ff1d6c;
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
