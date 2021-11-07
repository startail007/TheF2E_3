<template>
  <div class="footer px-3 py-4">
    <v-container>
      <div class="rightsReserved text-center my-3 text-body-2">
        Taiwan Tourguide © Code: Wei / Design: KT
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
