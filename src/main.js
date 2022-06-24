import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import 'animate.css';
var SocialSharing = require('vue-social-sharing');
import Particles from "particles.vue";

Vue.config.productionTip = false;

Vue.use(Argon);
Vue.use(SocialSharing);

Vue.use(Particles);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
