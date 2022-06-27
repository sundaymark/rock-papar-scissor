function computerPlay() {
    const select = ["rock", "papar", "scissors"]
    return select[Math.floor(Math.random() * select.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return " it is a tie";
    }
    
    else if (playerSelection === 'rock' && computerSelection === 'scissor')
     {
         playerSelection = 'rock'
        return "you win rock beat scissors"
    }

    else if (playerSelection === 'papar' && computerSelection === 'rock') {
        playerSelection = 'papar'
        return "you win papar beat rock"
    }

    else if (playerSelection === 'scissor' && computerSelection === 'papar') {
        playerSelection = 'scissor'
        return "you win scissor beat papar"
    }
    //computer selection section
    else if (computerSelection === 'rock' && playerSelection === 'scissor') {
        playerSelection = 'scissor'
        return "you loss rock beat scissor"
    }

    else if (computerSelection === 'papar' && playerSelection === 'rock') {
        playerSelection = 'rock'
        return "you loss papar beat rock"
    }

    else if (computerSelection === 'scissor' && playerSelection === 'papar') {
        playerSelection = 'papar'
        return "you loss scissor beat papar "
    }


}
let playerSelection = "rock";
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));


