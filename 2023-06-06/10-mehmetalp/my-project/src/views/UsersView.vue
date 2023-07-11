<template>
    <div>
        <div class="users">
            <h1>Kullanicilar sayfasi</h1>
        </div>

        <UserCard v-for="user in users" :key="user.id" :userData="user" :isActive="user.isActive"/>
        
    </div>
</template>

<script>
import UserCard from "../components/UserCard.vue"

export default {
    name: "UsersView",
    componenets: {
        UserCard,
    },
    data(){
       return {
        users:[
            {id:1, adi:"Osman", yasi:21, isActive:false},
            {id:2, adi:"Ali", yasi:33, isActive:true},
            {id:3, adi:"Mehmet", yasi:67, isActive:false}

        ],
    }
    }
};
</script>
