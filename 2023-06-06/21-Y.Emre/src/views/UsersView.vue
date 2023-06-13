<template>
  <div>
    <div class="about">
      <h1>Kullanicilar sayfasi</h1>
    </div>

    <UserCard
      v-for="user in users"
      :key="user.id"
      :userData="user"
      :isActive="user.isActive"
    />
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
  name: "UsersView",
  components: {
    UserCard,
  },
  data() {
    return {
      users: [
        { id: 1, adi: "Osman", yasi: 21, isActive: false },
        { id: 2, adi: "Mahmut", yasi: 32, isActive: true },
        { id: 3, adi: "Zeynep", yasi: 18, isActive: false },
        { id: 4, adi: "Fatma", yasi: 28, isActive: true },
      ],
    };
  },
};
</script>