<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutUser v-for="user in users" :user-data="user" :key="user.id" />
  </div>
</template>

<script>
import AboutUser from "../components/AboutUsers.vue";

export default {
  name: "AboutView",

  components: {
    AboutUser,
  },

  data: () => ({
    users: [
      { id: 1, name: "Osman", age: "21", complited: true },
      { id: 2, name: "Ayse", age: "30", complited: false },
      { id: 3, name: "Ahmet", age: "18", complited: true },
      { id: 4, name: "Zeynep", age: "40", complited: false },
    ],
  }),
};
</script>


