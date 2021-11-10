<template>
  <div class="footer px-3 py-4">
    <v-container>
      <div class="rightsReserved text-center my-3 text-body-2">
        Taiwan Tourguide © Code: <a href="https://github.com/virtools" target="_blank">Wei</a> / Design:
        <a href="https://www.behance.net/KT_Designer" target="_blank">KT</a>
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
  background-image: linear-gradient(180deg, #174c61, #263c49);
  .rightsReserved {
    color: #3d7e99;
    a {
      color: #5d9fbb;
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
