export default {
    userIsAuthenticated(state){
        return state.isLoggedIn;
    },
    userId(state) {
        return state.userId;
      }
};