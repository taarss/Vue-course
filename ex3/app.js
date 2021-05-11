const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: 'Finish the course and master Vue',
            vueLink: 'https://christianvillads.tech/opgaver/V31_OOP/adminPanel.php'
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if(randomNum < 0.5){
                return this.courseGoalA;
            } else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');