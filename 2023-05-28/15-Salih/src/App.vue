<template>
  <div>
  <div>{{ name }}-{{ id }}</div>
  <div>{{ user.userName }}-{{ user.userSoyad }}</div>
  <div>{{ kullanicilar[0] }}</div>
  <div>{{ fullName }}</div>
  <div>{{ counter }}</div>
  <button v-on:click="arttir">ARTTIR</button>
  <button v-on:click="azalt">AZALT</button>
  <input type="button" v-bind:value="inputValue"/>
  <div v-if="true">asasasas</div>
  <div v-if="isMarried">mutluluklar dileriz</div>
  <ul>
    <li v-for="kullanici in kullanicilar" :key="kullanici">{{ kullanici }}
    </li>
  </ul>
  <ul>
    <li v-for="(kullanici,index) in kullanicilar" :key="index">{{ kullanici }}
    </li>
  </ul>
  <div>
  kullaniciAdi <br/>
  <input type="text" v-model="loginci.loginAdi"/> <br/>
  kullanici pasword'u <br/>
  <input type="text" v-model="loginci.loginPassword"/> <br/>
  onaylama pasword'u <br/>
  <input type="text" v-model="loginci.confirmPassword"/> <br/>
  <div v-if="loginci.loginPassword !== loginci.confirmPassword">sifrele uyusmuyor</div></div>
  <div><button :disabled="!loginci.loginAdi || loginci.loginPassword !== loginci.confirmPassword">gonder</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Salih",
      id: 111,
      kullanicilar:[
        "Ahmet",
        "Mehmet",
        "Veli",
        "Ismail"
      ],
      user:{
        userName:'Ali',
        userSoyad:'Baskan'
      },
      counter:0,
      inputValue:"click me",
      isMarried:true,
      loginci:{
        loginAdi:'',
        loginPassword:"",
        confirmPassword:""
      }

    };
  },
  computed:{
    fullName(){
      return`${this.name}-${this.id}`
    }
  },
  methods:{
    arttir(){
      this.counter++;
      // console.log("butona basildi");
    },
    azalt(){
      this.counter--;
    }
  },
};
</script>

<style></style>
