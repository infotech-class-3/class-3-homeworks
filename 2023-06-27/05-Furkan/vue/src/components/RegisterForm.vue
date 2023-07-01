<template>
  <v-sheet width="300" class="mx-auto mt-12">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        density="compact"
        label="Username"
        v-model="userRegister.username"
      ></v-text-field>

      <v-text-field
        label="Password"
        v-model="userRegister.password"
        density="compact"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-text-field
        density="compact"
        label="Name"
        v-model="userRegister.name"
      ></v-text-field>
      <v-text-field
        density="compact"
        label="Surname"
        v-model="userRegister.surname"
      ></v-text-field>

      <v-btn
        type="submit"
        block
        class="mt-2"
        color="green"
        @click="handleRegister"
        >Register</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      
      userRegister: {
        username: "",
        password: "",
        name: "",
        surname: "",
      },
    };
  },

  methods: {
    handleRegister() {
    //   console.log(this.userRegister);
    //   const user = {
    //     username: this.userRegister.username,
    //     password: this.userRegister.password,
    //     name: this.userRegister.name,
    //     surname: this.userRegister.surname,
    //   };

      console.log("Register = ", this.userRegister);

      return this.$store.dispatch("userStore/register", this.userRegister);
    },
  },
};
</script>