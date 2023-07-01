import axios from "axios";

export default {
  namespaced: true,

  state: {
    todos: [],
  },

  getters: {
    getTodos(state) {
      return state.todos;
    },
  },

  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
  },

  actions: {
    async fetchTodos({ commit, rootGetters }) {
      const userId = rootGetters["userStore/getUser"].id;
      try {
        const response = await axios.post(
          "http://localhost:4000/todos/findAll",
          { userId }
        );

        commit("setTodos", response.data);
      } catch (error) {
        console.log(console.error());
      }
    },
  },
};
