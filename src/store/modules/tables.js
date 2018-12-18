const state = {
  allTableNames: ['users', 'todos', 'comments'],
  activeTable: {
    name: '',
    columnHeaders: [],
    data: [],
  },
  isLoading: false,
};

const getters = {
  allTableNames: () => state.allTableNames,
  selectedTable: () => state.activeTable,
};

const actions = {
  startLoadingTable({ commit }) {
    commit('STARTED_LOADING');
  },
  finishLoadingTable({ commit }) {
    commit('FINISHED_LOADING');
  },
  selectedTable({ commit }, table) {
    commit('CHANGE_SELECTED_TABLE', table);
  },
  deleteTableRecord({ dispatch }, id) {
    // TODO delete table record
    dispatch(`${state.activeTable.name}/deleteById`, id, { root: true });
  },
  /*
  addTableRecord({ commit }, entry) {
    // TODO add table record
  },
  */
  updateTableRecord({ dispatch }, entry) {
    // TODO update record
    dispatch(`${state.activeTable.name}/updateEntry`, entry, { root: true });
  },
};


const mutations = {
  CHANGE_SELECTED_TABLE(state, table) {
    state.activeTable = table;
  },
  STARTED_LOADING(state) {
    state.isLoading = true;
  },
  FINISHED_LOADING(state) {
    state.isLoading = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
