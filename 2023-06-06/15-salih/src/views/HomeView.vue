<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" /> <br />
    <v-btn @:click="onClick('/users')" class="mb-4">Kullanicilar</v-btn> <br />
    <v-btn @:click="onClick('/about')">Hakkimizda</v-btn>
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
