import Vue from 'vue';

import App from './App.vue';

import router from './router';
import store from './store/store';
import './registerServiceWorker';


Vue.config.productionTip = false;
// Progress bar import into global app component.

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
