function computerPlay(){
    const select = ["rock","papar","scissors"]
    return select[Math.floor(Math.random()* select.length)];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return " it is a tie";
    }

    if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'papar')||
        (playerSelection === 'papar' && computerSelection === 'rock')
    ){
        return "you win the computer"
    }
}
    const playerSelection = "rock";
    const computerSelection = computerPlay()
    console.log (playRound(playerSelection,computerSelection));


