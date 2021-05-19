<template>
    <li>
        <h2>{{ this.name }}</h2>
        <button @click="toggleDetails()" >{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
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
        'emailAddress'
    ],
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '12341234',
                email: '123@123.123'
            }
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>