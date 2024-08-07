const resultShow = document.querySelector('.result');
const continueBtn = document.querySelector('.continue-btn');
const resetBtn = document.querySelector('.reset-btn');

const displayGameSituation = document.querySelector('.player-choice');
const computerScoreShow = document.getElementById('computer-score')
const humanScoreShow = document.getElementById('human-score')
const resultInfo = document.querySelector('.result-info');

let gameRound = 0;
let humanScore = 0;
let computerScore= 0;

const startBtn = document.querySelector('.start-game');



function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1;

    switch (choice){
        case 1:
            return 'PAPER';
        
        case 2:
            return 'ROCK';

        case 3: 
            return 'SCISSOR';
    }
}


function playRound(){

    let humanChoice;
    let choiceUpperCase;
    let  computerChoice;
    let result = 0;

    for(let i =0; i<5; i++){
         humanChoice = prompt(`Choose one of these options: \n
            ROCK  PAPER  SCISSOR  `
       );
       if( humanChoice === null){
        alert("you chose to cancel the game!");
        computerScore = 0;
        humanScore= 0;
        gameRound=0;
        }

       choiceUpperCase = humanChoice.toUpperCase();

        if(choiceUpperCase !== 'ROCK' && 
            choiceUpperCase !== 'PAPER' &&
            choiceUpperCase !== 'SCISSOR'
        ){
            alert(`You entered wrong Input: try again within these three options \n 
                rock , paper, scissor .`);
            i--;
        }else {
            computerChoice = getComputerChoice();
            result = comparator (computerChoice, choiceUpperCase);
            if(result === 1){
                computerScore++;
            }else if(result === 2){
                humanScore++;
            }
        gameRound++;

        }
            

    }
    return ;

}


function comparator(_computerChoice, _humanChoice){

    if( (_computerChoice==='ROCK' && _humanChoice==='PAPER') || 
    (_computerChoice === 'PAPER' && _humanChoice === 'SCISSOR') || 
    (_computerChoice==='SCISSOR' && _humanChoice=== 'ROCK')){
        return 2;
    }else if( (_humanChoice ==='ROCK' && _computerChoice==='PAPER') || 
    (_humanChoice === 'PAPER' && _computerChoice === 'SCISSOR') || 
    (_humanChoice ==='SCISSOR' &&  _computerChoice=== 'ROCK')){
        return 1;
    }


}


startBtn.addEventListener('click', ()=> {
    startBtn.style.backgroundColor = 'green';
    startGame();
});


function displayScore(){
    humanScoreShow.textContent = `Player Score: ${humanScore}`;
    computerScoreShow.textContent = `Computer Score: ${computerScore}`;
    displayGameSituation.textContent = "Match completed, results are out!";
}

function resetAll(){
    startBtn.style.backgroundColor = 'white';
    humanScore = 0;
    computerScore = 0;
    displayScore();
    gameRound = 0;
    displayGameSituation.textContent = "Waiting For the Winner to be decided" ;
    resultInfo.textContent = "Who won this game?" ;
}
function startGame(){
    displayScore();
    playRound();

    displayScore();
        if(gameRound === 5 && computerScore > humanScore){
            resultInfo.textContent = `Unfortunately, You Lose this Match! Wanna try another round ? \n
                I'm always ready for the challenge. \n
                press continue to go fo ranother round.`;

        }else if (gameRound === 5 && humanScore > computerScore){
            resultInfo.textContent = `Congrats, YOU won the game! \n
                Wanna try another round ? \n
            I'm always ready for the challenge. \n
                press continue for another round..`;

        }else if(gameRound ===5 && computerScore === humanScore){
            resultInfo.textContent = "What a Bummer, Both of you ended up with a Draw!";

        }else {
            resetAll();
            return;
        }
    startBtn.style.backgroudColor= "white";
}


continueBtn.addEventListener('click', ()=> {
    resetAll();
    startBtn.style.backgroundColor = 'green';
    startGame();
})

resetBtn.addEventListener('click', ()=> {
    resetAll();
    startBtn.style.backgroundColor = 'white';
})

