<template>
  <button @click="confirmInput()">Confirm</button>
  <button @click="saveChanges()">Save changes</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
</template>

<script>
import UserItem from '../components/users/UserItem';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput(){
      this.$router.push('/teams')
    },
    saveChanges(){
      this.saveChanges = true;
    }
  },
  beforeRouteEnter(to, from, next){
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log(to);
    console.log(from);
    if(this.changesSaved){
      next()
    } else{
     const userWantsToLeave = prompt('Are you sure? You got unsaved changes');
     next(userWantsToLeave);
    }
  },
  unmounted(){
    console.log("dsdsd");
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>