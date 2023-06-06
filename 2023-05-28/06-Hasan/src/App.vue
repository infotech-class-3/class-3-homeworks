<template>
  <div>{{ name }} {{ surname }} - {{ age }}</div>
  <br>
  <div>{{ user.username }} </div>
  <br>
  <div>{{ fullName }} </div>
  <br>
  <div>
    <button v-on:click="arttir">Arttır</button>
    <button @click="azalt">Azalt</button> 
  </div>
  <div>{{ counter }} </div>
  <br>
  <div><input type="button" v-bind:value="inputValue"/> </div>
  <br>
  <div><input type="button" :value="inputValue"/> </div>
  <div v-if="isMarried">Mutluluklar!</div>
  <div v-else>En güzel zamanlar!</div>

  <div>
    <ul>
      <li v-for="(item, index) in courses" v-bind:key="index">{{ item }}</li>

      
    </ul>
  </div>
  <div>
    Kullanıcı Adı <br/>
    <input  type="text" v-model="user.username"/> <br/>
   Sifre <br/>
    <input  type="text" v-model="user.password"/> <br/>
    Sifre Tekrar <br/>
    <input  type="text" v-model="user.confirmPassword"/> <br/>    
<div class="liste" v-if="user.password!==user.confirmPassword">
  Sifreler uyumsuz
  </div>
  <div>
    <button :disabled="user.username && user.password !== user.confirmPassword">Gönder</button>
  </div>
  <h2>InfotechAcademy GPT</h2>
  <div>
    <input type="text" v-model="soru"/>
    <div>{{ cevap }}</div>
  </div>
  </div>
</template>




<script>
export default{
  data(){
    return{
      name: 'Mahmut',
      surname: 'Yilmaz',
      age: 41,
      courses: ["vue", "nodejs", "html"],
      user: {
        username: "mahmut123",
        password: "1234",
        confirmPassword:""
      },
      counter: 0,
      inputValue: "click me",
      isMarried: true,   
      soru: "",
      cevap: "",
    };
  },
  computed: {
    fullName(){

      return `${this.name} ${this.surname} -- ${this.age}`;
    },
  },
  methods: {
   arttir(){ 
    this.counter=this.counter+1;
  },
  azalt(){
    this.counter--;
  }
  },
  watch: {
    soru(yeniDeger, eskiDeger){
      if (yeniDeger.indexOf("?")>-1){
        this.cevap = "Sorunuzu aldım, değerlendiriyorum...";
        return;
      }
      this.cevap = yeniDeger =="" ? "" : "Dinliyorum buyrun..";
   
   console.log(eskiDeger);
    },
  },
};
</script>


<style>
.liste{
  background-color: antiquewhite;
}
</style>