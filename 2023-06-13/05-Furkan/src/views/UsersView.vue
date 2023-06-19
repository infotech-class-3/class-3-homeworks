<template>
  <div>
    <h1>Kullanicilar Sayfasi</h1>
    <h3>Secilen Kullanici: {{ secilenKullanici }}</h3>
    <UserCard
      v-for="user in users"
      :key="user.id"
      :user-data="user"
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

  data() {
    return {};
  },
  methods: {
    changeUser(name) {
      this.$store.commit("setSelectedUser", name);
    },
  },

  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    secilenKullanici() {
      return this.$store.getters.getselectedUser;
    },
  },
};
</script>