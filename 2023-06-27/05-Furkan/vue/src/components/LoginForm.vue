<template>
  <v-sheet width="300" class="mx-auto mt-12">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        density="compact"
        v-model="userData.username"
        label="First name"
      ></v-text-field>

      <v-text-field
        density="compact"
        v-model="userData.password"
        label="Last name"
        type="password"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2" @click="handleLogin"
        >Log in</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        username: "Zeynep",
        password: "1234",
      },
    };
  },
  methods: {
    handleLogin() {
      console.log("lofin form user = ", this.userData);
      return this.$store.dispatch("userStore/login", this.userData);
    },
  },
};
</script>

<style></style>