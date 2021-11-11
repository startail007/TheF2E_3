<template>
  <div class="stopItem pa-4 d-flex flex-column flex-md-row align-center" :class="{ noDeparture: !item.EstimateTime }">
    <div
      class="state min-w-120 mr-md-4 min-h-40 d-flex justify-center align-center text-bold"
      :class="[getStateClass(item)]"
    >
      <div v-if="item.A2EventType === 0">離站中</div>
      <div v-else-if="item.A2EventType === 1">進站中</div>
      <div v-else-if="!item.EstimateTime">未發車</div>
      <div v-else>{{ item.EstimateTime }}</div>
    </div>
    <div class="text flex-1 text-bold">{{ item.StopName.Zh_tw }}</div>
  </div>
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
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
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
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.stopItem {
  .text {
    color: #0d0b0c;
  }
  .state {
    border: 2px solid #0d0b0c;
    border-radius: 10px;
    color: #0d0b0c;
    &.noDeparture {
      border-color: #acacac;
      color: #acacac;
    }
    &.inDeparture {
      border-color: transparent;
      background-color: #ff1d6c;
      color: #fff;
    }
    &.outDeparture {
      border-color: transparent;
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
