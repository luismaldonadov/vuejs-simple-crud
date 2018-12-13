import Vue from 'vue';
import Vuex from 'vuex';
import MouseElement from './modules/mouseElement';
import users from './modules/users';
import todos from './modules/todos';
import tables from './modules/tables';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MouseElement,
    users,
    todos,
    tables,
  },
});
