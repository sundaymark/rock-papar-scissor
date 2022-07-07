function computerPlay() {
    const select = ["rock", "paper", "scissors"]
    return select[Math.floor(Math.random() * select.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return " it is a tie";
    }

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
    
        return "you win rock beat scissors"
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        
        return "you win paper beat rock"
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        
        return "you win scissor beat paper"
    }
    
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return "you loss rock beat scissors"
    }

    if (computerSelection === 'paper' && playerSelection === 'rock') {
        return "you loss paper beat rock"
    }

    if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return "you loss scissors beat paper "
    }
}
let playerSelection;
const computerSelection = computerPlay()

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let score = computerScore +' ' + playerScore;

    for (i = 0; i <= 4; i++) {
         playerSelection = prompt('enter a selection');
         console.log(playRound(playerSelection, computerSelection));

        if(playRound(playerSelection,computerSelection).includes('you win')){
            score = computerScore +' ' + playerScore++;
            console.log(score);
        }else if(playRound(playerSelection,computerSelection).includes('you loss')){
            score = computerScore++ +' ' + playerScore;
            console.log(score)
        }else if(playRound(playerSelection,computerSelection).includes('tie')){
            console.log(score)
        }
    }

    if(computerScore > playerScore){
        console.log('You loss')
    }else if(playerScore > computerScore){
        console.log('You win');
    
    }else if(playerScore == computerScore){
        console.log('it a draw')
    
    }

}
game();



