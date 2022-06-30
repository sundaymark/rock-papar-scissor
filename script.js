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
const playerSelection = prompt('enter a selection').toLocaleLowerCase();
const computerSelection = computerPlay()

function game() {
    playRound(playerSelection, computerSelection);
    for (i = 0; i < 5; i++);
}

    





