<template>
  <div>
    <div>{{ name }} {{ surName }}--{{ age }} </div>
    <div>{{ courses[0] }} </div>
    <div>{{ user.userName }} {{ user.userPassword }} </div>
    <div>{{ fullName }} </div>

    <!-- directives -->
      <!-- v-on -->
      <div>Directive ----  v-on veya @</div>
    <div>{{ counter }}</div>
    <button v-on:click="arttir">Arttir</button>
    <button @:click="azalt">Azalt</button><br/>

    

    <!-- v-bind attirubutes ekleme cikarma ve degiskliklerinde kullanilir.-->
    <div>Directive ----  v-bind veya :</div>
  <div><input type="button" value="buton"/></div>
  <div><input type="button" v-bind:value="inputValue"/></div>


    <!-- v-if -->
    <div v-if="false">AAAAAA</div>
    <div v-if="true">AAAAAA</div>

<!-- isMarrie:true oldugunda --- Mutluluklar!!! -->
<div v-if= "isMarried">Mutluluklar!!! </div> 
<!-- isMarrie:false oldugunda --- En güzel zamanlara... -->
<div v-else>En güzel zamanlara...</div> 

    <!-- v-for -->
    <div>
      <ul>
        <li v-for="course in courses" :key="course">
        {{ course }}
        </li>
      </ul>
    </div>
<!-- ayni sekilde key propertisine index atama ile yapma -->
    <div>
      <ul>
        <li v-for="(course, index) in courses" :key="index">
        {{ course }}
        </li>
      </ul>
    </div>

  <!-- v-model v-bind a göre daha güclü-->

  <div>
    Kullanici adi <br/>
    <input type="text" v-model="user.userName" /><br/>
    Kullanici sifresi <br/>
    <input type="text" v-model="user.userPassword"/><br/>
    onaylama sifresi <br/>
    <input type="text" v-model="user.confirmPassword" /><br/>
    <div class="liste" v-if="user.userPassword !== user.confirmPassword">sifreler uyumsuz</div>
<div><button :disabled="!user.userName || user.userPassword !== user.confirmPassword">Gönder</button></div>
  </div>


<!-- watch uygulamasi -->
  <div>
    <h2>INFOTECH GPT</h2>
      <input type="text" v-model="soru"/>
      <div>{{ cevap }}</div>
  </div>

  </div>
</template>

<script>
export default {
  data () {
   return {
    name:"mehmet",
    surName: "yilmaz",
    age: 55,
    courses: ["nodejs","css","js","vuejs"],
    user: {
      userName:"",
      userPassword:"",
      confirmPassword:""
    },
    counter: 0,
    inputValue: "Click me!",
    isMarried: false,
    soru:"",
    cevap:""
   } 
  },
  computed:{
      fullName () {
        return`${this.name} ${this.surName}----> ${this.age}`
      }
  },
  methods:{
    arttir(){
      this.counter++;
    },
    azalt(){
      this.counter--;
    }
  },
  watch:{
    soru (yeniDeger, eskiDeger){
      console.log("Yenideger", yeniDeger);
      console.log("Eskideger", eskiDeger);
            this.cevap = yeniDeger == ""?"" : "Dinliyorum, buyrun..."

      if(yeniDeger.indexOf("?")>-1) {
this.cevap = "Sorunuzu aldim, degerlendiriyorum..."
      }
    }
  }
}
</script>

<style>
.liste{background-color: blanchedalmond;}
</style>
