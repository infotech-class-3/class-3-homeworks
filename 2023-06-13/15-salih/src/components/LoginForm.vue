<template>
  <div>
    <v-sheet width="300" class="mx-auto mt-10">
    <v-form fast-fail @submit.prevent>
      <v-text-field
      density="compact"
        v-model="userData.username"
        label="Username"
      ></v-text-field>

      <v-text-field
      density="compact"
        v-model="userData.password"
        label="Password"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Login</v-btn>
    </v-form>
  </v-sheet>
  </div>
</template>
<script>
export default{
    data(){
        return{
            userData:{
                username:'',
                password:'',

            }
        }
    }
};
</script>