<template>
  <v-dialog v-model="details_dialog" width="800" content-class="activityDialog">
    <v-card v-if="details_info">
      <div class="pa-4">
        <div
          class="pic ph-400 w-100"
          :style="{
            backgroundImage: `url(${chooseone(
              details_info.pics.length ? details_info.pics[details_index].url : null,
              placeholder
            )})`,
          }"
          :title="
            chooseone(details_info.pics.length ? details_info.pics[details_index].description : null, '無提供照片')
          "
        ></div>
      </div>
      <div class="d-flex pa-2" v-if="details_info.pics.length">
        <div class="flex-1"></div>
        <v-btn small class="mx-1 btn_pn" :disabled="details_index <= 0" @click="details_index--">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          small
          class="mx-1 btn_pn"
          :disabled="details_index >= details_info.pics.length - 1"
          @click="details_index++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-card-text class="d-flex flex-column flex-1">
        <div class="title mb-2 text-bold text-h6" :title="details_info.Name">{{ details_info.Name }}</div>
        <div class="text-body-2 my-2 description mb-4">
          {{ details_info.Description }}
        </div>
        <div class="d-flex align-center flex-column">
          <div class="d-flex w-100 flex-column flex-sm-row">
            <div class="d-flex flex-sm-2 my-2">
              <div class="dateRangeIcon mr-2"></div>
              <div>{{ getTimeRange(details_info.StartTime, details_info.EndTime) }}</div>
            </div>
            <div class="d-flex flex-sm-1 my-2">
              <div class="chargeIcon mr-2"></div>
              <div>{{ details_info.Charge == 0 ? "無" : chooseone(details_info.Charge, "無") }}</div>
            </div>
          </div>
          <div class="d-flex w-100 flex-column flex-sm-row">
            <div class="d-flex flex-sm-2 my-2">
              <div class="anchorIcon mr-2"></div>
              <div>{{ chooseone(details_info.Address, "無") }}</div>
            </div>
            <div class="d-flex flex-sm-1 my-2">
              <div class="phoneIcon mr-2"></div>
              <div>{{ chooseone(details_info.Phone, "無") }}</div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import mixins_funs from "@vue/mixins/funs";
import placeholder from "@img/placeholder.jpg";
export default {
  mixins: [mixins_funs],
  components: {},
  data() {
    return {
      placeholder,
      details_dialog: false,
      details_info: null,
      details_index: 0,
    };
  },
  watch: {
    details_dialog(val) {
      this.$emit("display", val);
    },
  },
  mounted() {},
  methods: {
    open(info) {
      this.details_info = info;
      this.details_dialog = true;
      this.details_index = 0;
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.activityDialog {
  .anchorIcon {
    background-image: url(~@img/icon/map_M.png);
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
  }
  .dateRangeIcon {
    background-image: url(~@img/icon/time.png);
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
  }
  .chargeIcon {
    background-image: url(~@img/icon/ticket.png);
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
  }
  .phoneIcon {
    background-image: url(~@img/icon/tel.png);
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
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
