import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      users: [
        { id: 1, name: "Osman", age: "21", complited: true },
        { id: 2, name: "Ayse", age: "20", complited: false },
        { id: 3, name: "Fatma", age: "34", complited: true },
        { id: 4, name: "Fatih", age: "60", complited: false },
      ],
      secilenKullanici: "",
    };
  },
  mutations: {
    setSelectedUser(state, payload){
        state.secilenKullanici = payload
    },
    
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getselectedUser(state){
        return state.secilenKullanici
    }
  },
  action: {},
});
