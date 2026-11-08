
let computerScore = 0;
let humanScore = 0;


function getComputerChoice(){
  let computerNumber = Math.floor(Math.random()*3)+1;
  /* if(computerNumber == 1){
    console.log("Rock");
  }else if(computerNumber == 2) {
    console.log("Paper");
  }else {
    console.log("Scissors");
  } */
  return computerNumber;
 
}


function getHumanChoice(){
  let humanChoice = prompt("Enter your choice'Rock','Paper','Scissors'");
  let humanNumber = null;
  if(humanChoice.toLocaleLowerCase() === "Rock".toLocaleLowerCase()){
    humanNumber = 1;
  } else if(humanChoice.toLocaleLowerCase() === "Paper".toLocaleLowerCase()){
    humanNumber = 2;
  }
  else if(humanChoice.toLocaleLowerCase() === "Scissors".toLocaleLowerCase()){
    humanNumber = 3;
  }
  return humanNumber;
}

function playRound(computerChoice,humanChoice) {
  if(computerChoice === 1 && humanChoice === 2){
    console.log("You win'Paper beat Rock'")
  }
  else if(computerChoice === 1 && humanChoice === 3){
    console.log("You lose'Paper beat Scissors'")
  }
  else if(computerChoice === 1 && humanChoice === 1){
    console.log("Draw'Rock with Rock'")
  }
  else if(computerChoice === 2 && humanChoice === 2){
    console.log("Draw'Paper with Paper'")
  }
  else if(computerChoice === 2 && humanChoice === 3){
    console.log("You lose'Scissors beat Paper'")
  }
  else if(computerChoice === 2 && humanChoice === 1){
    console.log("You Lose'Paper beat Rock'")
  }
  else if(computerChoice === 3 && humanChoice === 1){
    console.log("You Win'Rock beat Scissors'")
  }
  else if(computerChoice === 3 && humanChoice === 2){
    console.log("You Lose'Scissors beat Paper'")
  }
  else if(computerChoice === 3 && humanChoice === 3){
    console.log("Draw'Scissors with Scissors'")
  }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection,humanSelection);