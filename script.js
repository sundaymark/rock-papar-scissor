function computerPlay() {
    const select = ["rock", "paper", "scissors"]
    return select[Math.floor(Math.random() * select.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return " it is a tie";
    }

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerSelection = 'rock'
        return "you win rock beat scissors"
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerSelection = 'paper'
        return "you win paper beat rock"
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerSelection = 'scissors'
        return "you win scissor beat paper"
    }
    //computer selection section
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        playerSelection = 'scissors'
        return "you loss rock beat scissors"
    }

    if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerSelection = 'paper'
        return "you loss paper beat rock"
    }

    if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerSelection = 'scissors'
        return "you loss scissors beat paper "
    }
}
let playerSelection;
const computerSelection = computerPlay()

function game() {
    let computerScore = 5;
    let playerScore = 0;
    let score = ++computerScore +' ' + ++playerScore;
    console.log(score)
    // for (i = 0; i <= 4; i++) {
    //      playerSelection = prompt('enter a selection');
    //     playRound(playerSelection, computerSelection);
    //     //if(playerSelection =)
    //     if(playRound(playerSelection,computerSelection).includes('you win')){
    //         console.log('you beat the computer');
    //     }else if(playRound(playerSelection,computerSelection).includes('you loss')){
    //         console.log('the computer beat you')
    //     }
    // }
}
game();



