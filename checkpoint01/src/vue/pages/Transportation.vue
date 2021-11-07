<template>
  <v-sheet class="content">
    <Header> </Header>
    <v-main class="main">
      <!-- <div class="titleBar">
        <v-container class="d-flex justify-center">
          <div class="word">營業範疇</div>
        </v-container>
      </div> -->
      <LoadComponents ref="loadComponents">
        <template v-slot:content="{ components }">
          <component :is="components.Section01" />
          <component :is="components.Section02" />
          <component :is="components.Section03" />
        </template>
      </LoadComponents>
    </v-main>
    <Footer></Footer>
  </v-sheet>
</template>
<script>
import Header from "@vue/pages/components/Header";
import Footer from "@vue/pages/components/Footer";
import LoadComponents from "@vue/pages/components/LoadComponents";
export default {
  components: { Header, Footer, LoadComponents },
  data() {
    return {};
  },
  mounted() {
    this.$refs.loadComponents.load([
      { name: "Section01", src: import("@vue/pages/transportation/section/Section01") },
      { name: "Section02", src: import("@vue/pages/transportation/section/Section02") },
      { name: "Section03", src: import("@vue/pages/transportation/section/Section03") },
    ]);
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.main::v-deep {
  #barLine_01_02 {
    background-position: center;
    background-size: auto 100%;
    background-image: url(~@img/transportation/barLine_01_02.svg);
    background-repeat: repeat-x;
  }
  #barLine_02_03 {
    background-position: 70% center;
    background-size: auto 100%;
    background-image: url(~@img/transportation/barLine_02_03.svg);
    background-repeat: repeat-x;
    background-color: #fff;
  }
  #barLine_03_end {
    background-position: center;
    background-size: auto 100%;
    background-image: url(~@img/transportation/barLine_03_end.svg);
    background-repeat: repeat-x;
    background-color: #ffffff;
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
