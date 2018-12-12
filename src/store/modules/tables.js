const state = {
  all: ['users', 'photos', 'albums', 'comments', 'posts', 'todos'],
  activeTable: [],
  activeColumns: [],
};

const getters = {
  allTables: () => state.all,
  selectedTable: () => state.selected,
};

const actions = {
  selectedTableColumns({ commit }, columns) {
    commit('CHANGE_SELECTED_TABLE_COLUMNS', columns);
  },
  selectedTable({ commit }, table) {
    commit('CHANGE_SELECTED_TABLE', table);
  },
};


const mutations = {
  CHANGE_SELECTED_TABLE_COLUMNS(state, columns) {
    state.activeColumns = columns;
  },
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
