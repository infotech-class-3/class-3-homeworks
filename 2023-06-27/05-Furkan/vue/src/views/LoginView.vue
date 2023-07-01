<template>
  <div>
    <LoginForm />
    <div>
      <v-btn
        class="text-none mt-1"
        color="#5865f2"
        min-width="92"
        rounded
        variant="plain"
        @click="handleRegister"
      >
        Create Register

        <v-icon color="#5865f2">mdi-account</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  data() {
    return {};
  },

  components: {
    LoginForm,
  },

  methods: {
    handleRegister() {
      this.$router.push("/register");
    },
  },
};
</script>