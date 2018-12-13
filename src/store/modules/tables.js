const state = {
  allTableNames: ['users', 'todos', 'photos', 'albums', 'comments', 'posts'],
  activeTable: {
    name: '',
    columnHeaders: [],
    data: [],
  },
};

const getters = {
  allTableNames: () => state.allTableNames,
  selectedTable: () => state.activeTable,
};

const actions = {
  selectedTable({ commit }, table) {
    commit('CHANGE_SELECTED_TABLE', table);
  },
  deleteTableRecord({ commit, dispatch }, id) {
    // TODO delete table record
    dispatch(`${state.activeTable.name}/deleteById`, id, { root: true });
  },
  /*
  addTableRecord({ commit }, entry) {
    // TODO add table record
  },
  */
  updateTableRecord({ commit }, entry) {
    // TODO update record
    console.log(entry);
  },
};


const mutations = {
  CHANGE_SELECTED_TABLE(state, table) {
    state.activeTable = table;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
