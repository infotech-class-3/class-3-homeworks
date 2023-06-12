<template>
  <div>
  <div class="home">  home sayfasi </div>
    <div><v-btn v-on:click="onClick('/users')" class="mb-4"> Kullanicilar </v-btn></div>
    <br/>
    <div><v-btn v-on:click="onClick('/about')"> Hakkimizda..... </v-btn></div>

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  methods: {
    onClick (path){
      this.$router.push(path);
    }
  }
}
</script>
