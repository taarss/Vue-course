<template>
    <li>
        <h2>{{ this.name }} {{ friendIsFavorite === '1' ? 'Favorite' : ''  }}</h2>
        <button @click="toggleDetails()" >{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="toggleFavorite()">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ this.phoneNumber }}</li>
            <li><strong>Email:</strong>{{ this.emailAddress }}</li>
        </ul>
    </li>
</template>
<script>
export default {
    props: [
        'name',
        'phoneNumber',
        'emailAddress',
        'isFavorite'
    ],
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '12341234',
                email: '123@123.123'
            },
            friendIsFavorite: this.isFavorite,
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
            if(this.friendIsFavorite === '1'){
                this.friendIsFavorite = '0';
            }
            else{
                 this.friendIsFavorite = '1';
            }
        }
    }
}
</script>