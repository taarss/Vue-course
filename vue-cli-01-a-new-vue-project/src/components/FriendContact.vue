<template>
<section>
    <li>
        <h2>{{ this.name }} {{ this.isFavorite === true ? 'Favorite' : ''  }}</h2>
        <button @click="toggleDetails()" >{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="toggleFavorite()">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ this.phoneNumber }}</li>
            <li><strong>Email:</strong>{{ this.emailAddress }}</li>
        </ul>
        <button @click="deleteFriend()">Delete</button>
    </li>
</section>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    emits: {
        'toggle-favorite': function(id) {
            if(id){
                return true;
            } else{
                console.warn("id is missing");
                return false;
            }
        }
    },
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '12341234',
                email: '123@123.123'
            },
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
            this.$emit('toggle-favorite', this.id);
        },
        deleteFriend(){
            this.$emit('delete-friend', this.id);
        }
    }
}
</script>