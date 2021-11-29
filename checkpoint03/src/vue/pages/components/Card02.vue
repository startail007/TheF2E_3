<template>
  <v-card class="d-flex flex-column w-100" flat v-if="item">
    <v-card-title class="pa-0 mb-2 align-start mt-2">
      <div class="title text-body-1 text-bold d-flex">
        <div>{{ item.StopID }}</div>
        <div>{{ item.StopName.Zh_tw }}</div>
      </div>
    </v-card-title>
    <v-card-text class="pa-0 mb-2">
      <div>
        <template v-if="dynamic">
          <template v-if="dynamic.Estimates">
            <div v-for="(item, key) in dynamic.Estimates" :key="key" class="bus d-flex my-1">
              <div class="base d-flex flex-1 align-center">
                <div class="mx-1 flex-1 text-center">車牌 {{ item.PlateNumb }}</div>
                <template v-if="item.VehicleStopStatus !== undefined">
                  <div v-if="item.VehicleStopStatus" class="mx-1 state inDeparture text-center flex-1">進站</div>
                  <div v-else class="mx-1 state outDeparture text-center flex-1">離站</div>
                </template>
                <template v-else>
                  <div class="mx-1 flex-1 text-center">剩 {{ Math.round(item.EstimateTime / 60) }} 分鐘</div>
                </template>
                <div class="mx-1 flex-1 text-center">
                  <template v-if="item.IsLastBus">末班車</template>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="state overDeparture text-center">末班已過</div>
          </template>
        </template>
        <template v-else>
          <div class="state noDeparture text-center">未發車</div>
        </template>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import mixins_funs from "@vue/mixins/funs";
export default {
  mixins: [mixins_funs],
  components: {},
  props: {
    item: {
      type: Object,
      default: null,
    },
    dynamic: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      menu: false,
    };
  },
  mounted() {
    //console.log(this.item);
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.v-card {
  background-color: transparent;
  .bus {
    font-weight: bold;
    color: #333;
  }
  .base {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
  }
  .state {
    border-radius: 10px;
    color: #0d0b0c;
    padding: 10px;
    &.noDeparture {
      background-color: #acacac;
      color: #555;
    }
    &.overDeparture {
      background-color: #303449;
      color: #fff;
    }
    &.inDeparture {
      background-color: #ff1d6c;
      color: #fff;
    }
    &.outDeparture {
      background-color: #ffb72c;
      color: #fff;
    }
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
