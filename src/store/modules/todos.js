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
};

const mutations = {
  SET_ALL_TODOS(state, todos) {
    state.all = todos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
