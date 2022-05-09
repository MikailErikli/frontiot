import { createStore } from "vuex";

export default createStore({
  state: { mode: null },
  getters: {
    mode(state) {
      return state.mode;
    },
  },
  mutations: {
    setMode(state, mode) {
      state.mode = mode;
    },
  },

  actions: {
    getModes({ commit }) {
      if (this.state.mode === null) {
        window.api
          .get("/mode")
          .then((response) => {
            commit("setMode", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  modules: {},
});
