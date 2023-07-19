<template>
  <div>
    <v-card class="mx-auto mb-4" max-width="344" variant="outlined">
      <v-card-item>
        <div>
          <div class="text-h6 mb-1">{{userData.adi}}</div>
          <div class="text-caption">Yasi {{userData.yasi}}</div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="outlined" size="small"> Tikla </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default{
  name:"UserCard",
  props:{
    userData:{
      type: Object,
      requiered: true
    },
    isactive:{
      type:Boolean,
      requiered:true
    }
  }
}
</script>