import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner, faTrash, faCartShopping);

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app
  .use(router)
  // .use(BootstrapVue3)
  .use(VueAxios, axios)
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
