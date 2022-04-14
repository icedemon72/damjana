<template>
    <div class="container-fluid main">
        <div class="row game_div d-flex justify-content-around">
            <div id="game" class="col-md-6 col-sm-12">
                <div v-for="item in 6" :key="item" class="row game_list">
                    <div v-for="item in 4" :key="item" class="col-md-3 game_block d-flex justify-content-center">
                        <div class="align-self-center input"></div> 
                    </div>
                </div>
            </div>
            <div id="results" class="col-md-4 col-sm-12">
                <div v-for="item in 6" :key="item" class="row game_list result_list d-flex justify-content-center">
                    <div v-for="item in 4" :key="item" class="col-md-3 col-sm-6 game_block result_block d-flex justify-content-center">
                        <div class="align-self-center output"></div> 
                    </div>
                </div>
            </div>
            <div id="choice" class="col-md-3 col-sm-12 d-flex justify-content-center">
                <div class="col">
                    <div class="col-12 choice_list d-flex justify-content-center ">
                        <div class="Q orange" @click="getElement(' orange')"></div>
                    </div>
                    <div class="col-12 choice_list d-flex justify-content-center ">
                        <div class="Q green" @click="getElement(' green')"></div>
                    </div>
                    <div class="col-12 choice_list d-flex justify-content-center ">
                        <div class="Q blue" @click="getElement(' blue')"></div>
                    </div>
                    <div class="col-12 choice_list d-flex justify-content-center">
                        <div class="Q  pink" @click="getElement(' pink')"></div>
                    </div>
                    <div class="col-12 choice_list d-flex justify-content-center ">
                        <div class="Q red" @click="getElement(' red')"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center">
            <div id="solution" class="row solution_div">
                <div v-for="item in 4" :key="item" class="col-md-3 solution_block d-flex">
                    <h2 class="align-self-center question_mark">?</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Igra',
        components: {},
        methods: {
           getElement(x) { 
                if(this.playing) {
                    let game = document.getElementById('game').children;
                    let field = game[this.round].children;
                    (field[this.turn].classList += x);
                    this.res.push(x.trim());
                    this.turn++;
                    if(this.turn === 4) {
                        this.checkCorr();
                        this.round++;
                        this.turn = 0;
                        this.res = [];
                        if(this.round === 6) {
                            this.reveal();
                        }
                    }   
                }                             
            },
            generateComb() { 
                let letters = ["green", "orange", "blue", "pink", "red"];
                    for(let i = 0; i < 4; i++) {
                    this.combination.push(letters[~~(Math.random() * letters.length)]);
                }
            },
            checkCorr(){
                let tempObj = JSON.parse(JSON.stringify(this.$data)); 
                let onSpot = 0, notOnSpot = 0, comb = tempObj.combination, res = tempObj.res;
                for(let i = 0; i < 4; i++) {
                    if(!comb.includes(res[i])) {
                        res[i] = ' ';
                    }
                    if(comb[i] === res[i] && res[i] !== ' ') {
                        onSpot++;
                        res[i] = ' ';
                        comb[i] = ' ';
                    }
                }

                for(let i = 0; i < 4; i++) {
                    for(let j = 0; j < 4; j++) {
                        if(j !== i && res[i] === comb[j] && res[i] !== ' ') {
                            comb[j] = ' ';
                            res[i] = ' ';
                            notOnSpot++;
                        }
                    }
                } 
                this.getValues(onSpot, notOnSpot);
                if(onSpot === 4) {
                    this.reveal();
                } 
            },
            getValues(t, n) {
                let score = document.getElementById('results').children;
                
                let field = score[this.round].children;
                for(let i = 0; i < t; i++) {
                    field[i].classList += ' correct';
                }

                for(let i = t; i < n + t; i++) {
                    field[i].classList += ' not_correct';
                }
            },
            reveal() {
                this.playing = false;
                let solution = document.getElementById('solution').children;
                for(let i = 0; i < 4; i++) {
                    solution[i].children[0].innerHTML = '';
                    solution[i].classList += (' ' + this.combination[i]);
                }
            }

        },
        data() {
            return {
                round: 0,
                turn: 0,
                res: [],
                combination: [],
                playing: true
                
            }
        },
        created() {
            this.generateComb();
        }
    }

</script>

<style scoped>
    .main {
        margin-top: 50px;
    }

    .game_div {
        margin-left: 20%;
        margin-right: 20%;
    }
    
    .result_list {
        width: 200px;
    }

    .result_block {
        height: 50px;
        border-radius: 100%;
        border: 2px solid #19b2bd !important;
    }

    .game_list {
        margin-bottom: 50px;
        height: 50px;
        width: 200px;
    }

    .game_block {
        border: 3px solid #19b2bd;
        width: 50px;
    }

    .solution_div {
        margin-top: 20px;
        width: 200px;
        height: 50px;
    }

    .solution_block {
        width: 50px;
        border-left: 3px solid #ffffff;
        background-color: #19b2bd;
        color: #ffffff;
    }

    .choice_list {
        width: 100px;
        margin-top: 40px;
    }

    .Q {
        height: 60px;
        min-width: 60px;
        border-radius: 100% ;
    }

    .Q:hover {
        cursor: pointer;
    }

    .question_mark {
        margin: 0 auto;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

    #choice {
        height: 550px;
        margin: 0;
        max-width: 100px;
        border: 3px solid #19b2bd;
    }

    .orange {
        background-color: orange;
    }
    
    .green {
        background-color: green;
    }

    .blue {
        background-color: skyblue;
    }

    .pink {
        background-color: palevioletred;
    }

    .red {
        background-color: red;
    }

    .orange:hover, .green:hover, .blue:hover, .pink:hover, .red:hover {
        transition: 0.2s ease-in;
        border: 5px solid #19b2bd;
    }

    .correct {
        background-color: #7b68ee;
    }

    .not_correct {
        background-color: #a4f584;
    }


</style>