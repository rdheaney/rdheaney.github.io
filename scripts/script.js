function playGame () {
  let round = 0;
  let humanScore = 0;
  let cpuScore = 0;
  let roundWinner = 0;
  let altHumanChoice = 0;
  let altCpuChoice = 0;
  
  function playRound() { 
    let humanChoice = getHumanChoice();
    let cpuChoice = getComputerChoice();
    // let roundWinner = 0; // 0 - No winner, 1 - Human Wins, 2 - CPU wins
    // Human Choice - Convert text to number
    if (humanChoice === 'rock') { 
      altHumanChoice = 1;
    } else if (humanChoice === 'paper') {
      altHumanChoice = 2;
    } else if (humanChoice === 'scissors') {
      altHumanChoice = 3;
    }
    
    // CPU Choice - Convert random number to whole number
    if (cpuChoice.toFixed(2) <= 0.33) { 
      altCpuChoice = 1;
    } else if (cpuChoice.toFixed(2) >= 0.34 && cpuChoice.toFixed(2) <= 0.66) {
      altCpuChoice = 2;
    } else if (cpuChoice.toFixed(2) >= 0.67) {
      altCpuChoice = 3;
    }
    
    // Compare choices
    if (altHumanChoice == 1) { // Human chose Rock
      if (altCpuChoice == 1) { // CPU chose Rock - Draw
        roundWinner = 0;
      } else if (altCpuChoice == 2) { // CPU chose Paper - CPU Wins
        roundWinner = 2;
        cpuScore++;
      } else if (altCpuChoice == 3) { // CPU chose Scissors - CPU Loses
        roundWinner = 1;
        humanScore++;
      }
    } else if (altHumanChoice == 2) { // Human chose Paper
      if (altCpuChoice == 1) { // CPU chose Rock - CPU Loses
        roundWinner = 1;
        humanScore++;
      } else if (altCpuChoice == 2) { // CPU chose Paper - Draw
        roundWinner = 0;
      } else if (altCpuChoice == 3) { // CPU chose Scissors - CPU Wins
        roundWinner = 2;
        cpuScore++;
      }
    } else if (altHumanChoice == 3) { // Human chose Scissors
      if (altCpuChoice == 1) { // CPU chose Rock - CPU Wins
        roundWinner = 2;
        cpuScore++;
      } else if (altCpuChoice == 2) { // CPU chose Paper - Human Wins
        roundWinner = 1;
        humanScore++;
      } else if (altCpuChoice == 3) { // CPU chose Scissors - Draw
        roundWinner = 0;
      }
    }
    return roundWinner;
  }

  while (round < 5) {
    playRound();
    if (roundWinner == 0) {
      console.log ("Draw! No Points awarded.\nHuman: " + humanScore + "\nCPU: " + cpuScore);
    } else if (roundWinner == 1) {
      console.log("Human Wins the round!\nHuman: " + humanScore + "\nCPU: " + cpuScore);
      round++;
    } else if (roundWinner == 2) {
      console.log("CPU Wins the round!\nHuman: " + humanScore + "\nCPU: " + cpuScore);
      round++;
    }
    if (cpuScore >= 3) {
      console.log("CPU wins the game!\nHuman: " + humanScore + "\nCPU: " + cpuScore);
      return;
    } else if (humanScore >= 3) {
      console.log("The Human wins the game!\nHuman: " + humanScore + "\nCPU: " + cpuScore);
      return;
    }
  }
}

function getHumanChoice() {
  let humanChoice = window.prompt("Rock, Paper or Scissors?");
  switch (humanChoice.toLowerCase()) {
    case 'rock':
      humanChoice = 'rock';
      return humanChoice;
      break;
    case 'paper': 
      humanChoice = 'paper';
      return humanChoice;
      break;
    case 'scissors': 
      humanChoice = 'scissors';
      return humanChoice;
      break;
    default:
      console.log("Unknown input. Please check your spelling.")
      break;
  }
}

function getComputerChoice() {
  let cpuChoice = Math.random();
  return cpuChoice;
}

playGame();
