<template>
  <v-card class="d-flex flex-column w-100" flat v-if="item">
    <v-card-title class="pa-0 mb-2 align-start mt-2">
      <div class="title text-body-1 text-bold" :title="item.name">{{ item.name }}</div>
    </v-card-title>
    <v-card-text class="pa-0 mb-2">
      <div
        class="my-2 w-100 route d-flex text-bold"
        v-for="(obj, key) in item.Routes"
        :key="key"
        @click="route_click(obj)"
      >
        <div class="mr-2">{{ obj.name }}</div>
        <div>{{ obj.departureStopName }}-{{ obj.destinationStopName }}</div>
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
  },
  data() {
    return {
      menu: false,
    };
  },
  mounted() {},
  methods: {
    route_click(data) {
      this.$emit("route", data);
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.v-card {
  background-color: transparent;
  .route {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    color: #333;
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
