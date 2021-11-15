<template>
  <v-app class="vh-100">
    <router-view></router-view>
  </v-app>
</template>
<script>
import mixins_funs from "@vue/mixins/funs";
export default {
  name: "app",
  mixins: [mixins_funs],
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900";
@import "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css";
@import "~@css/_variables.scss";
@import "~@css/_expansion.scss";
html {
  overflow: auto;
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
.v-application--wrap {
  min-height: auto;
  height: 100%;
}
/*.theme--light.v-toolbar.v-sheet {
  background-color: transparent;
}
.theme--light.v-data-table {
  background-color: transparent;
}
.theme--light.v-card {
  background-color: transparent;
}
.v-dialog {
  .theme--light.v-card {
    background-color: white;
  }
}*/
.v-data-table {
  tr {
    th {
      white-space: nowrap;
    }
    td {
      &:not(:first-child) {
        min-width: 6em;
      }
    }
  }
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff;
}
</style>
<style lang="scss" scoped></style>
