import Vue from 'vue';
import App from './App.vue';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* https://router.vuejs.org/ */
/* npm i vue-router */
import { router } from './router';

/* https://www.npmjs.com/package/vue-form */
/* npm i vue-form */
import './form';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');