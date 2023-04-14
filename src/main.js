import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
// import Vuex from "vuex";
// import store from "./store";

// import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  faCartShopping,
  faUser,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner, faTrash, faCartShopping, faUser, faChevronRight);

import axios from "axios";
import VueAxios from "vue-axios";

const store = createStore({
  state() {
    return {
      adminAccess: false,
    };
  },
});

const app = createApp(App);
app
  .use(router)
  // .use(BootstrapVue3)
  .use(VueAxios, axios)
  .use(store)
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
  console.log("to", to, "from", from);
  if (to.meta.requiresAuth) {
    const url = `${process.env.VUE_APP_API}/api/user/check`;
    axios.post(url).then((response) => {
      console.log("check", response);
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
