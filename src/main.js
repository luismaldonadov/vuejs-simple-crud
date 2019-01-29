import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon.vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.component('v-icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
