<template>
  <v-sheet class="content">
    <Header> </Header>
    <v-main class="main">
      <v-sheet class="section d-flex justify-center align-center" id="section01">
        <v-responsive :aspect-ratio="1226 / 491" class="box d-flex justify-center align-center max-h-491">
          <div class="boxContent d-flex align-center flex-column">
            <v-responsive :aspect-ratio="487 / 69" class="centerLogo"> </v-responsive>
            <div class="my-2 align-self-start text-body-2 white--text">台北、台中、台南、屏東、宜蘭……遊遍台灣</div>
            <div class="d-flex align-center w-100 my-1">
              <v-text-field label="搜尋關鍵字" class="flex-1 mr-2" solo dense hide-details></v-text-field>
              <v-btn color="#FF1D6C" id="btn_search">
                <div class="icon"></div>
              </v-btn>
            </div>
            <div class="d-flex align-center w-100 my-1">
              <v-select
                :items="typeInfo.items"
                v-model="typeInfo.value"
                label="類別"
                class="flex-1 mr-2"
                solo
                dense
                hide-details
                @change="typeInfo_change"
              ></v-select>
              <v-select
                :items="cityInfo.items"
                v-model="cityInfo.value"
                class="flex-1 mr-2"
                label="不分縣市"
                solo
                dense
                hide-details
                @change="cityInfo_change"
              ></v-select>
              <v-btn color="#FFB72C" id="btn_coordinate">
                <div class="icon"></div>
              </v-btn>
            </div>
          </div>
        </v-responsive>
      </v-sheet>
      <v-sheet
        class="section d-flex justify-center align-center flex-column pb-8"
        id="section02"
        v-if="typeInfo.value == ''"
      >
        <div class="w-100 mb-4" id="card_shadow01"></div>
        <v-container id="section02_1" class="mb-8">
          <div class="mb-4 title d-flex align-center">
            <div class="icon mr-2"></div>
            <div class="text-h6 text-bold">最新活動</div>
          </div>
          <div>
            <div class="row items">
              <div v-for="item in getActivity()" class="col-n1 col-lg-n2 item" :key="item.ID">
                <v-card class="d-flex flex-column flex-md-row pa-4" flat>
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
                      <div class="anchor mr-2"></div>
                      <div class="flex-1 text-body-1 text-bold city">{{ item.City }}</div>
                      <v-btn color="#FF1D6C" outlined @click="details_click(item)">活動詳情</v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </div>
        </v-container>
        <v-container id="section02_2" class="mb-8">
          <div class="mb-4 title d-flex align-center">
            <div class="icon mr-2"></div>
            <div class="text-h6 text-bold">熱門景點</div>
          </div>
          <div>
            <div class="row items">
              <div
                v-for="item in getScenicspot()"
                class="col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item"
                :key="item.ID"
              >
                <v-card class="d-flex flex-column pa-3" flat>
                  <div
                    class="pic ph-180 w-100 mb-2"
                    :style="{
                      backgroundImage: `url(${chooseone(item.Picture.PictureUrl1, placeholder)})`,
                    }"
                    :title="chooseone(item.Picture.PictureDescription1, '無提供照片')"
                  ></div>
                  <v-card-title class="pa-0 mb-2 min-h-40 align-start mt-2">
                    <div class="title text-body-1 text-bold" :title="item.Name">{{ item.Name }}</div>
                  </v-card-title>
                  <v-card-text class="pa-0 mb-2">
                    <div class="d-flex">
                      <div class="anchor mr-2"></div>
                      <div class="address">{{ item.Address }}</div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </div>
        </v-container>
      </v-sheet>
      <!-- <LoadComponents ref="loadComponents">
        <template v-slot:content="{ components }">
          <component :is="components.Section01" />
          <component :is="components.Section02" />
          <component :is="components.Section03" />
          <component :is="components.Section04" />
        </template>
      </LoadComponents> -->
    </v-main>
    <Footer></Footer>
    <v-dialog v-model="details_dialog" width="800">
      <v-card v-if="details_info">
        <div
          class="pic ph-400 w-100 mb-4"
          :style="{
            backgroundImage: `url(${chooseone(details_info.Picture.PictureUrl1, placeholder)})`,
          }"
          :title="chooseone(details_info.Picture.PictureDescription1, '無提供照片')"
        ></div>
        <v-card-text class="d-flex flex-column flex-1">
          <div class="title mb-2 text-bold text-h6" :title="details_info.Name">{{ details_info.Name }}</div>
          <div class="text-body-2 my-2 description">
            {{ details_info.Description }}
          </div>
          <div class="d-flex align-center">
            <div class="row">
              <div class="col-n2">{{ chooseone(details_info.Cycle, "無") }}</div>
              <div class="col-n2">{{ chooseone(details_info.Charge, "無") }}</div>
              <div class="col-n2">{{ chooseone(details_info.Address, "無") }}</div>
              <div class="col-n2">{{ chooseone(details_info.Phone, "無") }}</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>
