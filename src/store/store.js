import Vue from 'vue';
import Vuex from 'vuex';
import MouseElement from './modules/mouseElement';
import Users from './modules/users';
import Tables from './modules/tables';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MouseElement,
    Users,
    Tables,
  },
});
