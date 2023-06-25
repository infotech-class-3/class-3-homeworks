<template>
  <v-card class="mx-auto mb-4" max-width="344" variant="outlined">
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">{{ userData.adi }}</div>
        <div class="text-caption">Yasi :{{ userData.yasi }}</div>
      </div>
    </v-card-item>
    <v-card-actions>
      <v-btn
        v-if="isActive"
        size="small"
        variant="outlined"
        v-on:click="handleClick"
        >Tikla</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    userData: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("butona-basma-eventi", this.userData.adi);
    },
  },
};
</script>
