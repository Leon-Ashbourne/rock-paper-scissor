const resultShow = document.querySelector('.result');
const continueBtn = document.querySelector('.continue-btn');
const gameInfo = document.querySelector('game-info');
const shortNote = document.querySelector('.shortNote');
const computerScoreShow = document.getElementById('computer-score')
const humanScoreShow = document.getElementById('human-score')
const resultInfo = document.querySelector('.result-info');

let gameRound = 0;
let humanScore = 0;
let computerScore= 0;

const startBtn = document.querySelector('.start-game');
const stopBtn = document.querySelector('.stop-btn');



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
}

function startGame(){
    displayScore();
    playRound();

    displayScore();
    if(humanScore>computerScore){
        if(gameRound === 5 && computerScore > humanScore){
            round=0;
            resultInfo.textContent = `Unfortunately, You Lose this Game! Wanna try another round ? \n
                I'm always ready for the challenge. \n
                press continue to go fo ranother round.`;
        }else if (gameRound === 5 && humanScore > computerScore){
            round=0;
            resultInfo.textContent = `Congrats, YOU won the game! \n
                Wanna try another round ? \n
            I'm always ready for the challenge. \n
                press continue for another round..`;
        }else if(gameRound === 5 && computerScore === humanScore){
            resultInfo.textcontent = `What a Bummer, Both of you ended up with a Draw!`;
        }else {
            startBtn.style.backgroundColor = 'white';
            return;
        }
    }
}


continueBtn.addEventListener('onclick', ()=> {
    startBtn.style.backgroundColor = 'green';
    startGame();
})

