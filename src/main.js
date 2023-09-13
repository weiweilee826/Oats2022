import { createApp } from "vue";
import App from "./App.vue";
import router from "./js/index.js";
import { createStore } from "vuex";
// import Vuex from "vuex";
// import store from "./store";

import "bootstrap/dist/css/bootstrap.css";

// icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSpinner,
  faTrash,
  faCartShopping,
  faUser,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faSpinner,
  faTrash,
  faCartShopping,
  faUser,
  faChevronRight,
  faChevronLeft
);

import axios from "axios";
import VueAxios from "vue-axios";

//驗證
import { defineRule } from "vee-validate";
import { required, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);

import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const store = createStore({
  state() {
    return {
      adminAccess: false,
      cartNum: 0,
      customerInfo: {},
      carts: [],
    };
  },
});

const app = createApp(App);
app
  .use(router)
  // .use(BootstrapVue3)
  .use(VueAxios, axios)
  .use(store)
  .use(LoadingPlugin)
  //.provide("axios", app.config.globalProperties.axios)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

//filter
app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return "$" + value.toLocaleString("en-US");
  },
  timestampToDate(t) {
    return new Date(t).toLocaleDateString("fr-ca");
  },
};

//標題名稱
document.title = "Oats";

// vue router
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const url = `${process.env.VUE_APP_API}/api/user/check`;
    axios.post(url).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/products",
        });
      }
    });
  } else {
    next();
  }
});
