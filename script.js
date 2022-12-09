
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const computerScore = document.querySelector('.computerscore');
const playerScore = document.querySelector('.playerscore');
const declare = document.querySelector('.declare');
playerSelection = '';

computerScore.innerText = 0;
playerScore.innerText = 0;

function computerPlay() {
  const select = ["rock", "paper", "scissors"]
  return select[Math.floor(Math.random() * select.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay()

  if (playerSelection.target.innerText === 'Rock' && computerSelection === 'rock') {

    return results.textContent = 'it a tie';
  }

  if (playerSelection.target.innerText === 'Paper' && computerSelection === 'paper') {
    return results.textContent = 'it a tie';
  }

  if (playerSelection.target.innerText === 'Scissors' && computerSelection === 'scissors') {
    return results.textContent = 'it a tie';
  }

  if (playerSelection.target.innerText === 'Rock' && computerSelection === 'scissors') {
    playerScore.innerText++;
    return results.textContent = "you win rock beat scissors";
  }

  if (playerSelection.target.innerText === 'Paper' && computerSelection === 'rock') {
    playerScore.innerText++;
    return results.textContent = "you win paper beat rock";
  }

  if (playerSelection.target.innerText === 'Scissors' && computerSelection === 'paper') {
    playerScore.innerText++;
    return results.textContent = "you win scissor beat paper";
  }

  if (computerSelection === 'rock' && playerSelection.target.innerText === 'Scissors') {
    computerScore.innerText++;
    return results.textContent = "you loss rock beat scissors";
  }

  if (computerSelection === 'paper' && playerSelection.target.innerText === 'Rock') {
    computerScore.innerText++;
    return results.textContent = "you loss paper beat rock";
  }

  if (computerSelection === 'scissors' && playerSelection.target.innerText === 'Paper') {
    computerScore.innerText++;
    return results.textContent = "you loss scissors beat paper ";
  }
}

function declareWinner() {
  if (computerScore.innerText === '5' && playerScore.innerText < '5') {
    declare.textContent = 'You lose the game, ohh! We lost our Planet, Play again to Reclaime Our Planet ';
    computerScore.innerText = '0';
    playerScore.innerText = '0';
  } else if (playerScore.innerText === '5' && computerScore.innerText < '5') {
    declare.textContent = 'You win  the game, ohh! We reclaimed our Planet ';
    computerScore.innerText = '0';
    playerScore.innerText = '0';
  }
}
buttons.forEach(function (button) {
  button.addEventListener('click', playRound)
});

buttons.forEach(function (button) {
  button.addEventListener('click', declareWinner)
});





