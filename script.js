function computerPlay() {
    const select = ["rock", "papar", "scissors"]
    return select[Math.floor(Math.random() * select.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return " it is a tie";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
    ) {
        return "you win rock beat scissors"
    }

    if (playerSelection === 'papar' && computerSelection === 'rock') {
        return "you win papar beat rock"
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));


