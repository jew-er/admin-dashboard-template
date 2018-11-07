import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Iconic from "./components/Iconic";

import "leaflet/dist/leaflet.css";

library.add(fas, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("Iconic", Iconic);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
