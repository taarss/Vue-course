const app = Vue.createApp({
    data(){
        return {
            friends: [
                {id: 'manuel', name: 'Manuel Lorenz', phone: '12341234', email: 'manuel@localhost.com'},
                {id: 'samuel', name: 'Samuel Lorenz', phone: '12341234', email: 'manuel@localhost.com'}
            ],
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.component('user-contact', {
    template: ` 
    <li key="friend.id">
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show'  }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
    data() {
        return { 
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '12341234',
                email: '123456@232',
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app");