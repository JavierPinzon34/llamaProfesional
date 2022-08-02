import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./global-components";
import "./utils";
import "./libs";
import Vuelidate from "vuelidate";

// Midone Theme
import "./assets/sass/app.scss";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
