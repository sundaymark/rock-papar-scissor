function computerPlay(){
    const select = ["rock","papar","scissors"]
    return select[Math.floor(Math.random()* select.length)];
}
console.log(computerPlay());

function playRound(playSelection,computerSelection){
    return playSelection, computerSelection;
}
    const playSelection = "rock";
    const computerSelection = computerPlay()
    console.log (playRound(playSelection,computerSelection))


