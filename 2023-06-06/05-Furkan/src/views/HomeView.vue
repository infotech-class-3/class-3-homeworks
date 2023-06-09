<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>HOME SAYFAS</h1>
    <v-btn v-on:click="onClick('/users')" class="mr-5">Kullanicilar</v-btn>
    <v-btn v-on:click="onClick('/about')">Hakkimizda</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  methods: {
    onClick(path) {
      this.$router.push(path);
    },
  },
};
</script>
