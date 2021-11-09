<template>
  <div>
    <v-app-bar
      class="app_bar"
      app
      elevation="0"
      elevate-on-scroll
      :prominent="prominent"
      color="rgba(255,255,255,0.98)"
    >
      <v-container class="pa-0 px-md-8 fill-height">
        <div class="d-flex flex-md-column align-center px-4">
          <img class="logo" :src="logo" />
        </div>
        <v-spacer></v-spacer>
        <div>
          <Menu class="d-none d-md-flex align-self-end"></Menu>
        </div>
        <v-btn
          class="d-flex d-md-none"
          fab
          small
          elevation="0"
          @click="$refs.sidebar.isOpen = !$refs.sidebar.isOpen"
          color="transparent"
        >
          <v-icon color="#0d0b0c">mdi-menu</v-icon>
        </v-btn>
        <!-- <v-app-bar-nav-icon
          class="d-flex d-md-none"
          @click="$refs.sidebar.isOpen = !$refs.sidebar.isOpen"
        ></v-app-bar-nav-icon> -->
      </v-container>
    </v-app-bar>
    <Sidebar ref="sidebar">
      <template v-slot:content>
        <div class="d-flex pa-4">
          <v-spacer></v-spacer>
          <v-btn fab small elevation="0" @click="$refs.sidebar.isOpen = false" color="transparent">
            <v-icon color="#0d0b0c"> mdi-close </v-icon>
          </v-btn>
        </div>
        <Menu class="sidebarMenu d-flex flex-column"></Menu>
      </template>
    </Sidebar>
  </div>
</template>
<script>
import Menu from "@vue/pages/components/Menu";
import Sidebar from "@vue/pages/components/Sidebar";
import logo from "@img/logo.png";
export default {
  components: { Menu, Sidebar },
  data() {
    return { logo };
  },
  mounted() {},
  methods: {},
  computed: {
    prominent() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        case "sm":
          return false;
        case "md":
          return true;
        case "lg":
          return true;
        case "xl":
          return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.sidebarMenu::v-deep {
  .pageItem.active::after {
    position: absolute;
    width: auto;
    height: 100%;
    left: 5px;
    right: 5px;
    top: 0px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid $main-color;
  }
}
.app_bar {
  //background-image: url(~@img/header_bg.jpg);
  //background-size: cover;
  //background-position: center;
  //border-bottom: 1px solid #b2d0db;
  //border-image: linear-gradient(to bottom, red 0%, yellow 100%);
  &.v-app-bar--is-scrolled {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      //background-color: brown;
      background-image: linear-gradient(to right, #c8c8c800 0%, #c8c8c8 50%, #c8c8c800 100%);
    }
  }
}
/*.theme--light.v-toolbar.v-sheet.bar {
  background-color: rgba(245, 245, 245, 0.9);
  backdrop-filter: blur(10px);
}*/
.logo {
  max-height: 60px;
  max-width: 80px;
}
@media (min-width: get-breakpoints("sm")) {
}
@media (min-width: get-breakpoints("md")) {
  .logo {
    max-width: none;
  }
}
@media (min-width: get-breakpoints("lg")) {
}
@media (min-width: get-breakpoints("xl")) {
}
</style>
