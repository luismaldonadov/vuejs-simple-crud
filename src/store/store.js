import Vue from 'vue';
import Vuex from 'vuex';
import mouseElement from './modules/mouseElement';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mouseElement,
  },
});

/*
 state: {
  },
  mutations: {
  },
  actions: {
  },
*/
