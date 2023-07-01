import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootsrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { aliases, mdi } from "vuetify/iconsets/mdi";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");
