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
$texts: text-h1, text-h2, text-h3, text-h4, text-h5, text-h6, text-subtitle-1, text-subtitle-2, text-body-1, text-body-2,
  text-button, text-caption, text-overline;
@each $text in $texts {
  .bold {
    &.#{$text} {
      font-weight: bold;
    }
  }
}
$breakpoints: "", "sm", "md", "lg", "xl";
$flexs: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "auto", "none";
@each $breakpoint in $breakpoints {
  @media (min-width: get-breakpoints($breakpoint)) {
    $center: "";
    @if $breakpoint!= "" {
      $center: -#{$breakpoint};
    }
    .v-application .text#{$center}-bold {
      font-weight: bold;
    }
    @for $i from 1 through 10 {
      .col#{$center}-n#{$i} {
        flex: 0 0 #{100% / $i};
        max-width: #{100% / $i};
        width: 100%;
        padding: 12px;
      }
    }
    @for $i from 0 through 40 {
      .w#{$center}-#{$i * 5} {
        width: #{$i * 5%};
      }
      .vw#{$center}-#{$i * 5} {
        width: #{$i * 5vw};
      }
      .h#{$center}-#{$i * 5} {
        height: #{$i * 5%};
      }
      .vh#{$center}-#{$i * 5} {
        height: #{$i * 5vh};
      }
      .min-vw#{$center}-#{$i * 5} {
        min-width: #{$i * 5vh};
      }
      .min-vh#{$center}-#{$i * 5} {
        min-height: #{$i * 5vh};
      }
      .max-vw#{$center}-#{$i * 5} {
        max-width: #{$i * 5vh};
      }
      .max-vh#{$center}-#{$i * 5} {
        max-height: #{$i * 5vh};
      }
      .barLine#{$center}-#{$i * 5} {
        height: #{$i * 5px};
        &.inlayTop {
          margin-top: #{-$i * 5px};
        }
        &.inlayBottom {
          margin-bottom: #{-$i * 5px};
        }
      }
    }
    @for $i from 0 through 200 {
      .min-w#{$center}-#{$i * 10} {
        min-width: #{$i * 10px};
      }
      .min-h#{$center}-#{$i * 10} {
        min-height: #{$i * 10px};
      }
      .max-w#{$center}-#{$i * 10} {
        max-width: #{$i * 10px};
      }
      .max-h#{$center}-#{$i * 10} {
        max-height: #{$i * 10px};
      }
      .pw#{$center}-#{$i * 10} {
        width: #{$i * 10px};
      }
      .ph#{$center}-#{$i * 10} {
        height: #{$i * 10px};
      }
    }
    @each $flex in $flexs {
      .flex#{$center}-#{$flex} {
        flex: #{$flex};
      }
    }
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
@media (min-width: get-breakpoints("sm")) {
}
@media (min-width: get-breakpoints("md")) {
}
@media (min-width: get-breakpoints("lg")) {
}
@media (min-width: get-breakpoints("xl")) {
}
</style>
