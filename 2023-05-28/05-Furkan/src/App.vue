<template>
  <div>
    <div>Merhaba VUE Dunyasi!</div>
    <div class="container">{{ name }} {{ surname }} = {{ age }}</div>
    <div class="container">{{ fullname }}</div>
    <div class="container">{{ user.username }} {{ user.password }}</div>

    <div>
      <button v-on:click="arttir">Arttir</button>
      <button @click="azalt">Azalt</button>
    </div>
    <div>{{ counter }}</div>

    <div>
      <input type="button" v-bind:value="inputValue" />
      <input type="button" :value="inputValue" />
    </div>

    <div>---------------------------------------------------</div>
    <div v-if="isMarried">Mutluluklar!</div>
    <div v-else>En Guzel Zamanlar</div>
    <div>---------------------------------------------------</div>
    <div>
      <ul>
        <li v-for="item in courses" v-bind:key="item">{{ item }}</li>
      </ul>
    </div>
    <div>---------------------------------------------------</div>
    <div>
      Kullanici Adi:
      <input id="username" type="text" v-model="user.username" /><br />

      Sifre:
      <input type="password" v-model="user.password" /><br />

      Sifre Tekrar:
      <input type="password" v-model="user.confirmPassword" /><br />
      <div>
        <button @click="gonder">Gonder</button>
      </div>

      <div class="liste" v-show="user.sonuc === false">Sifreler Uyumsuz</div>
    </div>

    <div>---------------------------------------------------</div>

    <div :class="isMarried ? 'liste':'' " v-show="isMarried === true">{{ name }} arkadasimizda evlenmis arkadaslar...</div>
    <div :class="isMarried ? 'liste':'' " v-if="isMarried">{{ name }} arkadasimizda evlenmis arkadaslar...</div>
    <div :class="isMarried ? 'liste':'' " v-else>{{ name }} daha evlenememis....</div>
    <div>---------------------------------------------------</div>
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
      age: "39",
      courses: ["vue", "nodejs", "html"],
      user: {
        username: "Hasan",
        password: "",
        confirmPassword: "",
        sonuc: null,
      },
      counter: 0,
      inputValue: "Click Me",
      isMarried: false,
      soru:"",
      cevap:""
    };
  },

  computed: {
    fullname() {
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
    gonder() {
      if (this.user.password !== this.user.confirmPassword) {
        this.user.sonuc = false;
      } else {
        this.user.sonuc = true;
      }
    },
  },

  watch:{
    soru(yeniDeger, eskiDeger){
      this.cevap = yeniDeger == "" ? "":"Dinliyorum buyrun efenim..."
      if(yeniDeger.indexOf('?')>-1){
        this.cevap = "Sorunuzu aldim. Degerlendiriyorum."
      }
      console.log({yeniDeger});
      console.log({eskiDeger});
    }
  }
};
</script>



<style>
.container {
  color: red;
  background-color: #000;
  margin-bottom: 0.3rem;
  padding: 1rem;
}

ul {
  list-style: none;
}

li {
  color: blue;
}

.liste {
  background-color: blanchedalmond;
}
</style>

