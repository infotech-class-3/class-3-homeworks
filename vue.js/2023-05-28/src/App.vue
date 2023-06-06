<template>
  <div>
    {{ name }} {{ surname }} - {{ age }}
    <br />
    <div>{{ fullName }}</div>
    <br />
    <div>
      <button v-on:click="arttir">Arttir</button>
      <!-- <button v-on:click="azalt">Azalt</button> -->
      <button @click="azalt">Azalt</button>
      <!-- v-on = @ -->
    </div>
    <div>{{ counter }}</div>
    <br />
    <div><input type="button" v-bind:value="inputValue" /></div>
    <div><input type="button" :value="inputValue" /></div>

    <div v-if="isMarried">Mutluluklar!!!</div>
    <div v-else>En guzel zamanlar...</div>

    <div class="liste">
      <ul>
        <li v-for="(item, index) in courses" v-bind:key="index">{{ item }}</li>
      </ul>
    </div>

    <!-- <div>
    Kullanici adi <br/>
    <input type="text" v-model="user.username" /> <br/>
    Sifre <br/>
    <input type="password" v-model="user.password" /> <br/>
    Sifre Tekrar <br/>
    <input type="text" v-model="user.confirmPasswod" /> <br/>
    <br/>
    <div class="liste" v-if="user.password!==user.confirmPasswod">
    Sifre Yanlis
    </div>
    <div>
      <button 
      :disabled="
      user.username && user.password !== user.confirmPasswod"
      >
      Send
      </button>
    </div>
  </div> -->

    <h2>InfoTechAcademy GPT</h2>
    <div>
      <input type="text" />
    </div>
    <div :class="isMaried ? 'liste' : ''">{{ name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Ercan",
      surname: "AYDIN",
      age: 39,
      courses: ["vue", "nodejs", "html", "vue"],
      user: {
        username: "",
        password: "",
        confirmPasswod: " ",
      },
      counter: 0,
      inputValue: "Click on me",
      isMarried: true,
      soru: "",
      cevap: "",
    };
  },
  computed: {
    fullname() {
      return `${this.name} ${this.surname} -- ${this.age}`;
    },
  },
  methods: {
    arttir() {
      this.counter++;
    },
    azalt() {
      this.counter--;
    },
  },
  watch: {
    soru(yeniDeger, eskiDeger) {
      if (yeniDeger.indexOf("?") > -1) {
        this.cevap = "Sorunuzu aldim, degerlendiriyorum";
        return;
      }
      this.cevap = yeniDeger == "" ? "" : "Dinliyorum buyrun...";

      console.log("Yenideger: ", yeniDeger);
      console.log("Eskideger: ", eskiDeger);
    },
  },
};
</script>

<style>
.liste {
  background-color: antiquewhite;
}
</style>


