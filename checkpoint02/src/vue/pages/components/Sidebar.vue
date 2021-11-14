<template>
  <v-navigation-drawer right app v-model="isOpen" temporary>
    <slot name="content"></slot>
  </v-navigation-drawer>
</template>
<script>
export default {
  components: {},
  props: {},
  watch: {},
  data() {
    return {
      isOpen: false,
      resizeID: undefined,
    };
  },
  mounted() {
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      clearTimeout(this.resizeID);
      this.resizeID = setTimeout(() => {
        if (this.isOpen) {
          if (this.$vuetify.breakpoint.mdAndUp) {
            this.isOpen = false;
          }
        }
      }, 300);
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
