<template>
  <div>
    <div class="about">
    <h1>Kullanicilar Sayfasii</h1>
    
  </div>
    <div>
    <v-card
    class="mx-auto mb-4"
    max-width="448"
  >
    <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon>
            <v-img src="../tree.jpg"></v-img>
          </v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Ercan's Bio</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="n in 8"
              :key="n"
              cols="3"
            >
              <v-sheet
                color="grey-lighten-2"
                height="96"
              ></v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
  </div>
    <UserCard v-for="user in users" 
    :key="user.id" 
    :userData="user"
    :isActive="user.isActive"
    />
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue"

export default {
  name: "UsersView",
  components: { 
    UserCard, 
  },
  data() {
    return {
      users: [
        {id: 1, adi:"Ercan AYDIN", yasi:39, isActive:false },
        {id: 2, adi:"Bedrettin AYDIN", yasi:34, isActive:true },
        {id: 3, adi:"Mehmet Efe AYDIN", yasi:11, isActive:false },
        {id: 4, adi:"Olga", yasi:42, isActive:true },
        {id: 5, adi:"Danilo", yasi:22, isActive:false },
        {id: 6, adi:"Tymur", yasi:13, isActive:false },
        
      ],
    };
  },
};
</script>
