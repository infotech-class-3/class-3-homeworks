<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" /> <br />
    <h1>Kullanicilar sayfasi</h1>
    <h3>Selected User : {{ selectedUser }}</h3>
    <UserCard
      v-for="user in users"
      :key="user.id"
      :userData="user"
      :isActive="user.isActive"
      @butona-basma-eventi="changeUser"
    />
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";

export default {
  name: "UsersView",
  components: {
    UserCard,
  },

  methods: {
    changeUser(isim) {
      this.$store.commit('setSelectedUser', isim);
    },
  },
  computed:{
    users(){
      return this.$store.getters.getUsers;
    },
    selectedUser(){
      return this.$store.getters.getSelectedUser;
    }
  }
};
</script>