<script>
import Header from "@vue/pages/components/Header";
import Footer from "@vue/pages/components/Footer";
import LoadComponents from "@vue/pages/components/LoadComponents";
import cityList from "@src/res/cityList";
import placeholder from "@img/placeholder.jpg";
import jsSHA from "jssha";
function getAuthorizationHeader() {
  var AppID = "c3fc7551d62a455083ec06b72ceaa938";
  var AppKey = "-UzRd4LSDVosLoGCBUY7OBpFVwA";

  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  var HMAC = ShaObj.getHMAC("B64");
  var Authorization =
    'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';

  return { Authorization: Authorization, "X-Date": GMTString /*,'Accept-Encoding': 'gzip'*/ }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
export default {
  components: { Header, Footer, LoadComponents },
  data() {
    return {
      typeInfo: {
        value: "",
        items: [
          { text: "類別", value: "" },
          { text: "活動", value: "activity" },
          { text: "景點", value: "scenicspot" },
        ],
      },
      cityInfo: {
        value: "",
        items: [{ text: "不分縣市", value: "" }, ...cityList],
      },
      placeholder,
      data: {
        activity: [],
        scenicspot: [],
      },
      details_dialog: false,
      details_info: null,
    };
  },
  mounted() {
    // this.$refs.loadComponents.load([
    //   { name: "Section01", src: import("@vue/pages/attractions/section/Section01") },
    //   { name: "Section02", src: import("@vue/pages/attractions/section/Section02") },
    //   { name: "Section03", src: import("@vue/pages/attractions/section/Section03") },
    //   { name: "Section04", src: import("@vue/pages/attractions/section/Section04") },
    // ]);
    const authorizationHeader = getAuthorizationHeader();
    this.getData(authorizationHeader, this.cityInfo.value);
  },
  methods: {
    getData(authorizationHeader, city) {
      if (city !== "") {
        city = "/" + city;
      }
      fetch(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity${city}?$orderby=StartTime desc&$top=40&$format=JSON`,
        authorizationHeader
      )
        .then((response) => response.json())
        .then((jsonData) => {
          this.data.activity = jsonData;
          console.log(jsonData);
        });
      fetch(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot${city}?$orderby=SrcUpdateTime asc&$top=100&$format=JSON`,
        authorizationHeader
      )
        .then((response) => response.json())
        .then((jsonData) => {
          this.data.scenicspot = jsonData;
          console.log(jsonData);
        });
    },
    getActivity() {
      return this.data.activity.slice(0, 4);
    },
    getScenicspot() {
      return this.data.scenicspot.slice(0, this.scenicspotCount);
    },
    details_click(item) {
      this.details_dialog = true;
      console.log(item);
      this.details_info = item;
    },
    chooseone(a, b) {
      return a ?? b;
    },
    typeInfo_change(val) {
      //console.log(val);
    },
    cityInfo_change(val) {
      //console.log(val);
      const authorizationHeader = getAuthorizationHeader();
      this.getData(authorizationHeader, val);
    },
  },
  computed: {
    scenicspotCount() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 4;
        case "sm":
          return 6;
        case "md":
          return 9;
        case "lg":
          return 8;
        case "xl":
          return 10;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";
// .main::v-deep {
//   #barLine_start_01 {
//     background-position: center;
//     background-size: auto 100%;
//     background-image: url(~@img/attractions/barLine_start_01.svg);
//     background-repeat: repeat-x;
//     z-index: 1;
//   }
//   #barLine_01_02 {
//     background-position: center;
//     background-size: auto 100%;
//     background-image: url(~@img/attractions/barLine_01_02.svg);
//     background-repeat: repeat-x;
//   }
//   #barLine_02_03 {
//     background-position: center;
//     background-size: auto 100%;
//     background-image: url(~@img/attractions/barLine_02_03.svg);
//     background-repeat: repeat-x;
//     z-index: 1;
//   }
//   #barLine_03_04 {
//     background-position: center;
//     background-size: auto 100%;
//     background-image: url(~@img/attractions/barLine_03_04.svg);
//     background-repeat: repeat-x;
//   }
// }
.section#section01 {
  .box {
    background-image: url(~@img/attractions/bg.jpg);
    background-position: center;
    background-size: cover;
    width: 100%;
    .boxContent {
      max-width: 487px;
      margin: 0 auto;
      .centerLogo {
        background-image: url(~@img/attractions/centerLogo.png);
        background-position: center;
        background-size: contain;
        width: 100%;
      }
      #btn_search {
        width: 40px;
        min-width: auto;
        .icon {
          background-image: url(~@img/attractions/btn_search_icon.png);
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
          background-image: url(~@img/attractions/btn_coordinate_icon.png);
          background-position: center;
          background-size: contain;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

#card_shadow01 {
  background-image: url(~@img/attractions/card_shadow01.png);
  background-position: center;
  background-size: 100% 100%;
  height: 40px;
}

.section#section02 {
  background-color: #e5e5e5;
  .anchor {
    background-image: url(~@img/anchor_icon.png);
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
  }
  #section02_1 {
    .title {
      .icon {
        background-image: url(~@img/triangle_icon.png);
        background-position: center;
        background-size: contain;
        width: 20px;
        height: 20px;
      }
    }
    .items {
      .item {
        .v-card {
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
        }
      }
    }
  }
  #section02_2 {
    .title {
      .icon {
        background-image: url(~@img/square_icon.png);
        background-position: center;
        background-size: contain;
        width: 20px;
        height: 20px;
      }
    }
    .items {
      .item {
        .v-card {
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
            background-image: url(~@img/attractions/card_shadow03.png);
            background-position: center;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
.pic {
  background-position: center;
  background-size: cover;
}
.items {
  .item {
    .v-card {
      min-height: 100%;
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
