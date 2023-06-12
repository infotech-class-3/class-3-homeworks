<template>
  <div>
    <div>{{ name }} {{ surName }}--{{ age }} </div>
    <div>{{ courses[0] }} </div>
    <div>{{ user.userName }} {{ user.userPassword }} </div>
    <div>{{ fullName }} </div>
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
      userName:"Memo",
      userPassword:"1234",
      confirmPassword:""
    }
   } 
  },
  computed:{
      fullName () {
        return`${this.name} ${this.surName}----> ${this.age}`
      }
    }
}
</script>

<style>

</style>
