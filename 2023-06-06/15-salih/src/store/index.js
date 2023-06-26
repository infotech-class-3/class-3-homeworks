import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      users: [
        { id: 1, adi: "Osman", yasi: 24, isActive: true },
        { id: 2, adi: "Mahmut", yasi: 21, isActive: true },
        { id: 3, adi: "Sanem", yasi: 21, isActive: true },
      ],
      selectedUser: "",
    };
  },
  mutations: {
    setSelectedUser(state, payload) {
      state.secilenKullanici = payload;
    },
  },

  getters: {
    getUsers(state) {
      return state.users;
    },
    getSelectedUser(state) {
      return state.secilenKullanici;
    },
  },

  action: {},
});
