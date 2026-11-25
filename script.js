const StartContainer = document.querySelector(".start")
const gameContainer = document.querySelector(".game")
const StartButtom = document.querySelector(".startButton")
const rockEl = document.querySelector("#rock");
const paperEl = document.querySelector("#paper");
const scissorsEl = document.querySelector("#scissors");
const resultText = document.querySelector(".text");

StartButtom.addEventListener("click",startGame);

function startGame(){
  StartContainer.classList.remove("active")
  gameContainer.classList.add("active","fadeUp")
}

function getComputerChoice() {
  let computerNumber = Math.floor(Math.random() * 3) + 1;
  return computerNumber;
}

rockEl.addEventListener("click", () => {
  playRound(getComputerChoice(), 1);
});
paperEl.addEventListener("click", () => {
  playRound(getComputerChoice(), 2);
});
scissorsEl.addEventListener("click", () => {
  playRound(getComputerChoice(), 3);
});

// function getHumanChoice() {
//   let humanChoice = prompt("Enter your choice'Rock','Paper','Scissors'");
//   let humanNumber = null;
//   if (humanChoice.toLowerCase() === "Rock".toLowerCase()) {
//     humanNumber = 1;
//   } else if (humanChoice.toLowerCase() === "Paper".toLowerCase()) {
//     humanNumber = 2;
//   } else if (humanChoice.toLowerCase() === "Scissors".toLowerCase()) {
//     humanNumber = 3;
//   }
//   return humanNumber;
// }

let computerScore = 0;
let humanScore = 0;
let tie = 0;

function playRound(computerChoice, humanChoice) {
  // 1. Ties
  if (computerChoice === 1 && humanChoice === 1) {
    resultText.textContent = "Tie 'Rock with Rock'";
    resultText.style.color = "";
    tie++;
  } else if (computerChoice === 2 && humanChoice === 2) {
    resultText.textContent = "Tie 'Paper with Paper'";
    resultText.style.color = "";
    tie++;
  } else if (computerChoice === 3 && humanChoice === 3) {
    resultText.textContent = "Tie 'Scissors with Scissors'";
    resultText.style.color = "";
    tie++;

    // 2. huma win (humanScore)
  } else if (computerChoice === 1 && humanChoice === 2) {
    resultText.textContent = "You win 'Paper beats Rock'";
    getGreenColor(resultText)
    humanScore++;
  } else if (computerChoice === 2 && humanChoice === 3) {
    resultText.textContent = "You win 'Scissors beats Paper'";
    getGreenColor(resultText)
    humanScore++;
  } else if (computerChoice === 3 && humanChoice === 1) {
    resultText.textContent = "You win 'Rock beats Scissors'";
    getGreenColor(resultText)
    humanScore++;

    // 3. computes win (computerScore)
  } else if (computerChoice === 1 && humanChoice === 3) {
    resultText.textContent = "You lose 'Rock beats Scissors'";
    getRedColor(resultText)
    computerScore++;
  } else if (computerChoice === 2 && humanChoice === 1) {
    resultText.textContent = "You lose 'Paper beats Rock'";
    getRedColor(resultText)
    computerScore++;
  } else if (computerChoice === 3 && humanChoice === 2) {
    resultText.textContent = "You lose 'Scissors beats Paper'";
    getRedColor(resultText)
    computerScore++;
  }

  const pontuation = document.querySelector(".actual-pontuation");
  pontuation.textContent = ` Human Score: ${humanScore} | Tie: ${tie} | Computer Score: ${computerScore}`;

  if (humanScore == 5) {
    pontuation.textContent = "You win!";
    humanScore = 0;
    computerScore = 0
    tie = 0
  } else if (computerScore == 5) {
    pontuation.textContent = "You lose!";
    humanScore = 0;
    computerScore = 0
    tie = 0
  }
}

function getGreenColor(text){
  return text.style.color = "rgba(48, 163, 13, 0.88)"
}

function getRedColor(text){
  return text.style.color = "rgba(225, 12, 12, 0.88)"
}