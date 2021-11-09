<template>
  <v-sheet class="content" :class="{ bgBlur: bgBlur }">
    <Header> </Header>
    <v-main class="main min-h-800">
      <v-sheet class="section d-flex justify-center align-center pa-2 pa-md-4" id="section01">
        <v-responsive :aspect-ratio="1226 / 491" class="box d-flex justify-center align-center max-h-491 pa-2 pa-md-4">
          <div class="boxContent d-flex align-center flex-column">
            <v-responsive :aspect-ratio="487 / 69" class="centerLogo"> </v-responsive>
            <div class="my-2 align-self-start text-body-2 white--text">台北、台中、台南、屏東、宜蘭……遊遍台灣</div>
            <div class="d-flex align-center w-100 my-1">
              <v-text-field
                label="搜尋關鍵字"
                class="flex-1 mr-2"
                solo
                dense
                hide-details
                v-model="temp_search"
                @change="search_change"
              ></v-text-field>
              <!-- <v-btn color="#FF1D6C" id="btn_search" @click="search_click">
                <div class="icon"></div>
              </v-btn> -->
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
                :disabled="typeInfo.value == ''"
              ></v-select>
              <!-- <v-btn color="#FFB72C" id="btn_coordinate" @click="coordinate_click">
                <div class="icon"></div>
              </v-btn> -->
            </div>
          </div>
        </v-responsive>
      </v-sheet>
      <v-sheet class="section d-flex justify-center align-center flex-column pb-8" id="section02">
        <div class="w-100 mb-4" id="card_shadow01"></div>
        <div class="text_search text-h6 text-bold" v-if="search">搜尋關鍵字 - {{ search }}</div>
      </v-sheet>
      <v-sheet
        class="section d-flex justify-center align-center flex-column pb-8"
        id="section03"
        v-if="typeInfo.value == ''"
      >
        <v-container id="section03_1" class="mb-8">
          <div class="mb-4 title d-flex align-center">
            <div class="icon mr-2"></div>
            <div class="text-h6 text-bold">最新活動</div>
          </div>
          <div>
            <div class="row items">
              <div v-for="item in data.activity.slice(0, 4)" class="col-n1 col-lg-n2 item mb-4" :key="item.ID">
                <Card01 :item="item" @details="details_dialog"></Card01>
              </div>
            </div>
          </div>
        </v-container>
        <v-container id="section03_2" class="mb-8">
          <div class="mb-4 title d-flex align-center">
            <div class="icon mr-2"></div>
            <div class="text-h6 text-bold">熱門景點</div>
          </div>
          <div>
            <div class="row items">
              <div
                v-for="item in data.scenicspot.slice(0, scenicspotCount)"
                class="col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"
                :key="item.ID"
              >
                <Card02 :item="item"></Card02>
              </div>
            </div>
          </div>
        </v-container>
      </v-sheet>
      <v-sheet
        class="section d-flex justify-center align-center flex-column pb-8"
        id="section03"
        v-if="typeInfo.value == 'activity'"
      >
        <v-container id="section03_1" class="mb-8">
          <div class="mb-4 title d-flex align-center">
            <div class="icon mr-2"></div>
            <div class="text-h6 text-bold">活動 - {{ itemsFindValue(cityInfo.items, cityInfo.value).text }}</div>
          </div>
          <div>
            <div class="row items">
              <div
                v-for="item in data.activity.slice(
                  (activity.pageIndex - 1) * activity.pageItemMax,
                  (activity.pageIndex - 1) * activity.pageItemMax + activity.pageItemMax
                )"
                class="col-n1 col-lg-n2 item mb-4"
                :key="item.ID"
              >
                <Card01 :item="item" @details="details_dialog"></Card01>
              </div>
            </div>
            <div class="mt-8" v-if="activity.pageTotal">
              <v-pagination v-model="activity.pageIndex" :length="activity.pageTotal" :total-visible="7"></v-pagination>
            </div>
          </div>
        </v-container>
      </v-sheet>
      <v-sheet
        class="section d-flex justify-center align-center flex-column pb-8"
        id="section03"
        v-else-if="typeInfo.value == 'scenicspot'"
      >
        <v-container id="section03_2" class="mb-8">
          <div class="mb-4 title d-flex align-center">
            <div class="icon mr-2"></div>
            <div class="text-h6 text-bold">景點 - {{ itemsFindValue(cityInfo.items, cityInfo.value).text }}</div>
          </div>
          <div>
            <div class="row items">
              <div
                v-for="item in data.scenicspot.slice(
                  (scenicspot.pageIndex - 1) * scenicspot.pageItemMax,
                  (scenicspot.pageIndex - 1) * scenicspot.pageItemMax + scenicspot.pageItemMax
                )"
                class="col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"
                :key="item.ID"
              >
                <Card02 :item="item"></Card02>
              </div>
            </div>
            <div class="mt-8" v-if="scenicspot.pageTotal">
              <v-pagination
                v-model="scenicspot.pageIndex"
                :length="scenicspot.pageTotal"
                :total-visible="7"
              ></v-pagination>
            </div>
          </div>
        </v-container>
      </v-sheet>
    </v-main>
    <Footer></Footer>
    <ActivityDialog ref="activityDialog" @display="activityDialog_display"></ActivityDialog>
  </v-sheet>
