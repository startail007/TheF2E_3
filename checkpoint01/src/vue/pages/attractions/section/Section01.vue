<template>
  <v-sheet class="section d-flex justify-center align-center" id="section01">
    <v-container>
      <v-responsive :aspect-ratio="1226 / 491" class="box d-flex justify-center align-center">
        <div class="boxContent d-flex align-center flex-column">
          <v-responsive :aspect-ratio="487 / 69" class="centerLogo"> </v-responsive>
          <div class="my-2 align-self-start text-body-2 white--text">
            台北、台中、台南、屏東、宜蘭……遊遍台灣
          </div>
          <div class="d-flex align-center w-100 my-1">
            <v-text-field label="搜尋關鍵字" class="flex-1 mr-2" solo dense hide-details></v-text-field>
            <v-btn color="#FF1D6C" id="btn_search">
              <div class="icon"></div>
            </v-btn>
          </div>
          <div class="d-flex align-center w-100 my-1">
            <v-select :items="items" label="類別" class="flex-1 mr-2" solo dense hide-details></v-select>
            <v-select :items="items" label="不分縣市" class="flex-1 mr-2" solo dense hide-details></v-select>
            <v-btn color="#FFB72C" id="btn_coordinate">
              <div class="icon"></div>
            </v-btn>
          </div>
        </div>
      </v-responsive>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
.section {
  .box {
    background-image: url(~@img/attractions/section01/bg.jpg);
    background-position: center;
    background-size: contain;
    width: 100%;
    .boxContent {
      max-width: 487px;
      margin: 0 auto;
      .centerLogo {
        background-image: url(~@img/attractions/section01/centerLogo.png);
        background-position: center;
        background-size: contain;
        width: 100%;
      }
      #btn_search {
        width: 40px;
        min-width: auto;
        .icon {
          background-image: url(~@img/attractions/section01/btn_search_icon.png);
          background-position: center;
          background-size: contain;
          width: 16px;
          height: 16px;
        }
      }
      #btn_coordinate {
        width: 40px;
        min-width: auto;
        .icon {
          background-image: url(~@img/attractions/section01/btn_coordinate_icon.png);
          background-position: center;
          background-size: contain;
          width: 16px;
          height: 16px;
        }
      }
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
