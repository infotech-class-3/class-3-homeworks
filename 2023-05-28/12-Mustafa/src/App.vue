<template>
<!-- <div>
  <div>{{name}} {{ surname }} - {{ age }} </div>
<br />
<div>{{ fullName }}</div>
<br />
<div>
  
  <button v-on:click="arttir">arttir</button>
   <button @:click="azalt">azalt</button>
  
  </div>
<div>{{ counter }}</div>
<br>

<div><input type="button" v-bind:value="inputValue" /></div>
<div><input type="button" :value="inputValue" /></div>
</div> -->
<div>
<!-- <div v-if="isMarried">mutluluklar</div>
<div v-else>en güzel günler </div> -->

<!-- <div>
  <ul>
    <li v-for="(item, index) in courses" v-bind:key="index">{{ item }}</li>
  </ul>
</div> -->

<div>
  kullanıcı Adı <br>
  <input type="text" v-model="user.username"> <br/>
  şifre <br>
  <input type="text" v-model="user.password" > <br/>
  şifre tekrarı <br>
  <input type="text" v-model="user.confirmPasword" > <br/>
  <div class="liste" v-if="user.password !== user.confirmPasword">şifreler uyumsuz </div>
<div>
  <button :disabled="user.username && user.password !== user.confirmPasword">gönder</button>
</div>
</div>



<h2>infotechAcademy GPT</h2>
<div>
  <input type="text" v-model="soru">
 <div>{{ cevap }}</div>
</div>
</div>
</template>

<script>

export default {
  data() {
    return{
      name: "mustafa",
      surname: "yılmaz",
      age: 32,
      courses: ["vue","nodjs","html","veu"],
     user: {
      username: "",
      password: "",
      confirmPasword:"",
         },
         counter: 0,
         inputValue:"click me",
         isMarried: false,
         soru:"",
         cevap:"",

    };
  },


  computed: {
    fullName() {
      return `${this.name} ${this.surname} -- ${this.age}`;
    },
  },

  methods: {
    arttir() {
      this.counter++;
    },
  
 
    azalt() {
      this.counter = this.counter -1 ;
    },
  
  },

  watch:{
    soru(yeniDeger, eskiDeger){
      if(yeniDeger.indexOf('?')>-1){
        this.cevap = "sorunuzu aldım degerlendiriyorum";
        return;
      }
      this.cevap = yeniDeger =="" ? "" : "dinliyorum buyrun...";





      console.log("yenideger: ", yeniDeger);
      console.log("eskideger: ", eskiDeger);
    },
  },

};
</script>

<style>

</style>

