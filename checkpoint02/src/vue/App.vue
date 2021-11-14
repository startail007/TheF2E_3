<template>
  <v-app class="vh-100">
    <router-view></router-view>
    <ImageViewer ref="imageViewer" class="imageViewer"></ImageViewer>
    <Contextmenu ref="contextmenu" class="contextmenu"></Contextmenu>
    <Confirm ref="confirm" class="confirm"></Confirm>
    <Overlay ref="overlay" class="overlay"></Overlay>
  </v-app>
</template>
<script>
import ImageViewer from "@vue/components/ImageViewer";
import Confirm from "@vue/components/Confirm";
import Overlay from "@vue/components/Overlay";
import mixins_funs from "@vue/mixins/funs";
import Contextmenu from "@vue/components/Contextmenu";
export default {
  name: "app",
  mixins: [mixins_funs],
  components: { ImageViewer, Confirm, Overlay, Contextmenu },
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
<style lang="scss" scoped>
.imageViewer {
  z-index: 13000 !important;
}
.contextmenu {
  z-index: 13001 !important;
}
.confirm {
  z-index: 13002 !important;
}
.overlay {
  z-index: 13003 !important;
}
</style>
