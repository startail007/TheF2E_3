<template>
  <div>
    <v-btn
      depressed
      text
      :to="{ path: '/bicycle' }"
      id="item01"
      class="pageItem mx-2 text-body-1 px-2"
      active-class="active"
      large
      @click="pageItem_click('/bicycle')"
    >
      <div class="icon"></div>
      <div class="text">自行車道</div>
    </v-btn>
    <v-btn
      depressed
      text
      :to="{ path: '/attractions' }"
      id="item02"
      class="pageItem mx-2 text-body-1 px-2"
      active-class="active"
      large
      @click="pageItem_click('/attractions')"
    >
      <div class="icon"></div>
      <div class="text">周圍景點</div>
    </v-btn>
    <!-- <v-btn
      depressed
      text
      :to="{ path: '/history' }"
      id="item03"
      class="pageItem mx-2 text-body-1 px-2"
      active-class="active"
      large
      @click="pageItem_click('/history')"
    >
      <div class="icon"></div>
      <div class="text">歷史紀錄</div>
    </v-btn> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    pageItem_click(path) {
      if (this.$route.path === path) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.pageItem {
  font-weight: bold;
  letter-spacing: 0.25em;
  &.active {
    background-color: transparent;
    color: #078080;
  }
  &::before {
    content: none;
  }
  &.active::after {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #078080;
  }
}
</style>
