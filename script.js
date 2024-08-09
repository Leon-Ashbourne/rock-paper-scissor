const resultShow = document.querySelector('.result');
// const continueBtn = document.querySelector('.continue-btn');
const resetBtn = document.querySelector('.reset-btn');

const displayGameSituation = document.querySelector('.player-choice');

const computerScoreShow = document.getElementById('computer-score')
const humanScoreShow = document.getElementById('human-score')
const resultInfo = document.querySelector('.result-info');

const shortNote = document.querySelector(' .computer-choice');
const humanDisplay = document.querySelector('.human-choice')

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

const selectedBtn = document.querySelector('.rock-paper-scissor');
selectedBtn.addEventListener('mousedown', (event)=>{
    getHumanChoice(event.target);
})
selectedBtn.addEventListener('mouseup', (event)=>{
    if(event.target.className === 'rock-paper-scissor') {
        return;
    }
    event.target.style.backgroundColor = "black";
    let humanSt = event.target.value;
    humanDisplay.textContent = `Your Choice: ${humanSt}`;
})


function getHumanChoice(target){
    if(target.className === 'rock-paper-scissor') {
        return;
    }
    target.style.backgroundColor = "green";
    playRound(target.value);
    
}

function playRound(humanChoice){


    let choiceUpperCase;
    let  computerChoice;
    let result = 0;

    choiceUpperCase = humanChoice.toUpperCase();
    
    computerChoice = getComputerChoice();
    shortNote.textContent = `Computer Choice: ${computerChoice}`;

    result = comparator (computerChoice, choiceUpperCase);

    if(result === 1){
        computerScore++;
        displayScore();
        resultInfo.textContent =  "HAHAHAAA, You L-O-S-E. I won this round.";
    }else if(result === 2){
        humanScore++;
        displayScore();
        resultInfo.textContent = "You won this round. What a joke...";
    }else {
        resultInfo.textContent = "think you can match my energy ?" ;
    }
    
    if(humanScore === 5 || computerScore === 5){
        startBtn.style.backgroundColor = "white";
        winner();
    }
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
    resetAll();
    startBtn.style.backgroundColor = 'green';
});


function displayScore(){
    humanScoreShow.textContent = `Player Score: ${humanScore}`;
    computerScoreShow.textContent = `Computer Score: ${computerScore}`;
}

function resetAll(){
    startBtn.style.backgroundColor = 'white';
    humanScore = 0;
    computerScore = 0;
    displayScore();
    humanDisplay.textContent = `Your choice out of this three?`;
    gameRound = 0;
    displayGameSituation.textContent = "Waiting For the Winner to be decided..." ;
    resultInfo.textContent = "Let's see.." ;
}
function winner(){

    displayScore();
        if( computerScore === 5){
            displayGameSituation.textContent = `Unfortunately, You Lose this Match! Wanna try another round ? \n
                I'm always ready for the challenge. \n
                press start-Game for another round.`;

        }else if(humanScore === 5){
            displayGameSituation.textContent = `Congrats, YOU won the game! \n
                Wanna try another round ? \n
            I'm always ready for the challenge. \n
                press start-Game for another round..`;

        }
    startBtn.style.backgroudColor= "white";

}



// continueBtn.addEventListener('click', ()=> {
//     startBtn.style.backgroundColor = 'green';
// })

resetBtn.addEventListener('click', ()=> {
    resetAll();
    startBtn.style.backgroundColor = 'white';
})

