<template>
  <div class="footer px-3 py-md-2">
    <v-container class="pa-0">
      <div class="rightsReserved text-center my-2 text-caption text-md-body-2">
        © Code: <a href="https://github.com/virtools" target="_blank">Wei</a> / Design:
        <a href="" target="_blank">XX</a>
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
  background-image: linear-gradient(180deg, #fff, #ececec);
  .rightsReserved {
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
