



function getComputerChoice(){
  let computerNumber = Math.floor(Math.random()*3)+1;
  return computerNumber;
 
}


function getHumanChoice(){
  let humanChoice = prompt("Enter your choice'Rock','Paper','Scissors'");
  let humanNumber = null;
  if(humanChoice.toLowerCase() === "Rock".toLowerCase()){
    humanNumber = 1;
  } else if(humanChoice.toLowerCase() === "Paper".toLowerCase()){
    humanNumber = 2;
  }
  else if(humanChoice.toLowerCase() === "Scissors".toLowerCase()){
    humanNumber = 3;
  }
  return humanNumber;
}




function playGame () {
  let computerScore = 0;
  let humanScore = 0;
  let tie = 0;

  function playRound(computerChoice,humanChoice) {
  if(computerChoice === 1 && humanChoice === 2){
    console.log("You win'Paper beat Rock'");
    humanScore++;
    return;
  }
  else if(computerChoice === 1 && humanChoice === 3){
    console.log("You lose'Paper beat Scissors'")
    computerScore++;
    return;
  }
  else if(computerChoice === 1 && humanChoice === 1){
    console.log("Tie'Rock with Rock'");
    tie++
    return;
  }
  else if(computerChoice === 2 && humanChoice === 2){
    console.log("Tie'Paper with Paper'");
    tie++
    return;
  }
  else if(computerChoice === 2 && humanChoice === 3){
    console.log("You lose'Scissors beat Paper'");
    computerScore++;
    return;
  }
  else if(computerChoice === 2 && humanChoice === 1){
    console.log("You Lose'Paper beat Rock'")
    computerScore++;
    return;
  }
  else if(computerChoice === 3 && humanChoice === 1){
    console.log("You Win'Rock beat Scissors'")
    humanScore++;
    return;
  }
  else if(computerChoice === 3 && humanChoice === 2){
    console.log("You Lose'Scissors beat Paper'")
    computerScore++;
    return
  }
  else if(computerChoice === 3 && humanChoice === 3){
    console.log("Tie'Scissors with Scissors'");
    tie++
    return;
  }
}
  for(let i = 0 ; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection,humanSelection);
    
  }
   if(computerScore > humanScore) {
    console.log("You lose The Game")
   }else if(humanScore > computerScore) {
      console.log("you win")
   }
  console.log(`Computer: ${computerScore}, You: ${humanScore} Ties: ${tie}`);
 
  
  
  
}



playGame()



