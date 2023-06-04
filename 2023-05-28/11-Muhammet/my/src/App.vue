<template>
  <div>
    HELLO {{ name }} {{ surname }} - {{ age }}
    <br/>
    <div> {{ fullName }} </div>
    <br/>
    <div>
      <button v-on:click="arttır" >Arttır</button>
    <br/>
      <button @:click="azalt">Azalt</button>
    </div>
   
    <div> {{ counter }} </div>
    <br/>
    <div><input type="button" v-bind:value="inputValue" ></div>
    <div><input type="button" :value="inputValue" ></div>

    <br/>
    <br/>


    <div v-if="isMarried" >Mutluluklar!!!  </div>
    <div v-else >En güzel Yıllar...</div>
    <br/>
    <br/>
    <div>
      <ul>
        <li v-for="(item, index) in course" v-bind:key="index" > {{ item }} </li>
      </ul>
    </div>

    <br/>
    <br/>
    <div>
      Kullanıcı adı <br/>
      <input type="text" v-model="user.username" /> <br/>
      Şifre <br/>
      <input type="text" v-model="user.password" /> <br/>
      Tekrar <br/>
      <input type="text" v-model="user.confirmpas" /> <br/>

      <div class="liste" v-if=" user.password !== user.confirmpas">
      Şifreler Uyumsuz
    </div>
    <div>
      <button :disabled="user.password !== user.confirmpas">
      GÖNDERRR
      </button>
    </div>

    </div>

    

  </div>
  
  
 
</template>

<script>


export default {
  data () {
    return {
      name: "Mahmut",
      surname: "yılmaz",
      age: 41,
      course: ["vue", "react", "angelar"],
      counter:0,
      inputValue:"click me",
      isMarried: false,

      user:{
        username:"",
        password:"",
        confirmpas:"",
      },
      
    };
    
  },
 computed: {
    fullName() {
      return  `${this.name} ${this.surname} --  ${this.age} `;
    }
  },
  methods: {
    arttır() {
      this.counter++;

    },
    azalt() {
      this.counter--;

    },
  },
};

</script>

<style>
.liste {
  background-color: rgb(215, 192, 161);
}
</style>


