<template>
  <div>
  <div>{{ name }}</div>
  <div>{{ user.userName}}--{{ user.password }}</div>

  </div>
  
</template>

<script>



export default {
  data() {
    return {
      name:"Mehmet",
      surname: "Yildiz",
      age: 55,

      user:{
        userName :"MYildiz",
        password :"1234"
      },
    }
  }
}
</script>

<style>

</style>
