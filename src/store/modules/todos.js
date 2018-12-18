const state = {
  all: [],
  tableColumns: ['id', 'title', 'completed'],
};

const getters = {
  allTodos: () => state.all,
};

const actions = {
  fetchTodos({ commit, dispatch }) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(Error(`Response code ${response.status}`));
      }).then((data) => {
        dispatch('tables/finishLoadingTable', {}, { root: true });
        const condensedTodoData = data.map(todo => ({
          id: todo.id,
          title: todo.title,
          completed: todo.completed,
        }
        ));
        commit('SET_ALL_TODOS', condensedTodoData);
        dispatch('tables/selectedTable', {
          name: 'todos',
          columnHeaders: state.tableColumns,
          data: state.all,
        }, { root: true });
      }).catch(error => console.error(error));
  },
  deleteById({ commit }, id) {
    commit('DELETE_TODO_BY_ID', id);
  },
};

const mutations = {
  SET_ALL_TODOS(state, todos) {
    state.all = todos;
  },
  DELETE_TODO_BY_ID(state, id) {
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
