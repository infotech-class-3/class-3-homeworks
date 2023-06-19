<template>
  <div class="home">
    
   <v-btn class="mr-5" @click="onClick('/users')">Kullanicilar</v-btn>
   <v-btn v-on:click="onClick('/about')">Hakkimizda</v-btn>
  </div>
</template>

<script>


export default {
  name: 'HomeView',

  methods:{
    onClick(path){
      this.$router.push(path)
    }

  }
}
</script>
