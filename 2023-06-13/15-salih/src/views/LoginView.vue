<template>
  <div row wrap align-center align-content-center justify-content-center>
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'HomeView',
  components: {
    LoginForm,
  },
}
</script>
