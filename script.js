function computerPlay() {
    const select = ["rock", "papar", "scissors"]
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

    if (playerSelection === 'papar' && computerSelection === 'rock') {
        playerSelection = 'papar'
        return "you win papar beat rock"
    }

    if (playerSelection === 'scissors' && computerSelection === 'papar') {
        playerSelection = 'scissors'
        return "you win scissor beat papar"
    }
    //computer selection section
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        playerSelection = 'scissors'
        return "you loss rock beat scissors"
    }

    if (computerSelection === 'papar' && playerSelection === 'rock') {
        playerSelection = 'rock'
        return "you loss papar beat rock"
    }

    if (computerSelection === 'scissors' && playerSelection === 'papar') {
        playerSelection = 'papar'
        return "you loss scissors beat papar "
    }


}
const playerSelection = prompt('enter a selection');
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));


