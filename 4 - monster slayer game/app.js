function getRandomValue(min, max) {
    return  Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logs: []
        };
    },
    computed: {
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
                this.monsterHealth = 0;
                this.playerHealth = 0;
            } else if(value <= 0){
                this.winner = 'monster';
                this.playerHealth = 0;
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
                this.monsterHealth = 0;
                this.playerHealth = 0;
            } else if(value <= 0){
                this.winner = 'player';
                this.monsterHealth = 0;
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.log = [];
        },
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage("player", "attacked", attackValue);
            this.attackPlayer();
        },   
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage("monster", "attacked", attackValue);
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage("player", "used special attack", attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if(healValue + this.playerHealth > 100){
                this.playerHealth = 100;
            } else{
                this.playerHealth += healValue;
            }
            this.addLogMessage("player", "healed", healValue);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            this.logs.unshift(`${who} ${what} for ${value}`);
        }
    }
});

app.mount('#game');