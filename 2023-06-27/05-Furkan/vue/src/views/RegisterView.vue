<template>
  <div>
    <h1>REGISTER PAGE</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
export default {
    name:"RegisterView",
  components: {
    RegisterForm,
  },
};
</script>