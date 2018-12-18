const state = {
  all: [],
  tableColumns: ['id', 'name', 'email', 'body'],
};

const getters = {
  allComments: () => state.all,
};

const actions = {
  fetchComments({ commit, dispatch }) {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(Error(`Response code ${response.status}`));
      }).then((data) => {
        dispatch('tables/finishLoadingTable', {}, { root: true });
        const condensedData = data.map(entry => ({
          id: entry.id,
          name: entry.name,
          email: entry.email,
          body: entry.body,
        }));
        commit('SET_ALL_COMMENTS', condensedData);
        dispatch('tables/selectedTable', {
          name: 'comments',
          columnHeaders: state.tableColumns,
          data: state.all,
        }, { root: true });
      }).catch(error => console.error(error));
  },
};

const mutations = {
  SET_ALL_COMMENTS(state, comments) {
    state.all = comments;
  },
  DELETE_COMMENT_BY_ID(state, id) {
    const matchIndex = state.all.findIndex(entry => entry.id === id);
    state.all.splice(matchIndex, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
