<template>
  <div class="bicycle d-flex justify-end h-100 pointer-events-none pa-1">
    <div class="pb-12">
      <div
        class="bicycleBox w-100 pointer-events-auto d-flex flex-column"
        :class="{ 'h-70 h-md-100': menu && searched }"
      >
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
          <div class="searchCondition pa-2 flex-1 flex-md-none">
            <v-select
              :items="cityInfo.items"
              v-model="cityInfo.value"
              label="選擇縣市"
              solo
              flat
              outlined
              hide-details
              @change="cityInfo_change"
              color="primary"
              item-color="primary"
              dense
            ></v-select>
            <v-select
              :items="townInfo.items"
              v-model="townInfo.value"
              class="mt-2"
              label="不分鄉鎮市區"
              solo
              flat
              outlined
              hide-details
              @change="townInfo_change"
              color="primary"
              item-color="primary"
              dense
            ></v-select>
            <div class="d-flex justify-end mt-2">
              <v-btn @click="search_click" depressed color="primary" :disabled="!cityInfo.value">搜尋</v-btn>
            </div>
          </div>
          <div class="searchResults flex-3" v-if="searched">
            <template v-if="searchList.length">
              <v-card v-for="(item, index) in searchList" :key="index" flat @click="route_click(item)" class="ma-2">
                <v-card-title class="text-bold">{{ item.RouteName }}</v-card-title>
                <v-card-text>
                  <div class="d-flex road">
                    <div class="roadSection flex-1 text-bold">{{ item.RoadSectionEnd }}</div>
                    <div class="link d-flex align-center">
                      <div class="triS"></div>
                      <div class="line"></div>
                      <div class="triE"></div>
                    </div>
                    <div class="roadSection flex-1 text-bold">{{ item.RoadSectionStart }}</div>
                  </div>
                </v-card-text>
              </v-card>
            </template>
            <template v-else>
              <div class="d-flex justify-center pa-4">無自行車路線</div>
            </template>
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
  props: {
    center: {
      type: [Array, Object],
      default: null,
    },
  },
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
      searchList: [],
      searched: false,
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
      this.townInfo.items = [{ text: "不分鄉鎮市區", value: "" }, ...zipCodeFilterList];
      this.searchList = [];
      this.searched = false;
    },
    townInfo_change(value) {
      this.searchList = [];
      this.searched = false;
    },
    search_click() {
      const authorizationHeader = this.getAuthorizationHeader();
      const parameter = { $format: "JSON" };
      parameter["$filter"] = "RoadSectionEnd ne null and RoadSectionStart ne null and Geometry ne null";
      if (this.townInfo.value) {
        const townObj = this.itemsFindValue(this.townInfo.items, this.townInfo.value);
        parameter["$filter"] += ` and contains(Town,'${townObj.text}')`;
      }
      o(`https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/`, {
        headers: { ...authorizationHeader },
      })
        .get(this.cityInfo.value)
        .query(parameter)
        .then((jsonData) => {
          this.searchList = jsonData;
          this.searched = true;
        });
    },
    route_click(item) {
      const data = wkt.parse(item.Geometry);
      this.$emit("info", this, "geometry", data);
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
        background-color: #f4f4f4;
      }
    }
  }
}
.searchResults {
  .v-card {
    border: 1px solid #ddd;
    .road {
      .roadSection {
        padding: 10px;
        border-radius: 5px;
        color: #fff;
        background-color: #ff7800;
      }
      .link {
        width: 30px;
        .triS {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 10px 5px 0;
          border-color: transparent #ff7800 transparent transparent;
        }
        .line {
          width: 100%;
          height: 5px;
          background-color: #ff7800;
        }
        .triE {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 0 5px 10px;
          border-color: transparent transparent transparent #ff7800;
        }
      }
    }
  }
}
</style>
