const state = {
  all: [],
};

const getters = {
  allUsers: () => state.all,
};

const actions = {
  fetchUsers({ commit }) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        // Reject the promise on error from API
        return Promise.reject(Error(`Response Code ${response.status}`));
      }).then((data) => {
        // Start the data mutation based on response from API
        commit('SET_ALL_USERS', data);
        // Pass through error from rejected promise
      }).catch(error => console.error(error));
  },
};
const mutations = {
  // Mutation that sets the data from the API to the state object
  SET_ALL_USERS(state, users) {
    state.all = users;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
