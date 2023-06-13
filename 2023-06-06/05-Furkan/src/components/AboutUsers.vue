<template>
  <div class="container">
    <v-card class="mx-auto mb-5" max-width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
      ></v-img>

      <v-card-title> {{ userData.id }} </v-card-title>

      <v-card-subtitle> {{userData.name}} - Yasi : {{ userData.age }}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        >
          <span class="v-btn__content" data-no-activator=""
            ><i
              class="v-icon notranslate v-theme--light v-icon--size-default"
              aria-hidden="true"
              ><svg
                class="v-icon__svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                ></path></svg></i
          ></span>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
  
<script>

export default {
  data: () => ({
    show: false,
  }),

  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.container{
  display: flex;
}
</style>