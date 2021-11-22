<template>
  <v-card class="d-flex flex-column pa-3 w-100" flat v-if="item">
    <div
      class="pic ph-180 w-100 mb-2 min-h-300"
      :style="{
        backgroundImage: `url(${chooseone(item.Picture.PictureUrl1, placeholder)})`,
      }"
      :title="chooseone(item.Picture.PictureDescription1, '無提供照片')"
    ></div>
    <v-card-title class="pa-0 mb-2 align-start mt-2">
      <div class="title text-body-1 text-bold" :title="item.Name">{{ item.Name }}</div>
    </v-card-title>
    <v-card-text class="pa-0 mb-2">
      <div class="d-flex mb-2">
        <div class="anchorIcon mr-2"></div>
        <div class="zipCode">{{ item.ZipCodeChinese }}</div>
      </div>
      <div>
        <div class="flex-1 text-bold text-body-2 text-center description" :class="{ short: !menu }">
          {{ item.DescriptionDetail }}
        </div>
        <div class="d-flex justify-center">
          <v-btn class="btn" @click="menu = !menu" x-small depressed color="transparent">
            <template v-if="menu">
              <v-icon>mdi-chevron-up</v-icon>
            </template>
            <template v-else>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import mixins_funs from "@vue/mixins/funs";
import placeholder from "@img/placeholder.jpg";
export default {
  mixins: [mixins_funs],
  components: {},
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      menu: false,
      placeholder,
    };
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.v-card {
  //min-height: 100%;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05) !important;
  .title {
    // text-overflow: ellipsis;
    // overflow: hidden;
    // white-space: nowrap;
    color: #0d0b0c;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    left: 0;
    top: 100%;
    background-image: url(~@img/card_shadow03.png);
    background-position: center;
    background-size: 100% 100%;
  }
  .description {
    color: #acacac;
    width: 100%;
    max-width: 400px;
    text-align: justify !important;
    &.short {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }
  .city {
    color: #0d0b0c;
  }
  .zipCode {
    color: #007350;
  }
  .pic {
    background-position: center;
    background-size: cover;
  }
}
.anchorIcon {
  background-image: url(~@img/anchor_icon.png);
  background-position: center;
  background-size: contain;
  width: 20px;
  height: 20px;
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
