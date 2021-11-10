import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#ff1d6c",
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
