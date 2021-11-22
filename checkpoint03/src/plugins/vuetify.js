import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#078080",
      },
    },
  },
};

export default new Vuetify(opts);

/*import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = { theme: { dark: false } };

export default new Vuetify(opts);*/
