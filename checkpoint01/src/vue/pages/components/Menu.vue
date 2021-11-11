<template>
  <div>
    <v-btn
      depressed
      text
      :to="{ path: '/attractions' }"
      id="item01"
      class="pageItem mx-2 text-body-1 px-2"
      active-class="active"
      large
      @click="pageItem_click('/attractions')"
    >
      <div class="icon"></div>
      <div class="text">台灣景點</div>
    </v-btn>
    <v-btn
      depressed
      text
      :to="{ path: '/stay' }"
      id="item02"
      class="pageItem mx-2 text-body-1 px-2"
      active-class="active"
      large
      @click="pageItem_click('/stay')"
    >
      <div class="icon"></div>
      <div class="text">美食住宿</div>
    </v-btn>
    <v-btn
      depressed
      text
      :to="{ path: '/transportation' }"
      id="item03"
      class="pageItem mx-2 text-body-1 px-2"
      active-class="active"
      large
      @click="pageItem_click('/transportation')"
    >
      <div class="icon"></div>
      <div class="text">景點交通</div>
    </v-btn>
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
@import "~@css/_variables.scss";
.pageItem {
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #90b0b6;
  &.active {
    .icon {
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 20%);
    }
    .text {
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 20%);
    }
  }
  &:hover {
  }
  &::before {
    content: none;
  }
  .icon {
    width: 34px;
    height: 34px;
    border-radius: 34px;
    background-position: center;
    background-size: contain;
  }
  .text {
    margin-left: 0.25em;
  }
  &#item01 {
    color: #ff1d6c !important;
    .icon {
      background-image: url(~@img/icon01.png);
    }
  }
  &#item02 {
    color: #ffb72c !important;
    .icon {
      background-image: url(~@img/icon02.png);
    }
  }
  &#item03 {
    color: #007350 !important;
    .icon {
      background-image: url(~@img/icon03.png);
    }
  }
}
</style>
