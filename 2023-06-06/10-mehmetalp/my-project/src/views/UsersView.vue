<template>
    <div>
        <div class="users">
            <h1>Kullanicilar sayfasi</h1>
        </div>

        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
    </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
    name: "UsersView",
    componenets: {
        UserCard,
    },
};
</script>
