const humanSelection = getHumanChoice();
const cpuSelection = getComputerChoice();
let round = 0;

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

function playGame () {
  let humanScore = 0;
  let cpuScore = 0;
  let roundWinner = 0;
  let altHumanChoice = 0;
  let altCpuChoice = 0;
  
  function playRound(humanChoice, cpuChoice) {  
    // let roundWinner = 0; // 0 - No winner, 1 - Human Wins, 2 - CPU wins
    if (humanChoice === 'rock') { // Convert text to number
      altHumanChoice = 1;
    } else if (humanChoice === 'paper') {
      altHumanChoice = 2;
    } else if (humanChoice === 'scissors') {
      altHumanChoice = 3;
    }
    
    if (cpuChoice.toFixed(2) <= 0.33) { // Convert random number to whole number
      altCpuChoice = 1;
    } else if (cpuChoice.toFixed(2) >= 0.34 && cpuChoice.toFixed(2) <= 0.66) {
      altCpuChoice = 2;
    } else if (cpuChoice.toFixed(2) >= 0.67) {
      altCpuChoice = 3;
    }
    

    if (altHumanChoice == 1) { // Human chose Rock
      if (altCpuChoice == 1) { // CPU chose Rock - Draw
        roundWinner = 0;
      } else if (altCpuChoice == 2) { // CPU chose Paper - CPU Wins
        roundWinner = 2;
      } else if (altCpuChoice == 3) { // CPU chose Scissors - CPU Loses
        roundWinner = 1;
      }
    } else if (altHumanChoice == 2) { // Human chose Paper
      if (altCpuChoice == 1) { // CPU chose Rock - CPU Loses
        roundWinner = 1;
      } else if (altCpuChoice == 2) { // CPU chose Paper - Draw
        roundWinner = 0;
      } else if (altCpuChoice == 3) { // CPU chose Scissors - CPU Wins
        roundWinner = 2;
      }
    } else if (altHumanChoice == 3) { // Human chose Scissors
      if (altCpuChoice == 1) { // CPU chose Rock - CPU Wins
        roundWinner = 2;
      } else if (altCpuChoice == 2) { // CPU chose Paper - Human Wins
        roundWinner = 1;
      } else if (altCpuChoice == 3) { // CPU chose Scissors - Draw
        roundWinner = 0;
      }
    }
    return roundWinner;
  }

  while (round < 5) {
    playRound(humanSelection, cpuSelection);
    if (roundWinner == 0) {
      console.log ("Draw! No Points awarded.");
    } else if (roundWinner == 1) {
      console.log('Human Wins the round!');
      humanScore++
      round++;
    } else if (roundWinner == 2) {
      console.log('CPU Wins the round!');
      cpuScore++
      round++;
    }
  }
}

playGame();
