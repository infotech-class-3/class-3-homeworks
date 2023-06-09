<template>
  <div>
    <h1>BURASI USERS SAYFASIDIR...</h1>

    <UserCard
      v-for="user in users"
      :key="user.id"
      class="mb-5"
      :user-data="user"
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
    return {
      users: [
        { id: 1, name: "Osman", age: "21", complited: true },
        { id: 2, name: "Ayse", age: "30", complited: false },
        { id: 3, name: "Ahmet", age: "18", complited: true },
        { id: 4, name: "Zeynep", age: "40", complited: false },
      ],
    };
  },
};
</script>