const state = {
  activeElement: null,
  previousElement: null,
  finishedZoomAnimation: false,
};

const getters = {
  activeElement: () => state.activeElement,
  previousElement: () => state.leftElement,
};

const actions = {
  activeElement({ state, commit }, element) {
    if (element !== state.activeElement) {
      // When a new element gets passed, the old one goes to previous element.
      commit('PREVIOUS_ELEMENT');
      // Assign the active element
      commit('ACTIVE_ELEMENT', element);
    }
  },
};

const mutations = {
  // Mutation to set the active DOM element who has the mouse on
  ACTIVE_ELEMENT(state, element) {
    state.activeElement = element;
  },
  /* Mutation to set the DOM element who has just lost the mouse, in order
  to restore the element to its original state.
  */
  PREVIOUS_ELEMENT(state) {
    state.previousElement = state.activeElement;
    // Cancel animation of old element.
  },
  /*
    This function will get called when the animation finishes.
  */
  FINISHED_ZOOM_ANIMATION() {

  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
