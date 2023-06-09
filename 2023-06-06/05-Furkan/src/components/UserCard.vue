<template>
  <v-card class="mx-auto" max-width="344" variant="outlined">
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">{{ userData.name }}</div>
        <div class="text-caption">Yasi : {{ userData.age }}</div>

        <div class="married">
          <input type="checkbox" v-model="isMarried" name="isMarried" /> Evli
          <br />
          <input type="checkbox" v-model="isUnMarried" name="isUnMarried" />
          Bekar

          <div v-if="isMarried && isUnMarried">
            Ikisi Aynı Anda Olamaz Heralde...
          </div>
          <div v-else-if="isMarried">Cok Guzel. Mutluluklar...</div>
          <div v-else-if="isUnMarried">Bir Bilsen En Guzel Zamanlardi...</div>
          <div v-else><small>Lutfen Medeni Durumunuzu Belirtiniz</small></div>
        </div>
      </div>
    </v-card-item>

    <v-card-actions>
      <router-link to="/about">
        <v-btn
          variant="elevated"
          size="small"
          v-if="userData.complited"
          @click="onClick"
          :user-data="userData"
        >
          Tikla
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template> 



<script>
export default {
  name: "UserCard",
  data() {
    return {
      isMarried: null,
      isUnMarried: null,
    };
  },

  methods: {
    onClick() {
      console.log(this.userData.id);
    },
  },

  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style>
small {
  color: red;
}
</style>