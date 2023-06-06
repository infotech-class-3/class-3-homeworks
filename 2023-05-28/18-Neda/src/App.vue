<template>
  <div>
    <!-- <div>{{ name }} {{ surname }} - {{ age }}</div>
    <br />
    <div>{{ fullName }}</div>
    <br />
    <div>
      <button v-on:click="arttir">Arttir</button>
      <button @click="azalt">Azalt</button>
    </div>
    <div>{{ counter }}</div>
    <br />
    <div><input type="button" v-bind:value="inputValue" /></div>
    <div><input type="button" :value="inputValue" /></div> -->

    <!-- <div v-if="isMarried">Mutluluklar!!!</div>
    <div v-else>En güzel zamanlar...</div> -->

    <!-- <div class="liste">
      <ul>
        <li v-for="(item, index) in courses" v-bind:key="index">{{ item }}</li>
      </ul>
    </div> -->

    <!-- <div>
      Kullanici adi <br />
      <input type="text" v-model="user.username" /> <br />
      Sifre <br />
      <input type="password" v-model="user.password" /><br />
      Sifre Tekrar <br />
      <input type="text" v-model="user.confirmPasword" />

      <div class="liste" v-if="user.password !== user.confirmPasword">
        Sifreler uyumsuz
      </div>
      <div>
        <button :disabled="user.password !== user.confirmPasword">
          Gönder
        </button>
      </div>
    </div>

    <div>{{ user.username }}</div> -->

    <!-- <div :class="isMarried ? 'liste' : ''">{{ name }}</div> -->

    <h2>InfotechAcademy GPT</h2>
    <div>
      <input type="text" v-model="soru" />
      <div>{{ cevap }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Mahmut",
      surname: "Yilmaz",
      age: 72,
      courses: ["vue", "nodejs", "html", "vue"],
      user: {
        username: "",
        password: "",
        confirmPasword: "",
      },
      counter: 0,
      inputValue: "click me",
      isMarried: true,
      soru: "",
      cevap: "",
    };
  },
  computed: {
    fullName() {
      return `${this.name} ${this.surname} -- ${this.age}`;
    },
  },
  methods: {
    arttir() {
      this.counter = this.counter + 1;
    },
    azalt() {
      this.counter--;
    },
  },
  watch: {
    soru(yeniDeger, eskiDeger) {
      if (yeniDeger.indexOf("?") > -1) {
        this.cevap = "Sorunuzu aldim, degerlendiriyorum...";
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
