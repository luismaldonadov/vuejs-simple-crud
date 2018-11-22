import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import DataVisualization from './views/DataVisualization.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/data-visualization',
      name: 'data-visualization',
      component: DataVisualization,
    },
  ],
});
