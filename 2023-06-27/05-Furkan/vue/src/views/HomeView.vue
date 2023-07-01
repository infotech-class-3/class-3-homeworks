<template>
  <div class="home">
    <h1 class="mt-16">Home Page</h1>

    <v-btn @click="onClick">Todo List</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  components: {},

  data() {
    return {};
  },

  methods: {
    onClick() {
      this.$router.push("/todo");
    },
  },
};
</script>
