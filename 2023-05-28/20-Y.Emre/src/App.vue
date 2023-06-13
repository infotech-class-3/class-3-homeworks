<template>
  <div>
    <div>{{ name }} {{ surname }} - {{ age }}</div>
    <br />
    <div>{{ fullName }}</div>
    <br />
    <div>
      <button v-on:click="arttır">Arttır</button>
      <button @click="azalt">Azalt</button>
    </div>
    <div>{{ counter }}</div>
    <br />
    <div><input type="button" v-bind:value="inputValue"></div>
    <div><input type="button" :value="inputValue"></div>
  

   <div v-if="isMarried">Mutluluklar</div>
   <div v-else="isMarried">En güzel zamanlar...</div>

   <div>
    <ul>
      <li v-for="item in courses" v-bind:key="item"> {{ item }} </li>
      <!-- yapılan liste işlemlerinde her bir elemana key atanması gerekir!!! -->
    </ul>
   </div>

   <div>
    Kullanıcı Adı: <br />
    <input id="username" type="text" v-model="user.username"> <br />
    Kullanıcı Şifresi: <br />
    <input id="password" type="text" v-model="user.password"> <br />
    Kullanıcı Şifresi Tekrarı: <br />
    <input id="password2" type="text" v-model="user.confirmpassword">
   </div>
   <div class="liste" v-if="user.password !== user.confirmpassword">Şifreler uyumsuz</div>

   <div><button :disabled="user.username && user.password !== user.confirmpassword">Gönder</button></div>

   <h2>InfotechAcademy GPT</h2>
   <div>
    <input type="text" v-model="soru">
    <div> {{ cevap }} </div>
   </div>
</div>
  
</template>

<script>
export default{
  data () {
    return{
      name: "mahmut", 
      surname: "yılmaz",
      age: 41,
      courses: ["vue", "nodejs", "html"],
      user: {
        username: "",
        password: "",
        confirmpassword:"",
      },
      counter: 0 ,
      inputValue: "click me", 
      inputValue: "click me",
      isMarried: false,
      soru: "",
      cevap:"",

    };
  },
  computed: {
    fullName() {      
      return `${this.name} ${this.surname} - ${this.age}`;
    },
  },
  methods: {
    arttır() {
      this.counter++
    },
    azalt() {
      this.counter--
    },
  },
  watch: {
    soru(yeniDeger, eskiDeger){
      if (yeniDeger.indexOf("?") > -1) {
        this.cevap = "sorunuzu aldım, değerlendiriyorum..."
        return;
      }
      this.cevap = yeniDeger == "" ? "" : "Dinliyorum buyrun..."
      
      console.log("yenideger", yeniDeger);
      console.log("eskideger", eskiDeger);
    }
  }
}
</script>

<style>

</style> 