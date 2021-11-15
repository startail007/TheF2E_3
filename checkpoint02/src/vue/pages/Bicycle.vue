<template>
  <div class="bicycle d-flex justify-end h-100 pointer-events-none pa-1">
    <div class="pb-12">
      <div class="bicycleBox pointer-events-auto d-flex flex-column" :class="{ 'h-100': menu }">
        <div class="header pa-2 d-flex align-center">
          <div class="flex-1 text-bold text-body-1 text-center mx-2">自行車路線列表</div>
          <v-btn class="btn" color="#078080" @click="menu = !menu" x-small depressed>
            <template v-if="menu">
              <v-icon>mdi-chevron-up</v-icon>
            </template>
            <template v-else>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-btn>
        </div>
        <div class="content d-flex flex-column flex-1" v-if="menu">
          <div class="searchCondition pa-2">
            <v-select
              :items="cityInfo.items"
              v-model="cityInfo.value"
              label="選擇縣市"
              solo
              dense
              hide-details
              @change="cityInfo_change"
              color="primary"
              item-color="primary"
            ></v-select>
            <v-select
              :items="townInfo.items"
              v-model="townInfo.value"
              class="mt-2"
              label="選擇鄉鎮市區"
              solo
              dense
              hide-details
              @change="townInfo_change"
              color="primary"
              item-color="primary"
            ></v-select>
            <div class="d-flex justify-end mt-2">
              <v-btn @click="search_click">搜尋</v-btn>
            </div>
          </div>
          <div class="searchResults flex-1 pa-2">
            <v-card v-for="item in RouteList" :key="item.RouteName" flat @click="route_click(item)">
              <v-card-title>{{ item.RouteName }}</v-card-title>
              <v-card-text>
                <div class="d-flex">
                  <div>{{ item.RoadSectionEnd }}</div>
                  <div class="mx-2">>>></div>
                  <div>{{ item.RoadSectionStart }}</div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cityList from "@src/res/cityList";
import zipCodeList from "@src/res/zipCodeList";
import mixins_funs from "@vue/mixins/funs";
import { o } from "odata";
import * as wkt from "wkt";
export default {
  mixins: [mixins_funs],
  components: {},
  props: {},
  watch: {},
  data() {
    return {
      menu: true,
      cityInfo: {
        value: "",
        items: cityList,
      },
      townInfo: {
        value: "",
        items: [],
      },
      RouteList: [],
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    cityInfo_change(value) {
      const cityObj = this.itemsFindValue(this.cityInfo.items, value);
      const zipCodeFilterList = zipCodeList
        .filter((el) => el.city === cityObj.text)
        .map((el) => ({ text: el.township, value: el.zipCode }));
      this.townInfo.value = "";
      this.townInfo.items = zipCodeFilterList;
      console.log(zipCodeFilterList);
    },
    townInfo_change(value) {},
    search_click() {
      const authorizationHeader = this.getAuthorizationHeader();
      const parameter = { $format: "JSON" };
      parameter["$filter"] = "RoadSectionEnd ne null and RoadSectionStart ne null and Geometry ne null";
      if (this.townInfo.value) {
        const townObj = this.itemsFindValue(this.townInfo.items, this.townInfo.value);
        parameter["$filter"] += ` and Town eq '${townObj.text}'`;
      }
      o(`https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/`, {
        headers: { ...authorizationHeader },
      })
        .get(this.cityInfo.value)
        .query(parameter)
        .then((jsonData) => {
          console.log(jsonData);
          this.RouteList = jsonData;
        });
    },
    route_click(item) {
      this.$emit("info", this, "geometry", wkt.parse(item.Geometry));
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.bicycle {
  .bicycleBox {
    // overflow: auto;
    // max-height: 100%;
    border-radius: 5px;
    overflow: hidden;
    .header {
      background-color: #078080;
      color: #fff;
      .v-icon {
        color: #fff;
      }
    }
    .content {
      background-color: #fff;
      overflow: hidden;
      .searchCondition {
      }
      .searchResults {
        overflow: auto;
      }
    }
  }
}
</style>
