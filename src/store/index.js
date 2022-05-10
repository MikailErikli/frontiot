import { createStore } from "vuex";

export default createStore({
  state: { mode: null, objet: null },
  getters: {
    mode(state) {
      return state.mode;
    },
    objet(state) {
      return state.objet;
    },
  },
  mutations: {
    setMode(state, mode) {
      state.mode = mode;
    },
    setObjets(state, objet) {
      state.objet = objet;
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

    getobjets({ commit }) {
      if (this.state.objet === null) {
        window.api
          .get("/objet")
          .then((response) => {
            commit("setObjets", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  modules: {},
});