</template>
<script>
import Header from "@vue/pages/components/Header";
import Footer from "@vue/pages/components/Footer";
import ActivityDialog from "@vue/pages/components/ActivityDialog";
import Card01 from "@vue/pages/components/Card01";
import Card02 from "@vue/pages/components/Card02";
import cityList from "@src/res/cityList";
import placeholder from "@img/placeholder.jpg";
import mixins_funs from "@vue/mixins/funs";

export default {
  mixins: [mixins_funs],
  components: { Header, Footer, ActivityDialog, Card01, Card02 },
  data() {
    return {
      temp_search: "",
      search: "",
      typeInfo: {
        value: "",
        items: [
          { text: "全部", value: "" },
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
      bgBlur: false,
      activity: {
        pageItemMax: 10,
        pageIndex: 1,
        pageTotal: 1,
      },
      scenicspot: {
        pageItemMax: 20,
        pageIndex: 1,
        pageTotal: 1,
      },
    };
  },
  watch: {},
  mounted() {
    this.updateData();
  },
  methods: {
    updateData() {
      const authorizationHeader = this.getAuthorizationHeader();
      //console.log(authorizationHeader);
      let city = this.cityInfo.value;
      let type = this.typeInfo.value;
      let search = this.search;
      if (city != "") {
        city = "/" + city;
      }

      if (type == "" || type == "activity") {
        const parameter = { orderby: "StartTime desc", format: "JSON" };
        if (type == "") {
          parameter["top"] = 10;
        }
        if (search != "") {
          parameter[
            "filter"
          ] = `contains(Name,'${search}') or contains(Organizer,'${search}') or contains(Address,'${search}')`;
        }
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity${city}?${this.parameterToStr(parameter)}`, {
          headers: { ...authorizationHeader },
        })
          .then((response) => response.json())
          .then((jsonData) => {
            this.data.activity = jsonData;
            //console.log(jsonData);
            if (this.typeInfo.value != "") {
              this.activity.pageIndex = 1;
              this.activity.pageTotal = Math.ceil(this.data.activity.length / this.activity.pageItemMax);
            }
          });
      }
      if (type == "" || type == "scenicspot") {
        const parameter = { orderby: "SrcUpdateTime asc", format: "JSON" };
        if (type == "") {
          parameter["top"] = 10;
        }
        if (search != "") {
          parameter[
            "filter"
          ] = `contains(Keyword,'${search}') or contains(Name,'${search}') or contains(Address,'${search}')`;
        }
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot${city}?${this.parameterToStr(parameter)}`, {
          headers: { ...authorizationHeader },
        })
          .then((response) => response.json())
          .then((jsonData) => {
            this.data.scenicspot = jsonData;
            //console.log(jsonData);
            if (this.typeInfo.value != "") {
              this.scenicspot.pageIndex = 1;
              this.scenicspot.pageTotal = Math.ceil(this.data.scenicspot.length / this.scenicspot.pageItemMax);
            }
          });
      }
      // fetch(
      //   `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?$filter=City%20eq%20'NewTaipei'&$top=30&$format=JSON`,
      //   { headers: { ...authorizationHeader } }
      // )
      //   .then((response) => response.json())
      //   .then((jsonData) => {
      //     console.log(jsonData);
      //   });
    },
    details_dialog(item) {
      this.$refs.activityDialog.open({ pics: this.getPicture(item.Picture), ...item });
    },
    search_change() {
      this.search = this.temp_search;
      //console.log(this.search);
      this.updateData();
    },
    search_click() {
      this.search = this.temp_search;
      //console.log(this.search);
      this.updateData();
    },
    coordinate_click() {
      alert("尚未開放功能");
    },
    typeInfo_change(val) {
      //console.log(val);
      if (this.typeInfo.value == "") {
        this.cityInfo.value = "";
      }
      this.updateData();
    },
    cityInfo_change(val) {
      //console.log(val);
      this.updateData();
    },
    activityDialog_display(val) {
      this.bgBlur = val;
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

.section#section02 {
  background-color: #e5e5e5;
  #card_shadow01 {
    background-image: url(~@img/attractions/card_shadow01.png);
    background-position: center;
    background-size: 100% 100%;
    height: 40px;
  }
  .text_search {
    color: #ff1d6c;
  }
}
.section#section03 {
  background-color: #e5e5e5;
  #section03_1 {
    .title {
      .icon {
        background-image: url(~@img/triangle_icon.png);
        background-position: center;
        background-size: contain;
        width: 20px;
        height: 20px;
      }
    }
  }
  #section03_2 {
    .title {
      .icon {
        background-image: url(~@img/square_icon.png);
        background-position: center;
        background-size: contain;
        width: 20px;
        height: 20px;
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
