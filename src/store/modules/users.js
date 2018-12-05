const state = {
  all: [],
  tableColumns: ['id', 'name', 'email', 'phone', 'zipcode'],
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
        // Start the data map based on response from API to meet our needs
        const condensedUserData = data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          zipcode: user.address.zipcode,
        }));
        commit('SET_ALL_USERS', condensedUserData);
        // Pass through error from rejected promise
      }).catch(error => console.error(error));
  },
};
const mutations = {
  // Mutation that sets the data from the API to the state object property
  SET_ALL_USERS(state, users) {
    // Mapped only the columns needed for the example
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
