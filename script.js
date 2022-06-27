function computerPlay() {
    const select = ["rock", "papar", "scissors"]
    return select[Math.floor(Math.random() * select.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return " it is a tie";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissor')
    ) {
        return "you win rock beat scissors"
    }

    if (playerSelection === 'papar' && computerSelection === 'rock') {
        return "you win papar beat rock"
    }

    if (playerSelection === 'scissor' && computerSelection === 'papar') {
        return "you win scissor beat pappar"
    }
    //computer selection section
    if (computerSelection === 'rock' && playerSelection === 'scissor') {
        return "you loss rock beat scissor"
    }

    if (computerSelection === 'papar' && playerSelection === 'rock') {
        return "you loss papar beat rock"
    }

    if (computerSelection === 'scissor' && playerSelection === 'papar') {
        return "you loss scissor beat papar "
    }


}
const playerSelection = "papar";
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));


