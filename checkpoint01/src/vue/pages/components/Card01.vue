<template>
  <v-card class="d-flex flex-column flex-md-row pa-4" flat v-if="item">
    <div
      class="pic ph-240 max-w-md-240 w-100 w-md-50"
      :style="{
        backgroundImage: `url(${chooseone(item.Picture.PictureUrl1, placeholder)})`,
      }"
      :title="chooseone(item.Picture.PictureDescription1, '無提供照片')"
    ></div>
    <v-card-text class="d-flex flex-column flex-1 pa-0 py-4 py-md-0 pl-0 pl-md-4 mb-2">
      <div class="title text-body-1 mb-2 text-bold" :title="item.Name">{{ item.Name }}</div>
      <div class="text-body-2 my-2 description">
        {{ item.Description }}
      </div>
      <div class="flex-1"></div>
      <div class="d-flex align-center">
        <div class="anchorIcon mr-2"></div>
        <div class="flex-1 text-body-1 text-bold city">{{ item.City }}</div>
        <v-btn color="#FF1D6C" outlined @click="details_click(item)">活動詳情</v-btn>
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
      placeholder,
    };
  },
  mounted() {},
  methods: {
    details_click(item) {
      this.$emit("details", item);
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.v-card {
  min-height: 100%;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05) !important;
  .title {
    color: #0d0b0c;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    left: 0;
    top: 100%;
    background-image: url(~@img/attractions/card_shadow02.png);
    background-position: center;
    background-size: 100% 100%;
  }
  .description {
    color: #acacac;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .city {
    color: #0d0b0c;
  }
  .address {
    color: #007350;
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
