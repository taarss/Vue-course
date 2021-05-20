<template>
    <form @submit.prevent="formSubmit">
        <input v-model="newFriend.name" type="text" placeholder="name">
        <input v-model="newFriend.phone" type="text" placeholder="phone">
        <input v-model="newFriend.email" type="text" placeholder="email">
        <button @click="addNewFriend()">Add new friend</button>
    </form>
</template>
<script>
export default {
    data(){
        return {
            newFriend: {
                id: '',
                name: '',
                phone: '',
                email: '',
                isFavorite: false
            }
        }
    },
    methods: {
        addNewFriend(){
            this.newFriend.id = this.newFriend.name.toLowerCase();
            this.$emit("add-new-friend", this.newFriend);
        }
    }
}
</script>