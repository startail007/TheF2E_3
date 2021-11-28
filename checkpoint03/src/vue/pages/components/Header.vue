<template>
  <div>
    <v-app-bar class="bar" app elevate-on-scroll>
      <v-container class="pa-0 fill-height">
        <div class="d-flex flex-md-column align-center px-4">
          <router-link :to="{ path: '/' }">
            <img class="logo" :src="logo" />
          </router-link>
        </div>
        <!-- <slot name="items"></slot> -->
        <v-spacer></v-spacer>
        <!-- <Menu class="d-none d-md-flex"></Menu> -->
        <!-- <slot name="endItems"></slot> -->
        <!-- <v-app-bar-nav-icon
          class="d-flex d-md-none"
          @click="$refs.sidebar.isOpen = !$refs.sidebar.isOpen"
        ></v-app-bar-nav-icon> -->
      </v-container>
    </v-app-bar>
    <!-- <Sidebar ref="sidebar">
      <template v-slot:content>
        <div class="d-flex pa-4">
          <v-spacer></v-spacer>
          <v-icon @click="$refs.sidebar.isOpen = false"> mdi-close </v-icon>
        </div>
        <Menu class="d-flex flex-column"></Menu>
      </template>
    </Sidebar> -->
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
  computed: {},
};
</script>
<style lang="scss" scoped>
.bar {
  // background-image: url(~@img/header_bg.jpg);
  // background-size: cover;
  // background-position: center;
}
.logo {
  max-height: 60px;
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
