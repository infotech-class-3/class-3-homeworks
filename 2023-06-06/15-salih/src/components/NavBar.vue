<template>
  <v-card max-width="448" class="mx-auto mb-12" color="grey-lighten-3">
    <v-layout>
      <v-app-bar color="teal-darken-4">
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>{{Kullanici}}</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn v-on:click="tiklama">CIKIS</v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  computed:{
    Kullanici(){
      return this.$store.getters.getSelectedUser;
    },
  },
  methods:{
    tiklama(){
      this.$store.commit('setSelectedUser', "");
    },
  },
};
</script>

<style></style>
