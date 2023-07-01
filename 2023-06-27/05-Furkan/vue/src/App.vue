<template>
  <div>
    <AppBar :userProp="user" v-if="user.id" />
    <router-view />
  </div>
</template>


<script>
import AppBar from "./components/AppBar.vue";
export default {
  name: "AppView",

  components: {
    AppBar,
  },

  data() {
    return {};
  },

  computed: {
    user() {
      //console.log('Home icerisindeki = ' , this.$store.getters.getUser);
      //return this.$store.getters.getUser; // Bu kod ile de gonderebilirsin

      const user = this.$store.getters["userStore/getUser"];
     // console.log("App icerisinde = ", user);
      return {
        name: user.name || "",
        surname: user.surname || "",
        id: user.id,
      };
    },
  },

  created() {
    const user = this.$store.getters["userStore/getUser"];
    if (!user.id) {
      this.$router.push("/login");
    }

    this.$store.dispatch("userStore/checkMe");
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>


