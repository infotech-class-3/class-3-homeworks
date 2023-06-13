<template>
  <div>
    <div class="home">home sayfasi</div>
    <v-btn v-on:click="onClick('/users')" class="mb-4">Kullanicilar</v-btn>
    <br />
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
