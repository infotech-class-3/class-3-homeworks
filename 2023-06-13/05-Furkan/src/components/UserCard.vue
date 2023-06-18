<template>
  <v-card class="mx-auto mb-5" max-width="344" variant="outlined">
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">{{ userData.name}}</div>
        <div class="text">Yasi {{ userData.age }}</div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn variant="outlined" @click="handleClick"> Tikla </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },

  methods:{
    handleClick(){
        this.$emit("butona-basma-eventi", this.userData.name)
    }

  }
};
</script>