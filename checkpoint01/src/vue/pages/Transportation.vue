<template>
  <v-sheet class="content">
    <Header> </Header>
    <v-main class="main min-h-800">
      <v-sheet class="section d-flex justify-center align-center pa-2 pa-md-4" id="section01">
        <v-container class="mb-8">
          <div class="d-flex justify-center">
            <div class="d-flex max-w-400">
              <v-select
                :items="cityInfo.items"
                v-model="cityInfo.value"
                class="flex-1 mr-2"
                label="選擇縣市"
                solo
                dense
                hide-details
                @change="cityInfo_change"
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
              ></v-select>
            </div>
          </div>
        </v-container>
      </v-sheet>
      <v-sheet class="section d-flex justify-center align-center flex-column pb-8" id="section02">
        <div class="w-100 mb-4" id="card_shadow01"></div>
      </v-sheet>
      <v-sheet class="section d-flex justify-center align-center flex-column pb-8 flex-1" id="section03">
        <v-container>
          <div v-for="item in stopOfRoute.p" :key="item.StopID">{{ item.StopName.Zh_tw }}</div>
        </v-container>
      </v-sheet>
      <!-- <div class="titleBar">
        <v-container class="d-flex justify-center">
          <div class="word">營業範疇</div>
        </v-container>
      </div> -->
      <!-- <LoadComponents ref="loadComponents">
        <template v-slot:content="{ components }">
          <component :is="components.Section01" />
          <component :is="components.Section02" />
          <component :is="components.Section03" />
        </template>
      </LoadComponents> -->
      <!-- <div class="d-flex justify-center align-center h-100">
        <div class="text-h4">建構中...</div>
      </div> -->
    </v-main>
    <Footer></Footer>
  </v-sheet>
</template>
<script>
import Header from "@vue/pages/components/Header";
import Footer from "@vue/pages/components/Footer";
import LoadComponents from "@vue/pages/components/LoadComponents";
import cityList from "@src/res/cityList";
import mixins_funs from "@vue/mixins/funs";
export default {
  mixins: [mixins_funs],
  components: { Header, Footer, LoadComponents },
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
      stopOfRoute: {
        p: [],
        n: [],
      },
    };
  },
  mounted() {
    // this.$refs.loadComponents.load([
    //   { name: "Section01", src: import("@vue/pages/transportation/section/Section01") },
    //   { name: "Section02", src: import("@vue/pages/transportation/section/Section02") },
    //   { name: "Section03", src: import("@vue/pages/transportation/section/Section03") },
    // ]);
    this.updateRoute();
  },
  methods: {
    updateRoute() {
      const authorizationHeader = this.getAuthorizationHeader();
      let city = this.cityInfo.value;
      const parameter = { top: 30, format: "JSON" };
      if (city != "") {
        parameter["filter"] = `City eq '${city}'`;
      }
      fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?${this.parameterToStr(parameter)}`, {
        headers: { ...authorizationHeader },
      })
        .then((response) => response.json())
        .then((jsonData) => {
          console.log(jsonData);
          this.routeList = jsonData;
          this.routeInfo.items = this.routeList.map((el, index) => {
            return { text: el.TaiwanTripName.Zh_tw, value: index };
          });
        });
    },
    updateStopOfRoute() {
      const authorizationHeader = this.getAuthorizationHeader();
      let route = this.itemsFindValue(this.routeInfo.items, this.routeInfo.value).text;
      const parameter = { top: 30, format: "JSON" };
      console.log(route);
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
          this.stopOfRoute.p = jsonData[0].Stops;
          this.stopOfRoute.n = jsonData[1].Stops;
          console.log(this.stopOfRoute.p);
        });
    },
    cityInfo_change(val) {
      //console.log(val);
      this.updateRoute();
      this.routeInfo.value = "";
      this.stopOfRoute.p = [];
      this.stopOfRoute.n = [];
    },
    routeInfo_change(val) {
      //console.log(val);
      this.updateStopOfRoute();
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.section#section01 {
}
.section#section02 {
  background-color: #f6f7fb;
  #card_shadow01 {
    background-image: url(~@img/attractions/card_shadow01.png);
    background-position: center;
    background-size: 100% 100%;
    height: 40px;
  }
}
.section#section03 {
  background-color: #f6f7fb;
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
