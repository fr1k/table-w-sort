import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comments: [],
  },
  mutations: {
    SET_USER_TO_VUEX: (state, comments) => {
      state.comments = comments;
    },
  },
  actions: {
    GET_USER_FROM_API({ commit }) {
      return axios
        .get('http://jsonplaceholder.typicode.com/comments')
        .then((response) => {
          commit('SET_USER_TO_VUEX', response.data);
        });
    },
  },
  getters: {
    USERS(state) {
      return state.comments;
    },
  },
});
