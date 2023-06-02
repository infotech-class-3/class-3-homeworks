<template>
  <div>
    <h1>{{ fullName }}</h1>
    <ul>
      <li v-for="(item,index) in mesages" v-bind:key="index">{{ item }}</li>
    </ul>
    <a v-if="bayram">iyi bayramlar</a>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <input type="button" v-bind:value="inputValue" @click="konsolaYaz(inputValue)">
      <input type="button" v-bind:value="msg" @click="konsolaYaz(msg)">
      <input type="text" v-model="title"> 
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return{
      msg: "Bu proje vue ile ilk deneyimdir1",
      mesages: [
        "mesage1","mesage2","mesage3"
      ],
      bayram:false,
      inputValue:"tikla buna",
      title:'baslik'
    }
  },
  methods:{
    konsolaYaz(btn){
      console.log(btn);
      this.title= btn
    }
  },
  computed:{
    fullName(){
      return `${this.title}-selam`
    }
  },
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
