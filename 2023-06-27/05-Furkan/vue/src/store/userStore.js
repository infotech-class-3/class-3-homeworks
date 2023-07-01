import axios from "axios";
import router from "../router/index";

export default {
  namespaced: true,
  state: {
    loggedInUser: {},
  },
  getters: {
    getUser(state) {
      return state.loggedInUser;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.loggedInUser = payload;
    },
  },
  actions: {
    async login({ commit }, userData) {
      console.log("store userlogin = ", userData);
      try {
        const response = await axios.post(
          "http://localhost:4000/users/login",
          userData
        );

        window.localStorage.setItem("token", response.data.token);

        commit("setUser", response.data);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async register({ commit }, userRegister) {
      try {
        await axios.post("http://localhost:4000/users/register", userRegister);
        commit("setUser", {});
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    async checkMe({ commit }) {
      const token = window.localStorage.getItem("token");

      if (!token) {
        commit("setUser", {});
        return;
      }

      const response = await axios.get("http://localhost:4000/users/check/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      //window.localStorage.setItem("token", response.data.token);
      commit("setUser", response.data);
      router.push("/");
      console.log(response);
    },

    logout({ commit }) {
      commit("setUser", {}); // store daki state i bosaltiyoruz
      router.push("/login"); //login sayfasina yonlenmesini sagladik.
      window.localStorage.removeItem("token"); // localStorage daki veriyi kaldirdik.
    },
  },
};
