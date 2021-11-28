<template>
  <div class="footer px-3">
    <v-container class="pa-0 d-flex align-center justify-center">
      <div class="rightsReserved text-start my-1 text-caption text-md-body-2">
        © Code: <a href="https://github.com/virtools" target="_blank">Wei</a> / Design:
        <a href="https://2021.thef2e.com/users/6296432819610583727" target="_blank">鹽酥G</a>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  pointer-events: none;
  //background-image: linear-gradient(180deg, #fff, #ececec);
  .rightsReserved {
    pointer-events: auto;
    color: #5f5f5f;
    a {
      color: #078080;
      text-decoration: none;
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
