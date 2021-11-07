<template>
  <v-sheet class="section d-flex" id="section02"> </v-sheet>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    // const url =
    //   "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'紫')&$top=30&$format=JSON";
    // const url =
    //   "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$select=ID,Class1,Class2,Class3&$top=30&$format=JSON";
    const url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=30&$format=JSON";
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
      });
    // axios
    //   .get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON", {
    //     params: {
    //       top: 30,
    //       format: "JSON",
    //     },
    //   })
    //   .then((response) => response.data)
    //   .then((response) => {
    //     console.log(response);
    //   });
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.section {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #999;
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
