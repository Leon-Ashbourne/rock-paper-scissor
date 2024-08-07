const choiceList = document.querySelectorAll('.btn');
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
const startBtn = document.querySelector('.play');



function getComputerChoice(){
    let choice = Math.float(Math.random()*3) + 1;
    switch (choice){
        case 1:
            return 'rock';
        
        case 2:
            return 'paper';

        case 3: 
            return 'scissor';
    }
}

function getHumanChoice(){
    for(let i =0; i< choiceList.length; i++){
        choiceList[i].addEventListener('click', ()=>{
            return userChoice();
        }) 
    }
}
function userChoice(event){
    return event.target.value;
}

function comaprator(_computerChoice, _humanChoice){

    _computerChoice = topUpperString(_computerChoice);
    _humanChoice = topUpperString(_humanChoice);

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


startBtn.addEventListener('onclick', ()=> {
    startBtn.style.backgroundColor = green;
    startGame();
});

function startGame(){
    playRound();
}

function playRound(){
    round++;
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let result = comparator(computerChoice, humanChoice);
    if(round<=5){
        if(result===1){
            computerScore++;
            computerScoreShow.textContent = "Computer Score: " + computerScore;
            resultInfo.textContent = "you lose. computer won this round.";

            continueBtn.addEventListener('onclick', playRound())

            stopBtn.addEventListener('onclick', ()=>{
                prompt("Starting a new game!");
                computerScore = 0;
                humanScore= 0;
                round=0;
                return;
            });

        }else if(result==2){
            humanScore++;
            humanScoreShow.textContent = "your Score: "+ humanScore;
            resultInfo.textContent = "You won this round and computer lose to you in this round!";

            continueBtn.addEventListener('onclick', playRound())

            stopBtn.addEventListener('onclick', ()=>{
                prompt("Starting a new game!");
                computerScore = 0;
                humanScore= 0;
                round=0;
                return;
            });
        }else {
            resultInfo.textContent = "What a bummer . it's a draw -_-";

            stopBtn.addEventListener('onclick', ()=>{
                prompt("Starting a new game!")
                computerScore = 0;
                humanScore = 0;
                round=0;
                return;
            });
        }
    }
    if(round==5 && computerScore>humanScore){
        round=0;
        resultInfo.textContent = `Unfortunately, You Lose this Game! Wanna try another round ? \n
         I'm always ready for the challenge. \n
          press start game for new game`;
    }else if (round===5 && humanScore>computerScore){
        round=0;
        resultInfo.textContent = `Congrats, YOU won the game! \n
         Wanna try another round ? \n
        I'm always ready for the challenge. \n
         press start game for new game`;
    }else if(round===5 && computerScore==humanScore){
        resultInfo.textcontent = `What a Bummer, Both of you ended up with a Draw!`;
    }
}

