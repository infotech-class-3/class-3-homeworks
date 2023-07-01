<template>
  <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
          <v-icon @click="handleToHome">mdi-home</v-icon>
          <v-app-bar-title class="ml-2">
            {{ userProp.name }}{{ userProp.surname }}
          </v-app-bar-title>
        </template>

        <template v-slot:append>
          <v-btn @click="handleLogout"><v-icon>mdi-logout</v-icon>CIKIS</v-btn>
        </template>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    userProp: {
      type: Object,
      required: true,
    },
  },

  methods: {
    handleLogout() {
      this.$store.dispatch("userStore/logout");
    },
    handleToHome() {
      this.$router.push("/");
    },
  },
};
</script>