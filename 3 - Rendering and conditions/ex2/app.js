const app = Vue.createApp({
    data(){
        return{
            list: [],
            enteredListValue: '',
            visibility: true,
        };
    },
    methods: {
        addListItem(){
            this.list.push(this.enteredListValue);
        }
    }
});

app.mount('#assignment');