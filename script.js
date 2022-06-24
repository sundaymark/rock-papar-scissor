function computerPlay(){
    const select = ["rock","papar","scissors"]
    return select[Math.floor(Math.random()* select.length)];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return " it is a tie";
    }
       
    
}
    const playerSelection = "rock";
    const computerSelection = computerPlay()
    console.log (playRound(playerSelection,computerSelection));


