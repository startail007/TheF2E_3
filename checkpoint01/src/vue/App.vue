<template>
  <v-app class="app" v-cloak>
    <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900";
@import "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css";
@import "~@css/_variables.scss";
@import "~@css/_expansion.scss";
html {
  overflow: auto;
}
body {
  margin: 0;
}
.app {
  width: 100%;
  & > .v-application--wrap {
    width: 100%;
  }
}
.content {
  min-height: 100vh;
}
.main {
  position: relative;
  width: 100%;
  & > .v-main__wrap {
    width: 100%;
  }
}
.section {
  position: relative;
  overflow: hidden;
}
.bold {
  font-weight: bold;
}
.anchor {
  position: relative;
  display: block;
  height: 1px;
}
.barLine {
  position: relative;
  display: block;
  width: 100%;
}
// ::-webkit-scrollbar {
//   width: 14px;
//   height: 14px;
// }
// ::-webkit-scrollbar-track {
//   background-color: #dbdbdb;
// }
// ::-webkit-scrollbar-thumb {
//   border-radius: 4px;
//   border: 0.05em solid rgba(255, 255, 255, 0.5);
//   background-color: #0c455c;
//   &:hover,
//   &:active {
//     background-color: #216c8a;
//   }
// }
// ::-webkit-scrollbar-corner {
//   background-color: #e6e6e6;
// }
// ::-webkit-scrollbar-button:single-button {
//   height: 14px;
//   background-position: center;
//   background-size: 60%;
//   background-repeat: no-repeat;
//   background-color: #b6b6b6;
//   &:hover,
//   &:active {
//     background-color: #d3d3d3;
//   }
// }
// ::-webkit-scrollbar-button:single-button:vertical:decrement {
//   background-image: url(~@img/arrow-up.svg);
// }
// ::-webkit-scrollbar-button:single-button:vertical:increment {
//   background-image: url(~@img/arrow-down.svg);
// }

.titleBar {
  //background-color: #54a6c5;
  background-image: url(~@img/titleBar.svg);
  background-position: center;
  background-size: auto 100%;
  background-repeat: repeat-x;
  height: 120px;
  .word {
    color: #749aa9;
    margin-top: 10px;
    font-size: 1.5rem;
    letter-spacing: 0.2em;
    text-indent: 0.2em;
  }
}

// .v-main {
//   .v-main__wrap {
//     min-height: 100%;
//     display: flex;
//     flex-direction: column;
//   }
// }
.v-menu__content {
  margin-top: 38px;
}
.theme--light {
  &.v-pagination {
    .v-pagination__navigation {
      background-color: #ff1d6c;
      .v-icon {
        color: #fff;
      }
      &.v-pagination__navigation--disabled {
        background-color: #0d0b0c;
      }
    }
    .v-pagination__item {
      background-color: transparent !important;
      box-shadow: none;
      font-weight: bold;
      &.v-pagination__item--active {
        color: #ff1d6c;
      }
    }
  }
  &.v-btn.v-btn--has-bg.btn_pn {
    background-color: #0d0b0c;
    color: #fff;
    min-width: 40px;
    padding: 0;
    &.v-btn--disabled {
      background-color: #ffffff !important;
      color: #000 !important;
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
  }
}
.bgBlur {
  filter: blur(10px);
  overflow: hidden;
}
.pic {
  background-position: center;
  background-size: cover;
}
/*
::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}
::-webkit-scrollbar-track {
  background-color: #dbdbdb;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  border: 0.05em solid rgba(255, 255, 255, 0.5);
  background-color: #a7a7a7;
  &:hover,
  &:active {
    background-color: #dbd8d9;
  }
}
::-webkit-scrollbar-corner {
  background-color: #e6e6e6;
}
::-webkit-scrollbar-button:single-button {
  height: 14px;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  background-color: #a7a7a7;
  &:hover,
  &:active {
    background-color: #dbd8d9;
  }
}
::-webkit-scrollbar-button:single-button:vertical:decrement {
  background-image: url(~@img/arrow-up.svg);
}
::-webkit-scrollbar-button:single-button:vertical:increment {
  background-image: url(~@img/arrow-down.svg);
}
.v-dialog {
  border-radius: 0;
}
.v-sheet.v-card {
  border-radius: 0;
  .pic {
    border-radius: 0;
  }
}
*/
@media (min-width: get-breakpoints("sm")) {
}
@media (min-width: get-breakpoints("md")) {
}
@media (min-width: get-breakpoints("lg")) {
}
@media (min-width: get-breakpoints("xl")) {
}
</style>
