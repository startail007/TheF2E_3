<template>
  <div class="attractions d-flex justify-end h-100 pointer-events-none pa-1">
    <div class="pb-12">
      <div
        class="attractionsBox w-100 pointer-events-auto d-flex flex-column"
        :class="{ 'h-70 h-md-100': menu && searched }"
      >
        <div class="header pa-2 d-flex align-center">
          <div class="flex-1 text-bold text-body-1 text-center mx-2">周圍景點列表</div>
          <v-btn class="btn" color="#078080" @click="menu = !menu" x-small depressed>
            <template v-if="menu">
              <v-icon>mdi-chevron-up</v-icon>
            </template>
            <template v-else>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-btn>
        </div>
        <div class="content d-flex flex-md-column flex-1" v-if="menu">
          <div class="searchCondition pa-2 flex-1 flex-md-none">
            <div class="d-flex justify-end mt-2">
              <v-btn @click="search_click" depressed color="primary">搜尋</v-btn>
            </div>
          </div>
          <div class="searchResults flex-3" v-if="searched">
            <template v-if="searchList.length">
              <Card01 v-for="item in searchList" :key="item.ID" :item="item"></Card01>
            </template>
            <template v-else>
              <div class="d-flex justify-center pa-4">無搜尋結果</div>
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
import Card01 from "@vue/pages/components/Card01";
import { o } from "odata";
import * as wkt from "wkt";
export default {
  mixins: [mixins_funs],
  components: { Card01 },
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
      searchList: [],
      searched: false,
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    search_click() {
      const authorizationHeader = this.getAuthorizationHeader();
      const parameter = {
        $top: 30,
        $orderby: "SrcUpdateTime asc",
        $format: "JSON",
        $spatialFilter: `nearby(${this.center.lat}, ${this.center.lng},3000)`,
        $filter: "ZipCode ne null or City ne null",
      };
      o(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/`, {
        headers: { ...authorizationHeader },
      })
        .get()
        .query(parameter)
        .then((jsonData) => {
          this.searched = true;
          this.searchList = jsonData.map((el) => {
            return {
              ...el,
              ZipCodeChinese: this.zipCodeToChinese(el.ZipCode) ?? el.City,
              latlng: [el.Position.PositionLat, el.Position.PositionLon],
            };
          });
          console.log(jsonData);

          this.$emit("info", this, "scenicspot", this.searchList);
        });
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.attractions {
  .attractionsBox {
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
}
</style>
