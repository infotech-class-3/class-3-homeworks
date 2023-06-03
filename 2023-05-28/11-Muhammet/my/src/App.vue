<template>
  <div>
    HELLO {{ name }} {{ surname }} - {{ age }}
    <br/>
    <div> {{ fullName }} </div>
    <br/>
    <div>
      <button v-on:click="arttır" >Arttır</button>
    <br/>
      <button v-on:click="azalt">Azalt</button>
    </div>
   
    <div> {{ counter }} </div>
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

</style>


