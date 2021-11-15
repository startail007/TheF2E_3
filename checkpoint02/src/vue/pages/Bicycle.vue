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
              class="flex-1"
              label="不分縣市"
              solo
              dense
              hide-details
              @change="cityInfo_change"
              color="primary"
              item-color="primary"
            ></v-select>
            <div class="d-flex justify-end mt-2">
              <v-btn>搜尋</v-btn>
            </div>
          </div>
          <div class="searchResults flex-1 pa-2">
            <div class="mt-2" v-for="key in 100" :key="key">XXXXXX</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="h-100">
      <v-expansion-panels :value="0" class="w-100 bicycleBox max-w-300 pointer-events-auto">
        <v-expansion-panel>
          <v-expansion-panel-header>自行車路線列表</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-select
              :items="cityInfo.items"
              v-model="cityInfo.value"
              class="flex-1"
              label="不分縣市"
              solo
              dense
              hide-details
              @change="cityInfo_change"
              color="primary"
              item-color="primary"
            ></v-select>
            <div class="d-flex justify-end mt-2">
              <v-btn>搜尋</v-btn>
            </div>
            <div class="mt-2" v-for="key in 100" :key="key">XXXXXX</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div> -->
  </div>
</template>
<script>
import cityList from "@src/res/cityList";
export default {
  components: {},
  props: {},
  watch: {},
  data() {
    return {
      menu: true,
      cityInfo: {
        value: "",
        items: [{ text: "不分縣市", value: "" }, ...cityList],
      },
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    cityInfo_change() {},
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
