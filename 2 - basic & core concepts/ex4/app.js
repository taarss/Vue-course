const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      //fullname: "",
      lastname: "",
    };
  },
  watch: {
    counter(value){
      if(value > 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
          
        }, 2000)
      }
    }
    /*
    name(value){
      if(value === ''){
        this.fullname = '';
      }
      else{
        this.fullname = value + ' ' + this.lastname;
      }
    },
    lastname(value){
      if(value === ''){
        this.fullname = '';
      }
      else{
        this.fullname = this.name + ' ' + value;
      }
    }*/
  },
  computed: {
    fullname(){
      if(this.name === '' || this.lastname === ''){
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {},
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput(){
      this.name = '';
    }
  },
});

app.mount("#events");
